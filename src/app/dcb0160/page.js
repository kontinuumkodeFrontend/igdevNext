import { dcb0160Meta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DCB0160 from "./DCB0160";


const metadataInner = getPageMetaTitle({ data: dcb0160Meta });

export const metadata = metadataInner;

export default function page() {
  return <DCB0160 />
};


