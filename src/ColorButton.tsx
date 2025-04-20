import React from "react";
import {decideColor} from "./decide.ts";

interface ColorButtonProps {
    setColor:  React.Dispatch<React.SetStateAction<string>>
}

function ColorButton({setColor}: ColorButtonProps) {
    function handleClick() {
        setColor(decideColor());
    }

    return (
        <button onClick={handleClick}>Next Color</button>
    )
}

export default ColorButton;