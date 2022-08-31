import React from "react";
import './about.css';
import img1 from '../../images/img.jpg';
import award from '../../images/award.jpg'
const About=()=>{
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg">

                </div>
                <div className="a-card">
                    <img src={img1} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    My name is saad, I am 25 years old and I have a licence in Computer Science at the University of Chlef
                </p>
                <p className="a-desc">
                    I am a web developer and now working in the freelance field,
                    Master the following programming language:
                    HTML, CSS, JAVA SCRIPT, NODE JS, REACT, MONGODB, EXPRESS, GIT and GITHUB
                </p>
                <div className="a-award">
                    <div>
                        <img src={award} alt="" className="a-award-img" />
                    </div>
                    <div style={{width:'15px'}}>

                    </div>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">awards 2022</h4>
                        <p className="a-award-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam sed dicta eum maiores doloremque porro quibusdam laborum doloribus velit ducimus autem, iusto tempora soluta, quisquam deserunt fugiat, provident distinctio?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;