import { NHSDataMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import NHSDataSecurity from "./NHSDataSecurity";

const metadataInner = getPageMetaTitle({ data: NHSDataMeta });

export const metadata = metadataInner;

export default function page() {
  return <NHSDataSecurity />
};


