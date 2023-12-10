import { db } from "@/lib/db";
import { initialProfile } from "./initial-profile";

export async function getServer() {

    const profile = await initialProfile();

    if (!profile) return false;

    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    return server;
}