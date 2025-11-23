import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+=-~`{}"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)

    }
    setPassword(pass)


  }, [length, numberAllowed, characterAllowed, setPassword])

 const copyPassword = useCallback(()=>{
 passwordRef.current?.select()
  window.navigator.clipboard.writeText(password);
  window.alert("password copied!!");
 },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-gray-400 text-center'>
        <h1 className='text-white text-center'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white '
            placeholder='Password'
            readOnly
            ref={passwordRef}


          />

          <button className='outline-none bg-amber-500 text-black px-3 py-0.5 shrink-0 cursor-pointer'
          onClick={copyPassword}
          >copy</button>
        </div>

         <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={100}
            value={length}

            className='cursor-pointer'
            onChange={(e)=>setlength(e.target.value)}
            />

            <label className='ms-2 text-sm font-medium text-white dark:text-gray-300' > length:{length}</label>

          </div>


         <div class="flex items-center ">
          <input
            type="checkbox" 
            defaultChecked={numberAllowed} 
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="my-checkbox" class="ms-2 text-sm font-medium text-white dark:text-gray-300">
            Numbers
          </label>
        </div>

        <div class="flex items-center ">
          <input
            id="characterInput"
            defaultChecked={characterAllowed}
            type="checkbox"
            onChange={()=>{
              setCharacterAllowed((prev)=>!prev)
            }}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="my-checkbox" class="ms-2 text-sm font-medium text-white dark:text-gray-300">
            Characters
          </label>
        </div>


         </div>
      </div>
    </>
  )
}

export default App
