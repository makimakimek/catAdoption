import { useState } from 'react'
import './App.css'
import cat1 from './assets/cat1.jpg'
import cat2 from './assets/cat2.jpg'
import cat3 from './assets/cat3.jpg'
import cat4 from './assets/cat4.jpg'
import cat5 from './assets/cat5.jpg'


function App() {

  return (
    <>
      <div className = "page">
        <div className = "container1">
            <div className = "header">
                <div className = "headerleft">
                    <h3>Adopt Cats</h3>
                </div>

                <div className = "headerright">
                    <div className = "link"><a href = "/index.html" className = "whiteLink">Home</a></div>
                    <div className = "link"><a href="pages/about.html" className = "whiteLink">About Us</a></div>
                    <div className = "link">Contact Us</div>
                </div>
            </div>

            <div className = "container1leftandright">
                <div className = "container1left">
                    <div className = "title">
                        <div>This website is for cat</div>
                        <div>lovers!</div>
                    </div>

                    <div className = "titlesubtext">
                        <div>This website shows you the cats that can be adopted.</div>
                        <div>You can check out their pictures and their features</div>
                        <div>below.</div>
                    </div>

                    <div className = "signupbutton1">
                        Sign up
                    </div>
                </div>

                <div className = "container1right">
                    <img src = {cat1} className = "image1" alt="a gray cat"/>
                </div>
            </div>
        </div>

        <div className = "container2">
            <div className = "container2top">
                <div>Here are some cats for adoption:</div>
            </div>

            <div className = "container2bottom">
                <div className = "imageandsubtext">
                    <img src = {cat2}/>
                    <div>this is Pearl</div>
                    <div>waiting to be adopted</div>
                    <div>by a loving family</div>
                </div>

                <div className = "imageandsubtext">
                    <img src = {cat3}/>
                    <div>this is Cheetos</div>
                    <div>a 2 year old male cat</div>
                    <div>who loves to play</div>
                </div>

                <div className = "imageandsubtext"> 
                    <img src = {cat4}/>
                    <div>this is Ginger</div>
                    <div>a 5 year old male cat</div>
                    <div>that loves to snuggle</div>
                </div>

                <div className = "imageandsubtext">
                    <img src = {cat5}/>
                    <div>this is Luna</div>
                    <div>a 1 year old female cat</div>
                    <div>that loves to eat</div>
                </div>
            </div>
        </div>

        <div className = "container3">
            <div className = "quoteandauthor">
                <div className = "quote">
                    <div>Of all god's creatures there is only one that cannot be made</div>
                    <div>the slave of the lash. If man could be crossed with the cat it</div>
                    <div>would improve the man, but it would deteriorate the cat.</div>
                </div>
    
                <div className = "author">
                    -Mark Twain
                </div>
            </div>
        </div>

        <div className = "container4">
            <div className = "textpart">
                <div className = "container4left">
                    <div className = "text1">
                        Call us today! It's time!
                    </div>
                    
                    <div className = "text2">
                        Sign up for our website by clicking that button right over there!
                    </div>
                </div>

                <div className = "container4right">
                    Sign up    
                </div>
            </div>
        </div>
    
        </div>
            
    </>
  )
}

export default App
