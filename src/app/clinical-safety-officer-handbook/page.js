import { clinicalSafetyMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import ClincalSafetyOfficerHandbook from "./ClincalSafetyOfficerHandbook";

const metadataInner = getPageMetaTitle({ data: clinicalSafetyMeta });

export const metadata = metadataInner;

export default function page() {
  return <ClincalSafetyOfficerHandbook />
};


