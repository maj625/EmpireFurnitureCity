<template>
<div class="main-nav">
    <nav id="navigation_bar" class="admin-nav">
        <h3>Empire Furniture City</h3>
        <ul class="list-unstyled navigation-menu">
            <li v>
                Hi, {{ this.currentUser }}&nbsp;<span class="user-image"
                    ><i class="fa fa-user-o"></i
                ></span>
            </li>
        </ul>
        <appLoader />
    </nav>
</div>
    
</template>

<script>
import firebase from "firebase";
import appLoader from "../fragments/Loader";
export default {
    name: "NavigationBar",
    data() {
        return {
            isLoggedIn: false,
            currentUser: "Admin",
        };
    },
    created() {
        if (firebase.auth().currentUser) {
            (this.isLoggedIn = true),
                (this.currentUser = firebase.auth().currentUser.displayName);
        }
    },
    components: {
        appLoader,
    },
};
</script>