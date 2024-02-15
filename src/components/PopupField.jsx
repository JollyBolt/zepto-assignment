import React, { useEffect,useState, useRef } from 'react'

const PopupField = ({user,handleClick,cursor,index}) => {
    const [id,setId] = useState(0)

    const ref = useRef()

    const handleScrollUp = () =>{
        if(ref.current)
        ref.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
          })
    }
    const handleScrollDown = () =>{
        if(ref.current)
        ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
    }

    useEffect(()=>{
        if(id<cursor){
            setId(cursor)
            handleScrollDown()
        }
        else {
            setId(cursor)
            handleScrollUp()
        }
    },[cursor])

    return (
        <div
        ref={index === id ? ref : null}
        className={`flex items-center justify-between ${cursor==index?"bg-gray-300":""} gap-10 hover:bg-gray-300 p-3 pr-5 cursor-pointer`}
        onClick={()=>handleClick(user)}>
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