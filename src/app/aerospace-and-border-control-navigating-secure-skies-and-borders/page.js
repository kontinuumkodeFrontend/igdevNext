import { aerospaceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import AerospaceAndBorderNavigating from "./AerospaceAndBorderNavigating";

const metadataInner = getPageMetaTitle({ data: aerospaceMeta });

export const metadata = metadataInner;

export default function page() {
  return <AerospaceAndBorderNavigating />
};


