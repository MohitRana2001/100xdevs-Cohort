import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     try {
//         const res = await prisma.user.create({
//             data: {
//                 username,
//                 password,
//                 firstName,
//                 lastName
//             }
//         });
//         console.log(res);
//     } catch (error) {
//         console.error("Error inserting user:", error);
//     }
// }

// insertUser("mohit" , "123456", "Mohit", "Rana");

interface UpdataParams {
    firstName : string,
    lastName : string
}

async function updateUser(username: string, { firstName, lastName }: UpdataParams) {
    try {
        const res = await prisma.user.update({
            where: { username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    } catch (error) {
        console.error("Error updating user:", error);
    }
}

updateUser("mohit", {
    firstName: "John",
    lastName: "rana"
})