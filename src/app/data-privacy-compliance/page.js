import { dataPrivacyAuditMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DataPrivacyComplianceIner from "./DataPrivacyCompliance";

const metadataInner = getPageMetaTitle({ data: dataPrivacyAuditMeta });

export const metadata = metadataInner;

export default function DataPrivacyCompliance() {
  return <DataPrivacyComplianceIner />
};


