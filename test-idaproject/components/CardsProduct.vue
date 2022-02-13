<template>
  <div>
    <select v-model="sortValue" class="sorting" @change="sortProduct">
      <option value="default" selected disabled>По умолчанию</option>
      <option value="min">По цене min</option>
      <option value="max">По цене max</option>
      <option value="name">По наименованию</option>
    </select>
    <transition-group class="cardsProduct" name="product" tag="ul">
      <li v-for="product of products" :key="product.id" class="cardProduct">
        <div class="cardProduct-image">
          <img :src="product.linkImageProduct" alt="Картинка продукта" />
        </div>
        <div class="cardProduct-info">
          <h3 class="cardProduct-header">{{ product.nameProduct }}</h3>
          <p class="cardProduct-description">
            {{ product.descriptionProduct }}
          </p>
          <span class="cardProduct-price">{{ product.priceProduct }} руб.</span>
        </div>
        <div class="deleteProduct" @click="removeProduct(product.id)"></div>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    sortValue: 'default',
  }),
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  methods: {
    removeProduct(id) {
      this.$store.commit('deleteProduct', id)
    },
    sortProduct() {
      this.$store.commit('sortProduct', this.sortValue)
    },
  },
}
</script>

<style lang="scss" scoped>
.sorting {
  display: block;
  margin-left: auto;
  margin-bottom: 16px;
  padding: 10px 16px;
  border: none;
  background: #fffefb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
}

.cardProduct {
  position: relative;
  border-radius: 4px;
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  transition: 0.4s;
  list-style-type: none;

  &-info {
    padding: 16px 16px 24px 16px;
  }

  &-header {
    margin: 0 0 18px 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  &-description {
    margin: 0 0 35px 0;
  }

  &-price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  &:hover {
    cursor: url('~@/assets/img/hover.svg'), pointer;
    transform: scale(1.03);
    box-shadow: -5px -5px 5px -5px rgba(51, 95, 129, 0.6) inset;
    transition: 0.4s;

    .deleteProduct {
      display: block;
    }
  }

  &:active {
    box-shadow: 5px 5px 5px -5px rgba(51, 95, 129, 0.6) inset;
  }
}

.deleteProduct {
  display: none;
  position: absolute;
  right: -8px;
  top: -8px;
  width: 32px;
  height: 32px;
  background-color: #ff8484;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-image: url('~@/assets/img/delete.svg');
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 2;

  &:hover {
    transform: scale(1.2);
    animation: shake 0.5s;
  }
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

.cardsProduct {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin: 0;
  padding: 0;
}

.cardProduct-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  overflow: hidden;
}

/* base */
.company {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.product-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.product-enter-active {
  transition: all 1s ease-out;
}

/* disappearing */
.product-leave-active {
  transition: all 1s ease-in;
  position: absolute;
  opacity: 0;
  width: 332px;
  z-index: 0;
}

/* appear at / disappear to */
.product-enter,
.product-leave-to {
  opacity: 0;
}
</style>
