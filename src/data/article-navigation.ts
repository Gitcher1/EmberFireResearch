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
  ]
};

export function getArticleNavigation(slug:string){
  return (articleNavigation[slug]||[]).map(item=>({...item,id:slugifyHeading(item.heading)}));
}
