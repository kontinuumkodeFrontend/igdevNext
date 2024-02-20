import { EurepresentativeMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import EURepresentative from "./EURepresentative";

const metadataInner = getPageMetaTitle({ data: EurepresentativeMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <EURepresentative />
};


