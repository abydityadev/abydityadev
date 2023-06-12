import React from 'react'
import Image from 'next/image'

export function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 mb-3 mb-sm-0">
                        <Image priority quality={100} alt='profile' src={'https://cdn.abyditya.space/r/352188453_280325231344135_6729647082184906891_n.jpg'} width={'300'} height={'300'} />
                    </div>
                    <div className="col-sm-7 mb-3 mb-sm-0">
                        <div className="wrapper">
                            <p className="headline">website developer</p>
                            <h1 className="quotes">&#8220;A bad website is like a grumpy salesperson.&#8220; - Jakob Nielsen</h1>
                            <p className="about">Hi, Im Abyan Raditya, a Web Developer with expertise in web and UI Designer. Currently, Im a Front-end Developer. I am a creative problem solver with a passion for building intuitive, user-friendly website that enhance the user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
