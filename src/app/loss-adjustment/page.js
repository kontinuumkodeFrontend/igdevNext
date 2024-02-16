import { insuranceAdjustmentMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import InsuranceAndLossAdjustment from "./InsuranceAndLossAdjustment";

const metadataInner = getPageMetaTitle({ data: insuranceAdjustmentMeta });

export const metadata = metadataInner;

export default function page() {
  return <InsuranceAndLossAdjustment />
};


