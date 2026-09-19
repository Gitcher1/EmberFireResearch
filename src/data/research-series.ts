export type ResearchSeries={
  slug:string;
  title:string;
  subtitle:string;
  description:string;
  items:string[];
};

export const researchSeries:ResearchSeries[]=[
  {
    slug:"evidence-memory-and-the-missing-record",
    title:"Evidence, Memory & the Missing Record",
    subtitle:"Three investigations into how texts survive, how authority is constructed, and what happens when memory and the surviving record diverge.",
    description:"This EmberFire Research series follows one problem across very different subjects: how evidence changes as it moves through manuscripts, institutions, archives, communities, and human memory. Read together, the investigations show why preservation, absence, authority, recollection, and proof cannot be treated as interchangeable.",
    items:[
      "book-of-enoch",
      "ethiopian-bible-81-book-canon",
      "visual-mandela-effect-shared-false-memory"
    ]
  }
];

export function getSeriesForArticle(slug:string){
  return researchSeries.find(series=>series.items.includes(slug));
}
