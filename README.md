# ARENA_NAME
**TODO:**
- [ ] Add the following topics: `AI-Tournaments`, `AI-Tournaments-Arena-v1`.
- [ ] Write a description.
- [ ] Write the rules.
- [ ] Write how message timeout is handled.
- [ ] Write what are the disqualifiers and what will happen.

**NOTES:**
- Do not abort game due to due to invalid response from participant, it can be missued to prevent logging losses.
- If you get `STATUS_BREAKPOINT` in Chromium, it's possible that you have an infinite recursive function somewhere.

## Rules
...
### Message timeout
Caught exceeding the time limit (`timelimit_ms`) for participant execution lead to
- DNF (Did-Not-Finish)
- No movement, skipped turn or continue with last input.

### Disqualifications
Violating any of this will either lead to DNF (Did-Not-Finish).
...
