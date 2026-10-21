import {useState} from 'react';import useData from '../hooks/useData';
export default function Cake({onNext,cfg}){
const d=useData('features/cake/cake.json');const [out,setOut]=useState(false);
if(!d)return null;
return <div className="card"><h2>{out?d.after:d.before}</h2>
<div className="cake">
{d.layers.map((l,k)=><div key={k} className="layer" style={{background:l.color,width:l.width,bottom:l.bottom,animationDelay:k*1.1+'s'}}/>)}
<div className="candles" style={{animationDelay:d.layers.length*1.1+'s'}}>{d.candles.map((c,k)=><div key={k} className="candle"><i className={out?'flame off':'flame'}/>{c}</div>)}</div></div>
<div className="big" style={{animationDelay:d.layers.length*1.1+.5+'s'}}>Welcome to your 20's 🎉</div>
{!out?<button className="late" onClick={()=>setOut(true)}>Make a wish & blow 💨</button>:<><div className="rain">{[...Array(30)].map((_,k)=><span key={k} style={{left:k*3.4+'%',animationDelay:k*.1+'s'}}>🎊</span>)}</div><button onClick={onNext}>Read your wishes →</button></>}</div>}
