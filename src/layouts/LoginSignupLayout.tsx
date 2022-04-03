import React from "react"
import styles from "@styles/login.module.scss"
import Layouts from "@layouts/layouts"
import Logo from "@assets/Logo.png"

export default function LoginSignupLayout({img,children}:any) {
  return (
    <Layouts type="login">
    <React.Fragment>
    <div style={{overflow: 'hidden'}}>
        <img src={Logo.src} className={styles.Logo}/>
      </div>

      <div>
        <img alt="" src={img.src} className={styles.img_tag}/>
      </div>

      <div className={styles.third_div}>
      {children}
      </div>
      </React.Fragment>
    </Layouts>
  )
}
