"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function AddClientForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tags: [],
    createdAt: new Date().toISOString().slice(0, 10),
  })

  const [tagInput, setTagInput] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault()
      if (!form.tags.includes(tagInput.trim())) {
        setForm({ ...form, tags: [...form.tags, tagInput.trim()] })
      }
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove) => {
    setForm({ ...form, tags: form.tags.filter((tag) => tag !== tagToRemove) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, phone } = form
    if (!name || !email || !phone) {
      alert("Please fill in all fields.")
      return
    }

    onAdd(form)

    setForm({
      name: "",
      email: "",
      phone: "",
      tags: [],
      createdAt: new Date().toISOString().slice(0, 10),
    })
    setTagInput("")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white dark:bg-muted p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center">Add New Client</h2>

        <Input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        {/* 🔹 Tags Input */}
        <div>
          <Input
            placeholder="Add tag and press Enter"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {form.tags.map((tag, index) => (
              <Badge
                key={index}
                className="flex items-center gap-1"
                variant="secondary"
              >
                {tag}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => removeTag(tag)}
                />
              </Badge>
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full">
          Add Client
        </Button>
      </form>
    </div>
  )
}