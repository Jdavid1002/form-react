import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [Text, setText] = useState('')

  return (
    <div>
      {Text}
      <br />
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default App
