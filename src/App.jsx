import { useState,useEffect } from 'react'

export default function App(){
  const [recipes,setRecipes]=useState([])
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')

  const load=async()=>setRecipes(await (await fetch('/api/recipes')).json())
  useEffect(()=>{load()},[])

  const add=async()=>{
    if(!title.trim()||!desc.trim()) return
    await fetch('/api/recipes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,desc})})
    setTitle('');setDesc('');load()
  }

  return <div style={{padding:20}}>
    <h2>Каталог рецептов</h2>
    <input placeholder='Название' value={title} onChange={e=>setTitle(e.target.value)}/>
    <br/>
    <textarea placeholder='Описание' value={desc} onChange={e=>setDesc(e.target.value)}/>
    <br/>
    <button onClick={add}>Добавить</button>

    {recipes.map(r=><div key={r.id} style={{border:'1px solid',padding:10,marginTop:10}}>
      <h3>{r.title}</h3><p>{r.desc}</p>
    </div>)}
  </div>
}