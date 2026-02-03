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
            <div className="flex flex-col mt-12">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label htmlFor="department-name" className="block text-sm/6 font-medium text-zinc-900 dark:text-white">Department Name</label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-zinc-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-zinc-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-zinc-500">
                                <div className="flex-1 text-base text-zinc-500 sm:text-sm/6 dark:text-zinc-400">
                                    <input
                                    value={departmentName}
                                    onChange={(e) => setDepartmentName(e.target.value)}
                                    placeholder="Department Name"
                                    id="department-name"
                                    className="w-full min-w-0 bg-transparent py-2 pr-3 pl-1 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none sm:text-sm dark:text-white dark:placeholder:text-zinc-500"
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-2 py-0.5 rounded relative">
                            <p className="error-message">{error}</p>
                        </div>
                    )}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit" className="rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-500 dark:shadow-none dark:focus-visible:outline-zinc-500">Submit</button>
                    </div>
                </form>
            </div>
        )
}