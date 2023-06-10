<template>
  <div>  

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup> 

</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; }

body { 
  /* background: #1c283f !important; */ 
  /* color: #fff !important; */
  background-size: cover !important;
  background-attachment: fixed !important; 
  background-blend-mode: color-dodge;
  height: 100%;
}
 

  .fade-enter-active {
    transition: all 0.5s linear;
    transform: scale(1);
    filter: blur(0px);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    filter: blur(20px);  
  }
::-webkit-scrollbar {
  width: 5px; 
} 
::-webkit-scrollbar-track {
  background: #fffdfd;
  border-radius: 150px;
}

::-webkit-scrollbar-thumb {
  background: rgb(20, 175, 236); 
  border-radius: 150px;
}


::-ms-scrollbar {
  width: 10px; 
}

::-ms-scrollbar-track {
  background: #495057; 
  
}

::-ms-scrollbar-thumb {
  background:#5a5958; 
}
 

.n-menu-item-content-header {
  padding: 1em;
  border-radius: 50px !important;
  /* background-color: aliceblue; */
  transition: all 0.1s !important;
}

.n-menu-item-content-header a {
  font-weight: 500;
  font-size: 1.3em;
  color: #fff !important;
}

.n-menu.n-menu--horizontal .n-menu-item-content.n-menu-item-content--selected .n-menu-item-content-header {
  /* background:url('../src//assets/m1.jpg') 50% 50%; */
  /* background-size: cover; */
  border-bottom: solid !important;
  transform: scale(0.9);
  /* border-radius: 20px !important;   */
}</style>