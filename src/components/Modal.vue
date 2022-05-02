<template>
  <div class="modal-mask" @click="leaveModal">  
    <div class="orderData">
        {
        <div v-for="(detail, key) in orderData" :key="detail.key">
            &emsp;"{{ key }}": "{{ detail }}",
        </div>
        }
    </div>
  </div>
</template>

<script>
export default {
    props: {
      userData: {
          type: Object,
          required: true
      }
    },
    data () {
      return {
        orderData: {
            salutation: this.userData.addressData.salutation,
            username: this.userData.addressData.username,
            phone: this.userData.addressData.phone,
            email: this.userData.addressData.email,
            city: this.userData.addressData.city,
            addr: this.userData.addressData.addr,
            shippingFee: this.userData.shippingData.shippingFee,
            ccname: this.userData.checkoutData.ccname,
            cardnumber: this.userData.checkoutData.cardnumber,
            expdate: this.userData.checkoutData.expdate,
            cvv: this.userData.checkoutData.cvv,
            totalPrice: this.userData.basketData.totalPrice,
        },
      }
    },
    methods: {
        leaveModal () {
            this.$emit('handle-leave-modal')
        }
    }
}
</script>

<style scoped>
.modal-mask {
  position: absolute;
  width: 110%;
  height: 150%;
  top: 0px;
  left: 0px;
  background-color: #00000088 
}

.orderData {
  position: relative;
  width: 250px;
  top: 300px;
  left: 500px;
  z-index: 9998;
  background-color: #FFFFFF;
  border-radius: 6px;
  padding: 12px;
  font-size: 12px;
}
</style>