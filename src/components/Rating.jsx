import React, { useState, useEffect} from "react";

const Rating = ({ heroName }) => {
    const [rating, setRating] = useState(0);


// Загружаем сохранённый рейтинг из localStorage
useEffect(() => {
    const savedRating = localStorage.getItem(heroName);
    if (savedRating) {
        setRating(Number(savedRating));
    }
}, [heroName]);


 // Сохраняем рейтинг в localStorage
 const handleRatingChange = (newRating) => {
    setRating(newRating);
    localStorage.setItem(heroName, newRating);
 };

 return (
    <div>
        <h3>Оцените героя:</h3>
        {[1, 2, 3, 4, 5].map((star) => (
            <span
            key={star}
            style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray"}}
            onClick={() => handleRatingChange(star)}
            >
                ★
            </span>
        ))}
    </div>
 );
};

export default Rating;