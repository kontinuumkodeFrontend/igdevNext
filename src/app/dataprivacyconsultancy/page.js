import { DataPrivacyConsultancyMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DataPrivacyConsultancy from "./DataPrivacyConsultancy";

const metadataInner = getPageMetaTitle({ data: DataPrivacyConsultancyMeta });

export const metadata = metadataInner;

export default function page() {
  return <DataPrivacyConsultancy />
};


