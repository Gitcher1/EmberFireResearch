import type {MetadataRoute} from "next";
import {getAllResearch} from "@/src/lib/research";
import {getPublishedSeries} from "@/src/data/research-series";

const base="https://emberfireresearch.com";

export default function sitemap():MetadataRoute.Sitemap{
  return [
    {url:base,changeFrequency:"weekly",priority:1},
    {url:`${base}/archive`,changeFrequency:"weekly",priority:.8},
    {url:`${base}/series`,changeFrequency:"weekly",priority:.8},
    {url:`${base}/threads`,changeFrequency:"weekly",priority:.8},
    {url:`${base}/standards`,changeFrequency:"monthly",priority:.6},
    {url:`${base}/about`,changeFrequency:"monthly",priority:.5},
    ...getPublishedSeries().map(series=>({url:`${base}/series/${series.slug}`,changeFrequency:"monthly" as const,priority:.8})),
    ...getAllResearch().map(p=>({url:p.meta.canonicalUrl,lastModified:p.meta.updatedAt||p.meta.lastReviewedAt||p.meta.publishedAt,changeFrequency:"monthly" as const,priority:.9}))
  ];
}
