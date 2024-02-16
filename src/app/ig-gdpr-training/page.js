import { gdprTrainingOnlineMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import GdprTrainingCourse from "./GdprTrainingCourse";

const metadataInner = getPageMetaTitle({ data: gdprTrainingOnlineMeta });

export const metadata = metadataInner;

export default function page() {
  return <GdprTrainingCourse />
};


