import { collection, addDoc } from "firebase/firestore";
import  products_database  from "../database/firebase"; // ✅ FIXED PATH
import { useEffect } from "react";

const ProductList = () => {
  const uploadData = async () => {
    const products = [
      {
        attributes: [
          {
            id: "size",
            name: "Size",
            items: [{ value: "S" }, { value: "M" }, { value: "L" }],
          },
        ],
        name: "Black Jacket",
        brand: "Zara",
        category: "jackets",
        colors: ["black"],
        sizes: ["M", "L"],
        inStock: true,
        rating: 4.3,
        prices: [
          { amount: 110.9, currency: { label: "USD", symbol: "$" } },
        ],
        description: "Leather jacket for men",
        gallery: [
          "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        ],
      },
      {
        attributes: [
          {
            id: "size",
            name: "Size",
            items: [{ value: "S" }, { value: "M" }, { value: "L" }],
          },
        ],
        name: "Red Dress",
        brand: "H&M",
        category: "dresses", // ✅ FIXED
        colors: ["red"],
        sizes: ["S", "M"],
        inStock: true,
        rating: 4.6,
        prices: [
          { amount: 110.9, currency: { label: "USD", symbol: "$" } },
        ],
        description: "Beautiful red dress",
        gallery: [
          "https://images.unsplash.com/photo-1520975916090-3105956dac38",
        ],
      },
    ];

    for (let product of products) {
      await addDoc(collection(products_database, "products"), product);
    }

    console.log("✅ Data uploaded!");
  };

  useEffect(() => {
    uploadData();
    
  }, []);

  return <div>Uploading Products...</div>;
};

export default ProductList;