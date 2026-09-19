import fs from "node:fs"; import path from "node:path"; import matter from "gray-matter";
import { mediaSchema,researchSchema,type Media,type ResearchMeta } from "./research-schema";
const dir=path.join(process.cwd(),"content/research");
export type Publication={meta:ResearchMeta;source:string;media:Record<string,Media>;hero:Media};
const critical=["slug","title","subtitle","description","author","publisher","publishedAt","version","status","featured","readingTimeMinutes","canonicalUrl"] as const;
export function getAllResearch(includeUnpublished=false):Publication[]{
 const files=fs.readdirSync(dir).filter(f=>f.endsWith(".mdx"));
 const items=files.map(file=>{const slug=file.slice(0,-4), raw=fs.readFileSync(path.join(dir,file),"utf8"),parsed=matter(raw),metaPath=path.join(dir,`${slug}.meta.json`),mediaPath=path.join(dir,`${slug}.media.json`);
 if(!fs.existsSync(metaPath)) throw new Error(`[research:${slug}] missing companion metadata: ${metaPath}`); if(!fs.existsSync(mediaPath)) throw new Error(`[research:${slug}] missing media metadata: ${mediaPath}`);
 const candidate=JSON.parse(fs.readFileSync(metaPath,"utf8")); for(const key of critical){if(parsed.data[key]!==undefined && JSON.stringify(parsed.data[key])!==JSON.stringify(candidate[key])) throw new Error(`[research:${slug}] frontmatter and metadata disagree on “${key}”`)}
 const meta=researchSchema.parse(candidate); if(meta.slug!==slug) throw new Error(`[research:${slug}] metadata slug does not match filename`);
 const mediaRaw=JSON.parse(fs.readFileSync(mediaPath,"utf8")); const media=Object.fromEntries(Object.entries(mediaRaw).map(([k,v])=>[k,mediaSchema.parse(v)])); const hero=media[meta.hero]; if(!hero) throw new Error(`[research:${slug}] hero media “${meta.hero}” is missing or incomplete`);
 return {meta,source:parsed.content,media,hero};});
 const slugs=new Set<string>(),urls=new Set<string>(); for(const x of items){if(slugs.has(x.meta.slug))throw new Error(`Duplicate research slug: ${x.meta.slug}`);if(urls.has(x.meta.canonicalUrl))throw new Error(`Duplicate canonical URL: ${x.meta.canonicalUrl}`);slugs.add(x.meta.slug);urls.add(x.meta.canonicalUrl)}
 const published=items.filter(x=>x.meta.status==="published"); if(published.length&&published.filter(x=>x.meta.featured).length!==1)throw new Error("Exactly one published investigation must be featured");
 return (includeUnpublished?items:published).sort((a,b)=>b.meta.publishedAt.localeCompare(a.meta.publishedAt)); }
export const getResearch=(slug:string)=>getAllResearch().find(x=>x.meta.slug===slug); export const getFeatured=()=>getAllResearch().find(x=>x.meta.featured);
export function getRelated(pub:Publication){return getAllResearch().filter(p=>p.meta.slug!==pub.meta.slug).map(p=>({p,score:p.meta.topics.filter(t=>pub.meta.topics.includes(t)).length})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.p)}
export const formatDate=(d:string)=>new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}).format(new Date(`${d}T00:00:00Z`));
