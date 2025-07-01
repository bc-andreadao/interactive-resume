type itemDataType = {
  img: string;
  title: string;
  keyword: string;
  featured?: boolean;
  rating?: number;
  description?: string;
  recipe?: string;
};

const itemData: itemDataType[] = [
  {
    img: "/assets/asparagus-risotto.jpg",
    title: "Asparagus Lemon Risotto",
    keyword: "Italian",
    featured: true,
    rating: 5,
    description:
      "A creamy and flavorful Italian dish made with Arborio rice, fresh asparagus, Parmesan cheese, and a hint of lemon. Perfect for a light yet satisfying meal.",
    recipe: "Heat broth and keep warm. Sauté onions in butter. Add Arborio rice and toast. Deglaze with white wine. Gradually add broth while stirring. Add asparagus and cook until tender. Stir in Parmesan and lemon zest. Serve warm."
  },
  {
    img: "/assets/beef-stroganoff.jpg",
    title: "Classic Beef Stroganoff",
    keyword: "Russian",
    rating: 4,
    description:
      "A hearty and comforting dish featuring tender beef strips in a creamy mushroom sauce, served over egg noodles or rice.",
    recipe: "Sauté onions and mushrooms in butter. Add beef strips and brown. Stir in flour and cook briefly. Add beef broth and simmer. Stir in sour cream and season. Serve over egg noodles or rice."
  },
  {
    img: "/assets/chicken-artichoke-sauce.jpg",
    title: "Chicken in Artichoke Cream Sauce",
    keyword: "Mediterranean",
    rating: 2,
    description:
      "Juicy chicken breasts cooked in a rich and tangy artichoke sauce, perfect for a quick and delicious dinner.",
    recipe: "Season chicken and sear in olive oil. Remove chicken and sauté garlic. Add artichokes and white wine. Stir in cream and simmer. Return chicken to pan and cook through. Serve with rice or pasta."
  },
  {
    img: "/assets/chicken-wings.jpg",
    title: "Seasoned Chicken Wings",
    keyword: "American",
    rating: 4,
    description:
      "Crispy and flavorful chicken wings coated in a savory and slightly spicy sauce, ideal for game nights or casual gatherings.",
    recipe: "Preheat oven and line a baking sheet. Toss wings with oil and seasoning. Bake until crispy. Prepare sauce by mixing hot sauce and butter. Toss baked wings in sauce. Serve immediately."
  },
  {
    img: "/assets/chickpea-tagine.jpg",
    title: "Chickpea Tagine",
    keyword: "Moroccan",
    rating: 3,
    description:
      "A Moroccan-inspired dish with chickpeas, vegetables, and aromatic spices, slow-cooked to perfection and served with couscous.",
    recipe: "Sauté onions and garlic in olive oil. Add spices and toast briefly. Stir in chickpeas, tomatoes, and vegetables. Simmer until tender. Serve over couscous and garnish with fresh herbs."
  },
  {
    img: "/assets/dan-dan-noodles.jpg",
    title: "Sichuan Dan Dan Noodles",
    keyword: "Chinese",
    featured: true,
    rating: 5,
    description:
      "A spicy and savory Sichuan noodle dish with minced pork, chili oil, and a rich, nutty sesame sauce.",
    recipe: "Cook noodles and set aside. Sauté minced pork with garlic and ginger. Mix soy sauce, sesame paste, and chili oil. Toss noodles with sauce and pork. Garnish with green onions and peanuts."
  },
  {
    img: "/assets/green-beans.jpg",
    title: "Garlic Sautéed Green Beans",
    keyword: "American",
    rating: 3,
    description:
      "Fresh green beans sautéed with garlic and olive oil, a simple and healthy side dish for any meal.",
    recipe: "Trim green beans and blanch in boiling water. Sauté garlic in olive oil. Add green beans and toss. Season with salt and pepper. Serve warm."
  },
  {
    img: "/assets/mousakka.jpg",
    title: "Traditional Greek Moussaka",
    keyword: "Greek",
    rating: 4,
    description:
      "A classic Mediterranean casserole layered with eggplant, ground meat, and béchamel sauce, baked to golden perfection.",
    recipe: "Slice and roast eggplant. Sauté onions and ground meat. Add tomatoes and simmer. Prepare béchamel sauce. Layer eggplant, meat, and sauce in a dish. Bake until golden."
  },
  {
    img: "/assets/mushroom-risotto.jpg",
    title: "Creamy Mushroom Risotto",
    keyword: "Italian",
    rating: 5,
    description:
      "A creamy risotto made with Arborio rice, earthy mushrooms, white wine, and Parmesan cheese, perfect for mushroom lovers.",
    recipe: "Heat broth and keep warm. Sauté mushrooms in butter. Add Arborio rice and toast. Deglaze with white wine. Gradually add broth while stirring. Stir in Parmesan and serve warm."
  },
  {
    img: "/assets/okra-and-meatballs.jpg",
    title: "Meatballs with Okra in Tomato Basil Sauce",
    keyword: "Mediterranean",
    rating: 4,
    description:
      "Tender meatballs cooked with fresh okra in a rich tomato and basil sauce, a comforting and hearty dish.",
    recipe: "Mix and shape meatballs. Sear meatballs in a pan. Sauté garlic and add tomatoes. Add okra and simmer. Return meatballs to pan and cook through. Serve with rice or bread."
  },
  {
    img: "/assets/salmon.jpg",
    title: "Herb-Crusted Baked Salmon",
    keyword: "American",
    rating: 5,
    description:
      "Perfectly baked salmon fillets seasoned with herbs and lemon, served with a side of roasted vegetables.",
    recipe: "Preheat oven and line a baking sheet. Season salmon with herbs and lemon. Bake until cooked through. Roast vegetables alongside salmon. Serve together."
  },
  {
    img: "/assets/spaghetti.jpg",
    title: "Spaghetti with Tomato Basil Sauce",
    keyword: "Italian",
    rating: 4,
    description:
      "Classic spaghetti tossed in a rich and flavorful tomato sauce, topped with fresh basil and Parmesan cheese.",
    recipe: "Cook spaghetti until al dente. Sauté garlic in olive oil. Add tomatoes and simmer. Toss spaghetti with sauce. Garnish with basil and Parmesan."
  },
];

export default itemData;
