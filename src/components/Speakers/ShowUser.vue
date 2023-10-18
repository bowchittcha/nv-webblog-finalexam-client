<template>
  <div>
    <h1>Show Speaker</h1>
    <p>id: {{ speaker.id }}</p>
      <p>model:{{ speaker.model }}</p>
      <p>band: {{ speaker.band.name }}</p>
      <p>watt: {{ speaker.watt }}</p>
      <p>power_input: {{ speaker.power_input }}</p>
      <p>status: {{ speaker.status }}</p>
      <p>type: {{ speaker.type }}</p>
   
    </div>
</template>
<script>
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      speaker: null
    };
  },
  async created() {
    let speakerId = this.$route.params.speakerId;
    this.speaker = (await UserService.show(speakerId)).data
    console.log(this.speakerId)
  }
};
</script>
<style scoped></style>
