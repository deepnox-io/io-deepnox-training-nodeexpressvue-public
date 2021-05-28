<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a href="#" class="navbar-brand" :to="{ name: 'home' }">ExpressVue</a>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ajouter un article</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
}
</script>