OurSdg
import { ourSdgMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import OurSdg from "./OurSdg";

const metadataInner = getPageMetaTitle({ data: ourSdgMeta });

export const metadata = metadataInner;

export default function page() {
  return <OurSdg />
};


