import ChangeViewWidget from "./widgets/ChangeViewWidget";
import WidgetTwo from "./widgets/WidgetTwo";
import WidgetThree from "./widgets/WidgetThree";
import WidgetFour from "./widgets/WidgetFour";
import WidgetSix from "./widgets/WidgetSix";
import MyTasksWidget from "./widgets/MyTasksWidget";

const DisplayWidgets = () => {
    return (
        <section>
            <h1 className="
                text-2xl
                font-bold
                text-white
            ">
                Task Dashboard</h1>

            <div className="
                h-px
                bg-white/10
            "/>
            
            {/* Div for the top half of the widgets. */}
            <div className="grid grid-cols-3 gap-4 mb-4 mt-4">
                <div>
                    <ChangeViewWidget />
                </div>
                <div>
                    <WidgetTwo />
                </div>
                <div>
                    <WidgetThree />
                </div>

                <div>
                    <WidgetFour />
                </div>
                <div>
                    <WidgetSix />
                </div>

            </div>

            {/* Div for the bottom half of the widgets. */}
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <MyTasksWidget />
                </div>
            </div>
        </section>
    )
};

export default DisplayWidgets;