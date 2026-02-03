import type { ReactNode } from "react";

type DashboardWidgetCardProps = {
    widgetTitle: string;

    children: ReactNode;
};

const DashboardWidgetCard = ({widgetTitle, children}: DashboardWidgetCardProps) => {

    return (
        <div className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
        ">
            
            <div className="">
                <h3>{widgetTitle}</h3>
            </div>
            {/* Will render the content depending on the widget. */}
            <div>{children}</div>

        </div>
    )
}

export default DashboardWidgetCard;