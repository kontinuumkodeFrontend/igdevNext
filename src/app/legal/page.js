import { legalMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import Legal from "./Legal";

const metadataInner = getPageMetaTitle({ data: legalMeta });

export const metadata = metadataInner;

export default function page() {
  return <Legal />
};


