<template>
    <div class="button">
        <div><hr class="line"></div>
        <div id="LastStep" v-if="stepper!==1" @click="lastStep">
            <div class="button-group">
                <div class="button-arrow">
                    <i class="arrow-arrow"></i>
                    <hr class="arrow-line">
                </div>
                <div class="button-text">上一步</div>
            </div>
        </div>    
        <div id="NextStep" v-if="stepper<3" @click="nextStep">
            <div class="button-group">
                <div class="button-text">下一步</div>
                <div class="button-arrow">
                    <hr class="arrow-line">
                    <i class="arrow-arrow"></i>
                </div>
            </div>
        </div>
        <div id="Confirm" v-else @click="confirmOrder">
            <div class="button-group">
                <div class="button-text">確認下單</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    stepper: {
      type: Number,
      required: true
    },
    userData: {
      type: Object, 
      required: true
    },
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
      }
    }
  },
  methods: {
    nextStep () {
      this.$emit('handle-next-step')
    },
    lastStep () {
      this.$emit('handle-last-step')
    },
    confirmOrder () {
      console.log(JSON.stringify(this.orderData, null, 2))
      this.nextStep()
    }
  },
}
</script>

<style>
.button {
  /* Button */
  position: absolute;
  width: 540px;
  height: 72px;
  left: 165px;
  top: 650px;
}
 .button .line {
  position: absolute;
  width: 540px;
  height: 1px;
  left: 0px;
  top: 0px;
  background-color: #E6E6EB;
  border: 1px solid #E6E6EB;
}

.button #LastStep {
  position: absolute;
  width: 174px;
  height: 46px;
  left: 0px;
  top: 26px;
}
 .button #LastStep:hover {
  cursor: pointer;
}
 .button #LastStep .button-group {
  /* Inside auto layout */
  display: flex;
  order: 1;
  flex-grow: 0;
}
 .button #LastStep .button-group .button-arrow {
  margin-left: 0px;
  margin-top: 16px;
}
 .button #LastStep .button-group .button-arrow .arrow-line {
  position: absolute;
  border: 0px;
  border-top: solid 0.5px #000000;
  width: 20px;
  display: inline-block;
  background: #000000;
  margin-top: 6.5px;
  margin-left: 0px;
}
 .button #LastStep .button-group .button-arrow .arrow-arrow {
  position: absolute;
  border: solid #000000;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  margin-top: 3.5px;
  margin-left: 0px;
}
 .button #LastStep .button-group .button-text {
  height: 17px;
  /* Text/Button, 14px */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height, or 121% */
  /* Neutrals/White */
  color: #000000;
  /* Inside auto layout */
  margin-left: 32.5px;
  margin-top: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
 .button #NextStep {
  position: absolute;
  width: 174px;
  height: 46px;
  right: 0px;
  top: 26px;
  background: #F67599;
  border-radius: 8px;
}
 .button #NextStep:hover {
  cursor: pointer;
}
 .button #NextStep .button-group {
  /* Inside auto layout */
  display: flex;
  order: 1;
  flex-grow: 0;
}
 .button #NextStep .button-group .button-text {
  height: 17px;
  /* Text/Button, 14px */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height, or 121% */
  /* Neutrals/White */
  color: #FFFFFF;
  /* Inside auto layout */
  margin-left: 48.5px;
  margin-top: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
 .button #NextStep .button-group .button-arrow {
  margin-left: 13.5px;
  margin-top: 16px;
}
 .button #NextStep .button-group .button-arrow .arrow-line {
  position: absolute;
  border: 0px;
  border-top: solid 1px #FFFFFF;
  width: 20px;
  display: inline-block;
  background: #FFFFFF;
  margin-top: 6.5px;
  margin-left: 1.5px;
}
 .button #NextStep .button-group .button-arrow .arrow-arrow {
  position: absolute;
  border: solid #FFFFFF;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  margin-top: 3.5px;
  margin-left: 13.5px;
}
.button #Confirm {
  position: absolute;
  width: 174px;
  height: 46px;
  right: 0px;
  top: 26px;
  background: #F67599;
  border-radius: 8px;
}
.button #Confirm:hover {
  cursor: pointer;
}
.button #Confirm .button-group {
  /* Inside auto layout */
  display: flex;
  order: 1;
  flex-grow: 0;
}
.button #Confirm .button-group .button-text {
  height: 17px;
  /* Text/Button, 14px */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height, or 121% */
  /* Neutrals/White */
  color: #FFFFFF;
  /* Inside auto layout */
  margin: 16px 59px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>