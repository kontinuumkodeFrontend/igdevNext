import { DtacServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DtacService from "./DtacService";


const metadataInner = getPageMetaTitle({ data: DtacServiceMeta });

export const metadata = metadataInner;

export default function page() {
  return <DtacService />
};


