export const PRODUCTS = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 12, category: "Succulents", image: "snake.jpg" },
  { id: 3, name: "Boston Fern", price: 9, category: "Ferns", image: "fern.jpg" },
  { id: 4, name: "Peace Lily", price: 14, category: "Flowering", image: "peace.jpg" },
  { id: 5, name: "Spider Plant", price: 11, category: "Ferns", image: "spider.jpg" },
  { id: 6, name: "Jade Plant", price: 15, category: "Succulents", image: "jade.jpg" },
];
export const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];
