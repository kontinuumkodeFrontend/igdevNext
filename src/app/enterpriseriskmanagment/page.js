import { EnterpriseRiskManagementConsultancyMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import EnterpriseRiskManagementConsultancy from "./EnterpriseRiskManagementConsultancy";

const metadataInner = getPageMetaTitle({ data: EnterpriseRiskManagementConsultancyMeta });

export const metadata = metadataInner;

export default function page() {
  return <EnterpriseRiskManagementConsultancy />
};


