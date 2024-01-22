<template>
    <div>
        <nav>
        <router-link to="/">Home</router-link>
      </nav>
      <section class="contact-form">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
  
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
  
          <label for="subject">Subject:</label>
          <input type="text" id="subject" v-model="formData.subject" required>
  
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
  
          <button type="submit">Submit</button>
        </form>
      </section>
  
      <!-- Navigation Menu -->
    
      
    </div>
  </template>
  
  <style scoped>
  .contact-form {
    max-width: 600px;
    margin-top: 40%;
    margin: 0 auto;
    padding: 40px;
    background-color: #e2dede;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .contact-form h2 {
    text-align: center;
    color: #333;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
    font-weight: bold;
  }
  
  input,
  textarea {
    padding: 10px;
    margin: 5px 0 15px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: rgb(76, 78, 76);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: rgb(53, 55, 53);
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
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Your form submission logic goes here
      }
    }
  };
  </script>
  