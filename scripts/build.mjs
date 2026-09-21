// Renders README.md from data/entries.json. Run `node scripts/build.mjs`; `--check` fails if README.md is stale.
import {readFileSync, writeFileSync} from 'node:fs';

const CATEGORIES = [
  'Official Resources',
  'Classification & Routing',
  'Verification & Guardrails',
  'Scoring & Ranking',
  'Coding Agents',
  'Browser & Computer Use',
  'Context & Memory',
  'Agent Frameworks & Harnesses',
  'Search, Data & Retrieval',
  'Apps & Utilities',
  'Games, Robotics & Simulation',
  'Finance & Trading',
  'Content Moderation & Feeds',
  'Evaluation & Benchmarking',
  'Open Reproductions & Research',
  'SDKs & Clients',
  'Integrations & Infrastructure',
  'Guides, Skills & Tutorials',
  'Related Practices & Discussions',
];

const TAGS = new Set([
  'routing', 'classification', 'verification', 'guardrails', 'agent-safety', 'scoring', 'rag', 'sql',
  'coding-agents', 'browser-automation', 'computer-use', 'mobile', 'voice', 'context-management', 'memory',
  'mcp', 'sdk', 'plugin', 'skills', 'open-alternative', 'evaluation', 'research', 'game', 'robotics',
  'finance', 'moderation', 'email', 'productivity',
]);

const HEADER = `# Awesome Jev [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of projects, SDKs, and write-ups built on Jev, TypeSafe AI's System One model for typed decisions.

Jev isn't a chat model. Give it unstructured state plus a typed question (a choice, a score, a yes/no) and it returns a typed decision with a confidence value, with no token-by-token generation in the loop. That makes it a fast, cheap decision layer for classification, routing, verification gates, and agent guardrails.

Each entry ends with italic tags for filtering across categories. Listing is not endorsement: the inclusion bar, the tag taxonomy, and a checklist for verifying an entry before you rely on it are in CONTRIBUTING.md. Every entry is a public repo or page that was live when added; {{COUNT}} entries across {{CATS}} categories.
`;

const FOOTER = `## Contributing

Contributions are welcome: new entries, better descriptions, and removals of dead or bad links alike. Read [CONTRIBUTING.md](CONTRIBUTING.md) first; it covers the submission format, the tag taxonomy, and the policy on AI-assisted and bulk submissions. Entries live in \`data/entries.json\`; this README is generated from it.

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
To the extent possible under law, the maintainers have waived all copyright and related or neighboring rights to this list itself (see [LICENSE](LICENSE)). Linked projects retain their own licenses.
`;

const anchor = s => s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s/g, '-');

const entries = JSON.parse(readFileSync('data/entries.json', 'utf8'));
const errors = [];
const urls = new Set();
for (const e of entries) {
  const id = e.name ?? e.url;
  if (!e.name || !e.url || !e.description || !e.category) errors.push(`${id}: missing field`);
  if (!CATEGORIES.includes(e.category)) errors.push(`${id}: unknown category "${e.category}"`);
  // camelCase starts like "macOS" are allowed, matching awesome-lint's casing rule
  if (!/^(?:[A-Z0-9]|[a-z]+[A-Z]).*[.!?]$/.test(e.description ?? '')) errors.push(`${id}: description must start capitalized and end with punctuation`);
  for (const t of e.tags ?? []) if (!TAGS.has(t)) errors.push(`${id}: unknown tag "${t}"`);
  if (urls.has(e.url)) errors.push(`${id}: duplicate url`);
  urls.add(e.url);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const byCat = new Map(CATEGORIES.map(c => [c, []]));
for (const e of entries) byCat.get(e.category).push(e);
const used = CATEGORIES.filter(c => byCat.get(c).length);

const line = e => `- [${e.name}](${e.url}) - ${e.description}${e.tags?.length ? ` *${e.tags.map(t => '#' + t).join(' ')}*` : ''}`;
const sections = used.map(c => {
  const items = byCat.get(c).sort((a, b) => a.name.localeCompare(b.name, 'en', {sensitivity: 'base'}));
  return `## ${c}\n\n${items.map(line).join('\n')}\n`;
});

const out = [
  HEADER.replace('{{COUNT}}', entries.length).replace('{{CATS}}', used.length),
  `## Contents\n\n${used.map(c => `- [${c}](#${anchor(c)})`).join('\n')}\n`,
  ...sections,
  FOOTER,
].join('\n');

if (process.argv.includes('--check')) {
  if (readFileSync('README.md', 'utf8') !== out) {
    console.error('README.md is out of date; run `node scripts/build.mjs`');
    process.exit(1);
  }
  console.log('README.md is up to date');
} else {
  writeFileSync('README.md', out);
  console.log(`wrote README.md: ${entries.length} entries, ${used.length} categories`);
}
