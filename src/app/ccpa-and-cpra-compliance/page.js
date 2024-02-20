import { CCPAMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CCPA from "./CCPA";

const metadataInner = getPageMetaTitle({ data: CCPAMeta });

export const metadata = metadataInner;

export default function page() {
  return <CCPA />
};


