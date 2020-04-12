import React, { Component } from 'react';
import '../App.css';


class About extends Component {
    render() {
        const seconds = ((new Date() - new Date("04/26/1994").getTime()) / 1000).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return (
            <div className='aboutmeWrapper homePageSection' id="about">
                <section className='aboutmeSection'>
                    <h2 className="pageTitle">Karen's 26th Birthday</h2>
                    <h4 className='seconds'>Fun fact! You are currently <strong>{seconds}</strong> seconds old!</h4>
                    <div className="aboutProfilePicWrapper">
                        <img className="aboutProfilePic" alt="profile" src={process.env.PUBLIC_URL + "/images/karen.jpeg"} />
                    </div>
                    <h3 className='titleName'>To my favorite person,</h3>
                    <p className='aboutme'>
                        Karen, a year ago when I first met you, you told me that you are taking a bootcamp to learn how to program. My first thoughts were "ugh you too huh?", but as I talked to you more about it I could see this deep passion for engineering. Even at that moment I could tell you are someone who does not give up on their dreams and truly believe in using engineering to help improve the world.
                    </p>
                    <p className='aboutme'>
                        Half a year ago when I first started trying to teach you, I saw this passion for learning that's rare to find even amongst people who are already engineers. At this point we first started trying algos. You were completely lost but never gave up hope.
                    </p>
                    <p className='aboutme'>
                        4 months ago you told me that this has been the hardest time in your life. Yet even on the hardest days you never gave up, and you never lost your passion to learn.
                    </p>

                    <p className='aboutme'>
                        Since I've been back and you've quit Apple, you finally had time to dedicate to studying, and in 3 short months you've gone from barely knowing how to write a function to crushing leetcode mediums! You come up with algos better than mine sometimes now!
                    </p>

                    <p className='aboutme'>
                        Now look at yourself. You are crushing it at algo and are designing beautiful websites.
                    </p>
                    <p className='aboutme'>
                        I'm incredibly proud of all the progress we've made in the past months. I regret not coming back to SF earlier, but I am so glad to have had the opportunity to be on this journey with you. We're in the final stretch now and I have no doubts that you'll make an amazing frontend eng very very soon!
                    </p>
                    <p className='aboutme'>
                        2020 has been a hell of a trip, but this will be your year to shine. Let's make 26 into the best time in your life so far!
                    </p>
                    <p className='aboutme'>
                        Happy birthday to the the prettiest and smortest new frontend engineer the world has ever seen!
                    </p>
                </section>

            </div>
        );
    }
}

export default About;
