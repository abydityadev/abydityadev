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
                    <p className="quotes">&#8220;Just like how the colors of the sunset change,<br /> our code needs to be flexible and adaptable to change.&#8220;</p>
                    {Config.Navbar.links.map((n) => (
                        <a key={n.label} href={n.path}>{n.label}</a>
                    ))}
                </section>
            </div>
        </footer>
    )
}