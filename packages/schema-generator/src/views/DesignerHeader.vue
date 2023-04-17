<script setup lang="ts">
function handlePreviewClick() {
  console.info("submit");
}

function handleSchemaImport() {
  console.info("import");
}

function showFinallySchema() {
  console.info("schema");
}
</script>

<template>
  <div
    w:flex="~"
    w:justify="space-between"
    w:align="items-center"
    w:border="0 b-1 solid gray-300"
    w:h="50px"
    w:p="x-20px"
  >
    <h1 w:w="300px">Form Designer</h1>
    <div w:w="full" w:flex="~" w:justify="end">
      <el-button type="text" @click="handlePreviewClick">效果展示</el-button>
      <el-button type="text" @click="handleSchemaImport">导入 Schema</el-button>
      <el-button type="text" @click="showFinallySchema">展示 Schema</el-button>
    </div>
  </div>
</template>

<style scoped></style>
