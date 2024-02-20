import DCB0129 from "./DCB0129"

import { dcb0129Meta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";


const metadataInner = getPageMetaTitle({ data: dcb0129Meta });

export const metadata = metadataInner;

export default function page() {
  return <DCB0129 />
};


