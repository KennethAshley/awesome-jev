# Awesome Jev [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of projects, SDKs, and write-ups built on [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev), TypeSafe AI's System One model for typed decisions.

Jev isn't a chat model — it doesn't write text or hold a conversation. Give it unstructured state plus a typed question (a choice, a score, a yes/no) and it returns a typed decision with a confidence value, with no token-by-token generation in the loop. That makes it a fast, cheap decision layer for classification, routing, verification gates, and agent guardrails — the kind of thing developers used to reach for a full LLM call to do.

Jev discussion is scattered across launch threads, gateway listings, and one-off demos. This list exists to answer two questions quickly:

- **Where is Jev already making decisions in production?**
- **Which decision patterns transfer cleanly across projects and industries?**

## Contents

- [Inclusion criteria](#inclusion-criteria)
- [Curation is not endorsement](#curation-is-not-endorsement)
- [Categories](#categories)
- [Tags](#tags)

## Inclusion criteria

We don't include:

- Generic classifiers, routers, or agents that merely resemble the pattern without actually calling Jev.
- Pure opinion or theory with no working artifact.
- Launch-hype commentary with no reproducible result.
- Broken links, abandoned repos, or duplicates.

Full submission rules, the tag taxonomy, and the policy on AI-assisted or bulk submissions live in CONTRIBUTING.md.

## Curation is not endorsement

Being listed here means one thing: the entry satisfies the criteria above. It is not a security audit, a quality review, or a guarantee that the code compiles, the tests pass, or the published numbers reproduce.

This matters especially for projects that arrive in bulk — when one author ships several repos in a day sharing a single scaffold (the same `AGENTS.md`, `STATE.md`, `CHANGELOG.md`), that can be entirely legitimate, but it's unproven until someone checks. Before depending on anything here, verify it yourself:

| Check                                    | Why it matters                                                                                                                           |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Does the code actually call the Jev API? | A README can describe the pattern without the project doing it. Look for a real typed request going out and a parsed answer coming back. |
| Is there a runnable check?               | A test, a worked example with expected output, or a public demo — otherwise there's no evidence it works.                                |
| Do the numbers trace anywhere?           | Any latency, accuracy, or cost figure should point back to its source.                                                                   |
| How much of the repo is code vs. prose?  | Some entries are mostly a prompt and a README. That can still be legitimate — just know what you're getting.                             |
| Is there a license?                      | No license limits how you can reuse or redistribute it.                                                                                  |

Found something that shouldn't be here? A PR removing it is exactly as welcome as one adding something.

## Categories

### Classification & Routing

- `#routing` `#coding-agents` [jev-router](https://github.com/gargpratyush/jev-router) - Routes Claude Code tasks to the cheapest capable model by asking Jev to choose among candidates.
- `#routing` [Notra](https://github.com/usenotra/notra) - Production marketing-analytics platform that flags brand-visibility classifiers off an LLM and onto Jev boolean decisions for lower-latency routing.

### Verification & Guardrails

- `#verification` `#guardrails` [is-malicious](https://github.com/luantak/is-malicious) - Runs typed yes/no checks over source and build files to flag supply-chain risk before code executes.
- `#agent-safety` `#guardrails` `#coding-agents` [jev-axi](https://github.com/shiftynick/jev-axi) - PreToolUse gate for Claude Code and Codex that scores each shell command for destructiveness and exfiltration risk before it runs.

### Scoring & Ranking

- `#scoring` [Clean Code Judge](https://github.com/frostney/clean-code-review) - Scores every file in a pull request against 31 boolean Clean Code smells plus size and nesting checks.
- `#scoring` `#research` [jev-reranker](https://github.com/hotchpotch/jev-reranker) - Reranks retrieved documents for RAG pipelines by relevance and usefulness as answer evidence.

### Agent Decisions

- `#browser-automation` [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) - Browser-use's fast agent mode where Jev picks each click target and next action, calling a language model only when text needs typing.
- `#coding-agents` `#guardrails` [limpet](https://github.com/noplan-inc/limpet) - Stop hook that keeps a coding agent from declaring a task finished early by checking plain-language completion rules with Jev.

### Data Labeling & Curation

- `#scoring` [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) - Filters synthetic JSONL and Parquet rows with Jev checks and calibrated confidence, streaming pass/reject straight to disk.

### Evaluation & Benchmarking

- `#evaluation` `#game` [Jev Playground](https://github.com/hegargarcia/jev-playground) - Benchmarks Jev against other models on choosing validated legal moves across a sequence of game states.

### Calibration & Research

- `#open-alternative` `#research` [NanoJev](https://github.com/TianyuCodings/NanoJev) - Open 0.6B parallel decision model that reproduces Jev's typed, non-autoregressive output shape, shipped with training pipeline and weights.

### Infra / SDKs / Integrations

- `#sdk` [eve](https://github.com/vercel/eve) - Vercel's agent framework, which ships Jev as the default model on its experimental evaluate path.
- `#mcp` [jev-mcp](https://github.com/blakestone-x/jev-mcp) - MCP server that exposes Jev classify, score, check, match, and screen operations as tools for any MCP-compatible agent.

### Game & Simulation

- `#game` [typesafe-mario](https://github.com/fhshaik/typesafe-mario) - Plays Super Mario Bros. by choosing each action from structured emulator state instead of raw pixels.

### Finance & Trading

- `#finance` [jev-trade](https://github.com/aowang-ai/jev-trade) - Asks Jev for a long/short choice on a Hyperliquid market each round and places the resulting order.

### Compliance & Legal

- `#evaluation` `#research` [LegalForecast-MTD](https://github.com/johnhughes3/LegalForecastBench) - Benchmarks Jev's calibrated predictions of federal motion-to-dismiss rulings against real case outcomes.

### Content Moderation

- `#moderation` [Jev Moderation Bot](https://github.com/brainstormity/Jev-Moderation-Bot) - Discord bot that scores incoming messages for phishing, spam, and social engineering and drives a staged escalation ladder.

### Related Practices & Discussions

- `#research` [Introducing System One Models and Jev (Hacker News)](https://news.ycombinator.com/item?id=49717558) - The original launch thread, debating whether typed decisions can replace LLM calls for classification, routing, and verification.

_This list is intentionally short at launch — see CONTRIBUTING.md to add the project you're missing._

## Tags

Every entry carries 1-3 tags from a fixed taxonomy so the list can be filtered across category lines later (a companion site is planned). The full tag list and what each one means lives in CONTRIBUTING.md's [tag taxonomy](CONTRIBUTING.md#tag-taxonomy) section.

## Contributing

Contributions are welcome — new entries, better descriptions, and removals of dead or bad links alike. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR: it covers the submission format, the tag taxonomy, and the policy on AI-assisted and bulk submissions.

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
To the extent possible under law, the maintainers have waived all copyright and related or neighboring rights to this list itself (see [LICENSE](LICENSE)). Linked projects retain their own licenses.
