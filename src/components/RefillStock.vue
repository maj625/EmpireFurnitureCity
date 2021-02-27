<template>
    <div class="inner-block" style="margin: 15px;">
            <div class="vue-tempalte">
                <form>
                    <h3>Refill Stock</h3>

                    <div class="form-group">
                        <label>Item Name</label>
                        <input type="text" placeholder="Item Name" class="form-control form-control-lg"/>
                    </div>

                    <div class="form-group">
                        <label>Cost Price</label>
                        <input disabled type="number" placeholder="R0.00" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Sell Price</label>
                        <input disabled type="number" placeholder="R0.00" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Quantity</label>
                        <input type="number" placeholder="Quantity to add" class="form-control form-control-lg"/>
                    </div>

                    <button type="submit" class="btn btn-dark btn-lg btn-block">Refill</button>
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