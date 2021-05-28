<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <router-link class="navbar-brand" :to="{ name: 'home' }">ExpressVue</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" :class="isActive('home') && 'active'">
                    <router-link :to="{ name: 'home' }" class="nav-link">Accueil</router-link>
                </li>
                <li class="nav-item" :class="isActive('post.add') && 'active'">
                    <router-link :to="{ name: 'post.add' }" class="nav-link">Ajouter un article</router-link>
                </li>
                <li class="nav-item" :class="isActive('post.list') && 'active'">
                    <router-link :to="{ name: 'post.list' }" class="nav-link">Liste des articles</router-link>
                </li>
                <li class="nav-item" :class="isActive('post.list-with-search') && 'active'">
                    <router-link :to="{ name: 'post.list-with-search' }" class="nav-link">Liste des articles avec recherche</router-link>
                </li>
                <li class="nav-item" :class="isActive('post.advanced-list') && 'active'">
                    <router-link :to="{ name: 'post.advanced-list' }" class="nav-link">Liste des articles (avancée)</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    methods: {
      isActive(name) {
        if (this.$route.name === name) {
          return true
        } else {
          return false
        }
      }
    }
}
</script>