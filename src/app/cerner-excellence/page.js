import { CernerMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CernerExcellence from "./CernerExcellence";

const metadataInner = getPageMetaTitle({ data: CernerMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <CernerExcellence />
};


