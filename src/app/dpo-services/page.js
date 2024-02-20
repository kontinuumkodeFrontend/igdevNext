import { DpoServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DpoService from "./DpoService";

const metadataInner = getPageMetaTitle({ data: DpoServiceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <DpoService />
};


