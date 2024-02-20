import { CyberEssenCertiServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CyberEssenCertiService from "./CyberEssenCertiService";

const metadataInner = getPageMetaTitle({ data: CyberEssenCertiServiceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <CyberEssenCertiService />
};


