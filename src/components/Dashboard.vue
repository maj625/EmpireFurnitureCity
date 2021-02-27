<template>
    <div class="main-container">
        <div class="gallery" v-for="number in count" :key="number">
            <a target="_blank" href="img_5terre.jpg">
                <img src="../assets/logo.png" alt="Cinque Terre" width="600" height="400">
            </a>
            <div class="desc">
                <p>Size 3 Nails</p>
                <p>R30.00</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: '../assets/logo.png',
            count: []
        }
    },
    methods: {
        counting(){
            for (let index = 0; index < 20; index++) {
                this.count.push(index)
            }
        }
    },
    created() {
        this.counting()
    }
}
</script>

<style scoped>
.main-container {
    width: 100%;
    margin: 10px;
}

.gallery {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
    background-color: white;
}

.gallery:hover {
    border: 1px solid #777;
}

.gallery img {
    width: 100%;
    height: auto;
}

.desc {
    display: flex;
    padding: 10px;
    text-align: center;
    justify-content: space-around;
}
</style>