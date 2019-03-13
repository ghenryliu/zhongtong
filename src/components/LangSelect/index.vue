<!--<template>-->
  <!--<el-dropdown trigger="click" class="international" @command="handleSetLanguage">-->
    <!--<div>-->
      <!--<svg-icon class-name="international-icon" icon-class="language" />-->
    <!--</div>-->
    <!--<el-dropdown-menu slot="dropdown">-->
      <!--<el-dropdown-item :disabled="language==='zh'" command="zh">中文“Langselect”</el-dropdown-item>-->
      <!--<el-dropdown-item :disabled="language==='en'" command="en">English"Langselect"</el-dropdown-item>-->
      <!--<el-dropdown-item :disabled="language==='es'" command="es">Español"Langselect"</el-dropdown-item>-->
    <!--</el-dropdown-menu>-->
  <!--</el-dropdown>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->

  <!--computed: {-->
    <!--language() {-->
      <!--return this.$store.getters.language // 在store 中定义了getter-->
    <!--}-->
  <!--},-->
  <!--methods: {-->
    <!--handleSetLanguage(lang) {-->
      <!--this.$i18n.locale = lang // 选择语言-->

      <!--alert(lang)-->
      <!--console.log(this.$i18n.locale)-->

      <!--this.$store.dispatch('setLanguage', lang)-->
      <!--this.$message({-->
        <!--message: 'Switch Language Success, "&ndash;&gt;show this when switch lange success"',-->
        <!--type: 'success'-->
      <!--})-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->
