import { blogMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import Blog from "./Blog";

const metadataInner = getPageMetaTitle({ data: blogMeta });

export const metadata = metadataInner;

export default function page() {
  return <Blog />
};


