"use client"

import React from 'react'
import { Config } from '@/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link className="navbar-brand" href="/">{Config.Navbar.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {Config.Navbar.links.map((n) => (
                            <li key={n.label} className="nav-item">
                                <Link className={n.path == pathname ? "nav-link active" : "nav-link"} href={n.path}>{n.label}</Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <Link className="nav-link" href='https://github.com/abydityadev' target='_blank'>Github</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
