import React from "react"
import styles from "@styles/login.module.scss"
import img from "@assets/letsstart.jpg"
import LoginSignupLayout from "@layouts/LoginSignupLayout";
import {Personal} from "@components/Signup_Mods"

export default function Signup() {
  return (
   <LoginSignupLayout img={img}>
        <React.Fragment>
      

        <div className={styles.signup_container}>
        <Personal/>
        </div>
      


      </React.Fragment>
     </LoginSignupLayout>
  )
}
