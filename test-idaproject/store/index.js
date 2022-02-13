export const state = () => ({
  products: [
    {
      id: 1,
      nameProduct: 'Наименование товара',
      descriptionProduct:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      linkImageProduct:
        'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      priceProduct: '10 000',
    },
    {
      id: 2,
      nameProduct: 'Наименование товара',
      descriptionProduct:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      linkImageProduct:
        'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      priceProduct: '15 000',
    },
    {
      id: 3,
      nameProduct: 'Наименование товара',
      descriptionProduct:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      linkImageProduct:
        'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      priceProduct: '10 000',
    },
    {
      id: 4,
      nameProduct: 'Наименование товара',
      descriptionProduct:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      linkImageProduct:
        'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      priceProduct: '20 000',
    },
    {
      id: 5,
      nameProduct: 'Наименование товара',
      descriptionProduct:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      linkImageProduct:
        'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      priceProduct: '10 000',
    },
    {
      id: 6,
      nameProduct: 'Наименование товара',
      descriptionProduct:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      linkImageProduct:
        'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      priceProduct: '13 000',
    },
    {
      id: 7,
      nameProduct: 'Наименование товара',
      descriptionProduct:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      linkImageProduct:
        'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      priceProduct: '11 000',
    },
  ],
})

export const getters = () => ({
  getProducts: (state) => {
    return state.products
  },
})

export const mutations = {
  setProduct: (state, payload) => {
    state.products.push(payload)
  },

  deleteProduct: (state, payload) => {
    state.products = state.products.filter((product) => {
      return product.id !== payload
    })
  },
  sortProduct: (state, payload) => {
    switch (payload) {
      case 'name':
        state.products = state.products.sort((a, b) =>
          a.nameProduct.localeCompare(b.nameProduct)
        )
        break
      case 'min':
        state.products = state.products.sort((a, b) =>
          Number(a.priceProduct.replace(/\s+/g, '')) >
          Number(b.priceProduct.replace(/\s+/g, ''))
            ? 1
            : -1
        )
        break
      case 'max':
        state.products = state.products.sort((a, b) =>
          Number(a.priceProduct.replace(/\s+/g, '')) <
          Number(b.priceProduct.replace(/\s+/g, ''))
            ? 1
            : -1
        )
        break
    }
  },
}
