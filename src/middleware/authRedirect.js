import store from "@/store";

export default function authRedirect(next, to) {
    if (!to.meta.allowAnonymous && !store.getters["auth/isAuthenticated"]) {
        next({
            path: '/login',
            query: {redirect: to.fullPath}
        })
    } else {
        next()
    }
}
