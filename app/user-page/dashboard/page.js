import ClientsList from "@/components/ClientsList";
import DashboardList from "@/components/Dashboard";

export default function Dashboard() {
    return(
        <div>
            <DashboardList />
            <ClientsList />
        </div>
    )
}