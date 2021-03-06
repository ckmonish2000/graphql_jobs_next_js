import styles from "styles/layouts.module.scss"
import {ReactChild} from "react"
 
interface prop{
  type: string,
  children:ReactChild
}

export default function Layouts(props:prop) {
  return (
    <div className={props?.type==="login"?styles.root1:styles.root2}>
      {/* children */}
      {props?.children}
    </div>
  )
}
