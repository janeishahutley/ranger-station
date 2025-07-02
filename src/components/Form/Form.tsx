"use client"

import emailjs from '@emailjs/browser'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import styles from './Form.module.css'

const Form = () => {

  const [enteredEmail, setEnteredEmail] = useState('')


  const onSubmitHandler = (e:FormEvent) => {
    e.preventDefault()
    setEnteredEmail("");

    const serviceId = "service_45mzk8e"
    const templateId = "template_5izcquq"
    const publicKey = "rD4gqNww86R7_Svuz"

   

  const templateParams = {
    from_email: enteredEmail
  }

  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response)=> {
      console.log('Email sent successfully!', response)
      setEnteredEmail('')
    })
    .catch((error)=> {
      console.error('Error sending email', error)
    })
  }

  const onChangeHandler = (e: ChangeEvent & {
    target: HTMLInputElement
  }) => {
      const { target } = e
      setEnteredEmail(target.value);
    }

  return (
    <div className={styles.formSection}>
        <span className={styles.span}>Subscribe to our newsletter!</span>
        <div className={styles.form} >
            <form onSubmit={onSubmitHandler} autoComplete='off' >
                <div className={styles.formInput}>
                    <div className={styles.input}>
                        <label htmlFor="email"></label>
                        <input 
                            type="email"
                            id='email'
                            placeholder='Enter email' 
                            name="email"
                            value={enteredEmail} 
                            onChange={onChangeHandler}
                            maxLength={50}
                            required
                        />
                    </div>
                    <button className={styles.btn}>
                        <FaArrowRight size={24} color="#e9e9d7"/>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form