import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;

};

export const createUser = async (body) => {
    
    console.log('body', body)
   
    return prisma.user.create({
        data: body,
    });
    
};

export default getUsers;

