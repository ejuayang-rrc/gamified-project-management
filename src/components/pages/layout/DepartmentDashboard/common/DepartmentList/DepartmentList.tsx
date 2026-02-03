import type { DepartmentType } from "../../types/DepartmentType"

type DepartmentListDisplayProps = {
    departments: DepartmentType[];
}

export default function DepartmentDashboardDisplay ({departments,} : DepartmentListDisplayProps) {
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