import { PenetrationTestServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import PenetrationTestService from "./PenetrationTestService";

const metadataInner = getPageMetaTitle({ data: PenetrationTestServiceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <PenetrationTestService />
};


