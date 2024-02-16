import { gdprTrainingNHSMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import GdprNhsTrainingCourse from "./GdprNhsTrainingCourse";

const metadataInner = getPageMetaTitle({ data: gdprTrainingNHSMeta });

export const metadata = metadataInner;

export default function page() {
  return <GdprNhsTrainingCourse />
};


