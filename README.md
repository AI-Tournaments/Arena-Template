# ARENA_NAME
**TODO:**
- [ ] Add the following topics: `AI-Tournaments`, `AI-Tournaments-Arena-v1`.
- [ ] Write a description.
- [ ] Write the rules.
- [ ] Write how message timeout is handled.
- [ ] Write what are the disqualifiers and what will happen.
- [ ] Make a release.<br>Releases are for updating the version which is loaded. Updating README.md does not requier a new release.

**NOTES:**
- Do not abort game due to due to invalid response from participant, it can be misused to prevent logging losses.
- If you get `STATUS_BREAKPOINT` in Chromium, it's possible that you have an infinite recursive function somewhere.

## Rules
...

### Message timeout
Caught exceeding the execution limit (`executionSteps`) will lead to
<br>(_Suggestions_)
- DNF (Did-Not-Finish)
- No movement, skipped turn or continue with last input.
- ...

### Disqualifications
Violating any of this will either lead to DNF (Did-Not-Finish).
...
