import { nistMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import NIST from "./Nist";

const metadataInner = getPageMetaTitle({ data: nistMeta });

export const metadata = metadataInner;

export default function page() {
  return <NIST />
};


