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
          Fill up your personal details
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
      Continue
      <BsPlusLg className={Login_styles.arrow_icon}/>
      </div>
    </div>
  )
}


function Company() {
  return (
    <div>
        <h1 className={styles.Signup_heading} >Your Company Details</h1>
        
        <span 
        style={{marginLeft:"11px"}}
        className={Login_styles.Login_sub_heading}>
          Fill up your company details
        </span>
        
        <br/>


        <Input
          placeholder="Company name"
          radius="md"
          size="lg"
          className={styles.ip}
        />

      <Input
          placeholder="Location"
          radius="md"
          size="lg"
          className={styles.ip}
        />

      <Input
          placeholder="Website URL"
          radius="md"
          size="lg"
          className={styles.ip}
        />

<div className={styles.Login_signup_btn} suppressHydrationWarning>
      Continue
      <BsPlusLg className={Login_styles.arrow_icon}/>
      </div>
    </div>
  )
}

function Request() {
  return (
    <div>
        <h1 className={styles.Signup_heading} style={{width:"50vw"}}>Your Request has been Sent to the team.</h1>
        
        <span 
        style={{marginLeft:"11px",whiteSpace:"nowrap"}}
        className={Login_styles.Login_sub_heading}>
          You will be notified once the company approves your account.
        </span>
        
        <br/>


        

      <div 
      style={{marginTop:"64px"}}
      className={styles.Login_signup_btn}>
      Continue
      <BsPlusLg className={Login_styles.arrow_icon}/>
      </div>
    </div>
  )
}


export {
  Personal,
  Company,
  Request
}