import React,{useRef, useState} from "react";
import './contact.css';
import emailJs from 'emailjs-com';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import address from '../../images/address.png';
import { useSelector } from "react-redux";
const Contact=()=>{
    const bollColor=useSelector(state=>state.blackMode);
    const formRef=useRef();
    const [done,setdone]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailJs.sendForm('service_pe6j6rg', 'template_h7zo1vq', formRef.current, 'L6O78zHoiK0jNOWZj')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone}
                            alt={phone} 
                            className="c-icon" 
                            />
                            06 56 80 06 74
                        </div>
                        <div className="c-info-item">
                            <img src={email}
                            alt="" 
                            className="c-icon" 
                            />
                            medsaad608@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address}
                            alt="" 
                            className="c-icon" 
                            />
                            Elkarimia-Chlef-Algeria
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. always
                        freelancing if the right project comes along. more
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{background:bollColor&&'#333',color:bollColor&&'white'}} type='text' placeholder='Name' name='user_name'/>
                        <input style={{background:bollColor&&'#333',color:bollColor&&'white'}} type='text' placeholder='Subject' name='user_subject'/>
                        <input style={{background:bollColor&&'#333',color:bollColor&&'white'}} type='text' placeholder='Email' name='user_email'/>
                        <textarea style={{background:bollColor&&'#333',color:bollColor&&'white'}} rows='5' placeholder='Message' name='message'/>
                        <button>Submit</button>
                        {done && <div style={{marginLeft:'30px',color:'green',display:'inline'}}>Thank you ...</div>}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;