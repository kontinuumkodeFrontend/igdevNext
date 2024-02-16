import { informationGovernanceTrainingMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import InfoGovTrainingCourse from "./InfoGovTrainingCourse";

const metadataInner = getPageMetaTitle({ data: informationGovernanceTrainingMeta });

export const metadata = metadataInner;

export default function page() {
  return <InfoGovTrainingCourse />
};


