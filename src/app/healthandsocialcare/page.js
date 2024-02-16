import { healthandSocialMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import HealthAndSocialCare from "./HealthAndSocialCare";

const metadataInner = getPageMetaTitle({ data: healthandSocialMeta });

export const metadata = metadataInner;

export default function page() {
  return <HealthAndSocialCare />
};


