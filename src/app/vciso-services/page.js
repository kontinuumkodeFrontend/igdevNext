import { VcisoMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import Vciso from "./Vciso";

const metadataInner = getPageMetaTitle({ data: VcisoMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <Vciso />
};


