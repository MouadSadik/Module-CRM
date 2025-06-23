'use client'
import AddClientForm from "@/components/AddClientForm"
import ClientsList from "@/components/ClientsList"
import { useState } from "react"

export default function AddClient() {

    const [clients, setClients] = useState([]) 
    const handleAddClient = (newClient) => {
        setClients((prev) => [...prev, newClient])
    }
    return (
        <div>
            <AddClientForm onAdd={handleAddClient} />
        </div>
    )
}