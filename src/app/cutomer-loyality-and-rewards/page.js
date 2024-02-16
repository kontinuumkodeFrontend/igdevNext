import { cutomerLoyalityMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CustomerLoyalityRewards from "./CustomerLoyalityRewards";

const metadataInner = getPageMetaTitle({ data: cutomerLoyalityMeta });

export const metadata = metadataInner;

export default function page() {
  return <CustomerLoyalityRewards />
};


