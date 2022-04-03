import React from "react"
import styles from "@styles/login.module.scss"
import Layouts from "@layouts/layouts"
import { Input } from '@mantine/core';
import img from "@assets/index.jpg"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

export default function index() {
  return (
    <Layouts type="login">
    <React.Fragment>
      

      <div>
        <img alt="" src={img.src} className={styles.img_tag}/>
      </div>
      <div className={styles.third_div}>
        <span className={styles.Login_create_ac_btn}>Create new account</span>
        <h1 className={styles.Login_heading}>Sign In to your Account.</h1>
        <span className={styles.Login_sub_heading}>Enter your details</span>

        <Input
          placeholder="Email"
          radius="md"
          size="lg"
          className={styles.ip_root_style}
        />

        <Input
          placeholder="Password"
          radius="md"
          size="lg"
          className={styles.ip_root_style}
        />

        <div className={styles.forgot_password_style} suppressHydrationWarning>Forgot password?</div>

      <div className={styles.Login_signup_btn} suppressHydrationWarning>
      Sign in to your account
      <HiOutlineArrowNarrowRight className={styles.arrow_icon}/>
      </div>


      </div>
      </React.Fragment>
    </Layouts>
  )
}
