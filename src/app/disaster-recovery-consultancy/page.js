import { DisasterRecoveryConsultancyMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DisasterRecoveryConsultancy from "./DisasterRecoveryConsultancy";

const metadataInner = getPageMetaTitle({ data: DisasterRecoveryConsultancyMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <DisasterRecoveryConsultancy />
};


