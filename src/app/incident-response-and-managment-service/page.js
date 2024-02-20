import { IncidentResponseAndManagementServicesMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import IncidentResponseAndManagementServices from "./IncidentResponseAndManagementServices";

const metadataInner = getPageMetaTitle({ data: IncidentResponseAndManagementServicesMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <IncidentResponseAndManagementServices />
};


