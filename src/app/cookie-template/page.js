import { cookieMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import StoreCookie from "./StoreCookie";

const metadataInner = getPageMetaTitle({ data: cookieMeta });

export const metadata = metadataInner;

export default function page() {
  return <StoreCookie />
};


