import type {Metadata} from "next";
import Link from "next/link";
import {researchThreads,entryHref} from "@/src/data/research-threads";
import {getResearch} from "@/src/lib/research";

export const metadata:Metadata={
  title:"Research Threads",
  description:"Follow recurring subjects across EmberFire Research investigations and jump directly to the sections where they overlap."
};

export default function ThreadsPage(){
  return <>
    <header className="page-intro">
      <span className="eyebrow">Cross-investigation map</span>
      <h1>Research Threads</h1>
      <p>Some questions do not belong to one investigation. Research Threads track recurring subjects across the archive and link directly to the sections where each publication contributes evidence.</p>
    </header>
    <section className="section threads-index">
      {researchThreads.map(thread=><article className="thread-index-card" id={thread.slug} key={thread.slug}>
        <div className="thread-index-copy">
          <span className="label">Research thread</span>
          <h2>{thread.title}</h2>
          <p>{thread.description}</p>
        </div>
        <div className="thread-index-links">
          {thread.entries.map(entry=>{
            const publication=getResearch(entry.articleSlug);
            if(!publication)return null;
            return <Link href={entryHref(entry)} key={`${entry.articleSlug}-${entry.heading}`}>
              <span className="meta">{publication.meta.category}</span>
              <strong>{publication.meta.title}</strong>
              <span>{entry.label||entry.heading} →</span>
            </Link>;
          })}
        </div>
      </article>)}
    </section>
  </>;
}
