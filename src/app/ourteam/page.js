
import { ourTeamMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import OurLeadership from "./OurLeadership";

const metadataInner = getPageMetaTitle({ data: ourTeamMeta });

export const metadata = metadataInner;

export default function page() {
  return <OurLeadership />
};


