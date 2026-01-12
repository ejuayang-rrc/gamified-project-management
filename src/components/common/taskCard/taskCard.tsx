// use props later to pass task info
import "./taskCard.css"

interface taskDifficulty {
    [key: number] : string
};

const difficultyRating: taskDifficulty = {
    1: "green-star", 
    2: "lime-star", 
    3: "yellow-star", 
    4: "orange-star", 
    5: "red-star"
};

function starDifficulty() {
    const stars = document.querySelectorAll('#star');

    stars.forEach(star => {

        let count: number = 0;

        const starContext = star.textContent.split("");

        for (let i = 0; i < starContext.length; i++) {
            if (starContext[i] === "★") {
                count++;
            }
        }


        if (Object.prototype.hasOwnProperty.call(difficultyRating, count)) {
            star.classList.add(difficultyRating[count])
        }
    })
}

starDifficulty();

function TaskCard() {
    return (
        <div>
            <div className="task-container">
                {/*prop passed to fill  */}
                <h1>Task Title</h1>
                <div id="star">
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
                    <p>Difficulty: Lorem Ipsum</p>
                </div>
                
            </div>
            <div className="task-container">
                {/*prop passed to fill  */}
                <h1>Task Title</h1>
                <div id="star">
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
                    <p>Difficulty: Lorem Ipsum</p>
                </div>
            </div>
            <div className="task-container">
                {/*prop passed to fill  */}
                <h1>Task Title</h1>
                <div id="star">
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
                    <p>Difficulty: Lorem Ipsum</p>
                </div>
            </div>
        </div>
    )
};

export default TaskCard;