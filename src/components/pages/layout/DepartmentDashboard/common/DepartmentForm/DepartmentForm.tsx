import { useState } from "react";

type DepartmentFormProps = {
    selectedDepartment: string;
    addDepartment: (departmentName: string, employeeCount: number, taskCount: number) => void;
}

export default function DepartmentForm({
    addDepartment
    }: DepartmentFormProps) {
    
        const [departmentName, setDepartmentName] = useState<string>("");
        const [error, setError] = useState<string>("");
        const [employeeCount] = useState<number>(0);
        const [taskCount] = useState<number>(0);

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
            e.preventDefault();

            if (departmentName.trim().length < 5) {
                setError("The department name should be at least 5 letters long.");
                return;
            }

            addDepartment(departmentName, employeeCount, taskCount);
            setDepartmentName("");
            setError("");
        };
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="department-name">Department Name</label>
                        <input
                        value={departmentName}
                        onChange={(e) => setDepartmentName(e.target.value)}
                        placeholder="Department Name"
                        id="department-name"
                        >
                        </input>
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
}