<template>
    <div>
        <nav-bar :navList='navList'></nav-bar>
    </div>
</template>
<script>
import navBar from "@/components/navBar";

export default {
  data() {
    return {
      navList: [{ name: "应用管理", path: "appManage" },{name:'详情',path:"detail"}]
    };
  },
  components: {
    navBar
  }
};
</script>
