import React, { useEffect, useRef, useState } from 'react'
import { people } from '../constants/index.js'
import Card from './Card.jsx'
import Popup from './Popup.jsx'


const UserInput = () => {
  const [users, setUsers] = useState([...people])
  const [selected, setSelected] = useState([])
  const [isVisible,setIsVisible] = useState(false)
  const [search, setSearch] = useState("")
  const [cursor,setCursor] = useState(0)
  
  const inputRef = useRef()
  const containerRef = useRef()
  const popupRef = useRef()
  
  const handleClickOutside = (e) =>{
    if(containerRef.current && containerRef.current.contains(e.target)){
      setIsVisible(true)
    }
    else setIsVisible(false)
  }

  useEffect(() => {
    window.addEventListener("mousedown",handleClickOutside)
  
    return () => {
      window.removeEventListener("mousedown",handleClickOutside)
    }
  }, [])
  
  const handleKeyDown = (e) => {
    if(e.key=='ArrowDown') {
      setCursor(prev=>prev==users.filter((user) => { return user.name.toLowerCase().includes(search)}).length-1?prev:prev+1)
    }
    if(e.key=='ArrowUp') {
      setCursor(prev=>prev==0?0:prev-1)
    }
    if(e.key == 'Enter'){
      popupRef.current.handleClick(users.filter((user) => { return user.name.toLowerCase().includes(search)})[cursor])
      setCursor(0)
    }
    if(e.key == 'Escape'){
      setIsVisible(false)
    }
    if(selected.length>0 && search == "" && e.key=='Backspace') {
      let last = selected[selected.length - 1]
      setUsers([...users,last])
      setSelected(selected.filter((user)=> user!=last))
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    setIsVisible(true)
    setCursor(0)
  }
  return (
    <div className=' w-[80%] border-b-4 border-b-blue-600 p-1 flex flex-wrap gap-3'>
      {
        selected.length>0 && 
        selected.map((user)=>(
          <Card key={user.index} user={user} users={users} setUsers={setUsers} setSelected={setSelected} selected={selected} inputRef={inputRef} setIsVisible={setIsVisible}/>
        ))
      }
      <div ref={containerRef} className='relative min-w-[40%] flex-1'>
        <input  name="search" id="search"
          ref={inputRef}
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder='Add new user... '
          className='px-3 w-full h-[40px] focus:outline-none relative'
          autoComplete="off"
        />
        {
          search.trim()!="" && 
          <Popup ref={popupRef} users={users} isVisible={isVisible} setIsVisible={setIsVisible} inputRef={inputRef} setUsers={setUsers} search={search} setSearch={setSearch} setSelected={setSelected} selected={selected} cursor={cursor}/> 
        }  
      </div>
    </div>
  )
}

export default UserInput