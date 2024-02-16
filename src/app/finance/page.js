import { financeMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import Finance from "./Finance";

const metadataInner = getPageMetaTitle({ data: financeMeta });

export const metadata = metadataInner;

export default function page() {
  return <Finance />
};


