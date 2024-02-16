import { dataProtectionAuditMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DataProtectionAudit from "./DataProtectionAudit";

const metadataInner = getPageMetaTitle({ data: dataProtectionAuditMeta });

export const metadata = metadataInner;

export default function page() {
  return <DataProtectionAudit />
};


