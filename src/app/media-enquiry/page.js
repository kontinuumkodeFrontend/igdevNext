import { MediaMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import MediaEnquiry from "./MediaEnquiry";

const metadataInner = getPageMetaTitle({ data: MediaMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <MediaEnquiry />
};


