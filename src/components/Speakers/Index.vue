<template>
  <div>
    <h1>Get All Speakers</h1>
    <div>จํานวนลำโพง {{ speakers.length }}</div>
    <div v-for="user in speakers" v-bind:key="speaker.id">
      <div>id: {{ speaker.id }}</div>
      <div>model:{{ speaker.model }}</div>
      <div>band: {{ speaker.band.name }}</div>
      <div>watt: {{ speaker.watt }}</div>
      <div>power_input: {{ speaker.power_input }}</div>
      <div>status: {{ speaker.status }}</div>
      <div>type: {{ speaker.type }}</div>
      <p>
        <button v-on:click="navigateTo('/speaker/' + speaker.id)">
          ดูข้อมูล
        </button>
        <button v-on:click="navigateTo('/speaker/edit/' + speaker.id)">
          แกไขข้อมูล
        </button>
        <button v-on:click="deleteUser(speaker)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import UserServices from "@/services/UserService";
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(speaker) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UserServices.delete(speaker);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.speakers = (await UserServices.index()).data;
    }
  },
  async created() {
    this.speakers = (await UserServices.index()).data;
  }
};
</script>
<style scoped></style>
