
import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
        <button onClick={() => setcolor("red")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"red"}}>
          red
        </button>
        <button onClick={() => setcolor("coral")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"coral"}}>
          coral
        </button>
        <button onClick={() => setcolor("green")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"green"}}>
          green
        </button>
        <button onClick={() => setcolor("blue")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"blue"}}>
          blue
        </button>
        <button onClick={() => setcolor("gray")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"gray"}}>
          gray
        </button>
        <button onClick={() => setcolor("chocolate")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"chocolate"}}>
          chocolate
        </button>
        <button onClick={() => setcolor("pink")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"pink"}}>
          pink
        </button>
        <button onClick={() => setcolor("black")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"black"}}>
          black
        </button>
        <button onClick={() => setcolor("purple")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"purple"}}>
          purple
        </button>
        <button onClick={() => setcolor("violet")} 
          className='outline-none px-4 px-1 rounded-full text-white shadow-lg ' 
          style={{backgroundColor:"violet"}}>
          violet
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
