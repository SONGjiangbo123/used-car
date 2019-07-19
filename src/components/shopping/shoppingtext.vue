<template>
  <div>
    <div class="text" :class="{'shopping_text_met':sttume}">
      <ul class="shopping_text">
        <li class="shopping" @click="add()">
          智能排序
          <span></span>
        </li>
        <li>
          <router-link to="/" class="shopping_li">
            品牌
            <span></span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="shopping_li">
            价格
            <span></span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="shopping_li">
            更多
            <span></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-show="flag" class="box"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sttume: false,
      flag: false,
    };
  },
  methods: {
    add() {
      this.flag = true;
      this.sttume = true;
    },
    showIcon() {
      if (
        document.documentElement.scrollTop && document.documentElement.scrollTop > 90
      ) {
        this.sttume = true;
      } else {
        this.sttume = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showIcon);
  }
};
</script>
<style scoped>
.text {
  border-bottom: #c5c5c5 1px solid;
  width: 100%;
  background: #fff;
  z-index: 999;
}
.shopping_text {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.shopping_text li {
  font-size: 0.33rem;
  color: #333;
  width: 25%;
  text-align: center;
  padding: 3%;
}
.shopping_text span {
  position: absolute;
  margin-left: 10px;
  margin-top: 8px;
  width: 5px;
  height: 5px;
  border-right: 1px solid #585858;
  border-bottom: 1px solid #585858;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  content: "";
}
.shopping_li {
  font-size: 0.28rem;
  color: #333;
  text-align: center;
}
.shopping {
  font-size: 0.28rem;
  color: #333;
  text-align: center;
}
.shopping_li::before {
  content: "";
  width: 0.03rem;
  height: 0.26rem;
  background: #e5e5e5;
  display: block;
  position: absolute;
  top: 22px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.shopping_text_met {
  position: fixed;
  top: 0;
  left: 0;
}
.box {
  width: 100%;
  height: 60px;
  background: red;
  position: absolute;
  z-index: 999;
  top: 44px
}
</style>
