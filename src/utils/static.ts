import { IRoute } from "../types/navigation.types"
export const ROUTES = {
    MAIN: "/",
    SINGIN: "/singin",
    SINGUP: "/singup",
    SINGOUT: "/singout",
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
    }
]

export const ENDPOINTS = {
    SINGIN: "/auth/singin",
    SINGUP: "/auth/singup",
    SINGOUT: "/auth/singout",
}

export type StorageKeys = "user"

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
