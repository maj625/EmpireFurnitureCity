<template>
        <div class="inner-block" style="margin: 15px;">
            <div class="vue-tempalte">
                <form>
                    <h3>Add Employee</h3>

                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name" class="form-control form-control-lg"/>
                    </div>

                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" placeholder="Email Address" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Cellphone</label>
                        <input type="cellphone" placeholder="Cellphone" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Position</label>
                        <select class="form-control form-control-lg" >
                            <option selected disabled value="">--Select Position</option>
                            <option value="Manager">Manager</option>
                            <option value="Employee">Employee</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
                </form>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>