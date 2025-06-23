"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserPlus, LayoutDashboard, Users } from "lucide-react"

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-background">
      <section className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Welcome to your CRM
        </h1>
        <p className="text-muted-foreground text-lg">
          A simple and powerful dashboard to manage your clients, view their details, and stay organized.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login">
            <Button size="lg">
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Login
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              <UserPlus className="mr-2 h-5 w-5" />
              Sign up
            </Button>
          </Link>
        </div>
      </section>

      <section className="mt-16 w-full max-w-4xl grid sm:grid-cols-3 gap-6 text-left">
        <Feature
          icon={<Users className="w-6 h-6" />}
          title="Client Management"
          desc="View, sort, and search all your clients in one place."
        />
        <Feature
          icon={<UserPlus className="w-6 h-6" />}
          title="Quick Add"
          desc="Add new clients easily with essential information and tags."
        />
        <Feature
          icon={<LayoutDashboard className="w-6 h-6" />}
          title="Clean Dashboard"
          desc="See key data with a user-friendly interface and actions."
        />
      </section>
    </main>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-muted rounded-lg p-4 shadow-sm">
      <div className="text-primary mb-2">{icon}</div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </div>
  )
}
