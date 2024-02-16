import { dpoTrainingForPharmaMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DPOTrainingforPharma from "./DPOTrainingforPharma";

const metadataInner = getPageMetaTitle({ data: dpoTrainingForPharmaMeta });

export const metadata = metadataInner;

export default function page() {
  return <DPOTrainingforPharma />
};


