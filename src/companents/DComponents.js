import React,{useContext} from 'react'
import {CounterContext  } from "../App";
import { Button } from "react-bootstrap";
export const DComponents = () => {

    const context = useContext(CounterContext)
    return (
        <div>
            <h1>DComponents içerik : {context.countState}</h1>
            <Button variant="success" onClick={() => context.countDispatch("increment")}>Arttır</Button>
            <Button variant="danger" onClick={() => context.countDispatch("decrement")}>Azalt</Button> 
        </div>
    )
}
