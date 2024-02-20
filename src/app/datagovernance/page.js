import { DataGovernanceMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import DataGovernance from "./DataGovernance";

const metadataInner = getPageMetaTitle({ data: DataGovernanceMeta });

export const metadata = metadataInner;

export default function CyberSecAudit1() {
  return <DataGovernance />
};


