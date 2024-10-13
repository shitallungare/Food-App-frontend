import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className='heading'>
            POPULAR DISHES
          </h1>
          <p>
            At our restaurant, we take pride in our diverse menu that features a range of popular offerings. One highlight is our perfectly grilled seafood, which is tender and flaky, served alongside seasonal vegetables and a zesty lemon butter sauce that enhances its flavors. For pasta enthusiasts, we provide a vibrant vegetarian option that showcases fresh sautéed vegetables combined with al dente noodles in a light garlic olive oil sauce.
          </p>
        </div>
        <div className="dishes_container">
          {
            data[0]?.dishes?.map((element) => {
              return (
                <div className='card' key={element.id}>
                  <img src={element.image} alt={element.title} />
                  <h3>{element.title}</h3>
                  <button>{element.category}</button>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Menu;
