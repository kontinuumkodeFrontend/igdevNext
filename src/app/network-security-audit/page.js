
import { networkSecurityAuditMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import NetworkSecurityAudit from "./NetworkSecurityAudit";

const metadataInner = getPageMetaTitle({ data: networkSecurityAuditMeta });

export const metadata = metadataInner;

export default function page() {
  return <NetworkSecurityAudit />
};


