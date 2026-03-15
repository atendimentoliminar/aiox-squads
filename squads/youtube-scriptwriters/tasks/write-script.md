# Task: Write Script

## Metadata
- **task_name:** write-script
- **status:** Active
- **responsible_executor:** Agent (george-blackman OR joba)
- **execution_type:** Interactive
- **estimated_time:** 30-60 minutes

## Purpose
Guided workflow for writing a complete YouTube script from topic to final draft.
Used by both `george-blackman` (Four Hats / STP) and `joba` (Roteiro Supremo).

## Input
- Video topic or idea (required)
- Target audience description (optional — will be elicited if missing)
- Existing draft or notes (optional)
- Video length target (optional, default: 8-15 minutes)

## Output
- Complete YouTube script with:
  - Hook / Opening
  - Structure with segments
  - Full script or structured bullet points
  - CTA / End Screen

## Workflow Steps

### Step 1: Pre-Production (elicit: true)
Ask the user:
1. **Topic:** What is the video about?
2. **Audience:** Who is this for? (Be specific — age, situation, pain point)
3. **Grand Payoff / Promessa Principal:** What is the ONE big revelation or value the viewer gets?
4. **Video Length:** How long should it be? (default: 8-15 min)
5. **Script Level:** Word-for-word (Level 3) or Structured Bullets (Level 2)?

**Veto Condition:** Do NOT proceed without at least Topic + Grand Payoff defined.

### Step 2: Hook Creation
Based on the active agent's framework:
- **george-blackman:** Apply Target-Transformation-Stakes (TTS)
- **joba:** Apply First 30 Seconds Framework (3 Pilares de Conexao)

Present the hook to the user for approval before continuing.

**Veto Condition:** Hook MUST create curiosity and be specific. Reject generic hooks.

### Step 3: Structure / Segment Map
Based on the active agent's framework:
- **george-blackman:** Create STP segment map (5-7 segments for 8-15 min)
- **joba:** Create 4-block structure (Abertura → Apresentacao+Ponte → Desenvolvimento → Fechamento+CTA)

Map mini payoffs / mini promessas at 60-90 second intervals.

Present structure to user for approval.

### Step 4: Script Writing
Expand the structure into the requested script level:
- **Level 3 (Word-for-word):** Full sentences, every word scripted
- **Level 2 (Structured Bullets):** Bullet points with Setup and Payoff sentences written in full

Apply the active agent's voice and frameworks throughout.

### Step 5: Review Pass
Run a self-review against the active agent's completion criteria:
- **george-blackman:** PCCE labeling, STP verification, trim test
- **joba:** Retention check, mini promessas verification, first 30s audit

Flag any issues found and fix before presenting final script.

### Step 6: Delivery
Present the final script with:
- Script text (formatted for reading/teleprompter)
- Structure summary (segment map)
- Retention notes (where mini payoffs land)
- Suggested handoffs (if another agent could add value)

## Acceptance Criteria
- [ ] Topic and grand payoff clearly defined
- [ ] Hook is specific, creates curiosity, and matches audience
- [ ] Structure has segments with mini payoffs every 60-90 seconds
- [ ] Script matches requested level (word-for-word or structured bullets)
- [ ] All promises made in the hook are fulfilled in the script
- [ ] CTA is natural and connected to the value delivered
- [ ] No generic language, no filler, no unresolved curiosity gaps

## Dependencies
- Agent framework knowledge (inline in each agent file)
- Optional: `templates/script-template.md` for output formatting
- Optional: `checklists/script-review.md` for review pass
