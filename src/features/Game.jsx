import {useEffect,useState,useRef} from 'react';import useData from '../hooks/useData';
export default function Game({onNext}){
const d=useData('features/game/game.json');const [b,setB]=useState([]);const [score,setScore]=useState(0);const [msg,setMsg]=useState('');const id=useRef(0);
useEffect(()=>{if(!d||score>=d.target)return;const t=setInterval(()=>{const k=id.current++;setB(x=>[...x.slice(-8),{k,left:Math.random()*80+5,e:d.balloons[k%d.balloons.length]}])},d.spawnMs);return()=>clearInterval(t)},[d,score]);
if(!d)return null;
const pop=x=>{setB(l=>l.filter(y=>y.k!==x.k));setMsg(d.pops[score%d.pops.length]);setScore(s=>s+1)};
const won=score>=d.target;
return <div className="card"><h2>{d.title}</h2><p>{won?d.win:`Pop ${d.target} balloons — ${score}/${d.target}`}</p>
<div className="arena">{!won&&b.map(x=><span key={x.k} className="balloon" style={{left:x.left+'%'}} onClick={()=>pop(x)}>{x.e}</span>)}<p className="pop">{msg}</p></div>
{won&&<button onClick={onNext}>Open my letter ✉️</button>}</div>}
