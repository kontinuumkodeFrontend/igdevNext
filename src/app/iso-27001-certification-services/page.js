import { IsoCertiServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import IsoCertiService from "./IsoCertiService";

const metadataInner = getPageMetaTitle({ data: IsoCertiServiceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <IsoCertiService />
};


