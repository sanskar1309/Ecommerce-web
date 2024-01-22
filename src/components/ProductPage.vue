<template>
    <div>
        <nav>
        <router-link to="/">Home</router-link>
      </nav>
      <h2>Products</h2>
      <div class="product-list">
        <div v-for="product in productList" :key="product.id" class="product-item">
          <img :src="product.image" alt="Product Image">
          <h3>{{ product.name }}</h3>
          <p class="price">Rs.{{ product.price.toFixed(2) }}</p>
          <button @click="selectProduct(product)">Select</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { useRouter } from 'vue-router';

const router = useRouter();
       const productList = [
          { id: 1, name: 'realme 11 5G', price: 19999.00, image: 'https://image01.realme.net/general/20230816/1692178954554e74b095d259b4f06beace741f670317b.png?width=1440&height=1440&size=514830.webp', thumbnail: 'https://image01.realme.net/general/20230816/1692178954554e74b095d259b4f06beace741f670317b.png?width=1440&height=1440&size=514830.webp', },
          { id: 2, name: 'realme C67 5G', price: 15999.00, image: 'https://image01.realme.net/general/20231214/1702528693747d1aded323d85409b806feeafadee954f.png?width=1440&height=1440&size=456788' },
          { id: 3, name: 'realme C55', price: 13799.00, image: 'https://image01.realme.net/general/20230316/1678958386889.png?width=1440&height=1440&size=591789.webp' },
          { id: 4, name: 'Redmi Note 13 5G', price: 16899.00, image: 'https://i03.appmifile.com/573_item_in/04/01/2024/54cabe34bd58e615c5d1fdc6b8ed3c71.jpg?f=webp&thumb=1&w=500&q=85' },
          { id: 5, name: 'Redmi 12', price: 10999.00, image: 'https://i03.appmifile.com/581_item_in/02/08/2023/ef9bbb8eaeaa9fe5b3469acd5b1454a2.jpg?f=webp&thumb=1&w=500&q=85' },
          { id: 6, name: 'realme GT NEO 3', price: 25999.00, image: 'https://image01.realme.net/general/20220426/1650965285495.png' },
          { id: 7, name: 'realme TechLife Buds T100', price: 1549.00, image: 'https://image01.realme.net/general/20231102/16988965962914c7dc905ffcc4b44ad950f269ed25280.png?width=1080&height=1080&size=250692' },
          { id: 8, name: 'Redmi Buds 3 Lite', price: 1869.00, image: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1658168580.44383358.jpg?f=webp' },
          { id: 9, name: 'realme Buds Air 3 Neo', price: 1949.99, image: 'https://image01.realme.net/general/20220725/1658729857583.png.webp' },
          { id: 10, name: 'Redmi Buds 4 Active', price: 1099.00, image: 'https://i03.appmifile.com/474_item_in/12/06/2023/d6f65d9becd44f6011a21a65e6ef37ed.jpg?f=webp' },
          // Add more products as needed
        ];
        const selectProduct = (product) => {
    router.push({ path: '/order', query: { product: JSON.stringify(product) } });
  };
</script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #333;
  }

  h2 {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 40px;
    font-stretch: ultra-expanded;
    margin: 0.5%;
    background-color: #403e3e;
    color: rgb(255, 255, 255);
  }
  .product-item {
    max-width: 200px;
    margin: 20px;
    padding: 20px;
    background-color: #fefefe;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .product-item img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .price {
    font-weight: bold;
    color: #333;
  }
  
  button {
    background-color: #838483;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #434343;
  }

  nav {
    background-color: #333;
    padding: 10px;
    text-align: left;
  }
  
  nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  </style>
  

  