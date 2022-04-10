import React,{useState,useEffect} from 'react';

const useFetch=(url)=>{

    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null);
    const [data,setData]=useState([]);

    useEffect(()=>{

        setLoading(true);

        axios.get(url).then(res=>{
            setLoading(false);
            setData(res.data);
        }).catch(err=>{
            setLoading(false);
            setError(err.message);
        })

    },[]);

    return [loading,error,data];
}

export default useFetch;