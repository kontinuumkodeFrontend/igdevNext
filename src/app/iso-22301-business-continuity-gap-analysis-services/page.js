import { BusinessConServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import BusinessConService from "./BusinessConService";

const metadataInner = getPageMetaTitle({ data: BusinessConServiceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <BusinessConService />
};


