import {useEffect,useState} from 'react';import useData from '../hooks/useData';
export default function Epistle({onNext}){
const d=useData('features/epistle/letter.json');const [n,setN]=useState(0);
useEffect(()=>{if(!d||n>=d.lines.length)return;const t=setTimeout(()=>setN(n+1),d.lineMs);return()=>clearTimeout(t)},[d,n]);
if(!d)return null;
return <div className="card letter"><h2>{d.title}</h2>{d.lines.slice(0,n).map((l,k)=><p key={k} className="fade">{l}</p>)}
{n>=d.lines.length&&<><p className="sign fade">{d.sign}</p><button onClick={onNext}>I have two questions… 🥺</button></>}</div>}
