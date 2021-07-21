<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <h2 class="text-center">Checkout</h2>
    <!-- checkout form  -->
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col-md-12">
                  <h4 class="text-center">Checkout</h4>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form class="form-horizontal">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="name" class="col-md-2 control-label">Name</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="name" placeholder="Name">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="email" class="col-md-2 control-label">Email</label>
                      <div class="col-md-10">
                        <input type="email" class="input-field" id="email" placeholder="Email">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="phone" class="col-md-2 control-label">Phone</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="phone" placeholder="Phone">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="address" class="col-md-2 control-label">Address</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="address" placeholder="Address">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="city" class="col-md-2 control-label">City</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="city" placeholder="City">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="state" class="col-md-2 control-label">State</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="state" placeholder="State">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="zip" class="col-md-2 control-label">Zip</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="zip" placeholder="Zip">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="country" class="col-md-2 control-label">Country</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="country" placeholder="Country">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="card-number" class="col-md-2 control-label">Card Number</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="card-number" placeholder="Card Number">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="card-cvv" class="col-md-2 control-label">CVV</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="card-cvv" placeholder="CVV">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="card-expiration" class="col-md-2 control-label">Expiration</label>
                      <div class="col-md-10">
                        <input type="text" class="input-field" id="card-expiration" placeholder="MM/YY">
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-md-12">
                  <button class="btn btn-primary" @click="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>
