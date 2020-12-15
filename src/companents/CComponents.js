import React,{useContext} from 'react'
import {CounterContext  } from "../App";
import { Button } from "react-bootstrap";
export const CComponents = () => {

    const context = useContext(CounterContext)
    return (
        <div>
            <h1>CComponents içerik : {context.countState}</h1>
            <Button variant="success" onClick={() => context.countDispatch("increment")}>Arttır</Button>
            <Button variant="danger" onClick={() => context.countDispatch("decrement")}>Azalt</Button> 
        </div>
    )
}
