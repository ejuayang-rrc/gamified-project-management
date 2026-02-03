import DepartmentForm from "./common/DepartmentForm/DepartmentForm";
import DepartmentList from "./common/DepartmentList/DepartmentList";
import { useState } from "react";
import tempData from "./assets/tempData.json";
import type { DepartmentType } from "./types/DepartmentType";

const DepartmentDashboard = () => {
    const [departments, setDepartments] = useState<DepartmentType[]>(tempData.departments);
        const [selectedDepartment] = useState<string>(
        tempData.departments[0]?.departmentName ?? ""
    )

    const addDepartment = (
        departmentName: string,
        employeeCount: number,
        taskCount: number
    ): void => {
        setDepartments(prev => [
            ...prev,
            {
                departmentName,
                employeeCount,
                taskCount,
            }
        ])
    }

    const removeDepartmentAtIndex = (index: number) => {
        setDepartments(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <main>
            {/* Outer page wrapper */}
            <div className="
                min-h-screen
                w-full
                bg-zinc-900
                p-4
                flex
                flex-col
                ">

                {/* Page wrapper */}
                <div className="
                    rounded-3xl
                    bg-zinc-950
                    w-full
                    flex-1
                    flex
                ">
                    {/* Content wrapper for a horizontal layout */}
                    <div className="flex w-full flex-1">

                        {/* Sidebar placeholder */}
                        {/* Copy this layout into reusable nav TODAY */}
                        <aside className="
                            w-64
                            shrink-0
                            px-8
                            py-8
                            border-r
                            border-white/10
                            gap-6
                            flex
                            flex-col
                        ">
                            <div className="
                                flex
                                flex-col
                                gap-6
                                flex-1
                                ">
                                {/* Top half of sidebar NAV */}
                                <nav className="
                                    flex
                                    flex-col
                                    gap-2
                                ">

                                    {/* Replace with <NavLink> */}
                                    <div className="h-10 rounded bg-zinc-700" />
                                    <div className="h-10 rounded bg-zinc-700" />
                                    <div className="h-10 rounded bg-zinc-700" />                                
                                </nav>

                                {/* Divider */}
                                <div className="h-px bg-white/10 my-4" />

                                {/* Bottom half of sidebar NAV */}
                                <nav className="
                                    flex
                                    flex-col
                                    gap-2
                                ">

                                    {/* Replace with <NavLink> */}
                                    <div className="h-10 rounded bg-zinc-700" />
                                    <div className="h-10 rounded bg-zinc-700" />
                                    <div className="h-10 rounded bg-zinc-700" />                              
                                </nav>

                                <div className="flex-1"/>
                            </div>

                            <div className="
                                h-10
                                rounded
                                bg-zinc-700
                            "/>


                        </aside>

                        {/* Main dashboard content */}
                        <section className="flex-1 pl-6">
                            <DepartmentList
                            departments={departments}
                            departmentIndex={removeDepartmentAtIndex}
                            />
                            <DepartmentForm
                            selectedDepartment={selectedDepartment}
                            addDepartment={addDepartment}/>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DepartmentDashboard;