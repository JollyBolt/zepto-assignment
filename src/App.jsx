import './App.css'
import UserInput from './components/UserInput'



function App() {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-[70px]'>
        <p className='uppercase text-3xl mb-10'>Pick User</p>
        <UserInput/>
      </div>
    </>
  )
}

export default App
