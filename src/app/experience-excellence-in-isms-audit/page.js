import { ISMSAuditMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import ExperienceExcellenceinISMSAudit from "./ExperienceExcellenceinISMSAudit";

const metadataInner = getPageMetaTitle({ data: ISMSAuditMeta });

export const metadata = metadataInner;

export default function page() {
  return <ExperienceExcellenceinISMSAudit />
};


