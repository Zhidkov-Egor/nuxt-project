<template>
  <section class="container">
    <div class="wrapper">
      <div class="wrapperProduct">
        <h2 class="headerProduct">Добавление товара</h2>
        <FormProduct />
      </div>
      <CardsProduct class="cardsProduct-grid" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px;
}

.headerProduct {
  margin: 0 0 16px 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 35px;
}

.wrapper {
  position: relative;
  display: grid;
  grid-template-columns: 332px 1fr;
  grid-column-gap: 16px;
}

.wrapperProduct {
  position: fixed;
}

.cardsProduct-grid {
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>
