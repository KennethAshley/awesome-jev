# Awesome Jev [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of projects, SDKs, and write-ups built on Jev, TypeSafe AI's System One model for typed decisions.

Jev isn't a chat model. Give it unstructured state plus a typed question (a choice, a score, a yes/no) and it returns a typed decision with a confidence value, with no token-by-token generation in the loop. That makes it a fast, cheap decision layer for classification, routing, verification gates, and agent guardrails.

Each entry ends with 1-3 italic tags for filtering across categories. Listing is not endorsement: the inclusion bar, the tag taxonomy, and a checklist for verifying an entry before you rely on it are in CONTRIBUTING.md.

## Contents

- [Official Resources](#official-resources)
- [Classification & Routing](#classification--routing)
- [Verification & Guardrails](#verification--guardrails)
- [Scoring & Ranking](#scoring--ranking)
- [Agent Decisions](#agent-decisions)
- [Data Labeling & Curation](#data-labeling--curation)
- [Evaluation & Benchmarking](#evaluation--benchmarking)
- [Calibration & Research](#calibration--research)
- [Infra / SDKs / Integrations](#infra--sdks--integrations)
- [Game & Simulation](#game--simulation)
- [Finance & Trading](#finance--trading)
- [Compliance & Legal](#compliance--legal)
- [Content Moderation](#content-moderation)
- [Related Practices & Discussions](#related-practices--discussions)

## Official Resources

- [TypeSafe AI](https://typesafe.ai/) - The company behind Jev and System One models.
- [Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) - The announcement post explaining what a System One model is and how Jev differs from an LLM.
- [typesafe-ai/skills](https://github.com/typesafe-ai/skills) - Official installable agent skills package (`npx skills add typesafe-ai/skills`) that teaches coding agents the Jev workflow.
- [typesafe-ai on GitHub](https://github.com/typesafe-ai) - Official GitHub organization.

## Classification & Routing

- [jev-router](https://github.com/gargpratyush/jev-router) - Routes Claude Code tasks to the cheapest capable model by asking Jev to choose among candidates. *#routing #coding-agents*
- [Notra](https://github.com/usenotra/notra) - Production marketing-analytics platform that flags brand-visibility classifiers off an LLM and onto Jev boolean decisions for lower-latency routing. *#routing*

## Verification & Guardrails

- [is-malicious](https://github.com/luantak/is-malicious) - Runs typed yes/no checks over source and build files to flag supply-chain risk before code executes. *#verification #guardrails*
- [jev-axi](https://github.com/shiftynick/jev-axi) - PreToolUse gate for Claude Code and Codex that scores each shell command for destructiveness and exfiltration risk before it runs. *#agent-safety #guardrails #coding-agents*

## Scoring & Ranking

- [Clean Code Judge](https://github.com/frostney/clean-code-review) - Scores every file in a pull request against 31 boolean Clean Code smells plus size and nesting checks. *#scoring*
- [jev-reranker](https://github.com/hotchpotch/jev-reranker) - Reranks retrieved documents for RAG pipelines by relevance and usefulness as answer evidence. *#scoring #research*

## Agent Decisions

- [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) - Browser-use's fast agent mode where Jev picks each click target and next action, calling a language model only when text needs typing. *#browser-automation*
- [limpet](https://github.com/noplan-inc/limpet) - Stop hook that keeps a coding agent from declaring a task finished early by checking plain-language completion rules with Jev. *#coding-agents #guardrails*

## Data Labeling & Curation

- [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) - Filters synthetic JSONL and Parquet rows with Jev checks and calibrated confidence, streaming pass/reject straight to disk. *#scoring*

## Evaluation & Benchmarking

- [Jev Playground](https://github.com/hegargarcia/jev-playground) - Benchmarks Jev against other models on choosing validated legal moves across a sequence of game states. *#evaluation #game*

## Calibration & Research

- [NanoJev](https://github.com/TianyuCodings/NanoJev) - Open 0.6B parallel decision model that reproduces Jev's typed, non-autoregressive output shape, shipped with training pipeline and weights. *#open-alternative #research*

## Infra / SDKs / Integrations

- [eve](https://github.com/vercel/eve) - Vercel's agent framework, which ships Jev as the default model on its experimental evaluate path. *#sdk*
- [jev-mcp](https://github.com/blakestone-x/jev-mcp) - MCP server that exposes Jev classify, score, check, match, and screen operations as tools for any MCP-compatible agent. *#mcp*

## Game & Simulation

- [typesafe-mario](https://github.com/fhshaik/typesafe-mario) - Plays Super Mario Bros. by choosing each action from structured emulator state instead of raw pixels. *#game*

## Finance & Trading

- [jev-trade](https://github.com/aowang-ai/jev-trade) - Asks Jev for a long/short choice on a Hyperliquid market each round and places the resulting order. *#finance*

## Compliance & Legal

- [LegalForecast-MTD](https://github.com/johnhughes3/LegalForecastBench) - Benchmarks Jev's calibrated predictions of federal motion-to-dismiss rulings against real case outcomes. *#evaluation #research*

## Content Moderation

- [Jev Moderation Bot](https://github.com/brainstormity/Jev-Moderation-Bot) - Discord bot that scores incoming messages for phishing, spam, and social engineering and drives a staged escalation ladder. *#moderation*

## Related Practices & Discussions

- [Introducing System One Models and Jev (Hacker News)](https://news.ycombinator.com/item?id=49717558) - The original launch thread, debating whether typed decisions can replace LLM calls for classification, routing, and verification. *#research*

## Contributing

Contributions are welcome: new entries, better descriptions, and removals of dead or bad links alike. Read [CONTRIBUTING.md](CONTRIBUTING.md) first; it covers the submission format, the tag taxonomy, and the policy on AI-assisted and bulk submissions.

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
To the extent possible under law, the maintainers have waived all copyright and related or neighboring rights to this list itself (see [LICENSE](LICENSE)). Linked projects retain their own licenses.
