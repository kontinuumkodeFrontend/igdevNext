import { technologyMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import Technology from "./Technology";

const metadataInner = getPageMetaTitle({ data: technologyMeta });

export const metadata = metadataInner;

export default function page() {
  return <Technology />
};


