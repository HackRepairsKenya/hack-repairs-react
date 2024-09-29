interface Category {
    name: string;
    id: number;
    image: string;
  }
  
  
  // fetch categories 
  const fetchCategories = asynch() =>{
       const repsonse = await axios.get('https://api.hackrepairs.co.ke/categories')
  }
  export const  categories: Category[] = [
    { id: 1, name: "Tecno", image: "/phone-screen.png" },
    { id: 2, name: "Samsung", image: "/phone-screen.png" },
    { id: 3, name: "Itel", image: "/phone-screen.png" },
    { id: 4, name: "Oppo", image: "/phone-screen.png" },
    { id: 4, name: "Nokia", image: "/phone-screen.png" },
    { id: 4, name: "Realme", image: "/phone-screen.png" },
  
  ];
