<template>
  <form class="formProduct" @input="checkButtonDisabled" @submit.prevent>
    <label class="nameProduct required" :class="{ errorText: errorName }">
      <span>Наименование товара</span>
      <input
        v-model.trim="product.name"
        name="name"
        :class="{ error: errorName }"
        type="text"
        placeholder="Введите наименование товара"
        required
        @input="validateNameRequired"
      />
    </label>
    <label class="descriptionProduct">
      <span>Описание товара</span>
      <textarea
        v-model.trim="product.description"
        name="description"
        placeholder="Введите описание товара"
      ></textarea>
    </label>
    <label class="linkImageProduct required" :class="{ errorText: errorLink }">
      <span>Ссылка на изображение товара</span>
      <input
        v-model.trim="product.link"
        name="link"
        :class="{ error: errorLink }"
        type="text"
        placeholder="Введите ссылку"
        required
        @input="validateLinkRequired"
      />
    </label>
    <label class="priceProduct required" :class="{ errorText: errorPrice }">
      <span>Цена товара</span>
      <input
        v-model="product.price"
        name="price"
        :class="{ error: errorPrice }"
        type="number"
        placeholder="Введите цену"
        required
        @input="validatePriceRequired"
      />
    </label>
    <button
      type="submit"
      class="addProduct"
      :class="{ active: !buttonDisabled }"
      :disabled="buttonDisabled"
      @click="addProduct"
    >
      Добавить товар
    </button>
  </form>
</template>

<script>
export default {
  data: () => ({
    product: {
      id: '',
      name: '',
      description: '',
      link: '',
      price: '',
    },
    errorName: true,
    errorLink: true,
    errorPrice: true,
    buttonDisabled: true,
    indicatorChange: false,
  }),
  methods: {
    validateNameRequired() {
      this.product.name.length < 3
        ? (this.errorName = true)
        : (this.errorName = false)
    },
    validateLinkRequired() {
      const checkLink =
        this.product.link.match(/\.(jpeg|jpg|gif|png)$/) !== null
      this.product.link.length < 2 || !checkLink
        ? (this.errorLink = true)
        : (this.errorLink = false)
    },
    validatePriceRequired() {
      this.product.price.length < 2
        ? (this.errorPrice = true)
        : (this.errorPrice = false)
    },
    checkButtonDisabled() {
      !this.errorName && !this.errorLink && !this.errorPrice
        ? (this.buttonDisabled = false)
        : (this.buttonDisabled = true)
    },
    addProduct() {
      this.id = Date.now()
      const createProduct = {
        id: this.id,
        nameProduct: this.product.name,
        descriptionProduct: this.product.description,
        linkImageProduct: this.product.link,
        priceProduct: Number(this.product.price).toLocaleString(),
      }
      this.$store.commit('setProduct', createProduct)
      this.product.name = ''
      this.product.description = ''
      this.product.link = ''
      this.product.price = ''
      this.errorName = true
      this.errorLink = true
      this.errorPrice = true
      this.buttonDisabled = true
    },
  },
}
</script>

<style lang="scss" scoped>
.formProduct {
  max-width: 332px;
  width: 100%;
  padding: 24px;
  border-radius: 4px;
  background-color: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
input[type='number']:hover,
input[type='number']:focus {
  -moz-appearance: number-input;
}

input,
textarea {
  width: 100%;
  height: 36px;
  margin: 4px 0 0 0;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: #fffefb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  line-height: 15px;
  appearance: none;

  &::placeholder {
    color: #b4b4b4;
  }

  &:focus-visible {
    outline: 1px solid #9b9498;
  }

  &:focus {
    outline: 1px solid #9b9498;
  }
}

textarea {
  height: 108px;
  resize: none;
}

label {
  position: relative;
  display: block;
  margin-bottom: 16px;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485e;
}

.required > span {
  position: relative;
}

.required > span::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background: #ff8484;
  right: -5px;
  top: 0;
}

label:last-of-type {
  margin-bottom: 24px;
}

.addProduct {
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  background-color: #eeeeee;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #b4b4b4;

  &:focus-visible {
    outline: 1px solid #9b9498;
  }

  &:focus {
    outline: 1px solid #9b9498;
  }
}

.errorText {
  position: relative;

  &::after {
    content: 'Поле является обязательным';
    position: absolute;
    bottom: -14px;
    left: 0;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #ff8484;
  }
}

.error {
  border: 1px solid #ff8484;
}

.active {
  color: #ffffff;
  background-color: #7bae73;
}
</style>
