export const MAIN_DATABASE = new Set([
  {
    id: 1,
    ref: "ref-produit-1",
    price: 100,
    description:
      "p1eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in",
    pics: [
      {
        bigPicUrl: "assets/img/product/product1-big.jpg",
        smallPicUrl: "assets/img/product/product13.jpg",
        isMain: true,
      },
      {
        bigPicUrl: "assets/img/product/product2-big.jpg",
        smallPicUrl: "assets/img/product/product2.jpg",
      },
      {
        bigPicUrl: "assets/img/product/product3-big.jpg",
        smallPicUrl: "assets/img/product/product4.jpg",
      },
      {
        bigPicUrl: "assets/img/product/product1-big.jpg",
        smallPicUrl: "assets/img/product/product13.jpg",
      },
    ],
  },
  {
    id: 2,
    ref: "ref-produit-2",
    price: 200,
    description:
      "p2eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in",
    pics: [
      {
        bigPicUrl: "assets/img/product/product1-big.jpg",
        smallPicUrl: "assets/img/product/product13.jpg",
      },
      {
        bigPicUrl: "assets/img/product/product2-big.jpg",
        smallPicUrl: "assets/img/product/product2.jpg",
        isMain: true,
      },
      {
        bigPicUrl: "assets/img/product/product3-big.jpg",
        smallPicUrl: "assets/img/product/product4.jpg",
      },
      {
        bigPicUrl: "assets/img/product/product2-big.jpg",
        smallPicUrl: "assets/img/product/product2.jpg",
      },
    ],
  },
  {
    id: 3,
    ref: "ref-produit-3",
    price: 300,
    description:
      "p3eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in",
    pics: [
      {
        bigPicUrl: "assets/img/product/product1-big.jpg",
        smallPicUrl: "assets/img/product/product13.jpg",
      },
      {
        bigPicUrl: "assets/img/product/product2-big.jpg",
        smallPicUrl: "assets/img/product/product2.jpg",
      },
      {
        bigPicUrl: "assets/img/product/product3-big.jpg",
        smallPicUrl: "assets/img/product/product4.jpg",
        isMain: true,
      },
      {
        bigPicUrl: "assets/img/product/product3-big.jpg",
        smallPicUrl: "assets/img/product/product4.jpg",
      },
    ],
  },
]);

export function getProductFromDatabase(idProduct) {
  return new Promise((resolve, reject) => {
    try {
      const productFromDB = Array.from(MAIN_DATABASE).find(
        (prod) => prod.id === idProduct
      );
      resolve(JSON.parse(JSON.stringify(productFromDB)));
    } catch (error) {
      reject(error);
    }
  });
}
