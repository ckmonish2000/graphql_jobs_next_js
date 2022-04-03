import React from "react"
import styles from "@styles/login.module.scss"
import Layouts from "@layouts/layouts"

export default function LoginSignupLayout({img,children}:any) {
  return (
    <Layouts type="login">
    <React.Fragment>
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
