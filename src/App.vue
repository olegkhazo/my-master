<template>
    <router-view></router-view>
</template>

<script>

export default {
    
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

*, *:after, *:before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
}

ul li {
  list-style: none;
}

.routerLink {
    text-decoration: none;
}

a {
  text-decoration: none;
}

small {
  display: block;
  color: red;
}

.invalid {
  border: 2px solid red !important;
}

</style>
