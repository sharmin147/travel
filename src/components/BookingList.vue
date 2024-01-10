<template>
  <div class="row">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <h4>Booking List</h4>
       <div class="row align-items-center"> 
            <div class="col-12">
                <div class="card border-0">
                    <div class="card-header bg-primary text-center">
                    <h1 class="text-white m-0">Booking Summary</h1>
                    </div>
                    <div class="card-body rounded-bottom bg-white p-5">
                       <table class="table">
                        <tr>
                          <th>#SL</th>
                          <th>Flight</th>
                          <th>Seat Class</th>
                          <th>Booking Date</th>
                          <th>Travel Date</th>
                          <th>Seat Qty</th>
                          <th>Total Amount</th>
                          <th>Action</th>
                        </tr>
                        <tr v-for="inv in invs" :key="inv.id">
                          <td>{{ inv.id }}</td>
                          <td>{{ inv.flight }}</td>
                          <td>{{ inv.sclass }}</td>
                          <td>{{ inv.booking_date }}</td>
                          <td>{{ inv.departure_date }} to {{ inv.arrival_date }}</td>
                          <td>{{ inv.qty }}</td>
                          <td @click="setActiveTutorial(inv, index)">{{ inv.total_amount }}</td>
                          <td>
                            <router-link :to="'/invoice/' + inv.id" class="btn btn-info">Get Invoice </router-link>
                          </td>
                        </tr>
                      </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentTutorial.id }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentTutorial.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>
       </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template><script>
import bDataService from "../services/bDataService";
export default {
  name: "booking-list",
  data() {
    return {
      invs: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveBookings() {
      localStorage.setItem('uid', this.$route.params.uid);
      bDataService.getAll(localStorage.getItem('uid'))
        .then(response => {
          this.invs = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
   setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },
  searchTitle() {
      bDataService.findByTitle(this.title)
        .then(response => {
          this.invs = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveBookings();
  }
};
</script>
