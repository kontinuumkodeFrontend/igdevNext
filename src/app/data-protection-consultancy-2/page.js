import { DataProConServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DataProConService from "./DataProConService";

const metadataInner = getPageMetaTitle({ data: DataProConServiceMeta });

export const metadata = metadataInner;

export default function page() {
  return <DataProConService />
};


