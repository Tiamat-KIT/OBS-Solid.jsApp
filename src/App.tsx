/* import { createSignal } from 'solid-js' */
/* import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg' */
import { ObsEventListener } from './ObsEventListener'
import "./tailwind.css"

function App() {
  /* const [count, setCount] = createSignal(0) */

  if(typeof window.obsstudio === "undefined"){
    console.error("OBSのブラウザソース環境下で動作していません")
    return <p class='text-2xl text-center font-bold'>not OBS</p>
  }

  const obs = window.obsstudio

  return (
    <>
      <h3>return {obs.pluginVersion}</h3>
      <ObsEventListener obs={obs} />
    </>
  )
}

export default App
