import { clientStoryMeta } from "@/app/services/metaTags";
import { getPageMetaTitle } from "@/app/Components/PageMetaTitle";
import ClientStoryDetail from "./ClientStoryDetail";

const metadataInner = getPageMetaTitle({ data: clientStoryMeta });

export const metadata = metadataInner;

export default function page() {
  return <ClientStoryDetail />
};


