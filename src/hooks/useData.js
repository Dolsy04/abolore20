import {useEffect,useState} from 'react';
export const asset=p=>import.meta.env.BASE_URL+p;
export default function useData(path){const [d,setD]=useState(null);
useEffect(()=>{fetch(asset(path)).then(r=>r.json()).then(setD).catch(()=>setD({}))},[path]);return d}
