<template>
    <ul>
        <li v-for="item in navList" :key="item.name" >
            <router-link v-text="item.name" :to="item.path" tag="a"></router-link>
        </li>
    </ul>
</template>
<script>
export default {
  props: {
    navList: {
      required: true,
      type: Array,
      default: []
    }
  }
};
</script>
<style lang="less">
@import url("../less/variable.less");
li {
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  margin-right:7px;
  color:@light-color;
  &::after {
    content: "/";
    color: @light-color;
    margin-left:7px;
  }
  &:first-child {
    margin-right: 7px;
    ::after {
      content: "";
    }
  }
}
.router-link-active {
  color: @title-color;
}
</style>
