import { useState } from 'react'
import './App.css'
import cat6 from './assets/cat6.jpg'

function About() {
    return (
        <>

            <div className = "aboutpage">
                <div className = "container1">
                    <div className = "header">
                        <div className = "headerleft">
                            <h3>Adopt Cats</h3>
                        </div>

                        <div className = "headerright">
                            <div className = "link"><a href = "/" className = "whiteLink">Home</a></div>
                            <div className = "link"><a href = "about" className = "whiteLink">About Us</a></div>
                            <div className = "link">Contact Us</div>
                        </div>
                    </div>

                    <div className = "container5">
                        <div className = "aboutpart">
                            <div className = "leftside">
                                <img src = {cat6} className = "aboutImage" alt="a gray cat"/>
                            </div>

                            <div className = "rightside">
                                <div className = "abouttitle">
                                    ABOUT US
                                </div>

                                <div className = "aboutparagraph">
                                    <div className = "line">
                                        We are a cat loving company that wants to help out cats in need. We have lots of cats that you might be interested in.
                                        We want to find good homes for these lovely cats. We started our company back in 2015. Through out the years, we have grown bigger and 
                                        bigger and have helped numourous amount of cats. We still get updates from the 
                                        cats we have found homes for and we publish some stories on our website as well. So, if you are interested in adopting a cat from us,
                                        please get in contact and we'll return to you as soon as possible!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
      )
}







export default About