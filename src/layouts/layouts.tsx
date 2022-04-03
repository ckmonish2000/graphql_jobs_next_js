import styles from "styles/layouts.module.scss"
import {ReactChild} from "react"
import Logo from "@assets/Logo.png"

 
interface prop{
  type: string,
  children:ReactChild
}

export default function Layouts(props:prop) {
  return (
    <div className={props?.type==="login"?styles.root1:styles.root2}>
    {/* global styles */}
      <style  global>{`
      body {
        padding:0px;
        margin:0px;
        box-sizing:border-box;
      }
    `}</style>
      
      <div style={{overflow: 'hidden'}}>
        <img src={Logo.src} className={styles.Logo}/>
      </div>

      {/* children */}
      {props?.children}
    </div>
  )
}
