import { hippaMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import HIPPA from "./HIPPA";

const metadataInner = getPageMetaTitle({ data: hippaMeta });

export const metadata = metadataInner;

export default function page() {
  return <HIPPA />
};


