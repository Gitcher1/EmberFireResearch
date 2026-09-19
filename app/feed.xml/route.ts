import {getAllResearch} from "@/src/lib/research"; import {createRss} from "@/src/lib/rss";
export const dynamic="force-static"; export function GET(){return new Response(createRss(getAllResearch()),{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=3600, s-maxage=86400"}})}
