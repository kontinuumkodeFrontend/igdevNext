import React from "react";
import Link from "next/link";

const StoryCard = ({storyItem, url}) => {
  let originalText = storyItem?.excerpt?.rendered;
  let newText2 = originalText.replace('[vc_row el_class=&#8221;margin-tp-section&#8221;][vc_column][vc_column_text]', '');
  let newText3 = originalText.replace('[vc_row][vc_column][vc_column_text]', '');
  return (
    <div className="story-card">
      <div className="story-card-img">
       {storyItem?.new_cover_image && <img  loading="lazy"  width="" height=""   src={storyItem?.new_cover_image} alt="new_cover_image"/> }
        <img  loading="lazy"  width="" height=""   src={storyItem?._embedded["wp:featuredmedia"]["0"].source_url} alt="source_url"/>
      </div>
      <div className="story-card-body">
        <h6>Featured</h6>
        <h5 dangerouslySetInnerHTML={{__html: storyItem?.title?.rendered}}></h5>
        {
          window.location.pathname.includes('/data=protection-compliance') ?
          <div dangerouslySetInnerHTML={{__html: newText3}}></div> :
          <div dangerouslySetInnerHTML={{__html: newText2}}></div>
        }
        <Link prefetch={true} href={`/clientstorydetail/${url}/${storyItem?.id}`}>Read The Story</Link>
      </div>
    </div>
  );
};

export default StoryCard;
