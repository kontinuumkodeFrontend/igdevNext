import { DPforPharmaMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DPforPharma from "./DPforPharma";

const metadataInner = getPageMetaTitle({ data: DPforPharmaMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <DPforPharma />
};


