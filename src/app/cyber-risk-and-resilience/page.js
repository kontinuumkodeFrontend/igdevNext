import { CyberRiskAndResilienceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CyberRiskAndResilience from "./CyberRiskAndResilience";

const metadataInner = getPageMetaTitle({ data: CyberRiskAndResilienceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <CyberRiskAndResilience />
};


