import { useState } from "react";

type DepartmentFormProps = {
    departments: string[];
    selectedDepartment: string;
    setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>;
    addDepartment: (departmentName: string) => void;
}

export default function DepartmentForm({
    selectedDepartment,
    addDepartment
    }: DepartmentFormProps) {
    
        const [departmentName, setDepartmentName] = useState<string>("");
        const [error, setError] = useState<string>("");

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
            e.preventDefault();

            if (departmentName.trim().length > 5) {
                setError("The department name should be at least 5 letters long.");
                return;
            }

            addDepartment(selectedDepartment);
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