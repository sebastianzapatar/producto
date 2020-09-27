<template>
    <header id="header">
            <div class="center">
                <div id="menu">
                    <nav id="menu">
                        <ul>
                            <li>
                                <router-link to="/home">Inicio</router-link>
                                
                            </li>
                            <li>
                               <router-link to="/blog">Blog</router-link>
                            </li>
                            <li>
                                <router-link  to="/insertar">Insertar</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="logo">
                <img src="../assets/logo.png" class="app-logo" alt="Logo del proyecto"/>
                <span id="marca">
                    <strong>
                        Tengo hambre y sueño
                    </strong>
                </span>
            </div>
        </header>
</template>
<script>
export default {
    name:'HeaderComponent'
}
</script>
<style>
@import '../assets/css/style.css'
</style>