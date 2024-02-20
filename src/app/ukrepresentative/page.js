import { UkrepresentativeMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import UKRepresentative from "./UKRepresentative";

const metadataInner = getPageMetaTitle({ data: UkrepresentativeMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <UKRepresentative />
};


