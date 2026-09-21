# Contributing to Awesome Jev

Thanks for helping keep this list useful. Quick guide below.

## What belongs here

**Yes:**
- A project, SDK, integration, benchmark, or write-up that actually calls the [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) API (or an open reproduction of its typed-decision interface) and shows it working.
- Articles, threads, or benchmarks with a concrete, checkable claim — not just launch-day hype.

**No:**
- Generic classifiers/routers/agents that merely resemble the pattern without touching Jev.
- Pure opinion or theory with no working artifact.
- Broken links, dead repos, or duplicates of an existing entry.
- Other awesome-lists or directories (we link a few in Related, but the list isn't a list of lists).
- Long write-ups inside the list itself — link out instead.

## How to submit

README.md is **generated** — don't edit it by hand. Entries live in `data/entries.json`.

1. Fork and branch.
2. Add one object to `data/entries.json`:

   ```json
   {
     "name": "jev-axi",
     "url": "https://github.com/shiftynick/jev-axi",
     "description": "Agent-ergonomic CLI for Jev giving fast calibrated pick, rate, check, rank, triage, and guard judgments from the shell.",
     "category": "Integrations & Infrastructure",
     "tags": ["coding-agents"]
   }
   ```

   - `name`: the project's name. If another entry shares it, add the owner in parentheses: `jev-mcp (jkudish)`.
   - `description`: one sentence, starts with a capital, ends with a period, describes function not marketing. Don't start it with the project name.
   - `category`: exactly one from the list below — the closest fit to its primary use. Tags cover the rest.
   - `tags`: 0-3 from the taxonomy below. Don't invent new tags in a PR; open an issue first.
3. Run `node scripts/build.mjs` to regenerate README.md (it validates the entry and sorts everything), then commit both files.
4. Open a PR — one entry per PR.

## Categories

Official Resources · Classification & Routing · Verification & Guardrails · Scoring & Ranking · Coding Agents · Browser & Computer Use · Context & Memory · Agent Frameworks & Harnesses · Search, Data & Retrieval · Apps & Utilities · Games, Robotics & Simulation · Finance & Trading · Content Moderation & Feeds · Evaluation & Benchmarking · Open Reproductions & Research · SDKs & Clients · Integrations & Infrastructure · Guides, Skills & Tutorials · Related Practices & Discussions

Rough guide when two fit: something built *for* a coding agent (Claude Code, Codex, Pi, Cursor, Hermes) goes in **Coding Agents** even if it also routes or guards; a general-purpose SDK goes in **SDKs & Clients**; an MCP server or gateway goes in **Integrations & Infrastructure**.

## Tag taxonomy

Tags exist so entries can be filtered across category lines. Use only these (the build script rejects anything else):

| Tag | Use for |
| --- | --- |
| `routing` | Model, tool, or task routing decisions |
| `classification` | Labeling or categorizing content |
| `verification` | Checking correctness, gating on a typed verdict |
| `guardrails` | Safety or permission gates on actions |
| `agent-safety` | Guarding autonomous agent behavior specifically |
| `scoring` | Ranking, grading, or scoring content |
| `rag` | Retrieval, reranking, search relevance |
| `sql` | Database extensions and query integrations |
| `coding-agents` | Built for or around Claude Code, Codex, Pi, Cursor, Hermes, etc. |
| `browser-automation` | Browser control loops |
| `computer-use` | Desktop or OS-level control |
| `mobile` | Android or iOS |
| `voice` | Speech input or output |
| `context-management` | Compaction, pruning, context curation |
| `memory` | Agent memory stores and retrieval |
| `mcp` | Ships as or integrates with an MCP server |
| `sdk` | Client library or language SDK |
| `plugin` | Plugin or extension for a specific host tool |
| `skills` | Agent skills packages |
| `open-alternative` | Open-weight or local reproduction of the Jev interface |
| `evaluation` | Benchmarks Jev or compares it to other models |
| `research` | Independent calibration or technical analysis |
| `game` | Games and simulations |
| `robotics` | Physical or simulated robots and drones |
| `finance` | Trading or financial decisions |
| `moderation` | Content moderation, spam, and feed filtering |
| `email` | Email triage and classification |
| `productivity` | End-user utilities |

## Inclusion bar

- Link resolves and the project is reachable (public repo, live page, or archived thread).
- If it's a repo: the README or code shows a real call into Jev, not just a mention.
- If it carries a performance number (latency, accuracy, cost), it should be traceable to the source — we don't re-verify it, but strip numbers that don't trace anywhere.
- Repos are currently added at 5+ stars with recent activity; official, essential, or clearly substantive entries are exceptions.

## Curation is not endorsement

Being listed means one thing: the entry satisfies the bar above. It is not a security audit, a quality review, or a guarantee that the code compiles, the tests pass, or the published numbers reproduce.

This matters especially for projects that arrive in bulk — when one author ships several repos in a day sharing a single scaffold (the same `AGENTS.md`, `STATE.md`, `CHANGELOG.md`), that can be entirely legitimate, but it's unproven until someone checks. Before depending on anything in the list, verify it yourself:

| Check | Why it matters |
| --- | --- |
| Does the code actually call the Jev API? | A README can describe the pattern without the project doing it. Look for a real typed request going out and a parsed answer coming back. |
| Is there a runnable check? | A test, a worked example with expected output, or a public demo — otherwise there's no evidence it works. |
| Do the numbers trace anywhere? | Any latency, accuracy, or cost figure should point back to its source. |
| How much of the repo is code vs. prose? | Some entries are mostly a prompt and a README. That can still be legitimate — just know what you're getting. |
| Is there a license? | No license limits how you can reuse or redistribute it. |

## AI-assisted submissions and bulk PRs

AI-assisted writeups and scaffolded projects are welcome under the same bar as anything else — but a few things get extra scrutiny:

- **One PR per entry.** Bulk PRs adding many entries at once are harder to review and more likely to get reverted wholesale if one entry is bad.
- **Scaffolded repos** (shared boilerplate across several same-day repos from one author) aren't excluded, but reviewers will look harder for real code behind the prose.
- **Don't resubmit a declined entry** without addressing the specific reason it was declined.

## Removing entries

Found a dead link, an abandoned project, or something that shouldn't have been included? Open a PR removing it from `data/entries.json`, or file an issue. Removal is exactly as valid a contribution as addition.

## Local check

```sh
node scripts/build.mjs          # regenerate README.md (validates entries)
node scripts/build.mjs --check  # fails if README.md is stale
npx awesome-lint README.md      # the same lint the awesome list uses
```
