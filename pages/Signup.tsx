import React from "react"
import {useState} from "react"
import styles from "@styles/login.module.scss"
import img from "@assets/letsstart.jpg"
import LoginSignupLayout from "@layouts/LoginSignupLayout";
import {Company, Personal, Request} from "@components/Signup_Mods"
import {BiArrowBack} from "react-icons/bi"
import {BsCircleFill} from "react-icons/bs"

export default function Signup() {
  const [active, setactive] = useState("personal")

  return (
   <LoginSignupLayout img={img}>
        <React.Fragment>

        <div className={styles.signup_progress_root}>
        <BiArrowBack className={styles.icon}/>

      <div className={styles.signup_progress}>

        <div className={styles.container}>
          <BsCircleFill className={styles.ball}/>
          <span>Personal</span>
        </div>

        <div className={styles.container}>
          <BsCircleFill className={styles.ball}/>
          <span>Company</span>
        </div>

        <div className={styles.container}>
          <BsCircleFill className={styles.ball}/>
          <span>Complete</span>
        </div>
      </div>

        </div>

        <div className={styles.signup_container}>
        {active==="personal" && <Personal/>}
        {active==="company" && <Company/>}
        {active==="request" && <Request/>}
        </div>
      


      </React.Fragment>
     </LoginSignupLayout>
  )
}
