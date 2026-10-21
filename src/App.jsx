import {useState} from 'react';import useData from './hooks/useData';
import Cake from './features/Cake';import Wishes from './features/Wishes';import Game from './features/Game';import Epistle from './features/Epistle';import Questions from './features/Questions';
export default function App(){
const cfg=useData('data/config.json');const [i,setI]=useState(0);
if(!cfg)return <p className="load">🎈</p>;
const next=()=>setI(n=>n+1);
const steps=[
<div className="card intro"><h1>Hey {cfg.name} 💗</h1><p>{cfg.intro}</p><button onClick={next}>Open your surprise 🎁</button></div>,
<Cake onNext={next} cfg={cfg}/>,<Wishes onNext={next}/>,<Game onNext={next}/>,<Epistle onNext={next}/>,<Questions cfg={cfg}/>];
return <main><div className="bg">{[...Array(18)].map((_,k)=><span key={k} style={{left:k*5.6+'%',animationDelay:k*.7+'s'}}>{['✨','💗','🎈','🌸'][k%4]}</span>)}</div>{steps[i]}</main>}
