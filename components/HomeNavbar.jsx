import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

const HomeNavbar = () => {
    return (
        <header className="w-full border-b shadow-sm px-6 py-4 flex items-center justify-between">
            <Link href='/'><h1 className="text-2xl font-bold text-primary">MyApp</h1></Link>
            <nav className="flex gap-4">
                <Link href="/login">
                    <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/login">
                    <Button variant="ghost">Sign up</Button>
                </Link>
                <ModeToggle />
            </nav>
        </header>
    )
}

export default HomeNavbar