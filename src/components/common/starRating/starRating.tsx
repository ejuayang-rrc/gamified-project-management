import type { starType } from "./models/starType";

type starDifficulty = {
    star: starType
}

export default function StarRating({star: {starCount, difficulty}}: starDifficulty) {
    let stars = "";

    for (let i = 0; i < starCount; i++) {
        if (i < starCount) {
            stars += "★";
        } else {
            stars += "☆";
        }
    }

    return (
        <>
            <span key={difficulty} className={difficulty}>{stars}</span>
        </>
    )
}