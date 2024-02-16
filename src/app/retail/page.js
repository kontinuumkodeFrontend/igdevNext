import { retailMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import RetailAndFMCG from "./RetailAndFMCG";

const metadataInner = getPageMetaTitle({ data: retailMeta });

export const metadata = metadataInner;

export default function page() {
  return <RetailAndFMCG />
};


