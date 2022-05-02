<template>
    <div>
        <div id="Progress1" v-if="stepper==1">
            <div class="step-1">
                <div class="step-number">
                    <div class="number">1</div>
                </div>
                <div class="step-title">
                    寄送地址
                </div>
            </div>
            <div class="progress-bar-1"></div>
            <div class="step-2">
                <div class="step-number">
                    <div class="number">2</div>    
                </div>
                <div class="step-title">
                    運送方式
                </div>
            </div>
            <div class="progress-bar-2"></div>
            <div class="step-3">
                <div class="step-number">
                    <div class="number">3</div>    
                </div>
                <div class="step-title">
                    付款資訊
                </div>
            </div>
        </div>
        <div id="Progress2" v-else-if="stepper==2">
            <div class="step-1">
                <div class="step-number">
                    <img class="number" src="./../assets/check.png">
                </div>
                <div class="step-title">
                    寄送地址
                </div>
            </div>
            <div class="progress-bar-1"></div>
            <div class="step-2">
                <div class="step-number">
                    <div class="number">2</div>    
                </div>
                <div class="step-title">
                    運送方式
                </div>
            </div>
            <div class="progress-bar-2"></div>
            <div class="step-3">
                <div class="step-number">
                    <div class="number">3</div>    
                </div>
                <div class="step-title">
                    付款資訊
                </div>
            </div>
        </div>
        <div id="Progress3" v-else>
            <div class="step-1">
                <div class="step-number">
                    <img class="number" src="./../assets/check.png">
                </div>
                <div class="step-title">
                    寄送地址
                </div>
            </div>
            <div class="progress-bar-1"></div>
            <div class="step-2">
                <div class="step-number">
                    <img class="number" src="./../assets/check.png">    
                </div>
                <div class="step-title">
                    運送方式
                </div>
            </div>
            <div class="progress-bar-2"></div>
            <div class="step-3">
                <div class="step-number">
                    <div class="number">3</div>    
                </div>
                <div class="step-title">
                    付款資訊
                </div>
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
    }
  }
}
</script>


<style>
#Progress1, #Progress2, #Progress3{
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 536px;
  height: 24px;
  left: 165px;
  top: 226px;
}
 #Progress3 .step-3,  #Progress3 .step-2,  #Progress3 .step-1,  #Progress2 .step-3,  #Progress2 .step-2,  #Progress2 .step-1,  #Progress1 .step-3,  #Progress1 .step-2,  #Progress1 .step-1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  position: relative;
  width: 96px;
  height: 24px;
  left: 0px;
  top: 0px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
 #Progress3 .step-3 .step-number,  #Progress3 .step-2 .step-number,  #Progress3 .step-1 .step-number,  #Progress2 .step-3 .step-number,  #Progress2 .step-2 .step-number,  #Progress2 .step-1 .step-number,  #Progress1 .step-3 .step-number,  #Progress1 .step-2 .step-number,  #Progress1 .step-1 .step-number {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
 #Progress3 .step-3 .step-number .number,  #Progress3 .step-2 .step-number .number,  #Progress3 .step-1 .step-number .number,  #Progress2 .step-3 .step-number .number,  #Progress2 .step-2 .step-number .number,  #Progress2 .step-1 .step-number .number,  #Progress1 .step-3 .step-number .number,  #Progress1 .step-2 .step-number .number,  #Progress1 .step-1 .step-number .number {
  position: absolute;
  left: 37.5%;
  right: 29.17%;
  top: 16.67%;
  bottom: 16.67%;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
}
 #Progress3 .step-3 .step-title,  #Progress3 .step-2 .step-title,  #Progress3 .step-1 .step-title,  #Progress2 .step-3 .step-title,  #Progress2 .step-2 .step-title,  #Progress2 .step-1 .step-title,  #Progress1 .step-3 .step-title,  #Progress1 .step-2 .step-title,  #Progress1 .step-1 .step-title {
  position: absolute;
  left: 33.33%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  display: flex;
  align-items: center;
}
 #Progress3 .progress-bar-2,  #Progress3 .progress-bar-1,  #Progress2 .progress-bar-2,  #Progress2 .progress-bar-1,  #Progress1 .progress-bar-2,  #Progress1 .progress-bar-1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  position: relative;
  width: 60px;
  height: 0px;
  left: 0px;
  top: 0px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 32px;
}
 #Progress1 .step-1 .step-number {
  background: #2A2A2A;
}
 #Progress1 .step-1 .step-number .number {
  color: #FFFFFF;
}
 #Progress1 .step-1 .step-title {
  color: #2A2A2A;
}
 #Progress1 .progress-bar-1 {
  border: 2px solid #2A2A2A;
}
 #Progress1 .step-2 .step-number {
  border: 1px solid #AFB1BD;
}
 #Progress1 .step-2 .step-number .number {
  color: #AFB1BD;
}
 #Progress1 .step-2 .step-title {
  color: #AFB1BD;
}
 #Progress1 .progress-bar-2 {
  border: 2px solid #AFB1BD;
}
 #Progress1 .step-3 .step-number {
  border: 1px solid #AFB1BD;
}
 #Progress1 .step-3 .step-number .number {
  color: #AFB1BD;
}
 #Progress1 .step-3 .step-title {
  color: #AFB1BD;
}

 #Progress2 .step-1 .step-number {
  background: #2A2A2A;
}
 #Progress2 .step-1 .step-number .number {
  left: 0.5px;
  top: 0.5px;
  width: 24px;
  height: 24px;
}
 #Progress2 .step-1 .step-title {
  color: #2A2A2A;
}

 #Progress2 .progress-bar-1 {
  border: 2px solid #2A2A2A;
}
 #Progress2 .step-2 .step-number {
  border: 1px solid #2A2A2A;
}
 #Progress2 .step-2 .step-number .number {
  color: #2A2A2A;
}
 #Progress2 .step-2 .step-title {
  color: #2A2A2A;
}
@media (max-width: 375px) {
   #Progress2 .step-2 .step-title {
    display: none;
  }
}
@media (max-width: 375px) {
   #Progress2 .step-2 {
    width: 24px;
    height: 32px;
  }
}
 #Progress2 .progress-bar-2 {
  border: 2px solid #2A2A2A;
}
 #Progress2 .step-3 .step-number {
  border: 1px solid #AFB1BD;
}
 #Progress2 .step-3 .step-number .number {
  color: #AFB1BD;
}
 #Progress2 .step-3 .step-title {
  color: #AFB1BD;
}
@media (max-width: 375px) {
   #Progress2 .step-3 .step-title {
    display: none;
  }
}
@media (max-width: 375px) {
   #Progress2 .step-3 {
    width: 24px;
    height: 32px;
  }
}
@media (max-width: 375px) {
   #Progress2 {
    width: 356px;
    height: 32px;
    left: 15px;
    top: 134px;
  }
}
 #Progress3 .step-1 .step-number {
  background: #2A2A2A;
}
 #Progress3 .step-1 .step-number .number {
  left: 0.5px;
  top: 0.5px;
  width: 24px;
  height: 24px;
}
 #Progress3 .step-1 .step-title {
  color: #2A2A2A;
}
@media (max-width: 375px) {
   #Progress3 .step-1 .step-title {
    display: none;
  }
}
@media (max-width: 375px) {
   #Progress3 .step-1 {
    width: 24px;
    height: 32px;
  }
}
 #Progress3 .progress-bar-1 {
  border: 2px solid #2A2A2A;
}
 #Progress3 .step-2 .step-number {
  background-color: #2A2A2A;
}
 #Progress3 .step-2 .step-number .number {
  left: 0.5px;
  top: 0.5px;
  width: 24px;
  height: 24px;
}
 #Progress3 .step-2 .step-title {
  color: #2A2A2A;
}
@media (max-width: 375px) {
   #Progress3 .step-2 .step-title {
    display: none;
  }
}
@media (max-width: 375px) {
   #Progress3 .step-2 {
    width: 24px;
    height: 32px;
  }
}
 #Progress3 .progress-bar-2 {
  border: 2px solid #2A2A2A;
}
 #Progress3 .step-3 .step-number {
  border: 1px solid #2A2A2A;
}
 #Progress3 .step-3 .step-number .number {
  color: #2A2A2A;
}
 #Progress3 .step-3 .step-title {
  color: #2A2A2A;
}
@media (max-width: 375px) {
   #Progress3 .step-3 .step-title {
    display: none;
  }
}
@media (max-width: 375px) {
   #Progress3 .step-3 {
    width: 24px;
    height: 32px;
  }
}
@media (max-width: 375px) {
   #Progress3 {
    width: 356px;
    height: 32px;
    left: 15px;
    top: 134px;
  }
}
</style>