/*
 * BIG BROTHER 26 — CUSTOM SIMULATOR CONFIGURATION
 * Based on the U.S. Big Brother 26 season (2024).
 */
window.BB26_CONFIG = Object.freeze({
  seasonId:"bb26-custom", seasonNumber:26, originalYear:2024,
  defaultCastSize:16, juryThresholdPlacement:9, jurySize:7,
  teams:[{id:"movein-a",name:"Premiere Group A"},{id:"movein-b",name:"Premiere Group B"}],
  ratingKeys:["general","physical","mental","social","strategic"],
  relationshipKeys:["friendship","trust","loyalty","rivalry","respect","attraction"],
  themeName:"Big Brother Artificial Intelligence",
  competitionSchedule:[
    {week:1,type:"upgrade-america",name:"Color Calibration",category:"mental",description:"Upgrade competition associated with America's Veto. Houseguests completed a color-recognition and calibration challenge; the winner earned America's Veto."},
    {week:1,type:"downgrade-mascot",name:"Fear Facer",category:"mental",description:"Downgrade competition. Houseguests faced a fear-themed challenge; the last-place finisher became a BB Mascot for the first week."},
    {week:1,type:"upgrade-deepfake",name:"AI Chip Install",category:"skill",description:"Upgrade competition for the Deepfake HOH power. The winner earned the ability to secretly take over an HOH's nomination power during the first four weeks."},
    {week:1,type:"downgrade-mascot-2",name:"Facial Recognition",category:"mental",description:"Downgrade competition based on facial recognition. The last-place finisher became a BB Mascot for the first week."},
    {week:1,type:"hoh",name:"New Rule",category:"mental",description:"Houseguests answered questions about the rules and events of the game. Correct answers advanced players; the last remaining player won HOH."},
    {week:1,type:"pov",name:"BB AI Spelling Bee",category:"mental",description:"Houseguests competed in an AI-themed spelling challenge, identifying and spelling words under pressure. The winner earned the Power of Veto."},
    {week:1,type:"ai-arena",name:"Glitch in the System",category:"skill",description:"The three nominees competed live in an AI-themed challenge. The winner earned safety, leaving the other two nominees vulnerable to eviction."},

    {week:2,type:"hoh",name:"Animal Obsession",category:"mental",description:"A quiz and recall competition testing houseguests on animal-related details and observations. The strongest score won HOH."},
    {week:2,type:"pov",name:"Code Tower",category:"skill",description:"Players used coded information and physical pieces to build or solve a tower challenge. The fastest successful competitor won Veto."},
    {week:2,type:"ai-arena",name:"Security Race",category:"physical",description:"Three nominees raced through a security-themed challenge. The winner secured safety before the eviction vote."},

    {week:3,type:"hoh",name:"Ainsley Land",category:"physical",description:"An AINSLEY-themed amusement-park challenge combining movement, timing and accuracy. The best performance won HOH."},
    {week:3,type:"pov",name:"Recharge My Core",category:"skill",description:"Houseguests completed a power-recharge themed task requiring coordination and precision. The fastest successful player won Veto."},
    {week:3,type:"ai-arena",name:"Data Dump",category:"mental",description:"Three nominees raced to process and sort information in an AI data challenge. The winner earned safety."},

    {week:4,type:"hoh",name:"Bad AI",category:"quiz",description:"A competition testing houseguests on faulty AI-generated information and details from the season. The strongest performance won HOH."},
    {week:4,type:"pov",name:"Binary Bridge",category:"skill",description:"Players navigated a binary-themed bridge challenge, balancing speed and precision to complete the course. The winner earned Veto."},
    {week:4,type:"ai-arena",name:"Upload, Download",category:"skill",description:"Three nominees competed in an upload-and-download themed challenge. The winner earned safety."},

    {week:5,type:"hoh",name:"Firewall",category:"physical",description:"A physical endurance and balance challenge themed around defending a digital firewall. The last or strongest remaining competitor won HOH."},
    {week:5,type:"pov",name:"Hide-N-Go Veto",category:"physical",description:"Each player hid their Veto card in the house before a timed search. Cards found during the search eliminated their owners; the last hidden card won Veto."},
    {week:5,type:"ai-arena",name:"Digital Decryption",category:"mental",description:"Three nominees solved a digital decryption puzzle under time pressure. The winner earned safety."},

    {week:6,type:"hoh",name:"Sound Bites",category:"quiz",description:"Houseguests answered questions about sounds and audio clips associated with events in the house. The highest score won HOH."},
    {week:6,type:"pov",name:"A.I. Apocalypse",category:"physical",description:"An apocalyptic AI-themed physical challenge involving a timed course and task completion. The winner earned Veto."},
    {week:6,type:"ai-arena",name:"Puzzling Password",category:"mental",description:"Three nominees raced to solve a password puzzle. The first successful player earned safety."},

    {week:7,type:"hoh",name:"What Came First?",category:"quiz",description:"Houseguests put events, objects or facts in the correct chronological order. The strongest performance won HOH."},
    {week:7,type:"pov",name:"Bot Builders",category:"skill",description:"Players assembled or programmed a bot-themed construction challenge. The fastest accurate build won Veto."},
    {week:7,type:"ai-arena",name:"Bandwidth Boosters",category:"skill",description:"Three nominees competed in a bandwidth-themed challenge. The winner earned safety; this was the final AI Arena of the season."},

    {week:8,type:"hoh",name:"Ding Cam",category:"physical",description:"A physical competition built around the Ding Cam setup, requiring houseguests to complete a timed challenge accurately."},
    {week:8,type:"pov",name:"OTEV the Trash-Talking Trash Panda",category:"physical",description:"OTEV gave clues and houseguests searched for matching answers or objects, returning to OTEV each round. The last player to return correctly was eliminated until one winner remained."},

    {week:9,type:"hoh",name:"Getting Toasted",category:"physical",description:"A backyard endurance and balance competition themed around getting toasted. The last houseguest remaining won HOH."},
    {week:9,type:"pov",name:"Too Much of a Good Thing",category:"skill",description:"A multi-stage Veto competition testing accuracy and task management. First place won the regular Power of Veto; second place earned the JANKIE Power of Veto opportunity."},
    {week:9,type:"jankie-pov",name:"JANKIE's Knock-Em Down",category:"skill",description:"The second-place Veto finisher could claim the JANKIE Power of Veto only by successfully completing JANKIE's carnival game during the Veto meeting."},

    {week:10,type:"hoh",name:"Eye Candy",category:"mental",description:"An observation and memory competition requiring houseguests to identify details from visual displays. The best score won HOH."},
    {week:10,type:"pov",name:"The Wild Robot",category:"skill",description:"A robot-themed competition combining physical execution and problem-solving. The fastest successful competitor won Veto."},
    {week:10,type:"hoh-double",name:"Warning Messages",category:"quiz",description:"Houseguests answered questions about warning messages and events in the house. The highest score won the second HOH of the double eviction."},
    {week:10,type:"pov-double",name:"Eye in the Sky",category:"skill",description:"A precision and observation Veto competition. The winner earned the second Power of Veto of the double eviction."},

    {week:11,type:"hoh",name:"Killer Keycard",category:"mental",description:"A memory and deduction competition involving keycards and clues. The strongest performance won HOH."},
    {week:11,type:"pov",name:"BB Comics",category:"physical",description:"Houseguests raced through a comic-themed course, studying comic covers and matching details. The fastest accurate completion won Veto."},

    {week:12,type:"hoh",name:"Hidden Agenda",category:"mental",description:"A deduction competition based on hidden agendas and clues. The best performance won HOH."},
    {week:12,type:"pov",name:"Passcode Protectors",category:"skill",description:"Players solved a passcode-themed challenge requiring accuracy and speed. The winner earned Veto."},

    {week:13,type:"final-hoh-1",name:"Sever the Source",category:"endurance",description:"The Final Three competed in an endurance challenge themed around severing a power source. The last player remaining won Part 1 of the Final HOH."},
    {week:13,type:"final-hoh-2",name:"Cerebral Shutdown",category:"mental",description:"The two players who did not win Part 1 completed a mental puzzle challenge. The faster player won Part 2."},
    {week:13,type:"final-hoh-3",name:"Data Destruction",category:"quiz",description:"The Part 1 and Part 2 winners answered questions about jurors and the season. The winner became the final HOH."}
  ],
  twists:[
    {id:"staggered-move-in",name:"Staggered Move-In",week:1,summary:"Two groups of eight are presented across the two-night premiere, but all 16 houseguests are active in the game from Day 1."},
    {id:"ainsley",name:"AINSLEY / BBAI",week:1,summary:"AINSLEY is the season's AI host and rule-changing entity, communicating through the Proto Hologram Box."},
    {id:"seventeenth-houseguest",name:"The Seventeenth Houseguest",week:1,summary:"The vote on whether to admit a 17th houseguest is a morality test. Yes voters compete for Upgrade powers; no voters compete to avoid Downgrade punishments."},
    {id:"bb-mascots",name:"BB Mascots",week:1,summary:"The two Downgrade losers become mascots for Week 1. They may be nominated and evicted, and may compete in AI Arena if nominated, but cannot play HOH or Veto or vote."},
    {id:"deepfake-hoh",name:"Deepfake HOH",week:1,summary:"The power may be activated during Weeks 1–4 to secretly take over nominations. The holder nominates three people, cannot nominate the real HOH, controls the replacement nominee, and only votes in a tie. The real HOH remains eligible for Veto and the next HOH."},
    {id:"americas-veto",name:"America's Veto",week:1,summary:"Usable during Weeks 1–4. The holder may remove a nominee; America chooses the replacement. The HOH, Veto holder and saved nominee are protected from renomination."},
    {id:"ai-arena",name:"AI Arena",week:1,summary:"Three nominees compete live for safety before eviction. If Veto changes the block, the HOH names a replacement to restore three nominees. The Arena ends after Week 7."},
    {id:"ai-instigator",name:"AI Instigator",week:5,summary:"America selects an Instigator during Week 5. Revealed at the start of Week 6, the Instigator uses AINSLEY deepfakes to spread misinformation and may receive $0, $5,000, $10,000 or $20,000 based on America's rating."},
    {id:"jankie-world",name:"JANKIE World",week:9,summary:"During Week 9, houseguests live outside, eat pizza and ice cream, learn JANKIE's song and attend dance parties. The HOH nominates by placing red rings on bottles."},
    {id:"jankie-veto",name:"JANKIE Power of Veto",week:9,summary:"The second-place finisher in the Week 9 Veto competition earns a second Veto, usable only after successfully completing a JANKIE carnival game at the Veto meeting."},
    {id:"evil-ainsley",name:"Evil AINSLEY / Chenbot AI",week:10,summary:"AINSLEY returns with an evil upgrade, ends JANKIE World, unleashes Zingbot and uses fake Chenbot warnings before triggering the Week 10 double eviction."},
    {id:"jury-seven",name:"Classic Jury Format — Seven",week:7,summary:"The jury consists of seven members: the first juror is the 9th-place finisher, followed by the next five evictees through 4th place; the 3rd-place finalist is the seventh and final juror."}
  ],
  notes:["16 custom houseguests; all active from Day 1 despite staggered premiere presentation.","AI Arena runs Weeks 1–7 only.","Week 9 features JANKIE World and a conditional second Veto.","Week 10 is the double eviction.","Seven-person jury: placements 9th through 3rd, with 3rd place as the final juror.","Final HOH: Sever the Source, Cerebral Shutdown, Data Destruction."]
});
