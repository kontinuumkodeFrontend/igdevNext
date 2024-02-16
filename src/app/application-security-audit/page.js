import MainASA from "./MainASA";
import { applicationSecurityMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";

const metadataInner = getPageMetaTitle({ data: applicationSecurityMeta });

export const metadata = metadataInner;

export default function ApplicationSecurityAuditV1() {
  return <MainASA />
};


