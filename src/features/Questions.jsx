import {useState} from 'react';import useData from '../hooks/useData';
export default function Questions({cfg}){
const d=useData('features/questions/questions.json');const [q,setQ]=useState(0);const [ans,setAns]=useState([]);const [note,setNote]=useState('');
if(!d)return null;
const done=q>=d.questions.length;
const pick=o=>{setAns([...ans,{q:d.questions[q].text,a:o,note}]);setNote('');setQ(q+1)};
const link=()=>`https://wa.me/${cfg.myWhatsApp}?text=`+encodeURIComponent(`Hi ${cfg.myName||''}, my answers 💗\n\n`+ans.map(x=>`Q: ${x.q}\nA: ${x.a}${x.note?` — ${x.note}`:''}`).join('\n\n'));
if(done)return <div className="card"><h2>{d.thanks}</h2><a className="btn" href={link()} target="_blank" rel="noreferrer">Send my answers 💌</a></div>;
const c=d.questions[q];
return <div className="card"><p>Question {q+1} of {d.questions.length}</p><h2>{c.text}</h2>
{c.options.map(o=><button key={o} onClick={()=>pick(o)}>{o}</button>)}
<textarea placeholder="Anything you want to add? (optional)" value={note} onChange={e=>setNote(e.target.value)}/></div>}
