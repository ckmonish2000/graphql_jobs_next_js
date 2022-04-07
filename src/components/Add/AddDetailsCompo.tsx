import InputWrapper from '@components/InputWrapper'
import styles from "@styles/AddClients.module.scss"

export default function AddDetailsCompo() {
  return (
    <div className={styles.Add_clients_ip_container_2}>
    <InputWrapper
    width="80%"
    className=''
    text='Contact Number'
    placeholder=''
    styles={{width:"75%"}}
    onChange={()=>{}}
    />

    <InputWrapper
    width="80%"
    className=''
    text='Contact Person'
    placeholder='Contact person name'
    styles={{width:"75%"}}
    onChange={()=>{}}
    />

    <InputWrapper
    width="96.2%"
    className=''
    text='Email'
    placeholder='name@companydomain.com'
    styles={{width:"95.2%"}}
    onChange={()=>{}}
    />
    </div>
  )
}
