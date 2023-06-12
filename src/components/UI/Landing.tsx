import React from 'react'
import Link from 'next/link'

export function Landing() {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="headline-wrapper">
                        <h3 className='headline'>[ + 3 Years Exp Web Developer · UI Designer ]</h3>
                        <h1 className="subtitle" data-aos="fade-right">Abyan Raditya Khazarani.</h1>
                        <p className="description">A young man who decided to choose a career as a website developer. Previously social media content, and video editor</p>
                        <Link className="btn" href='/threads'>Blogs</Link>
                        </div>
                    </div>
                    <div className="col">
                        <section data-aos="fade-down" className="banner"></section>
                    </div>
                </div>
            </div>
        </>
    )
}