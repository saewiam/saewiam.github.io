import type { PropsWithChildren } from "react";

 export default function Column (props:PropsWithChildren){
    return(
        <div>
            {props.children}
        </div>
    )
 }