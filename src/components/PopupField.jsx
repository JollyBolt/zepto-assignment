import React from 'react'

const PopupField = ({user,users,setIsFocus,setUsers,setSearch,setSelected,selected}) => {
    const handleClick = () =>{
        setUsers(users.filter((item)=>(item.index!==user.index)))
        setSelected([...selected,user])
        setSearch("")
        setIsFocus(false)
    }
    return (
        <div
        className='flex items-center justify-between gap-4 hover:bg-gray-300 p-3 pr-5 cursor-pointer'
        onClick={handleClick}>
            <div className='flex items-center gap-3'>
                <img
                    src={`https://ui-avatars.com/api/?name=${user.name}&background=FFC300`}
                    alt="avatar"
                    className='rounded-full w-10 border-2 border-black' />
                <p>{user.name}</p>
            </div>
            <p>{user.email}</p>
        </div>
    )
}

export default PopupField