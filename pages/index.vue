<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="product in products" :key="product.id">
          <Product :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      products: [
        {
          id: 1,
          name: 'Shoe',
          img: '/images/product1.jpg'
        },
        {
          id: 2,
          name: 'Shoe',
          img: '/images/product2.jpg'
        },
        {
          id: 3,
          name: 'Shoe',
          img: '/images/product1.jpg'
        },
        {
          id: 4,
          name: 'Shoe',
          img: '/images/product2.jpg'
        },
        {
          id: 5,
          name: 'Shoe',
          img: '/images/product1.jpg'
        },
        {
          id: 6,
          name: 'Shoe',
          img: '/images/product2.jpg'
        },
        {
          id: 7,
          name: 'Shoe',
          img: '/images/product1.jpg'
        },
        {
          id: 8,
          name: 'Shoe',
          img: '/images/product2.jpg'
        },
        {
          id: 9,
          name: 'Shoe',
          img: '/images/product1.jpg'
        },
        {
          id: 10,
          name: 'Shoe',
          img: '/images/product2.jpg'
        },
        {
          id: 11,
          name: 'Shoe',
          img: '/images/product1.jpg'
        },
        {
          id: 12,
          name: 'Shoe',
          img: '/images/product2.jpg'
        }
      ]
    }
  }
}
</script>
