import { propertyInvestMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import PropertyAndInvestManagment from "./PropertyAndInvestManagment";

const metadataInner = getPageMetaTitle({ data: propertyInvestMeta });

export const metadata = metadataInner;

export default function page() {
  return <PropertyAndInvestManagment />
};


