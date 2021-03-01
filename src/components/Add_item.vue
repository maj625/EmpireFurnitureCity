<template>
    <div class="inner-block" style="margin: 15px;">
            <div class="vue-tempalte">
                <form>
                    <h3>Add Item</h3>

                    <div class="form-group">
                        <label>Item Details</label>
                        <div class="form-inline">
                            <input style="width: 49%; margin-right: 2%;" type="text" placeholder="Item Code" class="form-control form-control-lg" v-model="code"/>
                            <input style="width: 49%" type="text" placeholder="Item Name" class="form-control form-control-lg" v-model="name"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Pricing</label>
                        <div class="form-inline">
                            <input style="width: 49%; margin-right: 2%;" type="number" placeholder="Cost Price (e.g R0.00)" class="form-control form-control-lg" v-model="costPrice"/>
                            <input style="width: 49%" type="number" placeholder="Sell Price (e.g R0.00)" class="form-control form-control-lg" v-model="sellPrice"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Item Image</label>
                        <input type="file" accept="image/*" class="form-control form-control-lg" v-on:change="onFileChange"/>
                    </div>

                    <div class="form-group">
                        <label>Description Text</label>
                        <input type="text" placeholder="Text written on the item" class="form-control form-control-lg" v-model="description"/>
                    </div>

                    <div class="form-group">
                        <label>Available in stock</label>
                        <select class="form-control form-control-lg" v-model="isAvailable">
                            <option selected disabled value="">--Select</option>
                            <option value=true>Available</option>
                            <option value=false>Out of stock</option>
                        </select>
                    </div>

                    <button type="button" class="btn btn-dark btn-lg btn-block" v-on:click="addItem">Add Item</button>
                </form>
            </div>
        </div>
</template>
<script>
import {db} from '../firebase.js'
import {storage} from '../firebase.js'

let InventoryRef = db.collection('Inventory');
export default {
    data() {
        return {
            name: '',
            code: '',
            costPrice: '',
            sellPrice: '',
            image: null,
            description: '',
            isAvailable: false,
        }
    },
    inject: ['myLoader'],
    methods: {
        onFileChange(e) {
            this.image = e.target.files[0];
            if (this.image == null) {
                this.imageUrl = null
                return
            }
        },

        uploadFile(id){
            if (id == null || id == '') {
                this.$swal({title: 'Name and Code required', text: 'Please enter the item name and code before you upload the image'});
                return;
            }
            storage.ref('images/'+ id).put(this.image)
            .then(response => {
                response.ref.getDownloadURL().then((downloadURL) => {
                    let item = {
                        name: this.name,
                        code: this.code,
                        costPrice: this.costPrice,
                        sellPrice: this.sellPrice,
                        imageUrl: downloadURL,
                        description: this.description,
                        available: this.isAvailable
                    }
                    InventoryRef.doc(id).set(item).then(()=>{
                        this.myLoader.val = false;
                        this.name = '',
                        this.code = '',
                        this.costPrice = '',
                        this.sellPrice = '',
                        this.image = null,
                        this.description = '',
                        this.isAvailable = false
                        this.$swal({title: 'Item Added', text: 'Item succesfully added to inventory'});
                    }).catch((err)=>{
                        this.myLoader.val = false;
                        this.$swal({title: 'Adding item Failed', text: err.message});
                    });
                });
            })
            .catch(err => this.$swal({title: 'Error uploading image', text: err.message}));
        },

        checkForm() {
            if(this.code == ''){
                this.$swal({title: 'Invalid item Code', text: 'Please enter a valid item code.'});
                return false;
            }
            if(this.name == '' || this.name.length < 3){
                this.$swal({title: 'Invalid item Name', text: 'Item name must be more than two charecters.'});
                return false;
            }
            if(this.costPrice == '' || this.costPrice < 1){
                this.$swal({title: 'Invalid Cost Price', text: 'Cost price of the item must be more than 0.'});
                return false;
            }
            if(this.sellPrice == '' || this.sellPrice < this.costPrice){
                this.$swal({title: 'Invalid Sell Price', text: 'Selling price cannot be less than cost price, that is not how business works.'});
                return false;
            }
            if(this.image == null){
                this.$swal({title: 'No image selected', text: 'You have not selected an image of the item.'});
                return false;
            }
            if(this.description == '' || this.description.length < 6){
                this.$swal({title: 'Insufficient description', text: 'Detailed description will help searching an item in case you forget the name and code of item.'});
                return false;
            }

            return true;
        },

        addItem(){
            if (this.checkForm() == false) {
                return;
            }
            let id = this.name + this.code;
            id = id.replace(/\s/g,'')
            id = id.replace(/\//g,'')
            id = id.replace(/\./g, "");
            this.myLoader.val = true;
            InventoryRef.doc(id).get().then((result)=>{
                this.myLoader.val = false;
                let doc = result.data();
                if (result.exists) {
                    this.$swal({title: 'Duplicate Item', text: `${doc.code}: ${doc.name} exists in the database, please use the edit option if you wish to change item details`});
                } else {
                    this.myLoader.val = true;
                    this.uploadFile(id);
                }
            }).catch((err)=>{
                this.myLoader.val = false;
                this.$swal({title: 'Error', text: err.message});
            });
        }
    }
}
</script>
<style lang="">
    
</style>