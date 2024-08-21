import { createEffect,createSignal } from "solid-js"

export const ObsEventListener = ({obs}: {obs:typeof window.obsstudio}) => {
    const [scene,setScene] = createSignal<string>("")
    const [scenes,setScenes] = createSignal<Array<string>>([])

    createEffect(() => {
        obs.getControlLevel((level) => {
            console.log(`OBS Studio Control Level: ${level}`)
        })
        window.addEventListener("obsSceneChanged",(event) => {
            setScene(event.detail.name)
        })

        obs.getScenes(scenes => setScenes(scenes))
    },[])

    const pickRandomScene = () => {
        const index = Math.floor(Math.random() * scenes.length);
        return scenes()[index]
      }
    
      const changeSceneRandom = () => {
        obs.setCurrentScene(pickRandomScene());
      }

    return (
        <>
            <p>シーン名{scene()}</p>
            <button type="button" onClick={changeSceneRandom}>change Scene</button>
        </>
    ) 
}