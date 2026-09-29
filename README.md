# Awesome Jev [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of projects, SDKs, and write-ups built on Jev, TypeSafe AI's System One model for typed decisions.

Jev isn't a chat model. Give it unstructured state plus a typed question (a choice, a score, a yes/no) and it returns a typed decision with a confidence value, with no token-by-token generation in the loop. That makes it a fast, cheap decision layer for classification, routing, verification gates, and agent guardrails.

Each entry ends with italic tags for filtering across categories. Listing is not endorsement: the inclusion bar, the tag taxonomy, and a checklist for verifying an entry before you rely on it are in CONTRIBUTING.md. Every entry is a public repo or page that was live when added; 411 entries across 19 categories.

## Contents

- [Official Resources](#official-resources)
- [Classification & Routing](#classification--routing)
- [Verification & Guardrails](#verification--guardrails)
- [Scoring & Ranking](#scoring--ranking)
- [Coding Agents](#coding-agents)
- [Browser & Computer Use](#browser--computer-use)
- [Context & Memory](#context--memory)
- [Agent Frameworks & Harnesses](#agent-frameworks--harnesses)
- [Search, Data & Retrieval](#search-data--retrieval)
- [Apps & Utilities](#apps--utilities)
- [Games, Robotics & Simulation](#games-robotics--simulation)
- [Finance & Trading](#finance--trading)
- [Content Moderation & Feeds](#content-moderation--feeds)
- [Evaluation & Benchmarking](#evaluation--benchmarking)
- [Open Reproductions & Research](#open-reproductions--research)
- [SDKs & Clients](#sdks--clients)
- [Integrations & Infrastructure](#integrations--infrastructure)
- [Guides, Skills & Tutorials](#guides-skills--tutorials)
- [Related Practices & Discussions](#related-practices--discussions)

## Official Resources

- [Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) - The announcement post explaining what a System One model is and how Jev differs from an LLM.
- [TypeSafe AI](https://typesafe.ai/) - The company behind Jev and System One models.
- [typesafe-ai on GitHub](https://github.com/typesafe-ai) - Official GitHub organization.
- [typesafe-ai/skills](https://github.com/typesafe-ai/skills) - Official installable agent skills package (`npx skills add typesafe-ai/skills`) that teaches coding agents the Jev workflow.

## Classification & Routing

- [a3m-router](https://github.com/Das-rebel/a3m-router) - Adaptive multi-model LLM router across 80+ providers with Jev single-pass routing, failover, and parallel ensemble merge. *#routing*
- [agent-router](https://github.com/nidhi-singh02/agent-router) - CLI that picks Cursor, Claude Code, Codex, or OpenCode plus model and effort for a task, then launches it, powered by Jev and Herdr. *#routing #coding-agents*
- [codex-jev-router](https://github.com/tiandee/codex-jev-router) - Routes Codex CLI turns through a local proxy where Jev selects the model and reasoning effort per turn, falling back to Codex's defaults when unavailable. *#routing #coding-agents*
- [commit-miner](https://github.com/devanshbatham/commit-miner) - Classifies Git commit diffs and messages with Jev into bug fixes, security fixes with CWEs, and change types. *#classification*
- [docjev](https://github.com/jerryjliu/docjev) - Very fast document classifier and splitter using Jev. *#classification*
- [jev-codex-router](https://github.com/0xNatoshi/jev-codex-router) - Per-turn routing for Codex where Jev picks the model, thinking depth, and speed mode for every turn. *#routing #coding-agents*
- [jev-fraud](https://github.com/Nutlope/jev-fraud) - Hard classification using Jev together with Kimi K3. *#classification*
- [jev-router](https://github.com/gargpratyush/jev-router) - Routes Claude Code tasks to the cheapest capable model by asking Jev to choose among candidates. *#routing #coding-agents*
- [jev-router (prismhq)](https://github.com/prismhq/jev-router) - Open-source LLM router on top of LiteLLM where Jev picks the model for each request. *#routing*
- [jev-router (rajdhakad9826)](https://github.com/rajdhakad9826/jev-router) - Cost-aware LLM router that picks the cheapest capable model for a query using Jev instead of an LLM call. *#routing*
- [jev-sift](https://github.com/kbhuw/jev-sift) - Portable agent plugin and MCP tool for batch text classification so agents classify first and read selectively. *#classification #mcp #plugin*
- [JevRouter](https://github.com/BillionsBobby/JevRouter) - Lightweight Jev-powered router for models, tools, and subagents. *#routing*
- [jevsubrouter](https://github.com/leftspace89/jevsubrouter) - Routes each Claude Code sub-agent dispatch to the cheapest model that can finish its brief without switching the main conversation's model. *#routing #coding-agents*
- [slo-router](https://github.com/zeeshan8281/slo-router) - SLO-aware LLM inference router with Jev decisions, live queue metrics, counterfactual evaluation, and reproducible latency and cost benchmarks. *#routing*
- [tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) - Tax document page classifier built on Jev decisions, reporting strict accuracy across 261 IRS form types at about $0.001 per page. *#classification*
- [typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow) - Small async LangGraph workflow that gets a typed invoice-or-general Choice from Jev for an inbound email and routes it to the matching handler. *#classification #email*

## Verification & Guardrails

- [Blink](https://blink.review) - CLI that coding agents run after every change, with Jev checking the diff in place of an LLM reviewer. *#verification #coding-agents*
- [Canny](https://github.com/qkal/Canny) - Stops coding agents from claiming work is done without evidence: deterministic hooks decide, Jev advises, with an append-only ledger and zero runtime dependencies. *#verification #coding-agents*
- [Clean Code Judge](https://github.com/frostney/clean-code-review) - Judges every file in a pull request against Clean Code smells with Jev, then has Luna write the review, built on eve and Next.js. *#verification #scoring #coding-agents*
- [ErisLint](https://github.com/Eriskii/ErisLint) - Rust linter powered by configurable Jev rules, with a VS Code extension. *#verification*
- [jev-auto-approve](https://github.com/metalbear-co/jev-auto-approve) - Jev-driven pull request auto-approver. *#verification #coding-agents*
- [jev-belay](https://github.com/valentynkit/jev-belay) - Claude Code Stop hook that blocks an unverified done by reading the transcript for evidence and asking Jev once, failing open otherwise. *#verification #coding-agents*
- [jev-commit](https://github.com/valentynkit/jev-commit) - Pre-commit hook where one Jev call judges whether the commit message matches the diff and checks for debug leftovers, scope creep, and secrets. *#verification #coding-agents*
- [jev-lint](https://github.com/mizchi/jev-lint) - Lints text in code with a Jev scorer. *#verification*
- [jev-review (devagrawal09)](https://github.com/devagrawal09/jev-review) - Staged code-review workflow and local dashboard where Jev gates each review stage before a change advances. *#verification #coding-agents*
- [jev-review (NiazMorshed2007)](https://github.com/NiazMorshed2007/jev-review) - Local-first MCP plugin for continuous software-quality review by coding agents. *#verification #mcp #coding-agents*
- [jev-security-scan](https://github.com/win4r/jev-security-scan) - Reviews agent skills and MCP code for suspicious behavior with Jev, static evidence, and explicit coverage gaps. *#verification #agent-safety*
- [JevLint](https://github.com/huntedman/JevLint) - Configurable semantic linting with file-level Noul judgments and a magic-strings plugin. *#verification*
- [JevPR](https://github.com/HexyeDEV/JevPR) - Automated pull request risk review with Jev. *#verification #coding-agents*
- [oxlint-plugin-jev](https://github.com/wobsoriano/oxlint-plugin-jev) - Oxlint rules written in plain English and answered by Jev, reporting an error when the yes-probability clears your cutoff. *#verification*
- [perch](https://github.com/lakeday-org/perch) - Semantic code linting with Jev. *#verification*
- [specpi-jev-guard](https://github.com/TannerMidd/specpi-jev-guard) - Checks risky shell and file commands with Jev before your agent runs them. *#guardrails #coding-agents*

## Scoring & Ranking

- [ai-elo-ranker](https://github.com/opaielsheikh/ai-elo-ranker) - High-speed recursive AI Elo tournament engine powered by Jev and Swiss matchmaking. *#scoring*
- [slop-grader](https://github.com/lukstei/slop-grader) - Rule-based grader for text files that runs every rule against every line in parallel with Jev. *#scoring*

## Coding Agents

- [claude-jev](https://github.com/buchmark/claude-jev) - Claude Code plugin that scores review findings, debug hypotheses, and design options with Jev for calibrated probabilities instead of another opinion. *#plugin #coding-agents #scoring*
- [dsh-jev](https://github.com/buberlo/dsh-jev) - Jev-powered decision layer for DeepSeek Harness. *#coding-agents #plugin*
- [dsh-plugin-jev](https://github.com/cyberofficial/dsh-plugin-jev) - Gives the DeepSeek Harness web GUI a jev_ask tool for calibrated judgments plus a settings tab and per-chat usage chip. *#plugin #coding-agents*
- [fable-jev](https://github.com/imMamdouhaboammar/fable-jev) - Sub-100 ms cognitive reflexes for autonomous coding agents powered by Jev and get-fable. *#coding-agents*
- [foreman](https://github.com/thruwire/foreman) - Software-factory foreman that sits above Codex workers and has Jev judge whether an implementation is complete, its tests sufficient, or a human is needed. *#coding-agents #verification*
- [hermes-jev-skills](https://github.com/kerpopule/hermes-jev-skills) - Jev-powered model routing, memory, compaction, skill selection, and computer and browser use for Hermes agents, Claude Code, and Codex. *#skills #routing #context-management*
- [jev (BorisLeMeec)](https://github.com/BorisLeMeec/jev) - Claude Code plugin for Jev. *#plugin #coding-agents*
- [jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router) - Typed, confidence-aware agent skill routing with Jev. *#routing #skills*
- [jev-code (rhighs)](https://github.com/rhighs/jev-code) - Interactive TypeScript coding CLI powered by Jev typed decisions and constrained AST generation. *#coding-agents*
- [jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision) - Structured decision plugin for agent harnesses with native DeepSeek Harness support and OpenCode and Codex support via iPolloWork. *#plugin #coding-agents*
- [jev-guard](https://github.com/leepokai/jev-guard) - Auto mode for every coding agent that risk-scores each tool call with session context, flags prompt injection in results, and checks skills and plugins. *#guardrails #agent-safety #coding-agents*
- [jev-rules](https://github.com/EliaAlberti/jev-rules) - Has Jev pick which of your rules apply to each prompt so Claude only sees the ones that matter. *#coding-agents #context-management*
- [jev-sentinel](https://github.com/harshwasan/jev-sentinel) - Pi extension where Jev checks tool calls, outputs, and replies for prompt injection, approvals, secret scrubbing, and task pinning. *#coding-agents #guardrails #agent-safety*
- [jev-skill-suggester](https://github.com/win4r/jev-skill-suggester) - Bounded installed-skill recommendations with Jev, as a Python CLI and Codex skill with bilingual docs. *#skills #coding-agents*
- [jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers) - Systematic development framework for coding agents upgraded with Jev typed decisions. *#coding-agents #skills*
- [jev-tool-router](https://github.com/jackbarunz/jev-tool-router) - Jev-powered MCP tool routing for Codex. *#routing #mcp #coding-agents*
- [jev-use](https://github.com/shitianfang/jev-use) - Claude Code, Codex, and Pi plugin that hands agent steps needing no text output to Jev, with typed escalation back to the LLM. *#coding-agents #plugin*
- [jevvy](https://github.com/PanAchy/jevvy) - Jev-powered plugins for coding agents. *#plugin #coding-agents*
- [omp-jev](https://github.com/thejorgg/omp-jev) - Jev routing for Oh My Pi with an opt-in checkpoint orchestrator and editable configuration. *#routing #coding-agents #plugin*
- [pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) - Runtime constraints for Pi that check every side-effecting tool call against what you asked before it runs. *#coding-agents #guardrails*
- [pi-jev (iefnaf)](https://github.com/iefnaf/pi-jev) - Pi extension suite with selective context compaction and model routing powered by Jev. *#coding-agents #context-management #routing*
- [pi-jev (madeye)](https://github.com/madeye/pi-jev) - Jev-assisted file retrieval and request caching for faster Pi workflows. *#coding-agents #context-management*
- [pi-jev (TheoOliveira)](https://github.com/TheoOliveira/pi-jev) - Semantic tool routing and typed System One decisions for the Pi coding agent. *#coding-agents #routing*
- [pi-jev (y0usaf)](https://github.com/y0usaf/pi-jev) - Adds a measured tool-call gate and a jev_ask tool for typed, calibrated answers to the Pi coding agent. *#coding-agents #guardrails*
- [pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode) - Jev-backed auto mode for the Pi coding agent that semantically auto-approves bash, write, and edit calls and fails closed when undecidable. *#coding-agents #guardrails #agent-safety*
- [pi-jev-guard (Reindeer-AI)](https://github.com/Reindeer-AI/pi-jev-guard) - Checks Pi code edits against repository Markdown rules with Jev. *#coding-agents #verification*
- [Pi-Jev-Guide](https://github.com/zszz3/Pi-Jev-Guide) - Pi Coding Agent plugin with timed rule checks, risk screening, output redaction, and reminders on repeated failures or missing verification, using local matching or Jev judgment. *#coding-agents #guardrails #plugin*
- [pi-jev-router](https://github.com/philippdubach/pi-jev-router) - Minimal Pareto-optimal OpenRouter model router for Pi based on Jev. *#routing #coding-agents*
- [pi-jev-router (mejiasd3v)](https://github.com/mejiasd3v/pi-jev-router) - Automatic model routing for Pi using Jev through Vercel AI Gateway. *#routing #coding-agents*
- [pi-jev-router (win4r)](https://github.com/win4r/pi-jev-router) - Task-boundary model routing for Pi with conservative policies, exact caching, and observable failover. *#routing #coding-agents*
- [pi-jev-skill-picker](https://github.com/safzanpirani/pi-jev-skill-picker) - Ranks Pi agent skills for the current task with Jev. *#skills #coding-agents*
- [pi-quiet-ask](https://github.com/HyunjunJeon/pi-quiet-ask) - Quiet Jev decision layer for the Pi coding agent. *#coding-agents*
- [pi-warden](https://github.com/DevMortimer/pi-warden) - Guardrails for Pi that steer rather than interrupt: Jev judges irreversible and off-task tool calls, detects stuck loops, and checks unverified done claims. *#coding-agents #guardrails #agent-safety*
- [reticle](https://github.com/reticlehq/reticle) - Gives coding agents Jev-style machine-native runtime perception of the web and desktop applications they build. *#coding-agents*
- [skillranker](https://github.com/Dicklesworthstone/skillranker) - Rust CLI that ranks agent skills for the next step from live session context with Jev, with Claude Code hooks, abstention, and local feedback. *#skills #coding-agents*
- [stanley-code](https://github.com/devagrawal09/stanley-code) - Bounded Jev workflows for coding agents. *#coding-agents*

## Browser & Computer Use

- [aside-jev](https://github.com/himomohi/aside-jev) - Aside browser-runtime agents that decide with Jev Choice, Score, and Noul questions. *#browser-automation*
- [AskJev](https://github.com/ranjan2829/AskJev) - Jev autopilot for any website with a guard on irreversible clicks. *#browser-automation #guardrails*
- [fastbrowse](https://github.com/agent-labs-dev/fastbrowse) - Fast browser agent where Jev picks each action from the page, an LLM reads and plans, and every claim in an answer cites a quote from the page. *#browser-automation*
- [jekhov](https://github.com/jekhov/jekhov) - Policy-bounded Jev target selection for resilient Playwright workflows. *#browser-automation*
- [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) - Browser-use's fastest agent mode, where Jev picks each action and click target and a language model is called only when text must be typed. *#browser-automation*
- [jev-agent-browser](https://github.com/forvela/jev-agent-browser) - Fast, bounded browser agents built on Jev and agent-browser with typed actions, research, classification, and safe orchestration. *#browser-automation*
- [jev-browser (jkudish)](https://github.com/jkudish/jev-browser) - Drives a browser with Jev deciding each step. *#browser-automation*
- [jev-browser (tontoko)](https://github.com/tontoko/jev-browser) - Grounded Jev and Playwright core with a typed SDK, persistent CLI, and MCP server offering native browser operations and deterministic assertions. *#browser-automation #mcp #sdk*
- [jev-browser (Ying-Kai-Liao)](https://github.com/Ying-Kai-Liao/jev-browser) - Browser automation where an LLM plans and Jev decides, as a library, CLI, and MCP server. *#browser-automation #mcp*
- [jev-browser-use](https://github.com/wy-coliney/jev-browser-use) - Browser automation where Jev handles clicks while Codex plans and verifies, reported 5-10x faster than LLM-only operation. *#browser-automation*
- [Jev-cu](https://github.com/Sac-Y/Jev-cu) - Hands Codex Computer Use's next-step choice to Jev, which picks element, action, completion, and risk from on-screen text candidates while local policy gates block sensitive operations. *#computer-use #agent-safety*
- [jev-desktop](https://github.com/yikangy873-gif/jev-desktop) - Jev action selection inside Codex Computer Use. *#computer-use*
- [jev-ego](https://github.com/romaluev/jev-ego) - Fast browser agent for ego lite with one TypeSafe request per step. *#browser-automation*
- [jev-for-chrome](https://github.com/chy4pro/jev-for-chrome) - Community Chrome-extension port of Jev Ultrafast that drives the tab you are looking at with Jev. *#browser-automation*
- [jev-macos-loop](https://github.com/jcpsimmons/jev-macos-loop) - Open-source macOS computer use on Apple Silicon combining Jev, OmniParser CoreML, and Apple Vision OCR. *#computer-use*
- [jev-recruiter](https://github.com/skeptrunedev/jev-recruiter) - LinkedIn recruiting agent that browses profiles, saves links, and reviews evidence against your hiring brief with Jev. *#browser-automation*
- [jev-social](https://github.com/socai-io/jev-social) - Instagram, TikTok, and LinkedIn research agent with typed routing, real browser evidence, streamed post cards, and cited reports. *#browser-automation*
- [jev-ultrafast-mcp](https://github.com/jiawei686/jev-ultrafast-mcp) - MCP server where a decision model drives the page for your agent so a flow costs one tool call instead of a turn per click, speaking CDP to your Chrome. *#browser-automation #mcp*
- [jev-use (savka777)](https://github.com/savka777/jev-use) - Voice-driven macOS computer-use harness on Jev that reads the screen through Accessibility with no vision model. *#computer-use #voice*
- [jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) - Controls a real browser by voice, with Jev deciding intent and target per spoken word in about 300 ms while Playwright acts. *#browser-automation #voice*
- [jev-webmcp-extension](https://github.com/sdras/jev-webmcp-extension) - Chrome extension that uses Jev to select and populate WebMCP tool calls from user input, showing predicted calls, confidence, and latency as you type. *#browser-automation #mcp*
- [mobile-jev](https://github.com/droidrun/mobile-jev) - Standalone Android agent for Mobilerun where Jev makes every decision, demoed opening Uber and entering a route in about 21 seconds for 9 actions. *#mobile #computer-use*
- [playjev (filedcom)](https://github.com/filedcom/playjev) - Fast, typed browser automation powered by Jev and Playwright. *#browser-automation*
- [ulka](https://github.com/razaanstha/ulka) - Experimental browser agent powered by FX, Jev, and Vercel AI Gateway with bring-your-own API key. *#browser-automation*

## Context & Memory

- [fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) - Claude Code plugin that replaces compaction summaries with Jev decisions, scoring every tool call and result in one request and keeping whatever survives verbatim. *#context-management #coding-agents #plugin*
- [fast-jev-compaction-laya](https://github.com/kaiyes/fast-jev-compaction-laya) - Local, key-free context compaction for opencode using the open-weight Laya models on Apple Silicon to decide what to keep, truncate, or drop. *#context-management #open-alternative*
- [hafiza-os](https://github.com/fornhere/hafiza-os) - Sourced second brain for Linux, macOS, and Windows with Claude Code, Codex, and Antigravity adapters, a local Markdown vault, and optional Mem0 or Jev. *#memory*
- [hippo-memory](https://github.com/kitfunso/hippo-memory) - Biologically inspired agent memory with decay, retrieval strengthening, and consolidation over SQLite and MCP, with an opt-in Jev reranker. *#memory #mcp*
- [invalidate](https://github.com/chopratejas/invalidate) - Invalidation layer for AI memory where every fact gets a lease that new evidence ends, built on Jev. *#memory*
- [jev-compact](https://github.com/fatelei/jev-compact) - Jev-scored context compaction for the Codex CLI that scores every tool call before compaction and restores critical outputs verbatim after. *#context-management #coding-agents*
- [Jev-Mem](https://github.com/libingzheren/Jev-Mem) - System One-controlled agentic memory. *#memory*
- [jev-memory (NicolasMontone)](https://github.com/NicolasMontone/jev-memory) - Jev-backed long-term memory layer with write, retrieve, and evict for the Vercel AI SDK. *#memory #sdk*
- [jev-pruner](https://github.com/tamaratran/jev-pruner) - Claude Code plugin that trims long Bash output with Jev before the model sees it. *#context-management #coding-agents #plugin*
- [jev-recall](https://github.com/samdotmak/jev-recall) - Filters an AI assistant's memories by relevance rather than resemblance using Jev. *#memory*
- [NylonME](https://github.com/nylon-memory/NylonME) - Memory engine for agents that models memories as woven threads in a weighted graph and pairs with Jev for higher decision accuracy. *#memory*
- [omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction) - Verbatim Jev-scored context reduction for omp over TypeSafe or OpenRouter. *#context-management #coding-agents*
- [pi-fast-jev-compaction](https://github.com/joelhooks/pi-fast-jev-compaction) - Pi extension for verbatim context compaction with Jev decisions. *#context-management #coding-agents*
- [pi-jev-context](https://github.com/Nyarlathoteppppp/pi-jev-context) - Pi extension with freshness-aware read dedupe, Jev log filtering, and searchable verbatim recall that keeps message history intact. *#context-management #coding-agents*
- [pi-jev-context-curator](https://github.com/Shashank-H/pi-jev-context-curator) - Jev-based context curator for Pi. *#context-management #coding-agents*
- [save-token-jev](https://github.com/IAmUnbounded/save-token-jev-clean) - Portable Jev-guided context compaction for coding agents that asks Jev which tool calls still matter and keeps user and assistant text verbatim. *#context-management #coding-agents*
- [winnow](https://github.com/GhalebDweikat/winnow) - Calibrated context sieve for Claude Code that has a System One model judge every tool result before it enters context. *#context-management #coding-agents*
- [yoshi](https://github.com/compozy/yoshi) - Context-pruning proxy for Claude Code and Codex where Jev judges which history is still needed, with measurements. *#context-management #coding-agents*

## Agent Frameworks & Harnesses

- [a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai) - Jev judgments for Agent Zero with typed tools and probability cards.
- [evoke](https://github.com/evoke-build/evoke) - Turns a sentence into a call of a small program chosen by Jev and run only when it is sure enough, with a CLI, a reflex package manager, and a TypeScript SDK.
- [hermes-jev](https://github.com/keeltrace/hermes-jev) - Typed System One decisions, ranking, verification, and an opt-in tool gate for Hermes. *#guardrails*
- [hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals) - Puts Jev in front of Hermes Agent command approvals, measured 8.7x faster with 4.4x fewer prompts on 153 real commands. *#guardrails #agent-safety*
- [jcr](https://github.com/NiazMorshed2007/jcr) - Jev-powered resolver for agent harnesses that finds deterministic commands and their context in a nested capability tree. *#coding-agents*
- [jev-chat](https://github.com/w3cj/jev-chat) - Tool-calling chat bot built with Jev and no LLM.
- [JevHarness](https://github.com/TianyuCodings/JevHarness) - LLM-authored task-specific Jev harnesses with optional full-trajectory reward reflection and GEPA evolution. *#research*
- [JevLoop](https://github.com/zjunlp/JevLoop) - Agent loop where decisions do not cost an LLM call, with zero dependencies and offline operation.
- [jot](https://github.com/runta-dev/jot) - General-purpose System One agent built on Jev.
- [mcts-agent](https://github.com/lhemerly/mcts-agent) - Discriminative Monte Carlo Tree Search using Jev primitives and Gemini. *#research*
- [typesafe-skill-router](https://github.com/DECRUX9812/typesafe-skill-router) - Names the one skill worth loading for Hermes Agent before the model call, opt-in and stdlib-only at about $0.001 per routed turn. *#skills #routing*
- [vexjoy-agent](https://github.com/notque/vexjoy-agent) - Agent whose /do command routes plain-English requests to the right specialist agent with Jev and gates the work with reviews, tests, and a learning loop. *#routing*

## Search, Data & Retrieval

- [blink (ellipsis-dev)](https://github.com/ellipsis-dev/blink) - Codebase search powered by Jev. *#coding-agents*
- [duckdb-jev](https://github.com/colliber/duckdb-jev) - DuckDB extension returning typed Jev answers as real SQL types. *#sql*
- [every](https://github.com/sufianetaouil/every) - Asks a yes/no question of every function in a codebase and returns ranked answers in seconds, grep whose pattern is a question. *#coding-agents*
- [jegrep](https://github.com/can1357/jegrep) - Semantic grep that finds code by describing what you are looking for. *#coding-agents*
- [jeq](https://github.com/cristianoliveira/jeq) - Pipeable jq-style filters powered by Jev.
- [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) - High-throughput dataset sifter that streams, filters, and scores Parquet and JSONL rows with Jev typed decisions at 1,500+ rows per second. *#classification*
- [jev-dataops](https://github.com/RenaGao/jev-dataops) - Workbench for streaming data selection, quality evaluation, automatic LoRA training, and held-out model evaluation driven by Jev. *#research*
- [jev-reranker](https://github.com/hotchpotch/jev-reranker) - Jev-powered relevance filtering and reranking for RAG in Python. *#rag #scoring*
- [jev-reviewer](https://github.com/choxos/jev-reviewer) - Data extraction for systematic reviews where Jev points at the lines in a trial report and every answer is a verbatim quote with its page, all in the browser. *#research*
- [jev-search](https://github.com/superagents-lab/jev-search) - Web search where Jev handles source selection, query understanding, and relevance ranking over Search1API results. *#rag #scoring*
- [jev-search (larguesa)](https://github.com/larguesa/jev-search) - Experimental semantic line search with Jev via OpenRouter as a dependency-free Python CLI.
- [jev-semgrep](https://github.com/uehaj/jev-semgrep) - Grep by meaning across languages where Jev scores every line against a description, combinable with AND, OR, and NOT, including cross-language Japanese and English search.
- [jevgraph](https://github.com/chenmingtang830/jevgraph) - Evidence-backed knowledge graph construction with typed Jev relation decisions. *#research*
- [jevgrep](https://github.com/nassim-arifette/jevgrep) - Semantic code search for coding agents that finds behavior across repositories via CLI or MCP, with exact source excerpts and line numbers. *#coding-agents #mcp*
- [JevNQL](https://github.com/Adityakhalkar/JevNQL) - Compiles natural-language data questions into query plans that mix deterministic operators with Jev-evaluated semantic predicates. *#sql*
- [jevql](https://github.com/kylemclaren/jevql) - Semantic SQL for PostgreSQL powered by Jev. *#sql*
- [jgrep (keltokhy)](https://github.com/keltokhy/jgrep) - Grep where the pattern is a description, filtering lines by meaning with Jev at about 200 ms and a thousandth of a cent per line.
- [jgrep (kyu1204)](https://github.com/kyu1204/jgrep) - Semantic code search for what code does rather than what it is called. *#coding-agents*
- [jsort](https://github.com/keltokhy/jsort) - Sorts lines along a plain-English dimension from pairwise comparisons judged by Jev. *#scoring*
- [neo4jev](https://github.com/jexp/neo4jev) - Navigates a Neo4j graph with Jev classifying over neighbouring relationships.
- [pg_typesafe](https://github.com/giuliosmall/pg_typesafe) - Pre-alpha PostgreSQL extension for categorical classification with Jev. *#sql*
- [pg-jev](https://github.com/realZachi/pg-jev) - PostgreSQL extension that lets you ask your tables questions in plain language, with Jev answering per row. *#sql*
- [reranker (hev)](https://github.com/hev/reranker) - Uses Jev as a calibrated reranker with one call for up to 30 documents and a probability per document. *#rag #scoring*
- [zero-api-key-web-search](https://github.com/wd041216-bit/zero-api-key-web-search) - Jev-powered search infrastructure for agents with no API keys, MCP support, and local neural evidence verification. *#rag #mcp*

## Apps & Utilities

- [ai-news-aggregator](https://github.com/flyryan/ai-news-aggregator) - Multi-agent AI news pipeline powered by GLM-5.3-Flash and Jev.
- [book-aurora](https://github.com/dani1005/book-aurora) - Reads a whole novel in seconds with Jev and turns every passage into a row of colour.
- [call-coach-ai](https://github.com/ZeroGold/call-coach-ai) - Call coaching tool powered by Jev.
- [Cheshi](https://github.com/CheshiAI/Cheshi) - macOS workspace for Codex with Jev-powered conversation memory to find past sessions and revisit decisions with sources. *#memory #productivity #coding-agents*
- [crush-monitor](https://github.com/FerryCorleone/crush-monitor) - Local WeChat chat analyzer that uses Jev to read emotion, intent, and how your replies land, with your own API key. *#productivity*
- [dasheng](https://github.com/wquguru/dasheng) - English read-aloud scoring that streams ASR through R2T2 and has Jev judge word by word. *#voice*
- [findme](https://github.com/marc2332/findme) - File finder that combines Jev with the filesystem. *#productivity*
- [formanator](https://github.com/timrogers/formanator) - Submits Forma benefit claims from the command line and MCP clients, with optional receipt analysis by an LLM or Jev. *#mcp #productivity*
- [GlyphWeave](https://github.com/HsiangNianian/GlyphWeave) - Infinite-canvas ASCII roguelike tilemap editor with multi-layer editing, preset rooms, and real-time map generation via Jev or DeepSeek. *#game*
- [HA-Jev](https://github.com/AboveColin/HA-Jev) - Home Assistant integration exposing Jev answers as sensors, four automation actions, and a conversation agent for Assist. *#productivity*
- [hearth-jev-rental-search](https://github.com/Nancy-Chauhan/hearth-jev-rental-search) - Autonomous multi-source rental search powered by Jev.
- [Instinct](https://github.com/joevidev/ui-generator-instinct-jev) - UI generator demo where Jev picks which real shadcn/ui component or page block to render from a free-text description, without generating code.
- [jev-chat-JARVIS](https://github.com/Finderchangchang/jev-chat-JARVIS) - Mobile chat copilot for WeChat, QQ, and X DMs that reads the other side's intent and risk level and has Jev rank three candidate replies to fill in with one tap. *#mobile #productivity*
- [jev-chat-JARVIS-windows](https://github.com/rezoch340/jev-chat-JARVIS-windows) - Windows WeChat reply assistant that OCRs the other side's messages from a screenshot, has Jev judge intent, and offers three candidate replies to fill in, with sending always manual. *#productivity*
- [jev-clerk](https://github.com/stas4000/jev-clerk) - Desktop bookkeeping clerk where Jev decides every step and Fable 5.1 rewrites its playbook every ten invoices. *#productivity*
- [jev-design](https://github.com/bilune/jev-design) - Console whose whole design system is generated at runtime by Jev from a one-sentence brief.
- [jev-design-test](https://github.com/bhaiG-de/jev-design-test) - Jev-driven shadcn block generator.
- [jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling) - Self-hosted Gmail classifier that creates custom labels and filters spam with Jev, with confidence and cost controls. *#email #moderation*
- [jev-in-blender-experiment](https://github.com/kolibril13/jev-in-blender-experiment) - Blender extension that adds a Jev tab for finding and running operators from a plain-language description. *#productivity*
- [jev-jarvis](https://github.com/jev-jarvis/jev-jarvis) - Read-only macOS floating window that watches WeChat, judges message intent and risk with a local small model, and drafts reply candidates without injecting into WeChat. *#productivity*
- [jev-linkmap](https://github.com/stas4000/jev-linkmap) - Rebuilds a site's internal link map in seconds with Jev, races Claude Opus 5 on the same queue, and rewrites the rubric from disagreements. *#scoring*
- [jev-mac-voice](https://github.com/brudarko/jev-mac-voice) - Full-duplex English voice control for macOS with OpenAI Realtime, native Accessibility, and Jev. *#voice #computer-use*
- [jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier) - Config-driven inbox classifier that tags, moves, flags, and notifies with Jev. *#email #productivity*
- [jev-paint](https://github.com/achimala/jev-paint) - Creative experiment that makes images with Jev deciding each stroke.
- [jev-seo](https://github.com/AkashPriyadarshii/jev-seo) - Agent-first SEO and GEO CLI suite and MCP server in Rust built on DuckDuckGo and Jev. *#mcp*
- [jev-shell-history](https://github.com/mrnugget/jev-shell-history) - Fish-style zsh history autosuggestions ranked by Jev. *#productivity*
- [jev-telop-live](https://github.com/ponyo877/jev-telop-live) - Talk to your camera and Japanese variety-show captions and manga effects appear automatically, with Jev matching effects to what you say. *#voice*
- [jev-voice (kevinbadi)](https://github.com/kevinbadi/jev-voice) - Voice control for your Mac using local whisper.cpp, one Jev call per command, and macOS automation. *#voice #computer-use*
- [jev-weekend-shopping-chrome](https://github.com/littlewindy123/jev-weekend-shopping-chrome) - Chrome extension for Taobao and JD that has Jev guess a seller's work schedule in real time and stamps PASS on products likely made without weekend rest. *#productivity*
- [jev-yt-time-saver](https://github.com/jaibhasin/jev-yt-time-saver) - Chrome extension that covers distracting YouTube videos with Jev, with a show-anyway override. *#productivity #moderation*
- [jevchat](https://github.com/kyle-pena-nlp/jevchat) - Turns Jev into a chatbot.
- [jevfill](https://github.com/imohitmayank/jevfill) - Chrome extension that autofills web forms from unstructured pasted notes using Jev, with no structured profile required. *#productivity*
- [jevmail](https://github.com/fazlerocks/jevmail) - Read-only local Gmail triage that sorts your inbox into needs-reply, updates, promos, sales, and spam with Jev, about 1,000 emails a minute for 3 cents. *#email #productivity*
- [jevmeter](https://github.com/ChetasLua/jevmeter) - Puts a live Jev meter on any video, scoring every sentence and rendering a 16:9 edit. *#scoring*
- [JevScout](https://github.com/hqman/JevScout) - Coding-agent skill that hunts software jobs on real company sites, with Chrome acting over CDP and Jev scoring every link and job instead of the host LLM. *#skills #browser-automation*
- [jevthoven](https://github.com/cocktailpeanut/jevthoven) - AI MIDI music generator powered by Jev.
- [killmyidea](https://github.com/monteduro/killmyidea) - Describe your startup idea and Jev decides whether to kill it, fix it, or ship it.
- [live-jev](https://github.com/okinaaudio/live-jev) - Controls Ableton Live from one short sentence in Japanese or English, typed or dictated. *#voice #productivity*
- [refgarden](https://github.com/AlbionaHoti/refgarden) - Spatial reference explorer for creators with local Jev query choices, metadata highlights, and source-linked collections.
- [semantic-live-caption](https://github.com/limboinf/semantic-live-caption) - Real-time speech captions with live semantic annotation of key points, emotion, and intent using Confucius, Jev, and DeepSeek. *#voice*
- [SemanticSpace](https://semanticspace.dev/) - Places phrases in 2D by asking Jev how strongly each relates to two chosen axis concepts.
- [ST-jeved](https://github.com/mossyfield/ST-jeved) - SillyTavern extension that measures each reply with Jev and instructs the narrator only when a rule matches.
- [transcript-lens](https://github.com/sensahin/transcript-lens) - Explores YouTube transcripts by meaning with a Turkish interface, Jev analysis, and subtitle export.
- [typesafe-adblock](https://github.com/realZachi/typesafe-adblock) - Chrome extension that asks Jev whether each DOM element is an ad and pops it off the page, BYOK with no backend. *#productivity #moderation*
- [unclutter](https://github.com/kitze/unclutter) - WXT browser extension that asks Jev whether each page element is clutter and removes it under reusable template rules. *#productivity*
- [vibecheck](https://github.com/RafalWilinski/vibecheck) - Chrome extension that vibe-checks your X posts with Jev before you hit Post. *#productivity*
- [youtube-sponsor-detection](https://github.com/trungdq88/youtube-sponsor-detection) - Detects YouTube sponsor segments from live audio and transcript with Jev.

## Games, Robotics & Simulation

- [embodied-jev](https://github.com/FBddcz/embodied-jev) - MuJoCo robot decision workbench for MiniCPM, Jev, and compatible model APIs. *#robotics*
- [heist-one](https://github.com/AbdelStark/heist-one) - Observable browser stealth game where Jev makes typed guard judgments while deterministic code owns the world. *#game*
- [hermes-and-jev-play-minecraft](https://github.com/teknium1/hermes-and-jev-play-minecraft) - Hermes Agent plans, Jev picks bounded actions, and Mineflayer executes Minecraft with no screenshots or keypresses from a model. *#game*
- [jev_vampire_survivors](https://github.com/oldmoldycake/jev_vampire_survivors) - Jev plays Vampire Survivors on Steam via a BepInEx plugin, Python brain, and live decision dashboard. *#game*
- [Jev-as-Policy](https://github.com/YuanKJing/Jev-as-Policy) - One-click simulation setup for using Jev as a robot policy, with Astra plus Jev evaluations on benchmarks like RoboTwin planned. *#robotics #research*
- [jev-askable-arm](https://github.com/TarunTomar122/jev-askable-arm) - Zero-shot English goals on a simulated Franka arm where Jev chains hardcoded primitives. *#robotics*
- [jev-autopilot](https://github.com/arielweinberger/jev-autopilot) - Demo where Jev autonomously flies a drone across a random city from point A to B while avoiding obstacles, at about $0.01 per trip. *#game #robotics*
- [jev-doom-agent](https://github.com/lukaske/jev-doom-agent) - Browser-native Doom agent with structured spatial state, composable AI controls, live decision telemetry, and a Chocolate Doom WebAssembly runtime. *#game*
- [jev-drone](https://github.com/RomanSlack/jev-drone) - Camera-only autonomous drone in MuJoCo with Jev in the control loop at 2.5 Hz. *#robotics*
- [jev-game-tools](https://github.com/Eniip/jev-game-tools) - Drives real-time games, starting with Brotato, with Jev making every-frame decisions and a slower Claude strategist making long-term ones. *#game*
- [jev-grand-prix](https://github.com/enoyola/jev-grand-prix) - F1 racing game where Jev picks the racing line and pedals and learns each corner's limit between laps. *#game*
- [jev-lab (jammaru)](https://github.com/jammaru/jev-lab) - Tiny town where 100 AI NPCs live, Jev chooses each next action, and the world writes the story. *#game*
- [jev-libero](https://github.com/Dimweaker/jev-libero) - Fine-grained robot control with Jev, physics previews, and configurable LIBERO tasks. *#robotics*
- [jev-minesweeper](https://github.com/comoc/jev-minesweeper) - Demo that has Jev solve Minesweeper in the browser. *#game*
- [jev-plays-streetfighter-2](https://github.com/smartaces/jev-plays-streetfighter-2) - Lets Jev play Ryu in Street Fighter II on a Genesis emulator from structured RAM observations, with a local dashboard of what it sees and chooses. *#game*
- [jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab) - Multi-drone autonomy lab demonstrating Jev reflex decisions with optional System 2 strategy guidance. *#robotics*
- [jev-robot-control](https://github.com/openroboto-ai/jev-robot-control) - Compares Jev with GPT-6 Astra and GPT-4.1 mini at direct Cartesian control of an xArm7 in MuJoCo, with recorded responses and trajectories. *#robotics #evaluation*
- [jev-rts](https://github.com/studioigor/jev-rts) - Real-time strategy experiment where the model makes the decisions for an entire army across two factions, built for a YouTube series. *#game*
- [jev-tetris](https://github.com/trungdq88/jev-tetris) - Jev plays Tetris in real time against other AI models. *#game*
- [JevBird](https://github.com/leftspace89/JevBird) - Flappy Bird played in real time by Jev, which picks the flight path through each pipe gap from a simulated spread of candidates. *#game*
- [jevpilot](https://github.com/standardagents/jevpilot) - Playable Three.js driving simulator with a Jev-powered autopilot. *#game*
- [jevs-fly](https://github.com/webdevcody/jevs-fly) - Three.js FPV garden game where Jev chooses the fly's heading and dive about five times per second. *#game*
- [jevscape](https://github.com/Skyvern-AI/jevscape) - RuneBench harness for Jev with a bounded action catalog, tick-mode controller, and live dashboard. *#game*
- [laya-vs-jev-arena](https://github.com/PromptEngineer48/laya-vs-jev-arena) - Laya and Jev race in Snake and fight in a Mortal Kombat-style arena where every move is a real model decision. *#game #evaluation #open-alternative*
- [live-jev (vinilana)](https://github.com/vinilana/live-jev) - 2D autonomous car simulation in the browser driven by Jev. *#game*
- [mario-jev](https://github.com/shantanugoel/mario-jev) - Python prototype that plays NES Super Mario Bros. from structured RAM observations, with Jev answering focused movement and jump-timing questions. *#game*
- [minecraft-agent](https://github.com/rmalde/minecraft-agent) - Minecraft agent with an Astra planner and a Jev controller, with native recording, tested routes, and run verification. *#game*
- [nanojev-arena](https://github.com/caijinchun/nanojev-arena) - Snake arena with 1v4 human-versus-AI battles and a 100-agent swarm simulator running the open NanoJev replica locally. *#game #open-alternative*
- [OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) - 1v1 quickscope arena in Three.js where Jev controls the opponent. *#game*
- [piper-astra-jev](https://github.com/RobotKitAI/piper-astra-jev) - LLM-driven demo runs on a real AgileX PiPER arm using Astra, Jev with DINO, and Jev with SAM3. *#robotics*
- [PlayJev](https://github.com/OmniJev/PlayJev) - Open 0.8B Jev-like multimodal model that plays GUI games directly from raw pixels. *#game #open-alternative*
- [quackd](https://github.com/rokbenko/quackd) - One CLI for many robot platforms where an LLM plans and Jev takes the cheaper per-step decisions, with a simulator, safety contracts, and MCP. *#robotics #mcp*
- [RoboJEV](https://github.com/lykycy123/RoboJEV) - Two-stage Jev control of a Franka Panda arm in MuJoCo. *#robotics*
- [tsai-sc](https://github.com/phyous/tsai-sc) - Controls original StarCraft shareware through keyboard and mouse with recorded action probabilities per decision. *#game*
- [typesafe-mario](https://github.com/fhshaik/typesafe-mario) - Plays Super Mario Bros. by choosing each action from structured emulator state instead of raw pixels. *#game*
- [typesafe-snake](https://github.com/sorrycc/typesafe-snake) - Snake auto-played by Jev with one choice per tick and legal moves generated in code. *#game*

## Finance & Trading

- [jev_stock](https://github.com/sosopop/jev_stock) - Experimental framework for forecasting short-term stock price direction from structured market data with Jev. *#finance*
- [jev-trade](https://github.com/aowang-ai/jev-trade) - Asks Jev for a long/short choice on a Hyperliquid market each round and places the resulting order. *#finance*
- [jev-trader (jarrodwatts)](https://github.com/jarrodwatts/jev-trader) - Makes one AI trade decision every Monad block, with Jev deciding on the Kuru MON-USDC market. *#finance*
- [Jev-Trades](https://github.com/zadescoxp/Jev-Trades) - Trading bot built on Jev. *#finance*
- [Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis) - Crypto market terminal that pulls up to 1,000 tweets for a coin and turns them into a Buy, Sell, Hold, or Take Profit decision with Jev. *#finance*
- [jevocks](https://github.com/unicodeveloper/jevocks) - Everyday stock status checks with Jev. *#finance*
- [QuantDinger](https://github.com/OpenByteInc/QuantDinger) - Open-source AI trading OS for crypto, stocks, and forex with Jev integrated for strategy decisions across research, backtesting, and paper or live trading. *#finance*
- [SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub) - Read-only trading journal and review harness with Jev typed judgments, agent integration, and a reproducible finance benchmark. *#finance #evaluation*

## Content Moderation & Feeds

- [Jev Moderation Bot](https://github.com/brainstormity/Jev-Moderation-Bot) - Discord bot that scores incoming messages for phishing, spam, and social engineering and drives a staged escalation ladder. *#moderation*
- [jev_antispam_bot](https://github.com/backmeupplz/jev_antispam_bot) - Minimal grammY Telegram anti-spam bot powered by Jev. *#moderation*
- [jev-block-android-ad](https://github.com/ufec/jev-block-android-ad) - Android notification and SMS noise filter where a decision model flags noise and verification codes are matched on-device and never uploaded. *#moderation #mobile*
- [jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch) - Bring-your-own-key Chrome extension that filters any live Twitch chat with Jev. *#moderation*
- [lkclean](https://github.com/stefw/lkclean) - Chrome extension that hides engagement bait, self-promo, and off-topic posts on LinkedIn with Jev and explains every decision. *#moderation*
- [sharp](https://github.com/tshmieldev/sharp) - Filters your X.com feed with Jev or any LLM. *#moderation #productivity*
- [sift](https://github.com/bohutang/sift) - Chrome extension that labels every post on X as substance, humor, chit-chat, promo, junk, or AI-written with Jev and hides the ones you do not want. *#moderation*
- [twitter-jev-guard](https://github.com/qs-lll/twitter-jev-guard) - Flags low-quality, spam, and ad posts on the X timeline with Jev and overlays a translucent watermark on them. *#moderation*
- [x-scanner](https://github.com/oso95/x-scanner) - Chrome extension that labels every post you scroll past on X with typed Jev judgments and a live cost counter. *#moderation*
- [xtags](https://github.com/manifoldor/xtags) - Labels every post on your X timeline with what it wants you to do, judged by Jev. *#moderation*

## Evaluation & Benchmarking

- [jev_deep_rl](https://github.com/taodav/jev_deep_rl) - Evaluates Jev as a fixed policy in Gymnasium and Atari environments, recording rewards against a seeded random baseline. *#evaluation #game*
- [jev-arena (NanmiCoder)](https://github.com/NanmiCoder/jev-arena) - Chinese-language introduction and hands-on test of Jev that compares it with DeepSeek on comment labeling, with CSV import, replay, and offline reports. *#evaluation*
- [jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) - Uses Jev as an evaluator. *#evaluation*
- [jev-benchmark (wondertwins)](https://github.com/wondertwins/jev-benchmark) - Benchmarks and a playground for Jev covering chess and who-is-the-player-talking-to for speech-to-text game NPCs. *#evaluation #game*
- [jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) - Probability-aware evaluation for typed decision models covering calibration, selective risk, latency, and reproducible benchmarks. *#evaluation #research*
- [jev-calibrate](https://github.com/smkrv/jev-calibrate) - Calibrates Jev questions against your own labels by tuning criteria on labelled examples and confirming on a held-out set. *#evaluation*
- [jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas) - Evidence-based bilingual map of where Jev holds up and where it breaks down, backed by real API-call receipts. *#evaluation #research*
- [jev-column-race](https://github.com/goodrahstar/jev-column-race) - Labels 1,000 app reviews with Jev versus Gemini 3.8 Flash, reporting 4.1x faster and 7x cheaper. *#evaluation*
- [jev-eval-agent](https://github.com/vinilana/jev-eval-agent) - Personal-assistant agent built on eve with 100 mocked tools, measuring how many steps a task takes when the LLM picks tools versus when Jev picks them. *#evaluation*
- [jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark) - Reproducible early-access evaluation of Jev on Korean understanding and medical text with runtime and cost evidence. *#evaluation*
- [jev-rag-benchmark](https://github.com/erendikmenn/jev-rag-benchmark) - Reproducible benchmark for Jev reranking quality, latency, and cost in RAG. *#evaluation #rag*
- [jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) - Compares Jev against Cohere Rerank 4, ZeroEntropy zerank-2, and a chat-model baseline across 14 datasets with every raw response and bootstrap ranges. *#evaluation #rag*
- [jev-reranking (carlaiau)](https://github.com/carlaiau/jev-reranking) - Search-engine experiments on TREC collections focused on zero-shot reranking with Jev. *#evaluation #rag*
- [jev-search-rerank-eval](https://github.com/zhuyansen/jev-search-rerank-eval) - Graded relevance eval of Jev reranking versus embedding search over 9,831 pairs and 164 queries, with judge-circularity bias measured. *#evaluation #rag*
- [jeval (rlaope)](https://github.com/rlaope/jeval) - Measures what a Jev classifier's confidence is worth and sets the human hand-off line from the cost of a mistake. *#evaluation*
- [jevals](https://github.com/openlayer-ai/jevals) - Agent evals and guardrails in one request, built on Jev, Kev, and Laya. *#evaluation #guardrails*
- [jevals (theyashwanthsai)](https://github.com/theyashwanthsai/jevals) - Eval framework for LLMs and agents graded by a calibrated decision model, research preview. *#evaluation*
- [jevbench](https://github.com/fstandhartinger/jevbench) - Benchmark for Jev-class typed decision models covering accuracy, cost, speed, and reliability. *#evaluation*
- [jevcal](https://github.com/abhixhek/jevcal) - Calibrates, thresholds, and drift-checks typed decision models against an LLM teacher so you stop guessing confidence cutoffs. *#evaluation*
- [JevPokerBench](https://github.com/Prophetlab/JevPokerBench) - Texas Hold'em benchmark and playground for decision models with cash and SNG leaderboards, live replays, and bring-your-own-agent tables. *#evaluation #game*
- [typed_evals](https://github.com/TrustifAI/typed_evals) - Fast, typed, calibrated evaluations for LLM and agent outputs with framework-agnostic Python APIs. *#evaluation*

## Open Reproductions & Research

- [ChatJev](https://github.com/erik-dunteman/ChatJev) - Turns the Jev classifier into an autoregressive next-token predictor. *#research*
- [dohnuts](https://github.com/PsiACE/dohnuts) - Builds small multimodal models for direct decisions in the System One style. *#open-alternative #research*
- [edgejev](https://github.com/yzfly/edgejev) - Local, offline System One inference on CPU with ONNX and INT8, about 15 ms per question on 4 cores, supporting Laya, kev, and PlayJev. *#open-alternative*
- [jeff (logan-markewich)](https://github.com/logan-markewich/jeff) - Self-hosted drop-in replacement for Jev powered by GliFormer. *#open-alternative*
- [Jev in the Wild](https://arxiv.org/abs/2609.30216) - Data-driven study of 2,170 public GitHub Jev projects, reporting early growth, application domains, and decision-use patterns. *#research*
- [jev_local (Argos1111)](https://github.com/Argos1111/jev_local) - Replicates Jev with a local LLM. *#open-alternative*
- [JEV-CPU](https://github.com/leesk212/JEV-CPU) - Runs SemIf-style semantic-if decisions on CPU with no GPU, reading typed option probabilities from an open model in one pass, with a web UI. *#open-alternative*
- [jev-forge](https://github.com/zwliJay/jev-forge) - Open training and inference stack for Jev-style decision models that score dynamic candidate branches from a shared prefix. *#open-alternative #research*
- [jev-lm](https://github.com/y0usaf/jev-lm) - Word-level language model whose output layer is Jev, with an n-gram drafter, Noul chunk verification, and bits-per-token eval. *#research*
- [jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop) - Unofficial study of Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop, with benchmarks and a demo Space. *#research #open-alternative*
- [jev-visual](https://github.com/hr98w/jev-visual) - Educational Jev-like visual inference experiment on Apple Silicon with shared context and direct candidate scoring. *#open-alternative #research*
- [jevbetter](https://github.com/olanotolu/jevbetter) - Stronger one-pass scorer over a variable list of text options with a hashed n-gram encoder, rival-aware attention, and gated head. *#open-alternative #research*
- [jevfire](https://github.com/kikoncuo/jevfire) - Jev-inspired parallel decisions for CUDA LLMs with a vLLM API, game-agent examples, and reproducible benchmarks. *#open-alternative*
- [jevify (fidecastro)](https://github.com/fidecastro/jevify) - Simple way to serve LLMs as a Jev-like endpoint. *#open-alternative*
- [jevlike](https://github.com/vinnylarouge/jevlike) - Training library for small models that choose among a variable list of text options and return one probability per option in a single pass. *#open-alternative #research*
- [jevmlx](https://github.com/bnsd55/jevmlx) - Jev-style parallel constrained decisions for any MLX model on Apple Silicon, returning typed schema-valid JSON in one forward pass. *#open-alternative*
- [JevTuner](https://github.com/liushiliushi/JevTuner) - Trains language models to emit calibrated probability distributions for closed-set decision tasks directly from token logits. *#research #open-alternative*
- [KaLM-Jev](https://github.com/KaLM-Embedding/KaLM-Jev) - Local Jev-style judgment engine available in Nano, Small, and Large sizes. *#open-alternative*
- [kev](https://github.com/jaredpalmer/kev) - Tiny Jev-like family of decision models built on Qwen3.5 that you can train and run on your own machine. *#open-alternative #research*
- [litjev](https://github.com/zhengxuyu/litjev) - Turns any off-the-shelf LLM into a Jev-like decision layer. *#open-alternative*
- [LLM2Jev](https://github.com/Yinsongxu/LLM2Jev) - Adapts local language models into Jev-compatible decision engines with Choice, Score, and Noul outputs via prefill-only binary inference. *#open-alternative*
- [mini-jev](https://github.com/r-ms/mini-jev) - Jev-style typed-decision interface on a frozen Qwen3-4B that reads option-letter logits instead of generating JSON, with a preregistered experiment. *#open-alternative #research*
- [NanoJev](https://github.com/TianyuCodings/NanoJev) - Nano replica of Jev with parallel decisions, dynamic candidates, and an end-to-end training pipeline. *#open-alternative #research*
- [Nemotron_Jev](https://github.com/pst2154/Nemotron_Jev) - Experimental TypeSafe-shaped API and decision-lab explorer over the dense Nemotron Diffusion 14B model, for inspecting probability distributions on typed questions. *#open-alternative #research*
- [open-alternative-jev](https://github.com/ikermoel/open-alternative-jev) - System One style layer that gives typed, calibrated decisions from any open-weights LLM in one forward pass via HF and vLLM, with published benchmarks. *#open-alternative*
- [Open-Jev](https://github.com/Zefan-Cai/Open-Jev) - Open probability decisions from Qwen3.5-2B, 9B, and 27B models: supply context, questions, and candidates and get typed probabilities without generating text. *#open-alternative #research*
- [open-jev (daseinlabs)](https://github.com/daseinlabs/open-jev) - Open Jev implementation with custom fine-tuning. *#open-alternative*
- [open-jev (JoshuaSP)](https://github.com/JoshuaSP/open-jev) - Typed JSON inference with DiffusionGemma, with Every and Jev benchmark results. *#open-alternative*
- [open-jev (kyegomez)](https://github.com/kyegomez/open-jev) - From-first-principles PyTorch reconstruction of the ideas behind Jev. *#open-alternative #research*
- [open-jev (nico-martin)](https://github.com/nico-martin/open-jev) - Browser-focused TypeScript library for typed decisions where one forward pass returns a calibrated distribution per question and nothing is generated. *#open-alternative #sdk*
- [open-jev-typed-decision-engine](https://github.com/intikhab49/open-jev-typed-decision-engine) - 150M-parameter typed decision engine answering noul, choice, and score in one non-autoregressive pass, trainable on a Colab T4 in 30 minutes. *#open-alternative #research*
- [open-spark-jev](https://github.com/abhishek085/open-spark-jev) - Open-source local decision models inspired by Jev, built on Qwen3 for NVIDIA DGX Spark. *#open-alternative*
- [OpenDecision](https://github.com/deepanwadhwa/OpenDecision) - Open-source semantic decision engine in the style of Jev. *#open-alternative*
- [openjev (razorback16)](https://github.com/razorback16/openjev) - Open Jev-compatible System One decision server built on DiffusionGemma. *#open-alternative*
- [OpenJev (SiliconLabAI)](https://github.com/SiliconLabAI/OpenJev) - Open-source Jev reimplementation. *#open-alternative*
- [OpenJev (xingwudao)](https://github.com/xingwudao/OpenJev) - Independent Jev-inspired decision API with choice, score, and noul primitives, a local mock server, and Python and TypeScript SDKs. *#open-alternative #sdk*
- [OpenJev (zhangcy122)](https://github.com/zhangcy122/OpenJev) - Open-source alternative to Jev offering a typed Choice, Noul, and Score API on open LLMs with constrained logprob calibration. *#open-alternative*
- [openjev (zhihz)](https://github.com/zhihz/openjev) - Local bilingual probability decisions from context, questions, and candidate answers, an independent research preview. *#open-alternative #research*
- [openjev-sglang](https://github.com/ekzhang/openjev-sglang) - Jev-compatible API endpoint served from open models using prefill-only inference in SGLang. *#open-alternative*
- [openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0) - Calibrated 151M-parameter non-autoregressive decision engine with published accuracy, Brier, and ECE numbers against Jev and Laya. *#open-alternative #evaluation*
- [OpenJev-Vision](https://github.com/IamBusy/OpenJev-Vision) - Open visual probability research that encodes an image once and answers multiple structured questions, with public data, weights, and baselines. *#open-alternative #research*
- [OpenSourceJev](https://github.com/sabeel111/OpenSourceJev) - Turns an LLM into a Jev-like system. *#open-alternative*
- [reflex](https://github.com/kshetrajna12/reflex) - Small open decision model on Qwen3.5 that maps state plus typed questions to calibrated probabilities. *#open-alternative*
- [reflex-gate](https://github.com/jagsan-cyber/reflex-gate) - Local, privacy-focused, fully offline alternative to Jev. *#open-alternative*
- [rizzo-flow](https://github.com/Rizzo-AI-Academy/rizzo-flow) - Open, local take on Jev that gets typed decisions from an LLM without generating a single token. *#open-alternative*
- [sarvam-jev](https://github.com/SAGAR-TAMANG/sarvam-jev) - Open Jev-style inference engine on sarvam-1 for generation-free typed decisions on Indic LLMs, running client-side in the browser. *#open-alternative*
- [SemIf](https://github.com/TheoLeeCJ/SemIf) - Semantic if-statements served from open models on a single consumer GPU, an independent take on the Jev idea. *#open-alternative*
- [simple-jev](https://github.com/featherless-ai/simple-jev) - Turns any open model into a classifier or Jev-style decision endpoint. *#open-alternative*
- [system-one-open](https://github.com/mithalouni/system-one-open) - Open replica of Jev giving typed calibrated decisions in one forward pass on Gemma 4 E2B and Gemma 3 270M via Modal. *#open-alternative*
- [typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark) - LLM gateway that mimics TypeSafe's structured-output API, an imposter Jev for testing. *#open-alternative*
- [Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev) - Non-autoregressive decision engine on ModernBERT with calibrated uncertainty, a Jev benchmark audit, and an in-browser WebGPU playground. *#open-alternative*
- [vllm-jev-decison](https://github.com/siliconkernel/vllm-jev-decison) - Classification-only typed decisions for vLLM with finite-schema candidate scoring, probabilities, and abstention. *#open-alternative*
- [von](https://github.com/wfzyx/von) - Open-source non-autoregressive System One decision model that answers in under 15 ms as a local drop-in alternative to Jev. *#open-alternative*

## SDKs & Clients

- [advocaat](https://github.com/pithings/advocaat) - Small type-safe client for asking Jev questions about your data. *#sdk*
- [daf-jev](https://github.com/docxology/daf-jev) - Composable Python toolkit for the Jev API with question builders, confidence gates, an evaluator, calibration, CLI, MCP server, and agent skill. *#sdk #mcp*
- [feelings](https://github.com/BoundaryML/feelings) - Adds a typed .feels() method to anything, the AI if-statement built on Jev and BAML. *#sdk*
- [hunch (carldaws)](https://github.com/carldaws/hunch) - Probabilistic control flow for Ruby and Rails powered by Jev. *#sdk*
- [jev (aaazzam)](https://github.com/aaazzam/jev) - Python decorator that compiles a typed function definition into a Jev request and returns a validated instance of the return annotation. *#sdk*
- [jev (dannote)](https://github.com/dannote/jev) - Elixir/OTP client where a GenServer replies with Jev's answer so callers can pattern match on it. *#sdk*
- [jev (okooo5km)](https://github.com/okooo5km/jev) - Unofficial stdlib-only Python CLI and agent skill for Jev with yes/no, choice, and ordinal scores, semantic grep, and batch mode. *#sdk #skills*
- [jev_jsonschema](https://github.com/Kiln-AI/jev_jsonschema) - Runs a JSON Schema through the Jev API and gets JSON back. *#sdk*
- [jev-cli (Nasrallah-AL)](https://github.com/Nasrallah-AL/jev-cli) - Command-line tool for the Jev API. *#sdk*
- [jev-cli (shaharia-lab)](https://github.com/shaharia-lab/jev-cli) - CLI that asks yes/no, multiple-choice, and rubric questions about any text and returns calibrated probabilities as exit codes, JSON, or MCP tools. *#sdk #mcp*
- [jev-cli (tumf)](https://github.com/tumf/jev-cli) - Small dependency-free CLI for Jev. *#sdk*
- [jev-dsl](https://github.com/inanna-malick/jev-dsl) - Agent-first Haskell DSL for Jev with typed packets, inferred types, and answers under the same labels. *#sdk*
- [jev-feels](https://github.com/Qew7/jev-feels) - Semantic decisions as ordinary Ruby with feels?, decide, score, Rails validations, and pattern matching. *#sdk*
- [jev-playground (mizchi)](https://github.com/mizchi/jev-playground) - MoonBit client and CLI for the Jev API covering noul, choice, and score questions with typed responses. *#sdk*
- [jev-spring-boot-starter](https://github.com/danvega/jev-spring-boot-starter) - Spring Boot 4 starter for Jev using Spring MVC and RestClient. *#sdk*
- [jev.nu](https://github.com/cablehead/jev.nu) - Nushell module for the System One API with typed decisions and calibrated probabilities. *#sdk*
- [jevalyn](https://github.com/Ray-Hughes/jevalyn) - Rails-native wrapper around the Jev API for typed, calibrated decisions in your control flow. *#sdk*
- [JevSwiftSDK](https://github.com/NSStudent/JevSwiftSDK) - Independent type-safe Swift SDK for Jev with async/await, batching, retries, and SPM support. *#sdk*
- [laravel-jev](https://github.com/i-priyanshuverma/laravel-jev) - Fluent Laravel API for semantic classification and decisions with single-line is, choose, and score methods. *#sdk*
- [laya (receptron)](https://github.com/receptron/laya) - Runs Laya, the open-source Jev-compatible decision model, from Node.js and TypeScript via ONNX Runtime. *#sdk #open-alternative*
- [neurolink](https://github.com/juspay/neurolink) - TypeScript interface to 40 AI providers whose decide operation returns typed, calibrated judgments via Jev instead of text. *#sdk*
- [probably](https://github.com/southpolesteve/probably) - Small programming language for LLM workflows powered by Jev.
- [ruby_decision_model](https://github.com/obie/ruby_decision_model) - Ruby client for decision models such as Jev. *#sdk*
- [scala-jev-sdk](https://github.com/ticofab/scala-jev-sdk) - Scala SDK for Jev with no effect system bundled. *#sdk*
- [spring-ai-typesafe](https://github.com/spring-ai-community/spring-ai-typesafe) - Java SDK for the Jev API with Spring AI integrations. *#sdk*
- [TypeSafe Swift SDK (krzyzanowskim)](https://github.com/krzyzanowskim/TypeSafe) - TypeSafe SDK in Swift. *#sdk*
- [typesafe_sdk (nshkrdotcom)](https://github.com/nshkrdotcom/typesafe_sdk) - Idiomatic Elixir port of the TypeScript AI SDK with Jev as a supported model. *#sdk*
- [typesafe-sdk-go (atharvamhaske)](https://github.com/atharvamhaske/typesafe-sdk-go) - Unofficial community Go SDK for the TypeSafe API. *#sdk*
- [typesafe-sdk-go (captain-corgi)](https://github.com/captain-corgi/typesafe-sdk-go) - Community TypeSafe SDK in Go. *#sdk*
- [zod-jev](https://github.com/jomatsu/zod-jev) - Composes Jev semantic checks into Zod 4 schemas so shape rules stay in Zod and meaning judgments become calibrated probabilities. *#sdk #verification*

## Integrations & Infrastructure

- [arbiter](https://github.com/0xBakeer/arbiter) - Serves typed-decision models such as Laya or your own on NVIDIA GPUs or Apple Silicon with a Jev-compatible API and coding-agent integrations. *#open-alternative*
- [flue-jev-demo](https://github.com/matthewp/flue-jev-demo) - Flue agent routing with Jev through Cloudflare AI Gateway. *#routing*
- [grok-bot-jev](https://github.com/Bodila51/grok-bot-jev) - Connects Jev to Grok Bot as a cheap decision layer with usage gates, a skill template, and examples.
- [hono-jev-router](https://github.com/yusukebe/hono-jev-router) - Semantic router for Hono that routes HTTP requests by meaning with Jev. *#routing*
- [jev-align](https://github.com/sutro-sh/jev-align) - Builds calibrated AI functions from human feedback using Jev and GEPA. *#research*
- [jev-axi](https://github.com/shiftynick/jev-axi) - Agent-ergonomic CLI for Jev giving fast calibrated pick, rate, check, rank, triage, and guard judgments from the shell. *#coding-agents*
- [jev-gateway](https://github.com/vinilana/jev-gateway) - Easy way to use Jev with a coding agent for tool-calling decisions. *#coding-agents*
- [jev-harness](https://github.com/AntonioCoppe/jev-harness) - Decision harness for Jev with confidence gates, shadow mode, recipes, and evals, reporting 1.3 s versus 48.9 s for Claude CLI on the same row-filter job.
- [jev-mcp (arunav25)](https://github.com/arunav25/jev-mcp) - Connects Jev to MCP clients and compares its judgments against general-purpose LLMs on shared datasets. *#mcp #evaluation*
- [jev-mcp (blakestone-x)](https://github.com/blakestone-x/jev-mcp) - MCP server that exposes Jev classify, score, check, match, and screen operations as tools for any MCP-compatible agent. *#mcp*
- [jev-mcp (burnigtm)](https://github.com/burnigtm/jev-mcp) - MCP server that puts Jev on the coding loop in Cursor, Codex, and any MCP client. *#mcp #coding-agents*
- [jev-mcp (jkudish)](https://github.com/jkudish/jev-mcp) - Exposes fast, typed Jev judgments as MCP tools. *#mcp*
- [jev-mcp (rashedInt32)](https://github.com/rashedInt32/jev-mcp) - MCP server exposing Jev as classify, score, check, and batched ask tools, shipped as a Claude Code plugin. *#mcp #plugin*
- [jev-test-filter](https://github.com/mizchi/jev-test-filter) - Scores every test against a Git diff with Jev and emits the filter arguments Vitest, node:test, Playwright, cargo test, and go test understand. *#verification*
- [jev-workflow-builder](https://github.com/CTNicholas/jev-workflow-builder) - Multiplayer workflow builder for wiring Jev and LLMs together with Liveblocks, with a REST API to call workflows and preview test runs.
- [Jevbridge](https://github.com/tacticocc/Jevbridge) - ACP and MCP adapter that bridges Jev with any LLM for computer use and typed decisions alongside Codex, Claude, Grok, and OpenCode. *#mcp*
- [jevcache (hyperspaceai)](https://github.com/hyperspaceai/jevcache) - Decision cache for Jev-class models that memoizes decisions so repeats are free, deterministic, and shareable, in one 2 MB binary.
- [jevcache (kushals256)](https://github.com/kushals256/jevcache) - OpenAI-compatible local cache proxy that skips expensive LLM calls when Jev says the intent is the same.
- [jevernetes](https://github.com/sunil-sadasivan/jevernetes) - Live Kubernetes log analysis, contextual investigation, and agent handoff powered by Jev.
- [jevlogs](https://github.com/reachjalil/jevlogs) - Open-source Jev log triage for OpenTelemetry that scores the signal before expensive LLM analysis. *#scoring*
- [JevML](https://github.com/gamesonrblx/JevML) - Reusable machine-learning primitives for Jev, including PCA, MCMC, text diffusion, neural cellular automata, and a task harness that picks the right tool. *#research*
- [JevOps](https://github.com/endomorphosis/JevOps) - Jev gating kernel split out from Lean Refactor Arena, where Jev acts as a gate rather than a generator for proof-refactoring pipelines. *#verification #research*
- [jevwire](https://github.com/Brainwires/jevwire) - Jev decision layer for agents as an MCP server, embeddable DecisionModel library, and escalate-only Claude Code plugin. *#mcp #plugin*
- [nl-logic-interpreter](https://github.com/narphorium/nl-logic-interpreter) - Step-through logic interpreter for natural-language facts and rules unified with Jev. *#research*
- [semdecide](https://github.com/sharziki/semdecide) - Typed semantic decisions for Unix pipelines and CI. *#verification*
- [skillbox](https://github.com/kitze/skillbox) - Self-hosted versioned skills library for AI agents with MCP access, scoped clients, and optional Jev recommendations. *#skills #mcp*
- [super-jev](https://github.com/Kevthetech143/super-jev) - Small extensible decision-to-action harness for Jev.
- [typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp) - MCP connector that gives any agent direct access to Jev. *#mcp*

## Guides, Skills & Tutorials

- [agentic-rl](https://github.com/cookiespiggy/agentic-rl) - Twenty-five chapter Chinese Agentic RL tutorial with runnable TRL examples and a chapter on where Jev-style discriminative models end and RL begins.
- [ask-jev-skill](https://github.com/shantanugoel/ask-jev-skill) - Skill for Hermes and other agents to ask Jev typed questions. *#skills*
- [Augustus](https://github.com/24601/Augustus) - Agent skill for designing judgment-assisted systems that maps Choice, Score, and Noul onto decision theory, reranking, and routing with validation gates. *#skills*
- [building-with-jev-skill](https://github.com/dbreunig/building-with-jev-skill) - Agent skill for writing and improving programs that call Jev. *#skills*
- [Jev AI playground](https://jev-ai.pro) - Public playground and API for putting typed questions to Jev about pasted text.
- [Jev demos (mayank953)](https://github.com/mayank953/Jev) - Six live side-by-side demos where Jev makes the decision, an LLM writes the words, and your code owns the control flow.
- [Jev_apps](https://github.com/JackZeng/Jev_apps) - Bilingual explainer of popular Jev apps, how they work, and their trade-offs.
- [jev-architect](https://github.com/karanb192/jev-architect) - Finds, designs, and evaluates Jev decision loops. *#skills*
- [jev-cookbook](https://github.com/nexibeo/jev-cookbook) - Tested recipes for Jev on OpenRouter covering support triage, indexing, file organizing, tagging, dedupe, PII detection, extraction, reranking, and a browser agent.
- [jev-demo (gopinav)](https://github.com/gopinav/jev-demo) - Jev plus TypeScript SDK demo.
- [jev-directory](https://github.com/everyai-com/jev-directory) - Browsable directory of 50 runnable judge-model evals and 1,300+ community builds, delivered as a capability pack and MCP server for agents. *#mcp*
- [jev-experiments](https://github.com/dabit3/jev-experiments) - Collection of 22 latency-focused Jev demo applications spanning shell guards, log sentinels, instant search, reranking, and voice turn-taking.
- [jev-explained](https://github.com/davila7/jev-explained) - Plain-language explainer of what Jev is and how to use it.
- [jev-little-airways](https://github.com/lbotinelly/jev-little-airways) - Show-and-tell capability study for Jev.
- [jev-skill](https://github.com/wuyoscar/jev-skill) - Collection of Jev use cases, workflows, and agent skills. *#skills*
- [jevies](https://github.com/Ezbaze/jevies) - Little Jevs that help design and review other Jevs.
- [jevify (altryne)](https://github.com/altryne/jevify) - Agent skill to discover Jev opportunities, design typed questions, and learn from recent community experiments. *#skills*
- [PlayJev (MoeclubM)](https://github.com/MoeclubM/PlayJev) - Improved Jev playground.
- [typesafe-playground](https://github.com/kavehmz/typesafe-playground) - Interactive Jev experiments from support routing to 3D driving simulations with visible sensor inputs.

## Related Practices & Discussions

- [An early-access test of TypeSafe's Jev](https://lindfors.no/blog/a-first-look-at-typesafes-jev/) - Independent early-access trial measuring calibration and reporting cost per decision. *#research #evaluation*
- [Ask HN: Noul as a decision primitive](https://news.ycombinator.com/item?id=49760225) - Proposal to treat Noul, the probability-of-true answer type, as a general software primitive rather than a Jev-specific one. *#research*
- [Introducing System One Models and Jev (Hacker News)](https://news.ycombinator.com/item?id=49717558) - The original launch thread, debating whether typed decisions can replace LLM calls for classification, routing, and verification. *#research*
- [Jev Is Not an LLM, and That May Be the Point](https://forkast.news/typesafe-ais-jev-is-not-an-llm-and-that-may-be-the-point/) - News analysis treating the refusal to generate text as the feature and following through on what it implies for inference spend.
- [Jev is the fish at the poker table](https://backnotprop.com/blog/jev-poker/) - Plays poker with Jev to probe where a fast decision model helps and where it does not. *#research*
- [Jev judge call vs dimension scores](https://agentjournal.dev/blog/llm-judge-vs-feature-extraction/) - Compares one direct Jev question per row against 12-14 Jev-scored dimensions with fitted weights on three classification tasks. *#evaluation #research*
- [Jev vs Mistral and Gemini for event validation](https://nearhere.events/blog/typesafe-jev-mistral-gemini-event-validation) - Head-to-head test of Jev against Mistral Small and Gemini Flash-Lite at validating local event listings. *#evaluation*

## Contributing

Contributions are welcome: new entries, better descriptions, and removals of dead or bad links alike. Read [CONTRIBUTING.md](CONTRIBUTING.md) first; it covers the submission format, the tag taxonomy, and the policy on AI-assisted and bulk submissions. Entries live in `data/entries.json`; this README is generated from it.

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
To the extent possible under law, the maintainers have waived all copyright and related or neighboring rights to this list itself (see [LICENSE](LICENSE)). Linked projects retain their own licenses.
