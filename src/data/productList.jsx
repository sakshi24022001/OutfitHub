import { collection, addDoc } from "firebase/firestore"; // ✅ same SDK
import db from "../database/firebase";
import { useEffect } from "react";

const ProductList = () => {
  const uploadData = async () => {
    const products = [
    {
        name: "Classic Black Leather Jacket",
        brand: "Zara",
        category: "jackets",
        inStock: true,
        rating: 4.5,
        gallery: [
        "https://images.unsplash.com/photo-1520975916090-3105956dac38"
        ],
        prices: [{ amount: 125.5, currency: { label: "USD", symbol: "$" } }],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "S" }, { value: "M" }, { value: "L" }]
        }
        ],
        description: "Premium black leather jacket"
    },

    {
        name: "Denim Blue Jacket",
        brand: "Levis",
        category: "jackets",
        inStock: true,
        rating: 4.3,
        gallery: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        prices: [{ amount: 158, currency: { label: "USD", symbol: "$" } }],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "M" }, { value: "L" }, { value: "XL" }]
        }
        ],
        description: "Stylish denim jacket"
    },

    {
        name: "Winter Puffer Jacket",
        brand: "H&M",
        category: "jackets",
        inStock: true,
        rating: 4.6,
        gallery: [
        "https://images.unsplash.com/photo-1542060748-10c28b62716f"
        ],
        prices: [{ amount: 147.5, currency: { label: "USD", symbol: "$" } }],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "S" }, { value: "M" }, { value: "L" }]
        }
        ],
        description: "Warm winter puffer jacket"
    },

    {
        name: "Brown Suede Jacket",
        brand: "Zara",
        category: "jackets",
        inStock: true,
        rating: 4.2,
        gallery: [
        "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab"
        ],
        prices: [{ amount: 350.2, currency: { label: "USD", symbol: "$" } }],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "M" }, { value: "L" }]
        }
        ],
        description: "Elegant suede jacket"
    },

    {
        name: "Hooded Casual Jacket",
        brand: "Nike",
        category: "jackets",
        inStock: true,
        rating: 4.4,
        gallery: [
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
        ],
        prices: [{ amount: 1453, currency: { label: "USD", symbol: "$" } }],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "S" }, { value: "M" }, { value: "L" }]
        }
        ],
        description: "Lightweight hooded jacket"
    },

    {
        name: "Olive Green Bomber Jacket",
        brand: "Adidas",
        category: "jackets",
        inStock: true,
        rating: 4.5,
        gallery: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        ],
        prices: [{ amount: 489.5, currency: { label: "USD", symbol: "$" } }],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "M" }, { value: "L" }, { value: "XL" }]
        }
        ],
        description: "Trendy bomber jacket"
    },

    {
        name: "Grey Wool Jacket",
        brand: "H&M",
        category: "jackets",
        inStock: true,
        rating: 4.1,
        gallery: [
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3"
        ],
        prices: [{ amount: 148.5, currency: { label: "USD", symbol: "$" } }],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "S" }, { value: "M" }]
        }
        ],
        description: "Warm wool jacket"
    },

    {
        name: "Black Sports Jacket",
        brand: "Puma",
        category: "jackets",
        inStock: true,
        rating: 4.3,
        gallery: [
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        ],
        prices: [{ amount: 785.2, currency: { label: "USD", symbol: "$" } }],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "M" }, { value: "L" }]
        }
        ],
        description: "Comfortable sports jacket"
    },

    {
        name: "Beige Trench Jacket",
        brand: "Zara",
        category: "jackets",
        inStock: true,
        rating: 4.7,
        gallery: [
        "https://images.unsplash.com/photo-1520975661595-6453be3f7070"
        ],
        prices: [{ amount: 1475, currency: { label: "USD", symbol: "$" } }],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "S" }, { value: "M" }, { value: "L" }]
        }
        ],
        description: "Premium trench coat jacket"
    },

    {
        name: "Lightweight Summer Jacket",
        brand: "Uniqlo",
        category: "jackets",
        inStock: true,
        rating: 4.2,
        gallery: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
        ],
        prices: [
            { amount: 120.7, currency: { label: "USD", symbol: "$" } }
        ],
        attributes: [
        {
            id: "size",
            name: "Size",
            items: [{ value: "S" }, { value: "M" }]
        }
        ],
        description: "Perfect for summer outings"
    }

    ];

    for (let product of products) {
      await addDoc(collection(db, "products"), product);
    }

    console.log("✅ Data uploaded!");
  };

//   useEffect(() => {
//     uploadData();

//   }, []);

  return <div>Uploading Products...</div>;
};

export default ProductList;