<template>
    <div id="Shipping">
        <div class="title">運送方式</div>
        <div class="radio-default" v-if="shippingData.shippingFee == 0">
            <div class="radio-1">
                <div class="radio-outer">
                    <div class="radio-inner"></div>
                </div>
                <div class="tetl">標準運送</div>
                <div class="price">免費</div>
                <div class="description">約3~7個工作天</div>
            </div>
            <div class="radio-2" @click="choose2">
                <div>
                    <div class="radio-outer">
                        <div class="radio-inner"></div>
                    </div>
                </div>
                <div class="tetl">DHL貨運</div>
                <div class="price">$500</div>
                <div class="description">48小時內送達</div>
            </div>
        </div>
        <div class="radio-changed" v-else>
            <div class="radio-1" @click="choose1">
                <div class="radio-outer">
                    <div class="radio-inner"></div>
                </div>
                <div class="tetl">標準運送</div>
                <div class="price">免費</div>
                <div class="description">約3~7個工作天</div>
            </div>
            <div class="radio-2">
                <div>
                    <div class="radio-outer">
                        <div class="radio-inner"></div>
                    </div>
                </div>
                <div class="tetl">DHL貨運</div>
                <div class="price">$500</div>
                <div class="description">48小時內送達</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    initialShippingData: {
      type: Object,
      required: true
    }  
  },
  data () {
    return {
      shippingData: this.initialShippingData
    }
  },
  methods: {
    choose1 () {
      this.shippingData.shippingFee = 0
    },
    choose2 () {
      this.shippingData.shippingFee = 500
    },
  },
  watch: {
    shippingData: {
      handler: function () {
        this.$emit('shippingData', this.shippingData)
      },
      deep: true,
    }
  }
}
</script>


<style >
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
#Shipping .title{
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
#Shipping .radio-default, #Shipping .radio-changed{
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
#Shipping .radio-2 .tetl,   #Shipping .radio-1 .tetl{
  position: absolute;
  width: 203px;
  height: 20px;
  left: 60px;
  top: 11px;
  /* Text/Body2, 14px */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  /* Neutrals/Black */
  color: #000000;
}
#Shipping .radio-2 .price,   #Shipping .radio-1 .price{
  position: absolute;
  width: 24px;
  height: 16px;
  right: 20px;
  top: 13px;
  /* Text/Caption1, 12px */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  text-align: right;
  /* Neutrals/Black */
  color: #000000;
}
#Shipping .radio-2 .description,   #Shipping .radio-1 .description{
  position: absolute;
  width: 318px;
  height: 16px;
  left: 60px;
  top: 33px;
  /* Text/Caption1, 12px */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  /* Neutrals/Black */
  color: #000000;
}

#Shipping .radio-default .radio-1{
  border: 1px solid #2A2A2A;
}
#Shipping .radio-default .radio-1 .radio-outer{
  background-color: #2A2A2A;
  border: 1px solid #2A2A2A;
}
#Shipping .radio-default .radio-1 .radio-outer .radio-inner{
  background-color: #FFFFFF;
}

#Shipping .radio-1:hover {
  cursor: pointer;
}
#Shipping .radio-1 {
  position: relative;
  width: 435px;
  height: 60px;
  left: 0px;
  top: 0px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0px;
  background-color: #FFFFFF;
  border: 1px solid #F0F0F5;
  box-sizing: border-box;
  border-radius: 4px;
}
#Shipping .radio-1 .radio-outer {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 20px;
  top: 20px;
  border-radius: 50%;
  background-color: #FFFFFF;
  border: 1px solid #2A2A2A;
}
#Shipping .radio-1 .radio-outer .radio-inner {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 6px;
  top: 6px;
  border-radius: 50%;
  background-color: #FFFFFF;
}

#Shipping .radio-changed .radio-2{
  border: 1px solid #2A2A2A;
}
#Shipping .radio-changed .radio-2 .radio-outer{
  background-color: #2A2A2A;
  border: 1px solid #2A2A2A;
}
#Shipping .radio-changed .radio-2 .radio-outer .radio-inner{
  background-color: #FFFFFF;
}


#Shipping .radio-2:hover {
  cursor: pointer;
}
#Shipping .radio-2 {
  position: relative;
  width: 435px;
  height: 60px;
  left: 0px;
  top: 0px;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 12px 0px;
  background-color: #FFFFFF;
  border: 1px solid #F0F0F5;
  box-sizing: border-box;
  border-radius: 4px;
}
#Shipping .radio-2 .radio-outer {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 20px;
  top: 20px;
  border-radius: 50%;
  background-color: #FFFFFF;
  border: 1px solid #2A2A2A;
}
#Shipping .radio-2 .radio-outer .radio-inner {
  position: absolute;
  width: 8px;
  height: 8px;
  left: 6px;
  top: 6px;
  border-radius: 50%;
  background-color: #FFFFFF;
}
</style>