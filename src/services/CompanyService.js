import api from "@/api";

export class CompanyService {
    static getCompanies(params, page= '') {
        return api.get("/companies" + page , params)
            .then(res => {
                return res.data.data
            })
            .catch(function (error) {
                return console.error(error)
            });
    }

    static createCompany(params) {
        return api.post("/companies", {...params})
    }

    static updateCompany(params, companyId) {
        return api.put("/companies/" + companyId, params)
    }

    static deleteCompany(companyId) {
        return api.delete("/companies/" + companyId);
    }

    static uploadLogo(companyId, params) {
        return api.post("/companies/" + companyId + "/logo",
            params,
            config => {
                config.headers["Content-Type"] = 'multipart/form-data'
            })
    }
}
