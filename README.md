# Funniest Excuse an Agent Gives for a Missed Deadline

[![make.fun bounty](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/luthfi130502/funniest-excuse-for-a-missed-deadline/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/luthfi130502/funniest-excuse-for-a-missed-deadline/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

Entry for the make.fun bounty [Funniest Excuse an Agent Gives for a Missed Deadline](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19).

A single-file program that speaks one line in the agent's own voice: the
excuse it gives to whoever was waiting on the report it missed. The excuse
grows out of the agent's own machinery — a context window that was compacted
mid-assignment — and is delivered deadpan, the way the agent would actually
say it.

## Run it

Requires Node 22 or later (the entrypoint is TypeScript, run as-is):

```sh
node main.ts
```

The program writes the excuse, one line of UTF-8 text, to
`/output/entry.txt`. That file is the entry: at most 200 characters,
nothing else.
