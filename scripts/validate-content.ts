import { getAllResearch } from "../src/lib/research";
try { const records=getAllResearch(true); console.log(`Validated ${records.length} research publication${records.length===1?"":"s"}.`); } catch(error){console.error("Content validation failed:\n",error);process.exit(1)}
