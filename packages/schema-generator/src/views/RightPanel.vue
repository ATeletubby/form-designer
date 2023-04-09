<script setup lang="ts"></script>

<template>
  <div
    w:border="1 solid gray-300"
    w:flex="grow-0 shrink-0"
    w:w="300px"
    w:h="full"
    w:p="b-20px"
    w:overflow="y-auto"
  >
    <el-tabs v-model="activeTab" :stretch="true">
      <el-tab-pane label="组件属性" name="first">
        <ComponentConfig />
      </el-tab-pane>
      <el-tab-pane label="表单属性" name="second">
        <el-form label-width="80px">
          <el-form-item label="标签宽度">
            <el-input-number
              :value="store?.labelWidth"
              :controls="false"
              :min="0"
              @change="changeLabelWidth"
            />
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
