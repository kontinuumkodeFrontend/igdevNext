import { CareerMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import Career from "./Career";

const metadataInner = getPageMetaTitle({ data: CareerMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <Career />
};


