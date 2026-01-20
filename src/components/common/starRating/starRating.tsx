import type { taskDifficulty } from "./models/starInterface";

const difficultyRating: taskDifficulty = {
    1: "easy",
    2: "medium",
    3: "intermediate",
    4: "hard",
    5: "difficult"
};

function starDifficulty() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {

        const count: number = star.textContent.split("★").length - 1

        console.log(count)

        if (difficultyRating[count]) {
            star.classList.add(difficultyRating[count]);
            const taskContainer = star.closest('.task-container');
            const paragraphDifficulty = taskContainer?.querySelector('#difficulty');

            console.log(difficultyRating[count]);

            //RB This is currently not used, as difficulty is set to be added later on when a task is expanded. This will be moved/adjusted accordingly.
            if (paragraphDifficulty?.textContent) {
                paragraphDifficulty.textContent = `Difficulty: ${(difficultyRating[count]).charAt(0).toUpperCase() + (difficultyRating[count].slice(1))}`;
            }
        }
    });
}

export default starDifficulty