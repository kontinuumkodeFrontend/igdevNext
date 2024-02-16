import {toast } from 'react-toastify';
import { BaseUrl, STANDARD_FORMAT } from './Url';
import { useQuery } from 'react-query';
import axios from 'axios';

// const BaseUrl = process.env.REACT_APP_BASE_URL
// const BaseUrl = BaseUrl

export const get = async (url , setData, setIsLoading) => {    
    setIsLoading(true);
    var headers;
    headers = {
        "Content-Type" : "application/json",
    };
    
    const completeUrl = BaseUrl + url + STANDARD_FORMAT ;
    try {
        const res = await fetch(completeUrl,{
           method:"GET",
           headers
        });
        const response = await res.json();
        let httpsStatus =res.status
        
        if(httpsStatus === 200){
            setData(response?.acf);            
        }
        else if(httpsStatus === 401){
            toast.error('Please Login again');
            localStorage?.clear()
        }else{
            toast.error(response?.message);
        }
        setIsLoading(false)
    }catch(error){
        setIsLoading(false)
        return error ;
    }
}

export const getAll = async (url , setData, setIsLoading) => {    
    setIsLoading(true);
    var headers;
    headers = {
        "Content-Type" : "application/json",
    };
    
    const completeUrl = BaseUrl + url + STANDARD_FORMAT ;
    try {
        const res = await fetch(completeUrl,{
           method:"GET",
           headers
        });
        const response = await res.json();
        let httpsStatus =res.status
        
        if(httpsStatus === 200){
            setData(response);            
        }
        else if(httpsStatus === 401){
            toast.error('Please Login again');
            localStorage?.clear()
        }else{
            toast.error(response?.message);
        }
        setIsLoading(false)
    }catch(error){
        setIsLoading(false)
        return error ;
    }
}

export const useCustomGet = (url) => {
  return useQuery(['customGet', url], async () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    const completeUrl = BaseUrl + url + STANDARD_FORMAT;
    const res = await fetch(completeUrl, {
      method: 'GET',
      headers,
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const response = await res.json();

    return response?.acf;
  }, {
    staleTime: 600000,
  });
};


/* Post get Api */
export const postGet = async (url , setData, page, ...other) => {    
    const [data,setIsLoading, ...otherArgs] = other;
    setIsLoading(true)
    var headers;
    headers = {
        "Content-Type" : "application/json",
    };
    
    const completeUrl = BaseUrl + url + `page=${page}`;
    try {
        const res = await fetch(completeUrl,{
           method:"GET",
           headers
        });
        const response = await res.json();
        let httpsStatus =res.status
        if(httpsStatus === 200){
          let totalData = data.concat(response)
          setData(totalData);            
          setIsLoading(false)
        }
        else if(httpsStatus === 401){
            toast.error('Please Login again');
            localStorage?.clear();
            setIsLoading(false)
        }else{
            toast.error(response?.message);
            setIsLoading(false)
        }
    }catch(error){
        setIsLoading(false)
        return error ;
    }
} 


export const fetchWordPressPosts = async () => {
    const response = await axios.get(BaseUrl+'posts?_embed');
    return response.data;
};

export const pdfDownload = async (url, body, setData, setLoader) => {
    setLoader(true);
    const headers = {
        "Content-Type": "application/json",
    };

    try {
        const res = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body), 
        });

        if (res.status === 200) {
            setLoader(false);
            const response = await res.json();
            setData(response.download_link);
           
        } else {
            setLoader(false);
            toast.error('Unable to fetch the PDF.');
        }
    } catch (error) {
        console.error("Error:", error);
        setLoader(false);
        toast.error('An error occurred. Please try again later.');
        throw error;
    }
};



export const post = async (url , body,setData) => {
    // setIsLoading(true);
    var token = localStorage.getItem("token");
    token = await JSON.parse(token);

    var headers;
    if(token === "" || token === null || token === undefined ){
        headers ={
            "Content-Type" : "application/json",
        };
    }
    else{
        headers = {
            "Content-Type" : "application/json",
             'x-access-token': token,
        };
    }

    const completeUrl = BaseUrl + url ;

    try {        
        const res = await fetch(completeUrl,{
           method:"POST",
           headers,
           body,
        });

        const response = await res.json();
        let httpsStatus =res.status
        if(httpsStatus === 200){
            setData(response?.data);            
        }
        else if(httpsStatus === 401){
            toast.error('Please Login again');
            localStorage?.clear()
        }else{
            toast.error(response?.message);
        }
    }catch(error){
        return error ;
    }
} 

export const useCustomQuery = (url, page) => {
  return useQuery(['customData', url, page], async () => {
    const headers = {
      'Content-Type': 'application/json',
    };

    const completeUrl = BaseUrl + url + `?_embed&page=${page}&acf`;
    const res = await fetch(completeUrl, {
      method: 'GET',
      headers,
    });

    if (!res.ok) {
      throw new Error('Network response was not ok 5235');
    }

    const response = await res.json();
    const promises = response.map(async (item) => {
      const imageId = item.acf?.story_card_cover_image; 
      if (imageId) {
        const imageUrlResponse = await fetch(
          `${BaseUrl}media/${imageId}`
        );
        const imageUrlData = await imageUrlResponse.json();
        if (imageUrlData && imageUrlData.source_url) {
          item.new_cover_image = imageUrlData.source_url;
        } else {
          
          item.new_cover_image = '';
        }
      } else {
        item.new_cover_image = '';
      }
      return item;
    });

    return Promise.all(promises);
  });
};

  

  

export const clientDetailsGet = async (url , setData, setIsLoading, id) => {    
    setIsLoading(true);
    var headers;
    headers = {
        "Content-Type" : "application/json",
    };
    
    const completeUrl = BaseUrl + url + `/${id}`;
    try {
        const res = await fetch(completeUrl,{
           method:"GET",
           headers
        });
        const response = await res.json();
        let httpsStatus =res?.status
        if(httpsStatus === 200){
            setData(response);           
        }
        else if(res?.status === 400){
            toast.error('No more records');
        }else if(httpsStatus === 401){
            toast.error('Please Login again');
            localStorage?.clear()
        }else{
            toast.error(response?.message);
        }
        setIsLoading(false);
    }catch(error){
        return setIsLoading(false);
    }
}  


/* Common Out Url*/
export const commonGetOutUrl = async (url , setData, page, setIsLoading, dataList) => {    
    setIsLoading(true);
    var headers;
    headers = {
        "Content-Type" : "application/json",
    };
    
    try {
        const res = await fetch(url,{
           method:"GET",
           headers
        });
        const response = await res.json();
        let httpsStatus =res?.status
        if(httpsStatus === 200){
            let arr = dataList?.concat(response);
            setData(arr);           
        }
        else if(res?.status === 400){
            toast.error('No more records');
        }else if(httpsStatus === 401){
            toast.error('Please Login again');
            localStorage?.clear()
        }else{
            toast.error(response?.message);
        }
        setIsLoading(false);
    }catch(error){
        return setIsLoading(false);
    }
} 

/* Client Stories */
export const clientGetHome = async (url , setData, page, setIsLoading) => {    
    setIsLoading(true);
    var headers;
    headers = {
        "Content-Type" : "application/json",
    };
    
    const completeUrl = BaseUrl + url + `?_embed&page=${page}`;
    try {
        const res = await fetch(completeUrl,{
           method:"GET",
           headers
        });
        const response = await res.json();
        let httpsStatus =res?.status
        if(httpsStatus === 200){
            setData(response);           
        }
        else if(res?.status === 400){
            toast.error('No more records');
        }else if(httpsStatus === 401){
            toast.error('Please Login again');
            localStorage?.clear()
        }else{
            toast.error(response?.message);
        }
        setIsLoading(false);
    }catch(error){
        return setIsLoading(false);
    }
}  

/* Form Data contactFormApi */
export const contactFormApi = async (url , formdata, setIsLoading) => {
    setIsLoading(true);
     axios({
      url,
      method: "POST",
      headers: {
        "Content-Type" : "multipart/form-data",
      },
      data: formdata,
    }).then((res) => {
        setIsLoading(false);
        toast.success('Submit Successfully');
    })
}

{/* enquiry 
<div  className="cstm-captcha-wrap col-md-7">
[recaptcha]
</div> */}

{/*
REQUEST PROPOSAL

*/}