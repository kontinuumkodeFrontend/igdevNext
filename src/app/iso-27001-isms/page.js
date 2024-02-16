import { ISO_ISMS_StoreMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import ISO27001ISMS from "./ISO27001ISMS";

const metadataInner = getPageMetaTitle({ data: ISO_ISMS_StoreMeta });

export const metadata = metadataInner;

export default function page() {
  return <ISO27001ISMS />
};


