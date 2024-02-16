
import { ourValueMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import OurValue from "./OurValue";

const metadataInner = getPageMetaTitle({ data: ourValueMeta });

export const metadata = metadataInner;

export default function page() {
  return <OurValue />
};


