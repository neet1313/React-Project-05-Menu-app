import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data"

const categoryItems = ['all',...new Set(items.map((item) => item.category))];
//1)Map all categories
//2)Set gives object of each category(without repetition)
//3)Turn the object into array using spread operator [...]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(categoryItems);

  const filterCategoryHandler = (filteredCategory) => {
    if (filteredCategory === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === filteredCategory);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Menu </h2>
          <div className="underline"></div>
        </div>

        <Categories
          onCategoryItems={categories}
          onFilterCategory={filterCategoryHandler}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
