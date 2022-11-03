<template>
    <header class="header">
        <div class="header__wrap">
            <RouterLink class="header__link" exact-active-class="header__link-exact-active" to="/"
                >Главная</RouterLink
            >
            <RouterLink
                class="header__link"
                exact-active-class="header__link-exact-active"
                to="/archived"
                >Архив</RouterLink
            >
        </div>
    </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 2;

    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 50px;

    padding: 0 20px;

    background-color: var(--color-theme-orange);

    &__wrap {
        height: inherit;
        display: flex;
    }

    &__link {
        display: flex;
        align-items: center;
        padding: 10px;
        height: inherit;
        color: var(--color-theme-white);
        transition: all 0.4s ease-in;

        &:hover {
            color: var(--color-theme-black);
            background-color: var(--color-theme-blue);
        }

        &-exact-active {
            background-color: var(--color-theme-dark);
        }
    }
}
</style>
