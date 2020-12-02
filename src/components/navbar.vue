<template>
  <nav class="grey darken-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">t-m.webelar</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link 
        tag="li"
        to="/"
        exact
        active-class="active"
        >
            <a href="#" class="cyan darken-1 btn waves-effect waves-light"><i class="large material-icons">add_circle</i></a>
        </router-link>
        <router-link 
        tag="li"
        to="/list"
        active-class="active"
        >
            <a href="#" class="cyan darken-1 btn waves-effect waves-light"><i class="large material-icons">list</i></a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    nav{
        padding: 0 2rem;
    }
    #nav-mobile{
        display: flex;
    }
    
    @media(max-width: 992px){
      .nav-wrapper{
        display: flex;
        justify-content: center;
        a{
          position: relative;
          transform: translateX(0%);
          left: 0;
        }
      }
    }
</style>