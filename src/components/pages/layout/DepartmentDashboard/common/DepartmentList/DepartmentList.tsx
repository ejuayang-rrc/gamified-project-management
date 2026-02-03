import type { DepartmentType } from "../../types/DepartmentType"

type DepartmentListDisplayProps = {
    departments: DepartmentType[];
}

// The 0 in the task count is temporarly until we actually settle for how we would manage our data and figure out how we log completion/task completion.
export default function DepartmentList ({departments,} : DepartmentListDisplayProps) {
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
                        {departments.map(({departmentName, employeeCount, taskCount}) => (
                            <tr key={departmentName}>
                                <td>{departmentName}</td>
                                <td>{employeeCount}</td>
                                <td>0/{taskCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}