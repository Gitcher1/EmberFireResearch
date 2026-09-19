import type {ReactNode} from "react";

export function slugifyHeading(input:string){
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g,"")
    .toLowerCase()
    .replace(/[’'“”"]/g,"")
    .replace(/&/g," and ")
    .replace(/[^a-z0-9]+/g,"-")
    .replace(/^-+|-+$/g,"");
}

export function headingText(node:ReactNode):string{
  if(typeof node==="string"||typeof node==="number") return String(node);
  if(Array.isArray(node)) return node.map(headingText).join("");
  if(node&&typeof node==="object"&&"props" in node){
    const props=(node as {props?:{children?:ReactNode}}).props;
    return props?.children?headingText(props.children):"";
  }
  return "";
}
