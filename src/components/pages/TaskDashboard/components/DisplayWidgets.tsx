import WidgetOne from "./widgets/WidgetOne";
import WidgetTwo from "./widgets/WidgetTwo";
import WidgetThree from "./widgets/WidgetThree";
import WidgetFour from "./widgets/WidgetFour";
import WidgetSix from "./widgets/WidgetSix";
import WidgetSeven from "./widgets/WidgetSeven";

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
            <div>
                <div>
                    <WidgetOne />
                </div>
                <div>
                    <WidgetTwo />
                </div>
                <div>
                    <WidgetThree />
                </div>
            </div>

            {/* Div for the bottom half of the widgets. */}
            <div>

                <div>
                    <WidgetFour />
                </div>
                <div>
                    <WidgetSix />
                </div>
                <div>
                    <WidgetSeven />
                </div>
            </div>
        </section>
    )
};

export default DisplayWidgets;