import { mergeAquisitionMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import UnlockingSeamlessMergersAcquisitions from "./UnlockingSeamlessMergersAcquisitions";

const metadataInner = getPageMetaTitle({ data: mergeAquisitionMeta });

export const metadata = metadataInner;

export default function page() {
  return <UnlockingSeamlessMergersAcquisitions />
};


