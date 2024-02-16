import { dataAssestOwnerMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DAOTrainingOnline from "./DAOTrainingOnline";

const metadataInner = getPageMetaTitle({ data: dataAssestOwnerMeta });

export const metadata = metadataInner;

export default function page() {
  return <DAOTrainingOnline />
};


