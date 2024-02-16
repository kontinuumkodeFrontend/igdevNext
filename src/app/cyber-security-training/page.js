import { cyberSecurityRiskCourseMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CyberSecCourse from "./CyberSecCourse";

const metadataInner = getPageMetaTitle({ data: cyberSecurityRiskCourseMeta });

export const metadata = metadataInner;

export default function page() {
  return <CyberSecCourse />
};


