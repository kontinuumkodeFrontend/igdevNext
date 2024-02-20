import { DataPrivacyImpactServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DataPrivacyImpactService from "./DataPrivacyImpactService";

const metadataInner = getPageMetaTitle({ data: DataPrivacyImpactServiceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <DataPrivacyImpactService />
};


