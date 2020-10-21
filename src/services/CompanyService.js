import api from "@/api";

export class CompanyService {
    static getCompanies(params) {
        return api.get("/companies", { params });
    }

    static createCompany(params) {
        return api.post("/companies", params);
    }

    static updateCompany(params, companyId) {
        return api.put("/companies/" + companyId, params);
    }

    static deleteCompany(companyId) {
        return api.delete("/companies/" + companyId);
    }
}
