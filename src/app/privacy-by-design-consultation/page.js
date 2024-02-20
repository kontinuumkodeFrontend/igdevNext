import { PrivacyByDesignConsultationMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import PrivacyByDesignConsultation from "./PrivacyByDesignConsultation";

const metadataInner = getPageMetaTitle({ data: PrivacyByDesignConsultationMeta });

export const metadata = metadataInner;

export default function page() {
  return <PrivacyByDesignConsultation />
};


