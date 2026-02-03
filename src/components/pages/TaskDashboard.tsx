import DisplayWidgets from "./TaskDashboard/components/DisplayWidgets";
import { useState } from "react";

// Type for different views, move into type folder
type DashboardViewOptions = "overview" | "myTasks";

const TaskDashboard = () => {

    // State to handle dashboard views
    const [ view, setView ] = useState<DashboardViewOptions>("overview");

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
                            <DisplayWidgets />
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};


// IMPORTANT:
// WHEN TESTING, REMEMBER TO FIX WHAT IS RENDERED IN APP.TSX TO TASKDASHBOARD

export default TaskDashboard;