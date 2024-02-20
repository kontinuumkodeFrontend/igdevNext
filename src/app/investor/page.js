import { InvestorMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import Investor from "./Investor";

const metadataInner = getPageMetaTitle({ data: InvestorMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <Investor />
};


