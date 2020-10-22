import api from "@/api";

export class EmployeeService {
    static getEmployees(params, page = '') {
        return api.get("/employee" + page, params)
            .then(res => {
                return res.data.data
            })
            .catch(function (error) {
                return console.error(error)
            });
    }

    static createEmployee(params) {
        return api.post("/employee", params)
    }

    static updateEmployee(params, employee_id) {
        return api.put('/employee/' + employee_id, params)
    }

    static removeEmployee(employee_id) {
        return api.delete('/employee'+ employee_id)
    }

    static populateEmployees(){
        return api.post('/employee/populate')
    }
}
