<template>
    <div >
        <h1 class="title">結帳</h1>
        <Progress :stepper="stepper"/>
        <Address v-if="stepper==1" :initialAddressData="userData.addressData"
            @addressData="saveAddressData" 
        />
        <Shipping v-else-if="stepper==2" :initialShippingData="userData.shippingData"
            @shippingData="saveShippingData"
        />
        <Checkout v-else :initialCheckoutData="userData.checkoutData"
            @checkoutData="saveCheckoutData"
        />
        <Button :stepper="stepper"
            @handle-next-step="handleNextStep"
            @handle-last-step="handleLastStep"
            :userData="userData"
        />
        <Basket :shippingFee="userData.shippingData.shippingFee"
            :initialBasketData="userData.basketData"
            @basketData="saveBasketData"
        />
        <Modal :userData="userData" v-if="stepper==4"
            @handle-leave-modal="handleLastStep"
        />        
    </div>
</template>

<script>
import Progress from './../components/Progress.vue'
import Address from './../components/Address.vue'
import Shipping from './../components/Shipping.vue'
import Checkout from './../components/Checkout.vue'
import Button from './../components/Button.vue'
import Basket from './../components/Basket.vue'
import Modal from './../components/Modal.vue'

const STORAGE_KEY = "alpha-shop-vue"

export default {
    components: {
        Progress,
        Address,
        Shipping,
        Checkout,
        Button,
        Basket,
        Modal
    },
    data() {
        return {
            stepper: 1,
            userData: {
                addressData: {
                    salutation: '',
                    username: '',
                    phone: '',
                    email: '',
                    city: '',
                    addr: '',
                },
                shippingData: {
                    shippingFee: 0
                },
                checkoutData: {
                    ccname: '',
                    cardnumber: '',
                    expdate: '',
                    cvv: '',
                },
                basketData: {
                    quantity1: 1,
                    quantity2: 1,
                    totalPrice: 5298,
                }
            }
        }
    },
    methods: {
        handleNextStep () {
            this.stepper += 1
        },
        handleLastStep () {
            this.stepper -= 1
        },
        saveStorage() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.userData))
        },
        saveAddressData(addressData) {
            this.userData.addressData = addressData
            this.saveStorage()
        },
        saveShippingData(shippingData) {
            this.userData.shippingData = shippingData
            this.saveStorage()
        },
        saveCheckoutData(checkoutData) {
            this.userData.checkoutData = checkoutData
            this.saveStorage()
        },
        saveBasketData(basketData) {
            this.userData.basketData = basketData
            this.saveStorage()
        },
    },
    created() {
        this.userData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || this.userData
    },
}
</script>

<style>
template {
  position: relative;
  width: 1440px;
  height: 1126px;
  background: #E5E5E5;
}
.title {
  position: absolute;
  width: 64px;
  height: 38px;
  left: 165px;
  top: 140px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  /* identical to box height, or 119% */
  color: #2A2A2A;
}

/*# sourceMappingURL=style.css.map */

</style>