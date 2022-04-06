import Logo from "@assets/Logo.png"
import styles from "@styles/Navbar.module.scss"
import { ReactChild } from "react"
import {MdAnalytics} from "react-icons/md"
import {BsFillCheckCircleFill,BsBellFill} from "react-icons/bs"
import {FaCalendarAlt} from "react-icons/fa"
import {GiSpellBook} from "react-icons/gi"
import {FaAdn} from "react-icons/fa"
import {AiFillSetting} from "react-icons/ai"
import {MdGroups} from "react-icons/md"

interface WrapperProp{
  children:ReactChild
}

const Wrapper = ({children}:WrapperProp)=>{return <span>{children}</span>}

export default function Navbar() {

  return (
    <div className={styles.Nav_root}>
      
      {/* Logo */}
      <img 
      src={Logo.src} 
      className={styles.Logo}
      alt=""/>
      
      
      {/* analytics */}
      <Wrapper>
      <MdAnalytics className={styles.icons}/>
      </Wrapper>

      {/* tasks */}
      <Wrapper>
      <BsFillCheckCircleFill className={styles.icons2}/>
      </Wrapper>

      {/* calendar */}
      <Wrapper>
      <FaCalendarAlt className={styles.icons2}/>
      </Wrapper>

      {/* notification */}
      <Wrapper>
      <BsBellFill className={styles.icons2}/>
      </Wrapper>

      {/* Adn */}
      <Wrapper>
      <FaAdn className={styles.icons2}/>
      </Wrapper>

      {/* book */}
      <Wrapper>
      <GiSpellBook className={styles.icons2}/>
      </Wrapper>

      {/* settings */}
      <Wrapper>
      <AiFillSetting className={styles.icons2}/>
      </Wrapper>

      {/* Groups */}
      <Wrapper>
      <MdGroups className={styles.icons_n}/>
      </Wrapper>



    </div>
  )
}
