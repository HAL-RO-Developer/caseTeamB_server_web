<template>
<div class="modal-card" style="width: auto">
    <header class="modal-card-head">
                <p class="modal-card-title">設定</p>
            </header>
     <section class="modal-card-body">
    <button class="button" type="button" @click="child">子ども登録　</button>
     </section>

     <section class="modal-card-body">
    <button class="button" type="button" @click="childlist">子どもリスト</button>
     </section>

     <section class="modal-card-body">
    <button class="button" type="button" @click="logout">ログアウト　</button>
    </section>
    
    <under-tab :index=2 ></under-tab>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    child() {
      this.$router.push({ path: "/child" });
    },
    childlist() {
      this.$router.push({ path: "/child/list" });
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style>
</style>
