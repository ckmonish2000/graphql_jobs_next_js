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

  const back_function = ()=>{
    if(active === "personal") {

    }else if(active === "company") {
      setactive("personal")
    }else if(active === "request") {
      setactive("company")
    }
  }

  return (
   <LoginSignupLayout img={img}>
        <React.Fragment>

        <div className={styles.signup_progress_root}>
        <BiArrowBack className={styles.icon} onClick={back_function}/>

      <div className={styles.signup_progress}>
        {/* lines */}
        {(active==="company" || active==="request") &&<div className={styles.line_1}></div>}
        {active==="request" &&<div className={styles.line_2}></div>}

        {/* balls */}
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
        {active==="personal" && <Personal active={active} setactive={setactive}/>}
        {active==="company" && <Company active={active} setactive={setactive}/>}
        {active==="request" && <Request 
        // active={active} 
        // setactive={setactive}
        />}
        </div>
      


      </React.Fragment>
     </LoginSignupLayout>
  )
}
