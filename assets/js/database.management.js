export const MAIN_DATABASE = [
  {
    id: 1,
    ref: "ref-produit-1",
    price: 100,
    description:
      "p1eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in",
    pics: [{ url: "assets/img/s-product/product.jpg" }],
  },
  {
    id: 2,
    ref: "ref-produit-2",
    price: 200,
    description:
      "p2eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in",
    pics: [{ url: "assets/img/s-product/product2.jpg" }],
  },
  {
    id: 3,
    ref: "ref-produit-3",
    price: 300,
    description:
      "p3eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in",
    pics: [{ url: "assets/img/s-product/product3.jpg" }],
  },
];

export function getProductFromDatabase(idProduct) {
  return MAIN_DATABASE.filter((prod) => prod.id === idProduct)[0];
}
