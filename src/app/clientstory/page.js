import { clientStoryMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import { ClientStory } from "./ClientStory";

const metadataInner = getPageMetaTitle({ data: clientStoryMeta });

export const metadata = metadataInner;

export default function page() {
  return <ClientStory />
};


