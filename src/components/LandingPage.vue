<template>
    <div id="app">

         <!-- Navigation Menu -->
      <nav>
        <router-link to="/">Home</router-link>
        <a href="#about-us">About Us</a>
        <router-link to="/product">Product</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </nav>
      <!-- Display Banner Section with Background Image and Opacity -->
      <section class="display-banner">
        <div class="banner-content">
          <h1>Welcome to Our E-commerce Platform</h1>
          <p>Discover amazing products at great prices!</p>
          <a href="/product" class="cta-button">Shop Now</a>
        </div>
      </section>
  
  
      <!-- About Us Section with Additional Details -->
      <section id="about-us" class="about-us">
        <h2>About Us</h2>
        <p>Welcome to our mobile and earbuds product website!</p>
        <p>We are not just a store; we are a community of tech enthusiasts who believe in making cutting-edge technology accessible to everyone. Our mission is to bring you the latest gadgets and innovations at prices that won't break the bank. At our core, we value affordability without compromising on quality. Every product in our inventory is carefully selected to ensure it meets our standards for performance, durability, and style. Whether you're a seasoned tech pro or a casual user, we have something for everyone. Established in January 2024, we embarked on this journey with a passion for providing affordable and amazing tech solutions. As we continue to grow, our commitment to delivering exceptional products and an exceptional shopping experience remains unwavering.</p>
      </section>
  
      <!-- Contact Us Section -->
      <section class="contact-us">
        <h2>Contact Us</h2>
        <p>Reach out to us for any inquiries or assistance...</p>
        <p>Contact No. - 1234567890</p>
        <p>Email us - xyz@ecommerce.app.com</p>
      </section>
      <footer>
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
    </div>
  </template>
  
  <style scoped>
  /* Global styles */
  body {
    background-color: #f0f0f0; /* Change this to the desired background color */
  }
  
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
  
  /* Display Banner styles with Background Image and Opacity */
  .display-banner {
    position: relative;
    overflow: hidden;
    color: #fff;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1619972899619-d94cb196b37a?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); /* Add your image path here */
    background-size: cover;
    background-position: center;
    padding: 100px;
    text-align: center;
  }
  
  .banner-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  h2{
    color: white;
  }
  p {
    font-size: 0.9rem;
    margin-bottom: 20px;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  
  .cta-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #5d5d5d;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #3e3e3e;
  }
  
  .about-us, .contact-us {
    background-color: #333;
    padding-left: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 20px 0;
  }

  @media screen and (max-width: 768px) {
  .display-banner {
    padding: 50px;
  }
}
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}
  </style>
  
  <script>
  export default {
    // Component logic goes here
  };
  </script>
  


  