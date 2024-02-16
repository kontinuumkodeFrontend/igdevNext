import { cyberSecurityMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CyberScurityStore from "./CyberScurityStore";

const metadataInner = getPageMetaTitle({ data: cyberSecurityMeta });

export const metadata = metadataInner;

export default function page() {
  return <CyberScurityStore />
};


