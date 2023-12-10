import InitialModal from "@/components/modals/initial-modal";
import { getServer } from "@/serverfunctions/server"
import { redirect } from "next/navigation";


export default async function SetupPage() {

    const server = await getServer();
    if (server) redirect(`/servers/${server.id}`);

    return (
        <InitialModal />
    )
}