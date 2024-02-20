import { GdprNhsConsultancyMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import GdprNhsConsultancy from "./GdprNhsConsultancy";

const metadataInner = getPageMetaTitle({ data: GdprNhsConsultancyMeta });

export const metadata = metadataInner;

export default function page() {
  return <GdprNhsConsultancy />
};


