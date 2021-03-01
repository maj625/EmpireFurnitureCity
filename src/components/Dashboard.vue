<template>
    <div class="main-container">
        <div class="gallery" v-for="item in items" :key="item">
            <a target="_blank" href="img_5terre.jpg">
                <img :src="item.imageUrl" alt="Cinque Terre" width="600" height="400">
            </a>
            <div class="desc">
                <p>{{item.name}}</p>
                <p>R{{item.sellPrice}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {db} from '../firebase.js'

let InventoryRef = db.collection('Inventory');
export default {
    data() {
        return {
            image: '../assets/logo.png',
            items: [],

        }
    },
    inject: ['myLoader'],
    methods: {
        loadItems(){
            this.myLoader.val = true;
            InventoryRef.orderBy('name').onSnapshot((querySnapshot)=> {
                this.myLoader.val = false;
                if (querySnapshot != null && querySnapshot.size != 0) {
                    this.items = [];
                    querySnapshot.forEach(element => {
                        let item = element.data();
                        if (item.imageUrl == null || item.imageUrl == '') {
                            item.imageUrl = require('../assets/logo.png');
                        }
                        item.id = element.id;
                        this.items.push(item);
                    });
                }else {
                    this.$swal({title: 'No Items found', text: 'Please add some items to view them here.'})
                }
            });
        }
    },
    created() {
        this.loadItems()
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
    height: 200px;
    height: auto;
}

.desc {
    display: flex;
    padding: 10px;
    text-align: center;
    justify-content: space-around;
}
</style>