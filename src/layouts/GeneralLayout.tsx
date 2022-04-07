import React from "react"
import styles from "@styles/login.module.scss"
import Layouts from "@layouts/layouts"
import Navbar from "@components/navbar/Navbar"

export default function GeneralLayout({children}:any) {
  return (
    <Layouts type="">
    <React.Fragment>
      {/* <div>ksdjshhuh</div> */}
    <Navbar/>

      <div className={styles.second_div}>
      {children}
      </div>
      </React.Fragment>
    </Layouts>
  )
}
