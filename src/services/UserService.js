import api from "@/api";

export class UserService {
    static currentUser({ access_token }) {
        const params = { token: access_token };

        return api.get("/users/me", { params });
    }
}
