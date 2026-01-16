// use props later to pass task info
import "./taskCard.css"


function TaskCard() {
    return (
        <div className="task-container">
            {/*prop passed to fill  */}
            <h1>Task Title</h1>
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
                <p>Difficulty: Lorem Ipsum</p>
            </div>
        </div>
    )
};

export default TaskCard;