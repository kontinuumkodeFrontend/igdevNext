import { dataProtectionOfficerMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DpoTrainingCourse from "./DpoTrainingCourse";

const metadataInner = getPageMetaTitle({ data: dataProtectionOfficerMeta });

export const metadata = metadataInner;

export default function page() {
  return <DpoTrainingCourse />
};


