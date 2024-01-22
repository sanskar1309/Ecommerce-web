<template>
    <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/product">Product</router-link>
      </nav>
      <section class="order-info">
      <h2>Order Information</h2>
      <div v-if="selectedProduct">
        <img :src="selectedProduct.image" alt="Selected Product Image" style="max-width: 10%;">
        <p>Product: {{ selectedProduct.name }}</p>
        <p>Price: Rs.{{ selectedProduct.price }}</p>
        <p>GST (18%): Rs.{{ calculateGST(selectedProduct.price) }}</p>
        <p>Total Amount: Rs.{{ calculateTotalAmount(selectedProduct.price) }}</p>
      </div>
      <div v-else>
        <p>No product selected</p>
      </div>
    </section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const selectedProduct = ref(null);
  const router = useRouter();

  onMounted(() => {
    // Retrieve the selected product from the router's state
    const productQuery = router.currentRoute.value.query.product;

    try {
      // Parse the JSON string to get the product object
      selectedProduct.value = JSON.parse(productQuery);
    } catch (error) {
      console.error('Error parsing product JSON:', error);
    }
  });

  const calculateGST = (price) => (price * 0.18).toFixed(2);

  const calculateTotalAmount = (price) => {
    const gstAmount = calculateGST(price);
    return (parseFloat(price) + parseFloat(gstAmount)).toFixed(2);
  };
</script>



  
  <style scoped>
  /* Add your styles here */
  nav {
    background-color: #333;
    padding: 10px;
    text-align: center;
  }
  
  nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  
  .order-info {
    padding: 20px;
    margin: 20px 0;
    background-color: #e7e4e4;
  }
  
  h2 {
    color: #333;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  </style>
  