import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./MealsList.module.css";
import React from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Ролл Наоми",
    description: "Сыр филадельфия, куринное филе, помидор, огурец, кунжут",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Спайс в лососе",
    description: "Рис, лосось, соус спайс",
    price: 11.99,
  },
  {
    id: "m3",
    name: "Суши с угрем",
    description: "Угорь копченный, соус унаги, кунжут",
    price: 11.99,
  },
  {
    id: "m4",
    name: "Салат Поке с лососем",
    description:
      "Рис, лосось, огурец, чука, гори, стружка тунца, соус ореховый",
    price: 11.99,
  },
];

const MealsList = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      key = {meal.id}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealsList;
