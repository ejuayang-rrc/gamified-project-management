import DisplayWidgets from "./TaskDashboard/components/DisplayWidgets";

const TaskDashboard = () => {
    return (
        <main>
            {/* Outer page wrapper */}
            <div className="
                bg-black
                min-h-screen
                p-8
                ">

                {/* Page wrapper */}
                <div className="
                    rounded-lg
                    bg-zinc-900
                    p-6
                ">
                    {/* Content wrapper for a horizontal layout */}
                    <div className="flex">

                        {/* Sidebar placeholder */}
                        {/* Copy this layout into reusable nav TODAY */}
                        <aside className="
                            w-64
                            shrink-0
                            px-4
                            border-r
                            border-white/10
                        ">

                            {/* Top half of sidebar NAV */}
                            <nav className="flex flex-col gap-2">

                                {/* Replace with <NavLink> */}
                                <div className="h-10 rounded bg-zinc-700" />
                                <div className="h-10 rounded bg-zinc-700" />
                                <div className="h-10 rounded bg-zinc-700" />                                
                            </nav>

                            {/* Divider */}
                            <div className="h-px bg-white/10 my-4" />

                            {/* Bottom half of sidebar NAV */}
                            <nav className="flex flex-col gap-2 mt-2">

                                {/* Replace with <NavLink> */}
                                <div className="h-10 rounded bg-zinc-700" />
                                <div className="h-10 rounded bg-zinc-700" />
                                <div className="h-10 rounded bg-zinc-700" />                                
                            </nav>

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