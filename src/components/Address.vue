<template>
    <div id="Address">
          <div class="title">寄送地址</div>
          <div class="input">
              <div class="line-1">
                  <div class="left">
                      <div class="gender">稱謂</div>
                      <div>
                          <select class="text-input" name="gender" v-model="addressData.salutation">
                              <option value="Mr.">先生</option>
                              <option value="Ms.">女士</option>
                          </select>
                      </div>
                  </div>
                  <div class="right">
                      <div class="name">姓名</div>
                      <div>
                          <input class="text-input" type="text" name="name" placeholder="請輸入姓名"
                          v-model="addressData.username" >
                      </div>
                  </div>
              </div>
              <div class="line-2">
                  <div class="left">
                      <div class="phone">電話</div>
                      <div>
                          <input class="text-input" type="text" name="phone" placeholder="請輸入行動電話"
                          v-model="addressData.phone">
                      </div>
                  </div>
                  <div class="right">
                      <div class="email">Email</div>
                      <div>
                          <input class="text-input" type="text" name="email" placeholder="請輸入電子郵件"
                          v-model="addressData.email">
                      </div>
                  </div>
              </div>
              <div class="line-3">
                  <div class="left">
                      <div class="region">縣市</div>
                      <div>
                          <select class="text-input" v-model="addressData.city">
                              <option value=''>請選擇縣市</option>
                              <option value="Taipei City">台北市</option>
                              <option value="New Taipei City">新北市</option>
                              <option value="Keelung City">基隆市</option>
                              <option value="Taoyuan City">桃園市</option>
                              <option value="Hsinchu County">新竹縣</option>
                              <option value="Hsinchu City">新竹市</option>
                              <option value="Miaoli County">苗栗縣</option>
                              <option value="Taichung City">台中市</option>
                              <option value="Nantou County">南投縣</option>
                              <option value="Changhua City">彰化縣</option>
                              <option value="Yunlin County">雲林縣</option>
                              <option value="Chiayi County">嘉義縣</option>
                              <option value="Chiayi City">嘉義市</option>
                              <option value="Tainan City">台南市</option>
                              <option value="Kaohsiung City">高雄市</option>
                              <option value="Pingtung County">屏東縣</option>
                              <option value="Yilan County">宜蘭縣</option>
                              <option value="Hualien County">花蓮縣</option>
                              <option value="Taitung County">台東縣</option>
                              <option value="Penghu County">澎湖縣</option>
                              <option value="Kinmen County">金門縣</option>
                              <option value="Lienchiang County">連江縣</option>
                          </select>
                      </div>
                  </div>
                  <div class="right">
                      <div class="address">地址</div>
                      <div>
                          <input class="text-input" type="text" name="address" placeholder="請輸入地址"
                          v-model="addressData.addr">
                      </div>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
export default {
  props: {
    initialAddressData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      addressData: this.initialAddressData
    }
  },
  watch: {
    addressData: {
      handler: function () {
        this.$emit('addressData', this.addressData)
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
#Address .title {
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
#Address .input {
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
#Address .input .line-3,   #Address .input .line-2,   #Address .input .line-1 {
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
#Address .input .line-3 .right .address,   #Address .input .line-3 .left .region,   #Address .input .line-2 .right .email,   #Address .input .line-2 .left .phone,   #Address .input .line-1 .right .name,   #Address .input .line-1 .left .gender {
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
#Address .input .line-1 .left {
  /* Text/ Field / Input Copy 9 */
  width: 160px;
  height: 64px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
#Address .input .line-1 .left .text-input {
  width: 160px;
  height: 40px;
}
#Address .input .line-1 .right {
  /* Text/ Field / Input Copy 4 */
  width: 350px;
  height: 64px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 30px;
}
#Address .input .line-1 .right .text-input {
  width: 350px;
  height: 40px;
}
#Address .input .line-2 .left {
  /* Text/ Field / Input Copy 9 */
  width: 250px;
  height: 64px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
#Address .input .line-2 .left .text-input {
  width: 250px;
  height: 40px;
}
#Address .input .line-2 .right {
  /* Text/ Field / Input Copy 4 */
  width: 250px;
  height: 64px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 40px;
}
#Address .input .line-2 .right .text-input {
  width: 250px;
  height: 40px;
}
#Address .input .line-3 .left {
  /* Text/ Field / Input Copy 9 */
  width: 160px;
  height: 64px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
#Address .input .line-3 .left .text-input {
  width: 160px;
  height: 40px;
}
#Address .input .line-3 .right {
  /* Text/ Field / Input Copy 4 */
  width: 350px;
  height: 64px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 30px;
}
  #Address .input .line-3 .right .text-input {
  width: 350px;
  height: 40px;
}
</style>