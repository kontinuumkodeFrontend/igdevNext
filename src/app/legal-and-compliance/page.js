import { LegalandComplianceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import LegalandCompliance from "./LegalandCompliance";

const metadataInner = getPageMetaTitle({ data: LegalandComplianceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <LegalandCompliance />
};


