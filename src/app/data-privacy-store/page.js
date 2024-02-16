import { dataPrivacyStoreMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import ISO27001ISMS from "./ISO27001ISMS";

const metadataInner = getPageMetaTitle({ data: dataPrivacyStoreMeta });

export const metadata = metadataInner;

export default function page() {
  return <ISO27001ISMS />
};


