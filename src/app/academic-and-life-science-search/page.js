import { academicMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import AcademicLifeScience from "./AcademicLifeScience";

const metadataInner = getPageMetaTitle({ data: academicMeta });

export const metadata = metadataInner;

export default function page() {
  return <AcademicLifeScience />
};


