import CloseIcon from '@mui/icons-material/Close';

const Card = ({ user,users,setUsers,setSelected,selected }) => {
  const handleDelete = () =>{
    setSelected(selected.filter((item)=>(item.index!==user.index)))
    setUsers([...users,user])
  }
  return (
    <div className='flex items-center gap-2 bg-gray-400 rounded-3xl pr-2'  >
      <img
        src={`https://ui-avatars.com/api/?name=${user.name}&background=FFC300`}
        alt="avatar"
        className='rounded-full w-10 border-2 border-black' />
      {user.name}
      <button
        onClick={handleDelete}
        className='rounded-full hover:bg-gray-500 p-1'
      >
        <CloseIcon />
      </button>
    </div>
  )
}

export default Card