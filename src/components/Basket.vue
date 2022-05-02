<template>
    <div class="cart">
        <div class="header">購物籃</div>
        <div class="product-1">
            <div><img src="./../assets/Product1.png"></div>
            <div class="name">破壞補丁修身牛仔褲</div>
            <div class="price">$3999</div>
            <div class="count">
                <div id="Minus1" @click="minus1">
                    <div class="oval"></div>
                    <div class="small-minus">
                        <img src="./../assets/minus-icon.png" class="icon">
                    </div>
                </div>
                <div id="Quantity1">{{ basketData.quantity1 }}</div>
                <div id="Plus1" @click="plus1">
                    <div class="oval"></div>
                    <div class="small-plus">
                        <img src="./../assets/minus-icon.png" class="icon1">
                        <img src="./../assets/minus-icon.png" class="icon2">
                    </div>
                </div>
            </div>
        </div>
        <div class="product-2">
            <div><img src="./../assets/Product2.png"></div>
            <div class="name">刷色直筒牛仔褲</div>
            <div class="price">$1299</div>
            <div class="count">
                <div id="Minus2" @click="minus2">
                    <div class="oval"></div>
                    <div class="small-minus">
                        <img src="./../assets/minus-icon.png" class="icon">
                    </div>
                </div>
                <div id="Quantity2">{{ basketData.quantity2 }}</div>
                <div id="Plus2" @click="plus2">
                    <div class="oval"></div>
                    <div class="small-plus">
                        <img src="./../assets/minus-icon.png" class="icon1">
                        <img src="./../assets/minus-icon.png" class="icon2">
                    </div>
                </div>
            </div>
        
        </div>
        <div class="delivery">
            <hr class="devider">
            <div class="delivery-fee">運費</div>
            <div class="fee">${{ shippingFee }}</div>
        </div>
        <div class="total">    
            <hr class="devider">
            <div class="amount">小計</div>
            <div id="Total">${{ basketData.totalPrice }}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    shippingFee: {
      type: Number,
      required: true
    },
    initialBasketData: {
      type: Object,
      required: true
    }  
  },
  data () {
    return {
      basketData: {
        quantity1: this.initialBasketData.quantity1,
        quantity2: this.initialBasketData.quantity2,
        totalPrice: this.initialBasketData.totalPrice,
      }
    }
  },
  methods: {
    computeTotal () {
      this.basketData.totalPrice = this.basketData.quantity1*3999 + this.basketData.quantity2*1299 + this.shippingFee
    },
    plus1 () { 
      return this.basketData.quantity1 += 1,
      this.computeTotal ()
    },
    minus1 () { 
      if (this.basketData.quantity1 > 0) {
        return this.basketData.quantity1 -= 1,
        this.computeTotal ()
      }
    },
    plus2 () { 
      return this.basketData.quantity2 += 1,
      this.computeTotal ()
    },
    minus2 () { 
      if (this.basketData.quantity2 > 0) {
        return this.basketData.quantity2 -= 1,
        this.computeTotal ()
      }
    },
  },
  watch: {
    shippingFee:{
      handler: function () {
        this.computeTotal ()
      },
    },
    basketData: {
      handler: function () {
        this.$emit('basketData', this.basketData)
      },
      deep: true,
    },
  }
}
</script>


<style>
.cart {
  /* Auto layout */
  padding: 32px 24px;
  position: absolute;
  width: 440px;
  height: 492px;
  left: 835px;
  top: 226px;
  /* Neutrals/White */
  background: #FFFFFF;
  /* Neutrals/Pale grey */
  border: 1px solid #F0F0F5;
  box-sizing: border-box;
  border-radius: 8px;
}
.cart .header {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height, or 122% */
  color: #2A2A2A;
}
.cart .product-1 {
  display: flex;
  width: 392px;
  height: 102px;
  position: relative;
  order: 1;
  flex-grow: 0;
  margin: 32px 0px;
}
.cart .product-1 img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0px;
  top: 2px;
}
.cart .product-1 .name {
  width: 158px;
  height: 24px;
  position: absolute;
  left: 121px;
  top: 0px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  color: #2A2A2A;
}
.cart .product-1 .price {
  width: 52px;
  height: 22px;
  position: absolute;
  right: 0px;
  top: 3px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 138% */
  text-align: right;
  color: #000000;
}
.cart .product-1 .count {
  display: flex;
  position: absolute;
  width: 116px;
  height: 27px;
  left: 121px;
  top: 42px;
}
.cart .product-1 .count #Minus1 {
  position: absolute;
  left: 0%;
  right: 77.57%;
  top: 0%;
  bottom: 0%;
}
.cart .product-1 .count #Minus1:hover {
  cursor: pointer;
}
.cart .product-1 .count #Minus1 .oval {
  position: absolute;
  left: 0px;
  right: 0.02px;
  top: 0px;
  bottom: 0px;
  width: 26px;
  height: 27px;
  border-radius: 50%;
  background: #F0F0F5;
}
.cart .product-1 .count #Minus1 .small-minus {
  position: absolute;
  left: 29.17%;
  right: 29.17%;
  top: 29.17%;
  bottom: 29.17%;
}
.cart .product-1 .count #Minus1 .small-minus .icon {
  position: absolute;
  left: 45%;
  width: 1.8px;
  height: 10.84px;
  /* Neutrals/Black */
  background: #000000;
  border-radius: 2px;
  transform: rotate(-90deg);
}
.cart .product-1 .count #Quantity1 {
  position: absolute;
  height: 17px;
  left: 27.1%;
  right: 27.1%;
  top: calc(50% - 8.5px + 0.5px);
  /* Text/Button, 14px */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height, or 121% */
  text-align: center;
  color: #000000;
}
.cart .product-1 .count #Plus1 {
  position: absolute;
  left: 77.57%;
  right: 0%;
  top: 0%;
  bottom: 0%;
}
.cart .product-1 .count #Plus1:hover {
  cursor: pointer;
}
.cart .product-1 .count #Plus1 .oval {
  position: absolute;
  left: 0px;
  right: 0.02px;
  top: 0px;
  bottom: 0px;
  width: 26px;
  height: 27px;
  border-radius: 50%;
  background: #F0F0F5;
}
.cart .product-1 .count #Plus1 .small-plus {
  position: absolute;
  left: 29.17%;
  right: 29.17%;
  top: 29.17%;
  bottom: 29.17%;
}
 .cart .product-1 .count #Plus1 .small-plus .icon1 {
  position: absolute;
  left: 45%;
  width: 1.8px;
  height: 10.84px;
  /* Neutrals/Black */
  background: #000000;
  border-radius: 2px;
  transform: rotate(-90deg);
}
 .cart .product-1 .count #Plus1 .small-plus .icon2 {
  position: absolute;
  left: 45%;
  width: 1.8px;
  height: 10.84px;
  /* Neutrals/Black */
  background: #000000;
  border-radius: 2px;
}
 .cart .product-2 {
  display: flex;
  position: relative;
  width: 392px;
  height: 102px;
  order: 2;
  flex-grow: 0;
  margin: 32px 0px;
}
 .cart .product-2 img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0px;
  top: 2px;
}
 .cart .product-2 .name {
  width: 158px;
  height: 24px;
  position: absolute;
  left: 121px;
  top: 0px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  color: #2A2A2A;
}
 .cart .product-2 .price {
  width: 52px;
  height: 22px;
  position: absolute;
  right: 0px;
  top: 3px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 138% */
  text-align: right;
  color: #000000;
}

 .cart .product-2 .count {
  display: flex;
  position: absolute;
  width: 116px;
  height: 27px;
  left: 121px;
  top: 42px;
}
 .cart .product-2 .count #Minus2 {
  position: absolute;
  left: 0%;
  right: 77.57%;
  top: 0%;
  bottom: 0%;
}
 .cart .product-2 .count #Minus2:hover {
  cursor: pointer;
}
 .cart .product-2 .count #Minus2 .oval {
  position: absolute;
  left: 0px;
  right: 0.02px;
  top: 0px;
  bottom: 0px;
  width: 26px;
  height: 27px;
  border-radius: 50%;
  background: #F0F0F5;
}
 .cart .product-2 .count #Minus2 .small-minus {
  position: absolute;
  left: 29.17%;
  right: 29.17%;
  top: 29.17%;
  bottom: 29.17%;
}
 .cart .product-2 .count #Minus2 .small-minus .icon {
  position: absolute;
  left: 45%;
  width: 1.8px;
  height: 10.84px;
  /* Neutrals/Black */
  background: #000000;
  border-radius: 2px;
  transform: rotate(-90deg);
}
 .cart .product-2 .count #Quantity2 {
  position: absolute;
  height: 17px;
  left: 27.1%;
  right: 27.1%;
  top: calc(50% - 8.5px + 0.5px);
  /* Text/Button, 14px */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height, or 121% */
  text-align: center;
  color: #000000;
}
 .cart .product-2 .count #Plus2 {
  position: absolute;
  left: 77.57%;
  right: 0%;
  top: 0%;
  bottom: 0%;
}
 .cart .product-2 .count #Plus2:hover {
  cursor: pointer;
}
 .cart .product-2 .count #Plus2 .oval {
  position: absolute;
  left: 0px;
  right: 0.02px;
  top: 0px;
  bottom: 0px;
  width: 26px;
  height: 27px;
  border-radius: 50%;
  background: #F0F0F5;
}
 .cart .product-2 .count #Plus2 .small-plus {
  position: absolute;
  left: 29.17%;
  right: 29.17%;
  top: 29.17%;
  bottom: 29.17%;
}
 .cart .product-2 .count #Plus2 .small-plus .icon1 {
  position: absolute;
  left: 45%;
  width: 1.8px;
  height: 10.84px;
  /* Neutrals/Black */
  background: #000000;
  border-radius: 2px;
  transform: rotate(-90deg);
}
 .cart .product-2 .count #Plus2 .small-plus .icon2 {
  position: absolute;
  left: 45%;
  width: 1.8px;
  height: 10.84px;
  /* Neutrals/Black */
  background: #000000;
  border-radius: 2px;
}

 .cart .delivery {
  /* Inside auto layout */
  position: relative;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 32px 0px;
}
 .cart .delivery .devider {
  position: absolute;
  width: 392px;
  border: 1px solid #F0F0F5;
}

 .cart .delivery .delivery-fee {
  position: absolute;
  top: 28px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height, or 143% */
  color: #2A2A2A;
}
 .cart .delivery .fee {
  position: absolute;
  top: 28px;
  right: 0px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height, or 121% */
  text-align: right;
  color: #000000;
}

 .cart .total {
  /* Inside auto layout */
  position: relative;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 32px 0px;
}
 .cart .total .devider {
  position: absolute;
  width: 392px;
  top: 65px;
  border: 1px solid #F0F0F5;
}
 .cart .total .amount {
  position: absolute;
  top: 94px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  color: #2A2A2A;
}
 .cart .total #Total {
  position: absolute;
  top: 94px;
  right: 0px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 121% */
  color: #000000;
}
</style>