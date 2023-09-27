
import { useCallback, useEffect,  useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (number) str += "0123456789"
    if (characters) str += "!@#$%^&*)(_+[}]}"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, characters, setPassword])
  
  useEffect(() => {
    passwordGenerator()
  }, [length, number, characters, passwordGenerator])

  return (
    <>
      <div className='h-screen flex justify-center items-center'>

        <div className='w-full bg-red-300 max-w-md mx-auto shadow-md rounded-md px-4 py-3 my-8 text-white justify-center items-center'>

          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden  mb-4'>
            <input type='text' value={password} className='text-amber-500 outline-none w-full px-3 py-1' placeholder='password' readOnly  />
          </div>

          <div className='flex text-sm gap-x-2'>

            <div className='flex items-center gap-x-1'>
              <input type='range' min={7} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
              <label className='text-black'>Length:{length}</label>
            </div>

            <div className='flex items-center gap-x-1' >
              <input type='checkbox' defaultChecked={number} id='number' onChange={() => { setNumber((prev) => !prev); }} />
              <label className='text-black'>Numbers</label>
            </div>

            <div className='flex items-center gap-x-1' >
              <input type='checkbox' defaultChecked={characters} id='Characters' onChange={() => { setCharacters((prev) => !prev); }} />
              <label className='text-black'>Characters</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
