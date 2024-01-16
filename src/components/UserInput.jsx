import React, { useState } from 'react'
import { people } from '../constants'
import Card from './Card.jsx'
import Popup from './Popup'


const UserInput = () => {
  const [users, setUsers] = useState([...people])
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState("")
  const [isFocus,setIsFocus] =useState(false)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className=' w-[80%] border-b-4 border-b-blue-600 p-1 flex flex-wrap gap-3'>
      {
        selected.length>0 && 
        selected.map((user)=>(
          <Card key={user.index} user={user} users={users} setUsers={setUsers} setSelected={setSelected} selected={selected} />
        ))
      }
      <div className='relative min-w-[40%]'
          // onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}>
        <input  name="search" id="search"
          value={search}
          onChange={handleChange}
          placeholder='Add new user... '
          className='px-3 w-full h-[40px] focus:outline-none relative'
          autoComplete="new-password"
        />  
        <Popup users={users} isFocus={isFocus} setIsFocus={setIsFocus} setUsers={setUsers} search={search} setSearch={setSearch} setSelected={setSelected} selected={selected}/>
        
      </div>

    </div>
  )
}

export default UserInput