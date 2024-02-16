import { buisnessContinuityMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import BusinessContinuityandDisasterRecoveryAudit from "./BusinessContinuityandDisasterRecoveryAudit";

const metadataInner = getPageMetaTitle({ data: buisnessContinuityMeta });

export const metadata = metadataInner;

export default function ApplicationSecurityAuditV1() {
  return <BusinessContinuityandDisasterRecoveryAudit />
};


