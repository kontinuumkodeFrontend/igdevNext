import { AIPrivacyMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import AIPrivacyConsultation from "./AIPrivacyConsultation";


const metadataInner = getPageMetaTitle({ data: AIPrivacyMeta });

export const metadata = metadataInner;

export default function page() {
  return <AIPrivacyConsultation />
};


