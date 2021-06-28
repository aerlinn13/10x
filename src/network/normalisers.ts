import { User } from "../state/slice";

export const normaliseUsers = (users: User[]): Record<string, User> => {
    const usersObj: Record<string, User> = {};

    users.forEach((user: User) => {
        usersObj[user.id] = user;
    });
    
    return usersObj;
}