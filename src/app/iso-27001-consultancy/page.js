import { ISO27001ConsultancyeMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import ISO27001Consultancy from "./ISO27001Consultancy";

const metadataInner = getPageMetaTitle({ data: ISO27001ConsultancyeMeta });

export const metadata = metadataInner;

export default function page() {
  return <ISO27001Consultancy />
};


