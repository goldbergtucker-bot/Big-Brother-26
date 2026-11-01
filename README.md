[README.md](https://github.com/user-attachments/files/34237444/README.md)
# Big-Brother-26
Big Brother 26 simulator
# Big Brother 26 — Custom Simulator

A custom-cast, BrantSteele-style simulator based on the U.S. Big Brother 26 season (2024). The repository is a separate BB26 project derived from the user's supplied BB20 simulator architecture.

## Season rules represented
- 16 custom houseguests; staggered two-night premiere presentation, all active Day 1.
- AINSLEY / BBAI theme and Proto Hologram Box event framing.
- Premiere Upgrade powers: Deepfake HOH and America's Veto.
- Week 1 BB Mascots: cannot play HOH/Veto or vote, but may be nominated and may compete in AI Arena if nominated.
- Three nominees and AI Arena through Week 7.
- Deepfake HOH and America's Veto are limited to Weeks 1–4.
- AI Instigator revealed in Week 6.
- Week 9 JANKIE World and conditional second Veto.
- Week 10 double eviction and Evil AINSLEY framing.
- Seven-person jury (10th through 4th place).
- BB26 Final HOH competitions: Sever the Source, Cerebral Shutdown, Data Destruction.

## Files
- `data/bb26-config.js`: BB26 competition schedule, categories, descriptions and twist metadata.
- `engine/season-engine.js`: BB26-specific season flow, plus shared relationship and finale systems.
- `engine/competitions.js`: competition scoring and schedule lookup.
- `app.js`, `index.html`, `style.css`: simulator interface.
