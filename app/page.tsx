import Link from "next/link";
import {getAllResearch,getFeatured,formatDate} from "@/src/lib/research";
import {researchSeries} from "@/src/data/research-series";

export default function Home(){
  const featured=getFeatured();
  const all=getAllResearch();
  if(!featured)throw new Error("No featured publication");

  return <>
    <section className="hero">
      <div className="eyebrow">EmberFire Research</div>
      <p className="hero-line">Investigating the gaps between the official record and the full story.</p>
      <div className="hero-grid">
        <div>
          <div className="eyebrow">Featured investigation</div>
          <p className="meta">{featured.meta.category} · {formatDate(featured.meta.publishedAt)}</p>
          <h1>{featured.meta.title}</h1>
          <p className="dek">{featured.meta.subtitle}</p>
          <p>{featured.meta.readingTimeMinutes} minute read</p>
          <div className="button-row">
            <Link className="button" href={`/research/${featured.meta.slug}`}>Read the investigation</Link>
            <Link href="/archive">Research archive →</Link>
          </div>
        </div>
        <figure>
          <img src={featured.hero.src} alt={featured.hero.alt}/>
          <figcaption>{featured.hero.caption} <span className="credit">Credit: <a href={featured.hero.source}>{featured.hero.credit}</a> · {featured.hero.license}</span></figcaption>
        </figure>
      </div>
    </section>

    <section className="section">
      <p className="statement">EmberFire Research publishes source-driven investigations that follow questions through documents, chronology, competing interpretations, and unresolved evidence.</p>
    </section>

    <section className="section series-home">
      <div className="section-heading-row">
        <div><span className="eyebrow">Editorial collections</span><h2 className="section-title">Research Series</h2></div>
        <Link href="/series">View all series →</Link>
      </div>
      <div className="series-home-grid">
        {researchSeries.map(series=><Link className="series-home-card" href={`/series/${series.slug}`} key={series.slug}>
          <span className="label">{series.items.length}-part series</span>
          <h3>{series.title}</h3>
          <p>{series.subtitle}</p>
          <span>Explore series →</span>
        </Link>)}
      </div>
    </section>

    <section className="section">
      <h2 className="section-title">Latest Research</h2>
      {all.map(p=><article className="research-card" key={p.meta.slug}>
        <Link className="research-card-image-link" href={`/research/${p.meta.slug}`} aria-label={`Read ${p.meta.title}`}>
          <img className="research-card-thumb" src={p.hero.src} alt=""/>
        </Link>
        <div className="research-card-copy">
          <div className="research-card-kicker">
            <span className="meta">{formatDate(p.meta.publishedAt)}</span>
            <span className="label">{p.meta.category}</span>
          </div>
          <h3><Link href={`/research/${p.meta.slug}`}>{p.meta.title}</Link></h3>
          <p>{p.meta.subtitle}</p>
          <div className="tags" aria-label="Research topics">
            {p.meta.topics.map(t=><Link className="tag tag-link" href={`/archive?topic=${encodeURIComponent(t)}`} key={t}>{t}</Link>)}
          </div>
        </div>
        <Link className="research-card-read" href={`/research/${p.meta.slug}`}>{p.meta.readingTimeMinutes} min →</Link>
      </article>)}

      <div className="support-grid">
        <Link className="support-card" href="/threads"><span className="label">Connections</span><h3>Research threads</h3><p>Follow the same question across multiple investigations and jump directly to the relevant sections.</p></Link>
        <Link className="support-card" href="/standards"><span className="label">Our practice</span><h3>Research standards</h3><p>How claims, sources, uncertainty, versions, and corrections are handled.</p></Link>
        <Link className="support-card" href="/archive"><span className="label">Public record</span><h3>Research archive</h3><p>Browse every published investigation by date, category, and topic.</p></Link>
      </div>
    </section>
  </>
}
