<template>
    <section id="highness_admin">
        <sideBar />
        <div class="main-sec">
            <navigationBar />
            <router-view />
        </div>
    </section>
</template>

<script>
import sideBar from "../components/fragments/Sider_bar";
import navigationBar from "../components/fragments/Navigation_bar";
export default {
    components: {
        sideBar,
        navigationBar,
    },
};
</script>