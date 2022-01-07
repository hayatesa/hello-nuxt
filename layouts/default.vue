<template>
  <div id="default-layout">
    <header>
      <div class="container navigation">
        <nuxt-link to="/" style="color: #41b883;font-weight: bold;font-size: 24px">Hello Nuxt.js</nuxt-link>
        <ul class="menu">
          <li><a href="javascript:;">产品</a></li>
          <li><a href="javascript:;">解决方案</a></li>
          <li><a href="javascript:;">方案咨询</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </ul>
        <ul class="menu login">
          <li><nuxt-link to="/login">登录</nuxt-link></li>
          <li><a href="javascript:;">注册</a></li>
        </ul>
      </div>
    </header>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
#default-layout {
  $nav-height: 64px;
  header {
    width: 100%;
    height: $nav-height;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
    z-index: 100;

    .navigation {
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;

      .menu {
        padding-left: 40px;
        list-style: none;
        display: flex;
        align-items: center;
        margin: 0;
        height: 100%;
        & > li {
          padding: 0 1em;
          height: 100%;
          a {
            color: #333;
            display: block;
            line-height: $nav-height;
            text-decoration: none;
            position: relative;

            &:hover:before {
              content: " ";
              position: absolute;
              left: 25%;
              bottom: 0;
              width: 50%;
              border-top: 2px solid #000;
            }
          }
        }
      }

      .login {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>