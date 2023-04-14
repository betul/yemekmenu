import menuData from "./data";
import { useState } from "react";
import "./Menu.css";
import "./Main.css";



function Menu() {
    const [activeCategory, setActiveCategory] = useState("all");


    const handleClick = (category) => {
        setActiveCategory(category);
    };


    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <div className="btn-container">
                    {["all", "breakfast", "lunch", "shakes"].map((category, index) => (
                        <button
                            key={index}
                            type="button"
                            className={activeCategory === category ? "filter-btn active" : "filter-btn"}
                            onClick={() => handleClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="section-center">
                    {menuData
                        .filter((item) => activeCategory === "all" || item.category === activeCategory)
                        .map(({ id, title, price, img, desc }) => (
                            <article className="menu-item" key={id}>
                                <img src={img} alt={title} className="photo" />
                                <div className="item-info">
                                    <header>
                                        <h4>{title}</h4>
                                        <h4 className="price">{price}</h4>
                                    </header>
                                    <p className="item-text">{desc}</p>
                                </div>
                            </article>
                        ))}
                </div>
            </section>
        </main>
    );
}



export default Menu;