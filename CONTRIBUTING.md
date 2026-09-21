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
- Long write-ups inside the list itself — link out instead.

## How to submit

1. Fork, branch, add your entry, open a PR.
2. Use exactly this line format — description ends in a period, then the tags in italics:

   ```md
   - [Name](URL) - One-sentence description of what it does with Jev. *#tag1 #tag2*
   ```

3. Put it in the single closest-fit category (see the [README](README.md#contents)). If it spans two, pick the one closest to its primary use case — tags cover the rest.
4. Keep entries alphabetical by name within their category.
5. Descriptions: one sentence, start with a capital, end with a period, describe function not marketing.
6. Tag with 1-3 tags from the taxonomy below. Don't invent new tags in a PR — open an issue first if you think one's missing.

## Tag taxonomy

Tags exist so entries can be filtered across category lines (an entry can be both agent safety *and* a coding-agent tool, for example). Use only these:

| Tag | Use for |
| --- | --- |
| `#routing` | Model or task routing decisions |
| `#verification` | Checking correctness, gating on a typed verdict |
| `#guardrails` | Safety/permission gates on agent actions |
| `#scoring` | Ranking, grading, or scoring content |
| `#agent-safety` | Guarding autonomous agent behavior specifically |
| `#coding-agents` | Built for Claude Code, Codex, Pi, Cursor, etc. |
| `#browser-automation` | Browser or computer-use control loops |
| `#context-management` | Compaction, pruning, memory |
| `#mcp` | Ships as or integrates with an MCP server |
| `#sdk` | Client library / language SDK |
| `#open-alternative` | Open-weight reproduction of the Jev interface |
| `#evaluation` | Benchmarks Jev or compares it to other models |
| `#game` | Games or simulations |
| `#finance` | Trading or financial decisions |
| `#moderation` | Content moderation or spam filtering |
| `#research` | Independent calibration/technical analysis |

## Inclusion bar

- Link resolves and the project is reachable (public repo, live page, or archived thread).
- If it's a repo: the README or code shows a real call into Jev, not just a mention.
- If it carries a performance number (latency, accuracy, cost), it should be traceable to the source — we don't re-verify it, but strip numbers that don't trace anywhere.

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
- **Scaffolded repos** (shared boilerplate like matching `AGENTS.md`/`STATE.md`/`CHANGELOG.md` across several same-day repos from one author) aren't excluded, but reviewers will look harder for real code behind the prose.
- **Don't submit your own project more than once** if it was already declined — address the specific reason it was declined, or don't resubmit.

## Removing entries

Found a dead link, an abandoned project, or something that shouldn't have been included? Open a PR removing it, or file an issue. Removal is exactly as valid a contribution as addition.

## Local check

No build step is required. Before opening a PR, just confirm:
- the link works,
- the line matches the format above,
- the entry is alphabetized within its category.
