import type { starType } from "./models/starType";

type starDifficulty = {
    star: starType
}

interface ofDifficulty {
    [key: number | string]: string;
}

const difficultyRating: ofDifficulty = {
    1: "easy",
    2: "medium",
    3: "intermediate",
    4: "hard",
    5: "difficult"
}

export default function StarRating({star: {difficulty}}: starDifficulty) {
    let stars = "";

    const starCount = Number(Object.keys(difficultyRating).find(key => difficultyRating[key] === difficulty))

    for (let i = 0; i < starCount; i++) {
        if (i < starCount) {
            stars += "★";
        }
    }

    return (
        <>
            <span key={difficulty} className={difficulty}>{stars}</span>
        </>
    )
}