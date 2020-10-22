import api from "@/api";

export class CompanyService {
    static getCompanies(params) {
        return api.get("/companies", params)
            .then(res => {
                return res.data.data
            })
            .catch(function (error) {
                return console.error(error)
            });

    }

    static createCompany(params) {
        return api.post("/companies", {...params})
            .then(res => {
                return res
            })
            .catch(function (error) {
                return console.error(error)
            });
    }

    static updateCompany(params, companyId) {
        return api.put("/companies/" + companyId, params);
    }

    static deleteCompany(companyId) {
        return api.delete("/companies/" + companyId);
    }
}
