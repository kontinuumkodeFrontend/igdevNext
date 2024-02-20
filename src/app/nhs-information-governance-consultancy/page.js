import { NHS_IGCMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import NhsInformationGovernanceConsultancy from "./NhsInformationGovernanceConsultancy";

const metadataInner = getPageMetaTitle({ data: NHS_IGCMeta });

export const metadata = metadataInner;

export default function page() {
  return <NhsInformationGovernanceConsultancy />
};


