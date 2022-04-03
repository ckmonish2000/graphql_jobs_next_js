import { Input, Select } from '@mantine/core';
import Login_styles from "@styles/login.module.scss"
import styles from "@styles/signup.module.scss"
import {BsPlusLg} from "react-icons/bs"

function Personal() {
  return (
    <div>
        <h1 className={styles.Signup_heading} >Your Personal Details</h1>
        
        <span 
        style={{marginLeft:"11px"}}
        className={Login_styles.Login_sub_heading}>
          Fill up your company details
        </span>
        
        <br/>

      <div className={styles.flex}>
      <Input
          placeholder="First Name"
          radius="md"
          size="lg"
        />

      <Input
          placeholder="Last Name"
          radius="md"
          size="lg"
        />
      </div>

      <Select
      placeholder="Designation"
      radius="md"
      size="lg"
      className={styles.ip}
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />

      <Input
          placeholder="Company Email"
          radius="md"
          size="lg"
          className={styles.ip}
        />

      <Input
          placeholder="Phone Number"
          radius="md"
          size="lg"
          className={styles.ip}
        />

<div className={styles.Login_signup_btn} suppressHydrationWarning>
      Sign in to your account
      <BsPlusLg className={Login_styles.arrow_icon}/>
      </div>
    </div>
  )
}




export {
  Personal
}