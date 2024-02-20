import { BiometricDataMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import BiometricDataProtection from "./BiometricDataProtection";


const metadataInner = getPageMetaTitle({ data: BiometricDataMeta });

export const metadata = metadataInner;

export default function page() {
  return <BiometricDataProtection />
};


