import {PrismaClient, User} from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
	const users = await prisma.user.findMany({
		select: {
			username: true,
			name: true
		}
	});

	return users;
}

export const getUser = async (username: string) => {
    const user = await prisma.user.findFirst({
        where:{
            username: username
        },
        select: {
            username: true,
            name: true,
            notes: true
        },
    });
    return user;
}

export const createUser = async (user: User) => {
	const createdUser = await prisma.user.create({data: user});
	return createdUser;
}
