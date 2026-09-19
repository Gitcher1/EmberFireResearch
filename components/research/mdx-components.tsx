import type {ReactNode,HTMLAttributes} from "react";
import {Figure} from "./Figure";
import {headingText,slugifyHeading} from "@/src/lib/anchors";

const Panel=({children,className=""}:{children?:ReactNode;className?:string})=><aside className={`mdx-panel ${className}`}>{children}</aside>;

function H2({children,...props}:HTMLAttributes<HTMLHeadingElement>){
  const text=headingText(children);
  return <h2 id={slugifyHeading(text)} {...props}>{children}</h2>;
}

function H3({children,...props}:HTMLAttributes<HTMLHeadingElement>){
  const text=headingText(children);
  return <h3 id={slugifyHeading(text)} {...props}>{children}</h3>;
}

export const mdxComponents={
  h2:H2,
  h3:H3,
  Figure,
  EvidenceStatus:({status,children}:{status:string;children:ReactNode})=><Panel><strong>{status}</strong><div>{children}</div></Panel>,
  ResearchNote:Panel,
  SourceNote:Panel,
  Callout:Panel,
  DocumentExcerpt:Panel,
  Disclosure:Panel,
  MethodNote:Panel,
  Correction:Panel,
  PullQuote:({children}:{children:ReactNode})=><blockquote>{children}</blockquote>,
  Timeline:({children}:{children:ReactNode})=><ol className="timeline">{children}</ol>,
  ComparisonTable:({children,...props}:HTMLAttributes<HTMLTableElement>)=><div className="table-wrap"><table {...props}>{children}</table></div>
};
