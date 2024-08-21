import { createSignal } from 'solid-js'
/* import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg' */
import './App.css'

function App() {
  /* const [count, setCount] = createSignal(0) */

  if(typeof window.obsstudio === "undefined"){
    console.error("OBSのブラウザソース環境下で動作していません")
  }

  const obs = window.obsstudio

  return (
    <>
      <p>return {obs.pluginVersion}</p>
    </>
  )
}

export default App
