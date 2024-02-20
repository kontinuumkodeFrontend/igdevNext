import { ClinicalGovernanceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import ClinicalGovernance from "./ClinicalGovernance";

const metadataInner = getPageMetaTitle({ data: ClinicalGovernanceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <ClinicalGovernance />
};


