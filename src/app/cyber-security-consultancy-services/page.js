import { CyberSecConServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CyberSecConService from "./CyberSecConService";

const metadataInner = getPageMetaTitle({ data: CyberSecConServiceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <CyberSecConService />
};


