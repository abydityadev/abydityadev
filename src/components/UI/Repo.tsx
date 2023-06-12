"use client"

import React from 'react'
import { useEffect, useState } from "react";
import Link from "next/link";

type Repository = {
    id: number;
    full_name: string;
    html_url: string;
    description: string;
    size: number;
};

export function Repo() {
    const [repo, setRepo] = useState<Repository[]>([]);

    useEffect(() => {
        fetch(
            "https://api.github.com/users/abydityadev/repos?sort=created&direction=desc"
        )
            .then((res) => res.json())
            .then((data: any) => {
                if (Array.isArray(data)) setRepo(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {repo.map((repo, index) => index < 4 && (
                    <div className="col" key={repo.id}>
                        <Link href={repo.html_url} target='_blank' className="card">
                            <div className="card-body">
                                <h5 className="card-title">{repo.full_name} <span className="size">[ {Math.ceil(repo.size / 1024)} MB | {repo.id} ]</span></h5>
                                <p className="card-text">
                                    {repo.description}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}