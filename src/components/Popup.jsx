import React, { forwardRef, useImperativeHandle } from 'react'
import PopupField from './PopupField'

const Popup = forwardRef( ({ users,search,setSearch,setUsers,setSelected,selected,inputRef,isVisible,cursor},ref) => {

    useImperativeHandle(ref,()=>{
        return {
            handleClick:handleClick
        }
    })

    const handleClick = (user) =>{
        setUsers(users.filter((item)=>(item.index!==user.index)))
        setSelected([...selected,user])
        setSearch("")
        inputRef.current.focus()
    }
    return (
        <div className={`${isVisible?"visible":"invisible"}  shadow-2xl border overflow-y-scroll max-h-[300px] absolute bg-white`}
        >
            {
                users.length>0
                ?users.filter((user) => { return user.name.toLowerCase().includes(search)}).map((user,index) => (
                    <PopupField key={user.index} index={index} user={user} handleClick={handleClick} cursor={cursor}/>
                ))
                :<p className='p-3'>No more users </p>
            }
        </div>
    )
})

export default Popup