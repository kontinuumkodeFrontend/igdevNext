import { dpoHealthCareMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DPOHealthCare from "./DPOHealthCare";

const metadataInner = getPageMetaTitle({ data: dpoHealthCareMeta });

export const metadata = metadataInner;

export default function page() {
  return <DPOHealthCare />
};


