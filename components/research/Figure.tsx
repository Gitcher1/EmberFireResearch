import type {Media} from "@/src/lib/research-schema";
export function Figure({media,className=""}:{media:Media;className?:string}){return <figure className={`research-figure ${className}`}><img src={media.src} alt={media.alt} loading="lazy"/><figcaption>{media.caption} <span className="credit">Credit: <a href={media.source}>{media.credit}</a> · {media.license}</span></figcaption></figure>}
