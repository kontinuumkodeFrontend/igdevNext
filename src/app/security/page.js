import { securityMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import Security from "./Security";

const metadataInner = getPageMetaTitle({ data: securityMeta });

export const metadata = metadataInner;

export default function page() {
  return <Security />
};


