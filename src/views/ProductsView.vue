<script>
import { mapActions, mapGetters } from 'vuex';
import ListHeader from '@/components/list-header.vue';
import ProductList from './Product-listView.vue';

export default {
  name: 'ProductsView',
  data() {
    return {
      routePath: '/products',
      title: 'products',
    };
  },
  components: {
    ListHeader,
    ProductList,
  },
  created() {
    this.getProductsAction();
  },
  computed: {
    ...mapGetters('products', { products: 'products' }),
  },
  methods: {
    ...mapActions('products', ['getProductsAction']),
    getProducts() {
      this.getProductsAction();
    },
  },
};
</script>

<template>
  <div class="content-container">
    <ListHeader
      :title="title"
      @refresh="getProducts"
      :routePath="routePath"
    ></ListHeader>
    <div class="columns is-multiline is-variable">
      <div class="column is-8" v-if="products">
        <ProductList :products="products"></ProductList>
      </div>
    </div>
  </div>
</template>