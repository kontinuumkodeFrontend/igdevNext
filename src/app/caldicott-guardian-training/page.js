import { caldicottGuardionMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CaldiGuardianCourse from "./CaldiGuardianCourse";

const metadataInner = getPageMetaTitle({ data: caldicottGuardionMeta });

export const metadata = metadataInner;

export default function page() {
  return <CaldiGuardianCourse />
};


