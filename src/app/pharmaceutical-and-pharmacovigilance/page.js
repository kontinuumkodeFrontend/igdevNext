import { PharmaceuticalandPharmacovigilanceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import PharmaceuticalandPharmacovigilance from "./PharmaceuticalandPharmacovigilance";

const metadataInner = getPageMetaTitle({ data: PharmaceuticalandPharmacovigilanceMeta });

export const metadata = metadataInner;

export default function page() {
  return <PharmaceuticalandPharmacovigilance />
};


