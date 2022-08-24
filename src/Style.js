import React from "react";
import primary from "./primary.css"
import style from './custom.module.css'
function Style()
{
    return(
        <div>
            <h1 className="primary">Style Type 1</h1><br /><br />
            <h1 style={{backgroundColor:'black',color:'red',margin:'10px'}}>Style Type 2</h1><br /><br />
            <h1 className={style.success}>Style Type 3</h1>
        </div>
    )
}
export default Style;