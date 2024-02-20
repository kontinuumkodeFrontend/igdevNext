import { PrivacyInformationManagementSystemMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import PrivacyInformationManagementSystem from "./PrivacyInformationManagementSystem";

const metadataInner = getPageMetaTitle({ data: PrivacyInformationManagementSystemMeta });

export const metadata = metadataInner;

export default function page() {
  return <PrivacyInformationManagementSystem />
};


