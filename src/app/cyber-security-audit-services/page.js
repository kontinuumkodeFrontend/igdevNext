import { cyberSecuityAuditMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CyberSecAudit from "./CyberSecAudit";

const metadataInner = getPageMetaTitle({ data: cyberSecuityAuditMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <CyberSecAudit />
};


