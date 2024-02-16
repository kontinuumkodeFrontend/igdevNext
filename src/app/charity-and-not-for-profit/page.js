import { charityMeta } from "../services/metaTags";
import { getPageMetaTitle } from "../Components/PageMetaTitle";
import CharityAndNotforprofit from "./CharityAndNotforprofit";

const metadataInner = getPageMetaTitle({ data: charityMeta });

export const metadata = metadataInner;

export default function page() {
  return <CharityAndNotforprofit />
};


