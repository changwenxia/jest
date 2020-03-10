<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ msg }}
  </div>
</template>
<script>
export default {
  props: ["msg"],

}
</script>
