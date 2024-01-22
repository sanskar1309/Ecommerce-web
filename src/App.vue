<template>
 <div id="app" style="background-color: #fffce0;">
   
  
    <!-- Router View -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
   
  </div>

</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style scoped>
/* Global styles */
.banner {
  background-color: #f8f8f8;
  padding: 50px;
  text-align: center;
}

.banner h1 {
  color: #333;
}

.about-us, .contact-us {
  background-color: #eee;
  padding: 20px;
  margin: 20px 0;
}

/* Add transition classes for fade effect */
.about-us, .contact-us {
  transition: opacity 0.5s;
}

.about-us-enter, .about-us-leave-to,
.contact-us-enter, .contact-us-leave-to {
  opacity: 0;
}
</style>
