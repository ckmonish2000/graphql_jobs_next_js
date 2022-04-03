import React from "react"
import {useState} from "react"
import styles from "@styles/login.module.scss"
import img from "@assets/letsstart.jpg"
import LoginSignupLayout from "@layouts/LoginSignupLayout";
import {Company, Personal, Request} from "@components/Signup_Mods"

export default function Signup() {
  const [active, setactive] = useState("request")

  return (
   <LoginSignupLayout img={img}>
        <React.Fragment>
      

        <div className={styles.signup_container}>
        {active==="personal" && <Personal/>}
        {active==="company" && <Company/>}
        {active==="request" && <Request/>}
        </div>
      


      </React.Fragment>
     </LoginSignupLayout>
  )
}
