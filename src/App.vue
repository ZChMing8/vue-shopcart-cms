<template>
  <div id="app">
    <div class="header">赵春明的购物车</div>
    <router-view/>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" href="javascript:;">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<router-link to="/sup" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-trend"></span>
				<span class="mui-tab-label">闪送超市</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">1</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<a class="mui-tab-item" href="javascript:;">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  margin: 0 auto;
  /* height: 1000px; */
}
.header {
  width: 100%;
  height: .84375rem;
  background-color: #FFD600;
  font-size: .46875rem;
  text-align: center;
  line-height: .84375rem;
  position: absolute;
  left: 0;
  top: 0;
}

.mui-bar-tab .mui-tab-item.mui-active {
  color: #FFD600;
}

.mui-bar-tab {
  height: .9375rem;
}
.mui-bar-tab .mui-tab-item {
  height: .9375rem;
}

.mui-bar-tab .mui-tab-item .mui-icon {
    width: .375rem;
    height: .375rem;
}

.mui-bar-tab .mui-tab-item .mui-icon ~ .mui-tab-label {
  font-size: .1875rem;
}
</style>
