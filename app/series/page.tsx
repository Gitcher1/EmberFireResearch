import type {Metadata} from "next";
import Link from "next/link";
import {getPublishedSeries} from "@/src/data/research-series";
import {getResearch} from "@/src/lib/research";

export const metadata:Metadata={
  title:"Research Series",
  description:"Editorial series from EmberFire Research: connected investigations designed to be read together."
};

export default function SeriesIndex(){
  const researchSeries=getPublishedSeries();
  return <>
    <header className="page-intro">
      <span className="eyebrow">Editorial collections</span>
      <h1>Research Series</h1>
      <p>Some investigations become more useful when read together. Series preserve that larger arc while each article remains independently sourced and publishable.</p>
    </header>
    <section className="section series-index">
      {researchSeries.map(series=>{
        const pubs=series.items.map(getResearch).filter(Boolean);
        return <article className="series-index-card" key={series.slug}>
          <div>
            <span className="label">{series.items.length}-part series</span>
            <h2><Link href={`/series/${series.slug}`}>{series.title}</Link></h2>
            <p>{series.subtitle}</p>
            <p className="series-index-description">{series.description}</p>
            <Link href={`/series/${series.slug}`}>Open the series →</Link>
          </div>
          <div className="series-mini-list">
            {pubs.map((pub,index)=>pub&&<Link href={`/research/${pub.meta.slug}`} key={pub.meta.slug}>
              <span>{String(index+1).padStart(2,"0")}</span>
              <strong>{pub.meta.title}</strong>
              <small>{pub.meta.readingTimeMinutes} min</small>
            </Link>)}
          </div>
        </article>;
      })}
    </section>
  </>;
}
