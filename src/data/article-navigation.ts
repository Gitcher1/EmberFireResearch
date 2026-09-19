import {slugifyHeading} from "@/src/lib/anchors";

export type ArticleSectionLink={label:string;heading:string};

export const articleNavigation:Record<string,ArticleSectionLink[]>={
  "book-of-enoch":[
    {label:"Why Enoch?",heading:"Before the Book: Why Enoch?"},
    {label:"The Watchers",heading:"How Genesis 6 Became the Watchers Story"},
    {label:"Dead Sea Scrolls",heading:"What Qumran Added to the Evidence"},
    {label:"Canon",heading:"Canon Before the Modern Bible"},
    {label:"Ethiopia",heading:"What Ethiopia Preserved"},
    {label:"Access controversy",heading:"The Dead Sea Scrolls Access Controversy"},
    {label:"Open questions",heading:"Questions the Evidence Still Leaves Open"}
  ],
  "ethiopian-bible-81-book-canon":[
    {label:"The 81 books",heading:"Start with the Church's own statement"},
    {label:"Canon & counting",heading:"A canon is not the same thing as a bound table of contents"},
    {label:"Meqabyan",heading:"The Meqabyan problem shows how quickly English labels can mislead"},
    {label:"Garima Gospels",heading:"The Garima Gospels changed what can be said about early Ge'ez manuscripts"},
    {label:"Translation",heading:"Translation history is not a single arrow"},
    {label:"Dead Sea Scrolls",heading:"The Dead Sea Scrolls changed the argument—but did not “reveal the Ethiopian Bible”"},
    {label:"Restricted holdings",heading:"What about Vatican, monastery, private, and inaccessible manuscripts?"}
  ],
  "visual-mandela-effect-shared-false-memory":[
    {label:"Original Mandela case",heading:"The original Mandela case: the history is clear; the memory source is not"},
    {label:"The experiment",heading:"The experiment that made the phenomenon testable"},
    {label:"Replication",heading:"The replication corrected the statistics—and the effect remained"},
    {label:"Fruit of the Loom",heading:"Fruit of the Loom: the best example of why provenance matters"},
    {label:"Residue",heading:"A hierarchy for “residue”"},
    {label:"Many-worlds",heading:"Many-worlds is real physics; cross-branch memory is an extra claim"},
    {label:"CERN",heading:"CERN: chronology is not mechanism"},
    {label:"How to test it",heading:"What would count as evidence for altered history?"}
  ],
  "lilith-sources-history-adams-first-wife":[
    {label:"Mesopotamian roots",heading:"Before there was “Lilith,” there were lil- beings"},
    {label:"Sumerian tree",heading:"The Sumerian tree passage: one translation can rewrite a millennium"},
    {label:"Queen of the Night",heading:"The Queen of the Night is ancient. Her name is still missing."},
    {label:"Isaiah",heading:"Isaiah gives us one word—and almost none of the biography"},
    {label:"Incantation bowls",heading:"Then the archaeology becomes domestic"},
    {label:"Adam's first wife",heading:"The medieval story changes everything"},
    {label:"Removed from Genesis?",heading:"Did someone remove Lilith from Genesis?"},
    {label:"Kabbalah",heading:"Kabbalah does not preserve one Lilith. It builds a larger one."}
  ],
  "jewish-mysticism-kabbalah-history-sources":[
    {label:"Before Kabbalah",heading:"The story begins before anyone called it Kabbalah"},
    {label:"Heavenly palaces",heading:"Then the heavens acquire gates, names, and danger"},
    {label:"Sefer Yetzirah",heading:"Ten sefirot existed before the Tree of Life most people recognize"},
    {label:"Medieval Kabbalah",heading:"Kabbalah, in the narrower historical sense, crystallizes in medieval Europe"},
    {label:"The Zohar",heading:"The Zohar is ancient inside its own story—and medieval in the critical record"},
    {label:"Safed & Luria",heading:"Safed turns inherited mysticism into a cosmic drama of rupture"},
    {label:"Christian Cabala",heading:"Then Kabbalah leaves Judaism—and changes again"},
    {label:"Tarot & Golden Dawn",heading:"The Golden Dawn builds another Tree"}
  ],
  "the-veil-hidden-reality-sacred-boundaries":[
    {label:"The first veil",heading:"The first veil is a real curtain"},
    {label:"Sanctuary as cosmos",heading:"Josephus turns the sanctuary into a model of the universe"},
    {label:"Heavenly pargod",heading:"An earthly curtain becomes a heavenly one"},
    {label:"3 Enoch",heading:"3 Enoch turns the curtain into an information surface"},
    {label:"Christian veil",heading:"The Temple veil tears inside Christian narrative"},
    {label:"Gospel of Philip",heading:"The Gospel of Philip makes hidden reality explicit"},
    {label:"Isis & Sais",heading:"Plutarch gives us the robe no mortal has uncovered"},
    {label:"Consciousness",heading:"Modern neuroscience makes one part of the metaphor scientifically respectable"}
  ]
};

export function getArticleNavigation(slug:string){
  return (articleNavigation[slug]||[]).map(item=>({...item,id:slugifyHeading(item.heading)}));
}
