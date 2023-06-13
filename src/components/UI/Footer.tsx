import React from 'react'
import emoji from '@/assets/img/smileHeart.png'

import Image from 'next/image'
import { Config } from '@/config'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <section className="footer text-center">
                    <p className="title">© Copyright 2021 - 2023 Abyditya</p>
                    <p className="quotes">A web inspired by <a href="https://rakarasell.dev/" target='_blank'>rakarasell.dev</a><br /> created with NextJS & Love 🥰</p>
                    {Config.Navbar.links.map((n) => (
                        <a className='links' key={n.label} href={n.path}>{n.label}</a>
                    ))}
                </section>
            </div>
        </footer>
    )
}