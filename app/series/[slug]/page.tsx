import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {researchSeries} from "@/src/data/research-series";
import {getResearch} from "@/src/lib/research";

type Props={params:Promise<{slug:string}>};

export function generateStaticParams(){
  return researchSeries.map(series=>({slug:series.slug}));
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const slug=(await params).slug;
  const series=researchSeries.find(item=>item.slug===slug);
  if(!series)return{};
  return {title:series.title,description:series.subtitle};
}

export default async function SeriesPage({params}:Props){
  const slug=(await params).slug;
  const series=researchSeries.find(item=>item.slug===slug);
  if(!series)notFound();
  const publications=series.items.map(getResearch).filter(Boolean);
  return <>
    <header className="page-intro series-intro">
      <span className="eyebrow">EmberFire Research series</span>
      <h1>{series.title}</h1>
      <p>{series.subtitle}</p>
      <p className="series-description">{series.description}</p>
    </header>
    <section className="section series-list">
      {publications.map((publication,index)=>{
        if(!publication)return null;
        return <article className="series-item" key={publication.meta.slug}>
          <div className="series-number">{String(index+1).padStart(2,"0")}</div>
          <Link href={`/research/${publication.meta.slug}`} className="series-item-image">
            <img src={publication.hero.src} alt=""/>
          </Link>
          <div>
            <span className="meta">Part {index+1} of {publications.length} · {publication.meta.readingTimeMinutes} min</span>
            <h2><Link href={`/research/${publication.meta.slug}`}>{publication.meta.title}</Link></h2>
            <p>{publication.meta.subtitle}</p>
            <Link href={`/research/${publication.meta.slug}`}>Read Part {index+1} →</Link>
          </div>
        </article>;
      })}
      <div className="series-thread-cta">
        <span className="eyebrow">See the overlap</span>
        <h2>Follow the questions across all three investigations.</h2>
        <p>The Research Threads map connects canon, manuscript survival, restricted access, provenance, missing records, and evidence limits at section level.</p>
        <Link className="button" href="/threads">Explore Research Threads</Link>
      </div>
    </section>
  </>;
}
