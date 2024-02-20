import { InfoGovConServiceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import InfoGovConService from "./InfoGovConService";

const metadataInner = getPageMetaTitle({ data: InfoGovConServiceMeta });

export const metadata = metadataInner;

export default function page() {
  return <InfoGovConService />
};


