import {useState} from 'react';import useData,{asset} from '../hooks/useData';
export default function Wishes({onNext}){
const d=useData('features/wishes/wishes.json');const [n,setN]=useState(1);
if(!d)return null;const list=d.wishes;
return <div className="card"><h2>{d.title}</h2>
<div className="gallery">{d.photos.map(p=><img key={p} src={asset(p)} onError={e=>e.target.remove()}/>)}</div>
<div className="wishes">{list.slice(0,n).map((w,k)=><p key={k} className="wish">{w}</p>)}</div>
{n<list.length?<button onClick={()=>setN(n+1)}>Another wish 💌 ({n}/{list.length})</button>:<button onClick={onNext}>Play a little game 🎮</button>}</div>}
