
import { gdprComplianceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import GdprComplianceToolkit from "./GdprComplianceToolkit";

const metadataInner = getPageMetaTitle({ data: gdprComplianceMeta });

export const metadata = metadataInner;

export default function page() {
  return <GdprComplianceToolkit />
};


