import { MergeracquistionMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import MergersAcquistionsRisk from "./MergersAcquistionsRisk";

const metadataInner = getPageMetaTitle({ data: MergeracquistionMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <MergersAcquistionsRisk />
};


