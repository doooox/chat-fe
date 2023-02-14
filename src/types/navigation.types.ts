export interface IRoute {
    name: string,
    path: string
    perms: IPerms
}
export type IPerms = {
    requiredAuth: boolean,
    guestOnly: boolean,
    adminOnly: boolean
}