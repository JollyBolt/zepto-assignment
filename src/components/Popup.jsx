import React from 'react'
import PopupField from './PopupField'

const Popup = ({ users,isFocus,setIsFocus,search,setSearch,setUsers,setSelected,selected }) => {
    return (
        <div className={`${!isFocus?"hidden":""} w-[100%] shadow-2xl border overflow-y-scroll max-h-[300px] absolute bg-white`}
        >
            {
                users.length>0
                ?users.filter((user) => { return user.name.toLowerCase().includes(search)}).map((user) => (
                    <PopupField key={user.index} setIsFocus={setIsFocus} user={user} users={users} setUsers={setUsers} setSearch={setSearch} setSelected={setSelected} selected={selected}/>
                ))
                :<p className='p-3'>No more users </p>
            }
        </div>
    )
}

export default Popup