
import { executiveResourceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import ExecutiveResourcing from "./ExecutiveResourcing";

const metadataInner = getPageMetaTitle({ data: executiveResourceMeta });

export const metadata = metadataInner;

export default function page() {
  return <ExecutiveResourcing />
};


