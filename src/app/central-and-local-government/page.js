import { centralAndLocalMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CentralandLocalGoverment from "./CentralandLocalGoverment";

const metadataInner = getPageMetaTitle({ data: centralAndLocalMeta });

export const metadata = metadataInner;

export default function page() {
  return <CentralandLocalGoverment />
};


