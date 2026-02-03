import type { DepartmentType } from "../../types/DepartmentType"

type DepartmentListDisplayProps = {
    departments: DepartmentType[];
    departmentIndex: (index: number) => void;
}

// The 0 in the task count is temporarly until we actually settle for how we would manage our data and figure out how we log completion/task completion.
export default function DepartmentList ({departments, departmentIndex} : DepartmentListDisplayProps) {
    return (
        <>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Department Name</th>
                            <th>Employee Count</th>
                            <th>Task/Completed</th>
                        </tr>
                        {departments.map(({departmentName, employeeCount, taskCount}, index) => (
                            <tr key={index}>
                                <td>{departmentName}</td>
                                <td>{employeeCount}</td>
                                <td>0/{taskCount}</td>
                                <td>
                                    <button onClick={() => departmentIndex(index)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}