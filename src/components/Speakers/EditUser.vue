<template>
  <div>
    <h1>Edit Speakers</h1>
    <h1>Edit Speaker</h1>
    <form v-on:submit.prevent="editUser">
      <p>model: <input type="text" v-model="speaker.model" /></p>
      <p>brand: <input type="text" v-model="speaker.brand" /></p>
      <p>watt: <input type="text" v-model="speaker.watt" /></p>
      <p>power_input: <input type="text" v-model="speaker.power_input" /></p>
      <p>status: <input type="text" v-model="speaker.status" /></p>
      <p>type: <input type="text" v-model="speaker.type" /></p>
      <p><button type="submit">edit user</button></p>
    </form>
    <hr />
    <div>
      <p>model: {{ speaker.model }}</p>
      <p>brand: {{ speaker.brand }}</p>
      <p>watt: {{ speaker.watt }}</p>
      <p>power_input: {{ speaker.power_input }}</p>
      <p>status: {{ speaker.status }}</p>
      <p>type: {{ speaker.type }}</p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";
export default {
  data() {
    return {
      speaker: {
        model: "",
        brand: "",
        watt: "",
        power_input: "",
        status: "active",
        type: ""
      }
    };
  },
  methods: {
    async editUser() {
      try {
        await UsersService.put(this.speaker);
        this.$router.push({
          name: "speakers"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let speakerId = this.$route.params.speakerId;
      this.speaker = (await UsersService.show(speakerId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
