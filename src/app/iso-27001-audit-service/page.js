import { ISO27001AuditMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import IsoAuditService from "./IsoAuditService";

const metadataInner = getPageMetaTitle({ data: ISO27001AuditMeta });

export const metadata = metadataInner;

export default function page() {
  return <IsoAuditService />
};


