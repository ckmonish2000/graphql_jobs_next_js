import styles from "styles/layouts.module.scss"
import {ReactChild} from "react"

 
interface prop{
  type: string,
  children:ReactChild
}

export default function Layouts(props:prop) {
  return (
    <div className={props?.type==="login"?styles.root1:styles.root2}>
    {/* global styles */}
      <style  global>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap');

      body {
        padding:0px;
        margin:0px;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
      }
    `}</style>

      {/* children */}
      {props?.children}
    </div>
  )
}
