import { SpeakerMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import SpeakerEnquiry from "./SpeakerEnquiry";

const metadataInner = getPageMetaTitle({ data: SpeakerMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <SpeakerEnquiry />
};


