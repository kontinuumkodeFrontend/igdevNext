import { climateChangeMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import ClimateChangeAndEnviorment from "./ClimateChangeAndEnviorment";

const metadataInner = getPageMetaTitle({ data: climateChangeMeta });

export const metadata = metadataInner;

export default function page() {
  return <ClimateChangeAndEnviorment />
};


