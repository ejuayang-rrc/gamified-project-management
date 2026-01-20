// use props later to pass task info
import "./taskCard.css"

import starDifficulty from "../starRating/starRating";

starDifficulty();

function TaskCard() {
    return (
            <div className="task-container">
                {/*prop passed to fill  */}
                <div className="task-header-container">
                    <h1>Sample Task</h1>
                    <p>&#8942;</p> {/** TEMPORARY */}
                </div>
                    <div id="star">
                        &#9733;  &#9733;  &#9733;  &#9733;
                    </div>
                <div className="task-description-container">
                    {/*prop passed to fill  */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer sed elit tempor, sodales massa eu, venenatis neque. 
                        In hac habitasse platea dictumst. 
                        Curabitur eget nisl id leo placerat ornare at eget lacus.                    
                    </p>
                    {/*prop passed to fill  */}
                    <div className="task-assignee-container">
                        <p>John Smith</p>
                    </div>
                    <div className="task-date-container">
                        {/*prop passed to fill  */}
                        <p>Date: Lorem Ipsum</p>
                    </div>
                </div>
            </div>
    )
};

export default TaskCard;