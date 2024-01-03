<template>
 <!-- Navbar Start -->
    <div id="app" class="container-fluid position-relative nav-bar p-0">
        <div class="container-lg position-relative p-0 px-lg-3" style="z-index: 9;">
            <nav class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="" class="navbar-brand">
                    <h1 class="m-0 text-primary"><span class="text-dark">TRAVEL</span>ER</h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div class="navbar-nav ml-auto py-0">
                    <a href="http://localhost/online_travel_agency" class="nav-item nav-link ">Home</a>
                    <a href="http://localhost/online_travel_agency/user/dashboard" class="nav-item nav-link ">Dashboard</a>
                        <!-- <a href="http://localhost/online_travel_agency/user/user-booking" class="nav-item nav-link ">Your Booking List</a> -->
                        <a href="http://localhost/online_travel_agency/user/user-booking/create" class="nav-item nav-link active">Book now</a>
                        <router-link :to="'/' + uid" class="nav-link">My Order</router-link>
                    </div>
                </div>

            </nav>
        </div>
    </div>
    <!-- Navbar End -->
  <div>

    <div class="container-fluid mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      uid:localStorage.getItem('uid')
    };
  },
};
</script>