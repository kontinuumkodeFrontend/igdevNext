import { itGeneralAuditMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import GdprAudit from "./GdprAudit";

const metadataInner = getPageMetaTitle({ data: itGeneralAuditMeta });

export const metadata = metadataInner;

export default function page() {
  return <GdprAudit />
};


