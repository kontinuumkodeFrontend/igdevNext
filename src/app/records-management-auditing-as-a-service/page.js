import { recordsManagementAuditMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import RecordService from "./RecordService";

const metadataInner = getPageMetaTitle({ data: recordsManagementAuditMeta });

export const metadata = metadataInner;

export default function page() {
  return <RecordService />
};


