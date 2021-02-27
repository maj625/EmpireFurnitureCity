<template>
    <div class="inner-block" style="margin: 15px;">
            <div class="vue-tempalte">
                <form>
                    <h3>Add Item</h3>

                    <div class="form-group">
                        <label>Item Name</label>
                        <input type="text" placeholder="Item Name" class="form-control form-control-lg"/>
                    </div>

                    <div class="form-group">
                        <label>Cost Price</label>
                        <input type="number" placeholder="R0.00" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Sell Price</label>
                        <input type="number" placeholder="R0.00" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Description Text</label>
                        <input type="text" placeholder="Text written on the item" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Available in stock</label>
                        <select class="form-control form-control-lg" >
                            <option selected disabled value="">--Select</option>
                            <option value="true">Available</option>
                            <option value="False">Out of stock</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-dark btn-lg btn-block">Add Item</button>
                </form>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>