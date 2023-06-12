import React from 'react'

export function Title({ number, label }: any) {
    return (
        <h1 className='titled'>
            <p className='watermark'>abyditya · [ # {number} ]</p>
            <span>{label}</span>
        </h1>
    )
}