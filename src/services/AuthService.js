import api from "@/api";

export class AuthService {
    static login(params) {
        return api.post("/login", params);
    }

    static logout(params) {
        return api.post("/logout", params);
    }
}
