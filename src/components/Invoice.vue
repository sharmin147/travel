<template>
  <div v-if="cinv" id="printable-content" class="edit-form">
    <div class="row">
        <div class="col-12">
                <button type="button" class="btn btn-default" @click="printContent"><i class="fa fa-print icon float-right"></i></button>
            <div class="text-center">
                <h2>Invoice for Booking #0000{{cinv.flight.id}}</h2>
            </div>
        </div>
            <hr>
        <div class="col-12">
            <table style="width:100%">
                <tr>
                    <td>
                        <div class="panel panel-default height">
                            <div class="panel-heading">Billing Details</div>
                            <div class="panel-body">
                            <strong>{{cinv.flight.customer}}</strong><br>
                                1111 Army Navy Drive<br>
                                Arlington<br>
                                VA<br>
                                <strong>22 203</strong><br>
                            </div>
                        </div>
                    </td>
                
                    <td>
                        <div class="panel panel-default height">
                            <div class="panel-heading">Payment Information</div>
                            <div class="panel-body">
                                <strong>Pay Type:</strong> {{cinv.payment.payment_method}}<br>
                                <strong>Transaction ID:</strong> {{cinv.payment.transaction_id}}<br>
                                <strong>Pay Date:</strong> {{cinv.payment.payment_date}}<br>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="panel panel-default height">
                            <div class="panel-heading">Billing Details</div>
                            <div class="panel-body">
                            <strong>{{cinv.flight.customer}}</strong><br>
                                1111 Army Navy Drive<br>
                                Arlington<br>
                                VA<br>
                                <strong>22 203</strong><br>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
               <div class="panel-heading">
                    <h3 class="text-center"><strong>Order summary</strong></h3>
                </div>
                <div class="panel-body">
                    <div class="table-responsive">
                        <table class="table table-condensed" style="width:100%">
                            <thead>
                                <tr>
                                    <td><strong>#SL</strong></td>
                            
                                    <td class="text-center"><strong>Flight</strong></td>
                                    <td class="text-center"><strong>Booking Date</strong></td>
                                    <td class="text-center"><strong>Travel Date</strong></td>
                                    <td class="text-center"><strong>Seat Qty</strong></td>
                                    <td class="text-right"><strong>Total Amount</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                   <td class="text-center">{{cinv.flight.flight}}</td>
                                    <td class="text-center">{{cinv.flight.booking_date}}</td>
                                    <td class="text-right">{{cinv.flight.departure_date}} to {{cinv.flight.arrival_date}}</td>
                                    <td class="text-center">{{cinv.flight.qty}}</td>
                                    <td class="text-center">{{cinv.flight.total_amount}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  <div v-else>
    <br />
    <p>Please click on a invoice...</p>
  </div>
</template>

<script>
import bDataService from "../services/bDataService";

export default {
  name: "invoice",
  data() {
    return {
      cinv: null,
      message: ''
    };
  },
  methods: {
    getInvoice(id) {
      bDataService.get(id)
        .then(response => {
          this.cinv = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    printContent() {
          const printableContent = document.getElementById('printable-content')
          const printWindow = window.open('', '', 'height=1000,width=1000')
          printWindow.document.write(printableContent.innerHTML)
          printWindow.print()
        }

  },
  mounted() {
    this.message = '';
    this.getInvoice(this.$route.params.id);
  }
};
</script>

<style>
    .height {
        min-height: 200px;
    }

    .icon {
        font-size: 40px;
        color: #5CB85C;
    }

    .iconbig {
        font-size: 77px;
        color: #5CB85C;
    }

    .table > tbody > tr > .emptyrow {
        border-top: none;
    }

    .table > thead > tr > .emptyrow {
        border-bottom: none;
    }

    .table > tbody > tr > .highrow {
        border-top: 3px solid;
        width:600px;
    }
</style>