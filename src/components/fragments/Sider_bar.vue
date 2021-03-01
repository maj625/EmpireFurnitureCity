<template>
    <div class="side-bar">
        <div class="company-logo">
            <img src="../../assets/logo.png" alt="" />
        </div>
        <div class="nav-btns hidden-sm hidden-xs" style="overflow: auto">
            <button
                type="button"
                @click.prevent="viewPage()"
                :class="pageNumber == 1 ? 'active-btn' : ''"
            >
                <i class="fa fa-chart-line"></i>Dashboard
                <span class="w3-right">
                    <i class="fa fa-chevron-right"></i>
                </span>
            </button>
            <button
                type="button"
                :class="pageNumber == 2 ? 'active-btn' : ''"
                @click.prevent="viewPage('addItem')"
            >
                <i class="fa fa-list-alt"></i>Add Item
                <span class="w3-right">
                    <i class="fa fa-chevron-right"></i>
                </span>
            </button>
            <button
                type="button"
                @click.prevent="viewPage('refill')"
                :class="pageNumber == 3 ? 'active-btn' : ''"
            >
                <i class="fa fa-th-list"></i>Refill Stock
                <span class="w3-right">
                    <i class="fa fa-chevron-right"></i>
                </span>
            </button>
            <button
                type="button"
                @click.prevent="viewPage('signup')"
                :class="pageNumber == 4 ? 'active-btn' : ''"
            >
                <i class="fa fa-users"></i>Add User
                <span class="w3-right">
                    <i class="fa fa-chevron-right"></i>
                </span>
            </button>
            <button
                type="button"
                @click.prevent="viewPage('employees')"
                :class="pageNumber == 5 ? 'active-btn' : ''"
            >
                <i class="fa fa-hamburger"></i>Employees
                <span class="w3-right">
                    <i class="fa fa-chevron-right"></i>
                </span>
            </button>
            <button
                type="button"
                @click.prevent="viewPage('notices')"
                :class="pageNumber == 6 ? 'active-btn' : ''"
            >
                <i class="fa fa-hamburger"></i>Notices
                <span class="w3-right">
                    <i class="fa fa-chevron-right"></i>
                </span>
            </button>
            <button type="button" class="logout-btn" v-on:click="logout()">
                <i class="fa fa-sign-out-alt"></i>Logout
            </button>
        </div>
    </div>
</template>

<script>
import { ref, watch } from "vue";
import router from "../../router";
import firebase from 'firebase';

export default {
    setup() {
        const pageNumber = ref(1);
        const pageName = ref(router.currentRoute.value.name);
        function viewPage(currPage) {
            currPage != null
                ? router.push(`/${currPage}`)
                : router.push(`/dashboard/`);
        }

        watch(router.currentRoute, (to) => {
            pageName.value = to.name;
            setPageNumber();
        });
        setPageNumber();
        function setPageNumber() {
            switch (pageName.value) {
                case "dashboard":
                    pageNumber.value = 1;
                    break;
                case "addItem":
                    pageNumber.value = 2;
                    break;
                case "refill":
                    pageNumber.value = 3;
                    break;
                case "signup":
                    pageNumber.value = 4;
                    break;
                case "employees":
                    pageNumber.value = 5;
                    break;
                case "notices":
                    pageNumber.value = 6;
                    break;
            }
        }

        return {
            viewPage,
            pageNumber,
            pageName,
        };
    },
    data() {
        return{
            isLoggedIn: false,
            currentUser: false
        }
    },
    methods: {
        logout: function(){
            firebase.auth().signOut().then(()=>{
                this.$router.push('/');
            })
        }
    }
};
</script>