import React from 'react'
import { useQuery } from 'react-query';
import Link from 'next/link';
import { fetchWordPressPosts } from '../../services/Service';
import moment from 'moment';
import { WebShare } from '../../Components/WebShare';
import { usePathname } from "next/navigation";

export const SingleBlogSidebar = ({titleData}) => {
    const pathName = usePathname();
    let pathArr =pathName.split('/');
  
    const BaseUrl = window.location.href
    const { data, error, isLoading } = useQuery('posts', fetchWordPressPosts);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
  return (
    <div className='blog_sm_list'>
        <div className='clr_hdr sidebar_icon'><b>Recent Posts</b> <WebShare url={BaseUrl} title={titleData}/></div> 
        {data?.map((item, index) => {
            if(index < 10){
                if(item?.id.toString() !== pathArr[2]){                   
                    return (
                        <Link prefetch={true} href={`/blogdetail/${item?.id}`} className="blog_sm_card d-flex w-100" key={index}>
                          <div className='blog_sm_ctnt'>
                              <p className='mb-0'><strong>{item?.title?.rendered}</strong></p>
                              <small>{moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}</small>
                          </div>
                          <figure>
                              <img  loading="lazy"  width="" height=""   src={item?._embedded["wp:featuredmedia"]["0"].source_url} className='w-100' alt='source_url' />
                          </figure>                  
                        </Link>
                      );
                }    else{} 
            }  
        })}
    </div>
  )
}
