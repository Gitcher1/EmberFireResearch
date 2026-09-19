export type ResearchBranch={
  title:string;
  question:string;
  status:"queued"|"in-research"|"drafting";
};

export const researchBranches:Record<string,ResearchBranch[]>={
  "jewish-mysticism-kabbalah-history-sources":[
    {title:"The Heavenly Palaces",question:"What can Hekhalot and Merkavah texts actually establish about ascent, divine names, gates, seals, and the dating of early Jewish mystical practice?",status:"queued"},
    {title:"Before the Sefirot Became the Tree",question:"How did Sefer Yetzirah's ten sefirot and twenty-two letters become the later visual and theosophical Tree of Life?",status:"queued"},
    {title:"Who Wrote the Zohar?",question:"What does the manuscript record now support about Moses de León, collaborators, textual strata, and the construction of ancient authority?",status:"queued"},
    {title:"Safed After Spain",question:"How did exile, Cordovero, Luria, Vital, tzimtzum, shevirah, and tikkun reshape the older Kabbalistic inheritance?",status:"queued"},
    {title:"When Mysticism Became Messianic Politics",question:"How did Lurianic ideas enter the Sabbatean movement, and what changed after Shabbatai Zevi's conversion?",status:"queued"},
    {title:"From Kabbalah to Christian Cabala",question:"Which Jewish texts and teachers actually entered Renaissance Christian systems, and where were the meanings altered?",status:"queued"},
    {title:"How Tarot Entered the Tree",question:"When were tarot, planetary, astrological, and ceremonial-magical correspondences attached to the Tree of Life, and by whom?",status:"queued"},
    {title:"Practical Kabbalah",question:"How should amulets, divine names, angelic adjurations, prayer intentions, and protective practice be separated from later occult generalizations?",status:"queued"}
  ],
  "the-veil-hidden-reality-sacred-boundaries":[
    {title:"The Heavenly Curtain",question:"How do parokhet, pargod, Temple cosmology, heavenly books, and Jewish ascent traditions connect—and how early can the chain be securely dated?",status:"queued"},
    {title:"Behind the Torn Curtain",question:"How did the Synoptic veil, Hebrews, Paul, and early Christian exegesis transform a Temple boundary into a theology of access and understanding?",status:"queued"},
    {title:"The Hidden Realm of Truth",question:"What do the Gospel of Philip and related Valentinian/Nag Hammadi texts actually say about veil, image, fullness, initiation, and hidden reality?",status:"queued"},
    {title:"What Was Actually Secret?",question:"What can be reconstructed responsibly about Eleusis, Isis, Mithras, Orphic material, secrecy, and initiation without inventing one universal mystery doctrine?",status:"queued"},
    {title:"No Mortal Has Uncovered My Robe",question:"What is historically recoverable about Sais, Neith, Isis, Plutarch, and the later European 'Veil of Nature'?",status:"queued"},
    {title:"The Way of Hermes",question:"What do the Hermetic texts actually say about hidden God, rebirth, ascent, revelation, and secret knowledge?",status:"queued"},
    {title:"From Pargod to Paroketh?",question:"Can the documentary chain from Jewish curtain language through Christian Cabala into modern ceremonial magic be demonstrated text by text?",status:"queued"},
    {title:"Maya, Avidya, and the Western Veil",question:"Where do Indian accounts of ignorance and appearance genuinely parallel Western veil metaphors, and where is historical transmission unsupported?",status:"queued"},
    {title:"When Did the Veil Become Thin?",question:"When does the exact modern claim that the veil is thin at Samhain enter the documentary record?",status:"queued"},
    {title:"At the Edge of Consciousness",question:"What do NDEs, psychedelics, meditation, predictive processing, and altered-state research establish about mediated perception—and what remains unproven?",status:"queued"}
  ]
};

export function getResearchBranches(slug:string){
  return researchBranches[slug]||[];
}
