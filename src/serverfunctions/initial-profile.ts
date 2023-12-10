import { db } from "@/lib/db"
import { User } from "@/types/type-definations";
import { currentUser, redirectToSignIn } from "@clerk/nextjs"


export async function initialProfile(): Promise<User | undefined> {

    const user = await currentUser();

    if (!user) {
        return redirectToSignIn();
    }

    const profile = await db.profile.findFirst({
        where: {
            userId: user.id
        }
    });

    if (profile) {
        return profile;
    }

    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    });

    return newProfile;
}