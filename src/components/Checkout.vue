<template>
    <div id="Checkout">
        <div class="title">付款資訊</div>
        <div class="input">
            <div class="line-1">
                <div class="card-name">持卡人姓名</div>
                <div>
                    <input class="text-input" type="text" name="card-name" placeholder="John Doe"
                    v-model="checkoutData.ccname">
                </div>
            </div>
            <div class="line-2">
                <div class="card-number">卡號</div>
                <div>
                    <input class="text-input" type="text" name="card-number" placeholder="0000 1111 2222 3333"
                    v-model="checkoutData.cardnumber">
                </div>
            </div>
            <div class="line-3">
                <div class="left">
                    <div class="expiration-date">有效期限</div>
                    <div>
                        <input class="text-input" type="text" name="expiration-date" placeholder="MM/YY"
                        v-model="checkoutData.expdate">
                    </div>
                </div>
                <div class="right">
                    <div class="cvc">CVC/CCV</div>
                    <div>
                        <input class="text-input" type="text" name="cvc" placeholder="123"
                        v-model="checkoutData.cvv">
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
  props: {
    initialCheckoutData: {
      type: Object, 
      required: true
    },
  },
  data () {
    return {
      checkoutData: this.initialCheckoutData
    }
  },
  watch: {
    checkoutData: {
      handler: function () {
        this.$emit('checkoutData', this.checkoutData)
      },
      deep: true,
    }
  }
}
</script>


<style scoped>
Template{
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 540px;
  height: 288px;
  left: 165px;
  top: 314px;
}
#Checkout .title{
  position: absolute;
  width: 540px;
  height: 288px;
  left: 165px;
  top: 314px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */
  color: #2A2A2A;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 0px;
}
#Checkout .input{
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 540px;
  height: 288px;
  left: 165px;
  top: 338px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 12px 0px;
}
#Checkout .input .line-3,   #Checkout .input .line-2,   #Checkout .input .line-1{
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 540px;
  height: 64px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 0px;
}
#Checkout .input .line-3 .right .cvc,   #Checkout .input .line-3 .left .expiration-date,   #Checkout .input .line-2 .card-number,   #Checkout .input .line-1 .card-name{
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  color: #808080;
}
#Checkout .input .line-1 {
  flex-direction: column;
  align-items: flex-start;
}
#Checkout .input .line-1 .text-input {
  width: 350px;
  height: 40px;
}

#Checkout .input .line-2 {
  flex-direction: column;
  align-items: flex-start;
}
#Checkout .input .line-2 .text-input {
  width: 350px;
  height: 40px;
}
#Checkout .input .line-3 .left {
  /* Text/ Field / Input Copy 9 */
  width: 250px;
  height: 64px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
#Checkout .input .line-3 .left .text-input {
  width: 250px;
  height: 40px;
}
#Checkout .input .line-3 .right {
  /* Text/ Field / Input Copy 4 */
  width: 250px;
  height: 64px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 40px;
}
#Checkout .input .line-3 .right .text-input {
  width: 250px;
  height: 40px;
}
</style>