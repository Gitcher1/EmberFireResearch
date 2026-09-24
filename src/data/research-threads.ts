import {slugifyHeading} from "@/src/lib/anchors";

export type ThreadEntry={articleSlug:string;heading:string;label?:string};
export type ResearchThread={slug:string;title:string;description:string;entries:ThreadEntry[]};

export const researchThreads:ResearchThread[]=[
  {
    slug:"canon-and-authority",
    title:"Canon & Authority",
    description:"How communities decide which texts carry authority, how lists change, and why a canon is not simply one ancient table of contents.",
    entries:[
      {articleSlug:"book-of-enoch",heading:"Canon Before the Modern Bible",label:"Enoch and changing canonical status"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"A canon is not the same thing as a bound table of contents",label:"Why 81 is more complicated than a book count"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"“Narrower” and “broader” canon: useful labels, imperfect boundaries",label:"Narrower and broader Ethiopian canon"}
    ]
  },
  {
    slug:"ethiopia-and-textual-survival",
    title:"Ethiopia & Textual Survival",
    description:"Why some ancient works disappeared from one transmission tradition while remaining alive in another.",
    entries:[
      {articleSlug:"book-of-enoch",heading:"What Ethiopia Preserved",label:"How Ethiopia preserved complete 1 Enoch"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"Why the Ethiopian tradition matters even when the sensational claims fail",label:"Why the Ethiopian tradition matters"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"The Garima Gospels changed what can be said about early Ge'ez manuscripts",label:"Early Ge'ez manuscript evidence"}
    ]
  },
  {
    slug:"dead-sea-scrolls-and-access",
    title:"Dead Sea Scrolls, Access & Publication",
    description:"What Qumran actually established, what access restrictions really occurred, and what those facts do—and do not—prove.",
    entries:[
      {articleSlug:"book-of-enoch",heading:"What Qumran Added to the Evidence",label:"What the Aramaic Enoch fragments changed"},
      {articleSlug:"book-of-enoch",heading:"The Dead Sea Scrolls Access Controversy",label:"The access controversy in the Enoch investigation"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"The Dead Sea Scrolls changed the argument—but did not “reveal the Ethiopian Bible”",label:"Qumran and the Ethiopian Bible claim"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"The Dead Sea Scroll access controversy was real",label:"Restricted access versus suppression claims"}
    ]
  },
  {
    slug:"provenance-archives-and-missing-records",
    title:"Provenance, Archives & Missing Records",
    description:"How to distinguish a documented record, a derivative artifact, an inaccessible holding, an archival gap, and a claim that has not yet been verified.",
    entries:[
      {articleSlug:"visual-mandela-effect-shared-false-memory",heading:"The archive problem: memory experiments cannot settle historical variation",label:"Why memory experiments need archives"},
      {articleSlug:"visual-mandela-effect-shared-false-memory",heading:"A hierarchy for “residue”",label:"A provenance hierarchy for residue"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"What about Vatican, monastery, private, and inaccessible manuscripts?",label:"Public, private, inaccessible, and alleged holdings"},
      {articleSlug:"book-of-enoch",heading:"Before James Bruce: Enoch Was Not Entirely Unknown in Europe",label:"What was actually known before Bruce"}
    ]
  },
  {
    slug:"suppression-claims-and-evidence",
    title:"Suppression Claims & Evidence",
    description:"A recurring EmberFire question: what evidence shows restricted access or loss, and what additional evidence would be needed to establish deliberate suppression?",
    entries:[
      {articleSlug:"book-of-enoch",heading:"The Dead Sea Scrolls Access Controversy",label:"Restricted access is documented; motive needs separate evidence"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"“Who removed the books?” is usually the wrong first question",label:"Why canon differences do not reduce to one deletion event"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"What about Vatican, monastery, private, and inaccessible manuscripts?",label:"Unknown holdings are not proof of either absence or concealment"},
      {articleSlug:"visual-mandela-effect-shared-false-memory",heading:"What would count as evidence for altered history?",label:"Turning an extraordinary claim into a testable model"},
      {articleSlug:"lilith-sources-history-adams-first-wife",heading:"What would actually support an older first-wife story?",label:"What evidence would be needed for a deleted-Genesis claim"},
      {articleSlug:"the-veil-hidden-reality-sacred-boundaries",heading:"The strongest conclusion is not “there is one veil”",label:"Why similarity is not evidence of one hidden doctrine"}
    ]
  },
  {
    slug:"transmission-and-transformation",
    title:"Transmission & Transformation",
    description:"How older texts, names, symbols, and practices survive by being reinterpreted inside later communities rather than remaining unchanged.",
    entries:[
      {articleSlug:"book-of-enoch",heading:"So What Happened to 1 Enoch?",label:"Survival through changing communities"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"Why the Ethiopian tradition matters even when the sensational claims fail",label:"Preservation is active transmission"},
      {articleSlug:"lilith-sources-history-adams-first-wife",heading:"A name can survive longer than a story",label:"Names and biographies travel differently"},
      {articleSlug:"jewish-mysticism-kabbalah-history-sources",heading:"Reception can change the category of a text",label:"How older texts become Kabbalistic through reception"},
      {articleSlug:"the-veil-hidden-reality-sacred-boundaries",heading:"Why the same structure can recur without one transmission chain",label:"Transmission versus convergence"}
    ]
  },
  {
    slug:"hidden-knowledge-and-sacred-boundaries",
    title:"Hidden Knowledge & Sacred Boundaries",
    description:"How ascent, restricted access, hidden texts, divine presence, and privileged revelation change across Jewish and Christian traditions.",
    entries:[
      {articleSlug:"book-of-enoch",heading:"Before the Book: Why Enoch?",label:"Enoch as a revealer of hidden heavenly knowledge"},
      {articleSlug:"jewish-mysticism-kabbalah-history-sources",heading:"Then the heavens acquire gates, names, and danger",label:"Hekhalot palaces, gates, and privileged ascent"},
      {articleSlug:"the-veil-hidden-reality-sacred-boundaries",heading:"3 Enoch turns the curtain into an information surface",label:"The heavenly curtain as boundary and revelation"},
      {articleSlug:"the-veil-hidden-reality-sacred-boundaries",heading:"The Gospel of Philip makes hidden reality explicit",label:"Initiation and hidden truth in a Valentinian text"}
    ]
  },
  {
    slug:"later-reception-and-retrojection",
    title:"Later Reception & Retrojection",
    description:"How later images and systems can be projected backward until medieval or modern interpretations look as old as the ancient material they reused.",
    entries:[
      {articleSlug:"lilith-sources-history-adams-first-wife",heading:"Why the false “one Lilith” story spreads so well",label:"How missing dates create one timeless Lilith"},
      {articleSlug:"jewish-mysticism-kabbalah-history-sources",heading:"The Tree is useful precisely where it is dangerous",label:"A later diagram makes every layer look simultaneous"},
      {articleSlug:"the-veil-hidden-reality-sacred-boundaries",heading:"Then the veil enters the Tree of Life",label:"Modern Paroketh inside a later initiatory system"},
      {articleSlug:"the-veil-hidden-reality-sacred-boundaries",heading:"Plutarch gives us the robe no mortal has uncovered",label:"How the later ‘Veil of Isis’ compresses earlier layers"}
    ]
  },
  {
    slug:"what-the-evidence-supports",
    title:"What the Evidence Supports",
    description:"The point where each investigation separates established findings, unresolved questions, and claims that outrun the record.",
    entries:[
      {articleSlug:"book-of-enoch",heading:"What the Evidence Supports"},
      {articleSlug:"ethiopian-bible-81-book-canon",heading:"What the evidence supports"},
      {articleSlug:"visual-mandela-effect-shared-false-memory",heading:"What the evidence supports"},
      {articleSlug:"lilith-sources-history-adams-first-wife",heading:"Evidence status"},
      {articleSlug:"jewish-mysticism-kabbalah-history-sources",heading:"Evidence status"},
      {articleSlug:"the-veil-hidden-reality-sacred-boundaries",heading:"Evidence status"},
      {articleSlug:"consciousness-brain-generated-mediated-fundamental",heading:"What the evidence supports",label:"What current consciousness research can and cannot establish"}
    ]
  }
];

export function getThreadsForArticle(articleSlug:string){
  return researchThreads.filter(thread=>thread.entries.some(entry=>entry.articleSlug===articleSlug));
}

export function entryHref(entry:ThreadEntry){
  return `/research/${entry.articleSlug}#${slugifyHeading(entry.heading)}`;
}
