// use props later to pass task info
import "./taskCard.css"

import starDifficulty from "../starRating/starRating";

starDifficulty();

function TaskCard() {
    return (
        <div>
            <div className="task-container">
                {/*prop passed to fill  */}
                <h1>Task Title</h1>
                <div className="star">
                    &#9733;
                </div>
                <div className="task-description-container">
                    <h2>Task Description</h2>
                    {/*prop passed to fill  */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer sed elit tempor, sodales massa eu, venenatis neque. 
                        In hac habitasse platea dictumst. 
                        Curabitur eget nisl id leo placerat ornare at eget lacus.                    
                    </p>
                    {/*prop passed to fill  */}
                    <p>Assignee Name: Lorem Ipsum</p>
                    {/*prop passed to fill  */}
                    <p id="difficulty">Difficulty:</p>
                </div>
                
            </div>
            <div className="task-container">
                {/*prop passed to fill  */}
                <h1>Task Title</h1>
                <div className="star">
                    &#9733; &#9733; &#9733;
                </div>
                <div className="task-description-container">
                    <h2>Task Description</h2>
                    {/*prop passed to fill  */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer sed elit tempor, sodales massa eu, venenatis neque. 
                        In hac habitasse platea dictumst. 
                        Curabitur eget nisl id leo placerat ornare at eget lacus.                    
                    </p>
                    {/*prop passed to fill  */}
                    <p>Assignee Name: Lorem Ipsum</p>
                    {/*prop passed to fill  */}
                    <p id="difficulty">Difficulty:</p>
                </div>
            </div>
            <div className="task-container">
                {/*prop passed to fill  */}
                <h1>Task Title</h1>
                <div className="star">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <div className="task-description-container">
                    <h2>Task Description</h2>
                    {/*prop passed to fill  */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer sed elit tempor, sodales massa eu, venenatis neque. 
                        In hac habitasse platea dictumst. 
                        Curabitur eget nisl id leo placerat ornare at eget lacus.                    
                    </p>
                    {/*prop passed to fill  */}
                    <p>Assignee Name: Lorem Ipsum</p>
                    {/*prop passed to fill  */}
                    <p id="difficulty">Difficulty:</p>
                </div>
            </div>
        </div>
    )
};

export default TaskCard;