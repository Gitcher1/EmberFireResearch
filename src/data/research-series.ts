export type ResearchSeries={
  slug:string;
  title:string;
  subtitle:string;
  description:string;
  status:"published"|"review";
  items:string[];
};

export const researchSeries:ResearchSeries[]=[
  {
    slug:"evidence-memory-and-the-missing-record",
    title:"Evidence, Memory & the Missing Record",
    subtitle:"Three investigations into how texts survive, how authority is constructed, and what happens when memory and the surviving record diverge.",
    description:"This EmberFire Research series follows one problem across very different subjects: how evidence changes as it moves through manuscripts, institutions, archives, communities, and human memory. Read together, the investigations show why preservation, absence, authority, recollection, and proof cannot be treated as interchangeable.",
    status:"published",
    items:[
      "book-of-enoch",
      "ethiopian-bible-81-book-canon",
      "visual-mandela-effect-shared-false-memory"
    ]
  },
  {
    slug:"hidden-traditions-myth-mysticism-and-the-veil",
    title:"Hidden Traditions: Myth, Mysticism & the Veil",
    subtitle:"Three investigations into how ancient fragments become legendary figures, mystical systems, and claims about hidden reality.",
    description:"Lilith, Kabbalah, and the Veil are often presented online as pieces of one timeless secret tradition. This series does something more useful: it restores the dates, texts, communities, transformations, and missing links. Read together, the three investigations show how traditions survive by changing—and how later systems can make very different historical layers look ancient at the same time.",
    status:"review",
    items:[
      "lilith-sources-history-adams-first-wife",
      "jewish-mysticism-kabbalah-history-sources",
      "the-veil-hidden-reality-sacred-boundaries"
    ]
  }
];

export function getPublishedSeries(){return researchSeries.filter(series=>series.status==="published");}

export function getSeriesForArticle(slug:string){
  return researchSeries.find(series=>series.status==="published"&&series.items.includes(slug));
}
