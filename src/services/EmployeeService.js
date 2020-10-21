import api from "@/api";

export class EmployeeService {
    static getEmployees() {
        return api.get("/employees");
    }
}
