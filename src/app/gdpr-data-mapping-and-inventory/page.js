import { GDPRDataMappingAndInventoryMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import GDPRDataMappingAndInventory from "./GDPRDataMappingAndInventory";

const metadataInner = getPageMetaTitle({ data: GDPRDataMappingAndInventoryMeta });

export const metadata = metadataInner;

export default function page() {
  return <GDPRDataMappingAndInventory />
};


