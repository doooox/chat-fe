import { IRoute } from "../types/navigation.types"
export const ROUTES = {
    MAIN: "/",
    CHATROOM: "/:id",
    SINGIN: "/singin",
    SINGUP: "/singup",
    SINGOUT: "/singout",
    CREATECHATROOM: "/create"
}

export const NAVIGATION_ROUTES: IRoute[] = [
    {
        name: "Singin",
        path: ROUTES.SINGIN,
        perms: {
            requiredAuth: false,
            guestOnly: true,
            adminOnly: false
        }
    },
    {
        name: "Singup",
        path: ROUTES.SINGUP,
        perms: {
            requiredAuth: false,
            guestOnly: true,
            adminOnly: false
        }
    },
    {
        name: "chat room",
        path: ROUTES.CHATROOM,
        perms: {
            requiredAuth: true,
            guestOnly: false,
            adminOnly: false
        }
    },
    {
        name: "Create Chat Room",
        path: ROUTES.CREATECHATROOM,
        perms: {
            requiredAuth: true,
            guestOnly: false,
            adminOnly: true
        }
    },
    {
        name: "main",
        path: ROUTES.MAIN,
        perms: {
            requiredAuth: true,
            guestOnly: false,
            adminOnly: false
        }
    },

]

export const ENDPOINTS = {
    SINGIN: "/auth/singin",
    SINGUP: "/auth/singup",
    SINGOUT: "/auth/singout",
    CHATROOMS: "/chat/",
    CREATECHATROOM: "/chat/create",
    MESSAGES: "/message"
}

export type StorageKeys = "user" | "token"

export const DEFAULT_QUERY_OPTIONS = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            refetchOnReconnect: true,
            refetchOnMount: true,
        },
    },
};
