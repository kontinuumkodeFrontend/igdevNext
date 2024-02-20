import { CsoServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CsoService from "./CsoService";

const metadataInner = getPageMetaTitle({ data: CsoServiceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <CsoService />
};


