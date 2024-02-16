import { iso27001ToolkitMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import ISO27001Store from "./ISO27001Store";

const metadataInner = getPageMetaTitle({ data: iso27001ToolkitMeta });

export const metadata = metadataInner;

export default function page() {
  return <ISO27001Store />
};


