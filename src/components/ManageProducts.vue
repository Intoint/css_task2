<template>
<div>
    <section>
      <save-product-form :product="productInForm" v-on:submit="onFormSave"></save-product-form>
    <ProductList :products="products" v-on:edit="onEditClicked"></ProductList>
  </section>
</div>
</template>

<script>

import ProductList from './ProductList'
import SaveProductForm from './SaveProductForm'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: '',
      description: '',
      price: null
    }
  }
}

export default {
  components: {
    ProductList,
    SaveProductForm
  },
  data: initialData,
  methods: {
    onFormSave (productData) {
      // eslint-disable-next-line no-console
      console.log('productData', JSON.stringify(productData))
    }
  }
}
</script>