"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
    return (
        <header className="w-full border-b shadow-sm px-6 py-4 flex items-center justify-between">
            <Link href='/'><h1 className="text-2xl font-bold text-primary">MyApp</h1></Link>
            <nav className="flex gap-4">
                <Link href="/user-page/dashboard">
                    <Button variant="ghost">Dashboard</Button>
                </Link>
                <Link href="/user-page/clients-page">
                    <Button variant="ghost">Clients</Button>
                </Link>
                <Link href="/user-page/add-client">
                    <Button variant="ghost">Add Client</Button>
                </Link>
                <ModeToggle />
            </nav>
        </header>
    )
}
