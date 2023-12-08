/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import "./favorites.css";

const products = [
  {
    id: 1,
    name: "Cherries",
    href: "#",
    price: "1200",
    imageSrc:
      "https://1.bp.blogspot.com/-5o9LHlBAobg/WRyLiABRM9I/AAAAAAAAIGA/vEWvO3bsXsAJCe9jlvZKflWjooLXSWtRwCEw/s1600/000000000000000000000A%2B%25281%2529.jpg",
    imageAlt: "cherries",
  },
  {
    id: 2,
    name: "Spaghetti",
    href: "#",
    price: "800",
    imageSrc:
      "http://www.wallpaperup.com/uploads/wallpapers/2013/11/27/179705/7ff7698714078458533aff3150410ba4.jpg",
    imageAlt: "spaghetti",
  },
  {
    id: 3,
    name: "Salad",
    href: "#",
    price: "1500",
    imageSrc:
      "http://static3.businessinsider.com/image/56be399e2e526558008b7091-1333-1000/fried-chicken.jpg",
    imageAlt: "Salad",
  },
  {
    id: 4,
    name: "Pizza",
    href: "#",
    price: "1200",
    imageSrc:
      "https://www.getarecipes.com/wp-content/uploads/2020/05/Chicken-Biryani-Recipe.png",
    imageAlt: "Pizza",
  },
  {
    id: 5,
    name: "Burger",
    href: "#",
    price: "1200",
    imageSrc:
      "https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490",
    imageAlt: "Pizza",
  },
  {
    id: 6,
    name: "Pasta",
    href: "#",
    price: "1200",
    imageSrc:
      "https://yummycravingsmagazine.files.wordpress.com/2013/02/pasta-puttanesca.jpg",
    imageAlt: "Pizza",
  },
  {
    id: 7,
    name: "Fries",
    href: "#",
    price: "1200",
    imageSrc:
      "https://blog.thermoworks.com/wp-content/uploads/2018/01/french_fry_atk_method-31-of-36.jpg",
    imageAlt: "Pizza",
  },
  {
    id: 8,
    name: "Kebab",
    href: "#",
    price: "1200",
    imageSrc:
      "https://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/12/kebab-3.jpg",
    imageAlt: "Pizza",
  },

  // More products...
];

export default function Favorites() {
  return (
    <>
      <div className="bg-orangecrayola">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="favorites-container grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 sm:place-items-center sm:w-screen">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
