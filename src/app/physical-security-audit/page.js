import { physicalSecurityAuditMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import PhysicalSecurityAudit from "./PhysicalSecurityAudit";

const metadataInner = getPageMetaTitle({ data: physicalSecurityAuditMeta });

export const metadata = metadataInner;

export default function page() {
  return <PhysicalSecurityAudit />
};


