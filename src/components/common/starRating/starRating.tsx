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
            if (paragraphDifficulty?.textContent) {
                paragraphDifficulty.textContent = `Difficulty: ${difficultyRating[count]}`;
            }
        }
    });
}

export default starDifficulty