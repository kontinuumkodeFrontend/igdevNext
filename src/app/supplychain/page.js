import { SupplychainMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import SupplyChain from "./SupplyChain";

const metadataInner = getPageMetaTitle({ data: SupplychainMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <SupplyChain />
};


