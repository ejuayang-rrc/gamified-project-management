import type { ReactNode } from "react";

type DashboardWidgetCardProps = {
    widgetTitle: string;

    children: ReactNode;
};

const DashboardWidgetCard = ({widgetTitle, children}: DashboardWidgetCardProps) => {

    return (
        <div>
            
            <div>
                <h3>{widgetTitle}</h3>
            </div>
            {/* Will render the content depending on the widget. */}
            <div>{children}</div>

        </div>
    )
}

export default DashboardWidgetCard;