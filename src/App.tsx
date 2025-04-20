import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHand, faSocks } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {decideColor, decideLimb, decideDirection} from "./decide.ts";
import ColorButton from "./ColorButton.tsx";
import {useState} from "react";

library.add(fab, faHand, faSocks)



function App() {
    const [color, setColor] = useState(decideColor())
    type limb = {
        isHand: boolean
        direction: string
    }

    const limb: limb = {
        isHand: decideLimb(),
        direction: decideDirection()
    };

    const style = {
        color: color,
        fontSize: "100px"
    }

    return (
        <>
            {limb.isHand ? <FontAwesomeIcon icon={faHand} style={style}/> :
                <FontAwesomeIcon icon={faSocks} style={style}/>}
            <p>{limb.direction}</p>
            <ColorButton setColor={setColor} />

        </>

    )
}





export default App
