import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import {getAllResearch,getResearch,formatDate} from "@/src/lib/research";
import {mdxComponents} from "@/components/research/mdx-components";
import {getArticleNavigation} from "@/src/data/article-navigation";
import {entryHref,getThreadsForArticle} from "@/src/data/research-threads";
import {getSeriesForArticle} from "@/src/data/research-series";
import {getResearchBranches} from "@/src/data/research-branches";

type Props={params:Promise<{slug:string}>};

export function generateStaticParams(){
  return getAllResearch().map(p=>({slug:p.meta.slug}));
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const p=getResearch((await params).slug);
  if(!p)return{};
  const m=p.meta;
  return {
    title:m.title,
    description:m.description,
    alternates:{canonical:m.canonicalUrl},
    openGraph:{type:"article",title:m.title,description:m.description,url:m.canonicalUrl,publishedTime:m.publishedAt,modifiedTime:m.updatedAt||m.lastReviewedAt,images:[{url:p.hero.src,alt:p.hero.alt}]},
    twitter:{card:"summary_large_image",title:m.title,description:m.description,images:[p.hero.src]}
  };
}

export default async function ResearchPage({params}:Props){
  const p=getResearch((await params).slug);
  if(!p)notFound();
  const m=p.meta;
  const jumpLinks=getArticleNavigation(m.slug);
  const threads=getThreadsForArticle(m.slug);
  const series=getSeriesForArticle(m.slug);
  const branches=getResearchBranches(m.slug);
  const seriesIndex=series?series.items.indexOf(m.slug):-1;
  const previous=series&&seriesIndex>0?getResearch(series.items[seriesIndex-1]):undefined;
  const next=series&&seriesIndex<series.items.length-1?getResearch(series.items[seriesIndex+1]):undefined;
  const jsonLd={
    "@context":"https://schema.org",
    "@type":"ScholarlyArticle",
    headline:m.title,
    description:m.description,
    author:{"@type":"Organization",name:m.author},
    publisher:{"@type":"Organization",name:m.publisher},
    datePublished:m.publishedAt,
    dateModified:m.updatedAt||m.lastReviewedAt||m.publishedAt,
    mainEntityOfPage:m.canonicalUrl,
    keywords:m.keywords.join(", ")
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/>

    <header className="article-header">
      <span className="eyebrow">{m.category}</span>
      <h1>{m.title}</h1>
      <p className="subtitle">{m.subtitle}</p>
      <div className="article-meta meta">
        <span>By {m.author}</span>
        <span>Published {formatDate(m.publishedAt)}</span>
        <span>{m.readingTimeMinutes} minute read</span>
        <span>Version {m.version}</span>
      </div>

      <div className="topic-row" aria-label="Research topics">
        <span className="topic-row-label">Topics</span>
        <div className="tags">
          {m.topics.map(t=><Link className="tag tag-link" href={`/archive?topic=${encodeURIComponent(t)}`} key={t}>{t}</Link>)}
        </div>
      </div>

      {jumpLinks.length>0&&<nav className="jump-nav" aria-label="Jump to article section">
        <span className="topic-row-label">Jump to</span>
        <div className="jump-links">
          {jumpLinks.map(item=><a className="jump-link" href={`#${item.id}`} key={item.id}>{item.label}</a>)}
        </div>
      </nav>}
    </header>

    <figure className="article-hero">
      <img src={p.hero.src} alt={p.hero.alt}/>
      <figcaption>{p.hero.caption} <span className="credit">Credit: <a href={p.hero.source}>{p.hero.credit}</a> · {p.hero.license}</span></figcaption>
    </figure>

    {series&&<section className="article-series">
      <div>
        <span className="eyebrow">Research series · Part {seriesIndex+1} of {series.items.length}</span>
        <h2><Link href={`/series/${series.slug}`}>{series.title}</Link></h2>
        <p>{series.subtitle}</p>
      </div>
      <div className="series-nav">
        {previous&&<Link href={`/research/${previous.meta.slug}`}>← {previous.meta.title}</Link>}
        {next&&<Link href={`/research/${next.meta.slug}`}>{next.meta.title} →</Link>}
      </div>
    </section>}

    <div className="article-layout">
      <aside className="article-rail" aria-label="Publication information">
        <span className="label">Article record</span>
        <dl>
          <dt>Published</dt><dd>{formatDate(m.publishedAt)}</dd>
          {m.lastReviewedAt&&<><dt>Last reviewed</dt><dd>{formatDate(m.lastReviewedAt)}</dd></>}
          <dt>Version</dt><dd>{m.version}</dd>
          <dt>Publisher</dt><dd>{m.publisher}</dd>
        </dl>
        {jumpLinks.length>0&&<nav className="rail-nav" aria-label="Article sections">
          <span className="label">Sections</span>
          {jumpLinks.map(item=><a href={`#${item.id}`} key={item.id}>{item.label}</a>)}
        </nav>}
      </aside>

      <div className="article-body">
        <MDXRemote source={p.source} components={mdxComponents}/>
        {m.methodology&&<section><h2 id="methodology">Methodology</h2><p>{m.methodology}</p></section>}
        {m.disclosures?.length?<section><h2 id="disclosures">Disclosures</h2>{m.disclosures.map(x=><p key={x}>{x}</p>)}</section>:null}
      </div>
    </div>

    {branches.length>0&&<section className="research-branches">
      <div className="connections-heading">
        <span className="eyebrow">Open research queue</span>
        <h2>Branch Investigations</h2>
        <p>This parent investigation is publishable without pretending every branch has been exhausted. These are the major evidence tracks that have become large enough to deserve their own source-critical investigations.</p>
      </div>
      <div className="branch-grid">
        {branches.map((branch,index)=><article className="branch-card" key={branch.title}>
          <div className="branch-number">{String(index+1).padStart(2,"0")}</div>
          <div>
            <span className="label">{branch.status.replace("-"," ")}</span>
            <h3>{branch.title}</h3>
            <p>{branch.question}</p>
          </div>
        </article>)}
      </div>
    </section>}

    {threads.length>0&&<section className="connections">
      <div className="connections-heading">
        <span className="eyebrow">Cross-investigation map</span>
        <h2>Connected Research</h2>
        <p>These subjects recur in other EmberFire investigations. Links go directly to the section where the overlap is discussed.</p>
      </div>
      <div className="thread-grid">
        {threads.map(thread=>{
          const related=thread.entries.filter(entry=>entry.articleSlug!==m.slug);
          const local=thread.entries.filter(entry=>entry.articleSlug===m.slug);
          return <article className="thread-card" id={thread.slug} key={thread.slug}>
            <h3><Link href={`/threads#${thread.slug}`}>{thread.title}</Link></h3>
            <p>{thread.description}</p>
            <div className="thread-local">
              <span className="label">In this investigation</span>
              {local.map(entry=><a href={entryHref(entry)} key={entry.heading}>{entry.label||entry.heading}</a>)}
            </div>
            {related.length>0&&<div className="thread-related">
              <span className="label">Also appears in</span>
              {related.map(entry=>{
                const publication=getResearch(entry.articleSlug);
                if(!publication)return null;
                return <Link href={entryHref(entry)} key={`${entry.articleSlug}-${entry.heading}`}>
                  <strong>{publication.meta.title}</strong>
                  <span>{entry.label||entry.heading}</span>
                </Link>;
              })}
            </div>}
          </article>;
        })}
      </div>
      <p className="connections-more"><Link href="/threads">Explore all research threads →</Link></p>
    </section>}

    {m.corrections?.length?<section className="corrections" id="corrections">
      <h2>Correction history</h2>
      {m.corrections.map(c=><div key={`${c.date}-${c.version}`}><strong>{formatDate(c.date)} · Version {c.version}</strong><p>{c.description}</p></div>)}
    </section>:null}
  </article>;
}
