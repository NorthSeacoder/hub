<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="ok">
      ok
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: inline-block;
  box-sizing: border-box;
  padding: 24px;
  background: #171717;
  border-radius: 16px;

  .card {
    width: 400px;
    box-sizing: border-box;
    padding: 16px 20px;
    background-color: #292a2d;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px,
      rgba(0, 0, 0, 0.15) 0px 2px 6px 2px;
    display: flex;
    transition: height 300ms cubic-bezier(0.25, 0.1, 0.25, 1);

    & + .card {
      margin-top: 12px;
    }

    .logo {
      width: 48px;
      height: 48px;
    }

    .info {
      font-size: 13px;
      box-sizing: border-box;
      padding-left: 24px;
      .title {
        color: #f4f4f4;
        line-height: 20px;

        a {
          color: #ff4530;
          text-decoration: none;
        }
      }
      .desc {
        color: #9aa0a6;
        line-height: 20px;
        margin-top: 4px;
      }
    }
  }

  .ok {
    width: 400px;
    display: flex;
    justify-content: center;

    > img {
      width: 240px;
    }
  }
}
</style>
