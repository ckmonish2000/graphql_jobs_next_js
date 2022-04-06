import React from "react"
import styles from "@styles/login.module.scss"
import Layouts from "@layouts/layouts"
import { Input } from '@mantine/core';
import img from "@assets/index.jpg"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import LoginSignupLayout from "@layouts/LoginSignupLayout";
import { useRouter } from 'next/router'

export default function index() {
  const router = useRouter()

  return (
   <LoginSignupLayout img={img}>
        <React.Fragment>
        
        <span 
        onClick={()=>{router.push("/Signup")}}
        className={styles.Login_create_ac_btn}>
          Create new account
        </span>

        <h1 className={styles.Login_heading}>Forgot password</h1>
        <span className={styles.Login_sub_heading}>Enter your email</span>

        <Input
        style={{marginTop:"50px"}}
          placeholder="Email"
          radius="md"
          size="lg"
          className={styles.ip_root_style}
        />

      <div className={styles.Login_signup_btn} suppressHydrationWarning>
      Send reset link
      <HiOutlineArrowNarrowRight className={styles.arrow_icon}/>
      </div>


      </React.Fragment>
     </LoginSignupLayout>
  )
}
