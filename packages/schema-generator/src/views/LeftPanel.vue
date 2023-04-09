<script setup lang="ts">
import { useConfigStore } from "../stores/config";
const store = useConfigStore();

function handleAddComponentClick() {
  store.changeComSelectDialogVisible(true);
  // store.changeAddComponentToChildren(false);
}
</script>

<template>
  <div w:flex="~" w:justify="between">
    <el-form
      w:p="20px"
      w:flex="grow"
      :label-width="store?.labelWidth + 'px'"
      w:overflow="y-auto"
      style="height: calc(100vh - 70px)"
    >
      <draggable v-model="store.productSchema.components" :animation="150">
        <transition-group>
          <component
            :is="item.component"
            v-for="item in store.productSchema.components"
            :key="item.id"
            w:m="b-20px"
            :component-props="item"
          ></component>
        </transition-group>
      </draggable>
      <div
        w:m="t-20px"
        w:border="1 dashed gray-300 hover:blue-500"
        w:w="100%"
        w:h="40px"
        w:text="gray-500 hover:blue-500"
        w:cursor="pointer"
        w:flex="~"
        w:justify="center"
        w:align="items-center"
        @click="handleAddComponentClick"
      >
        添加组件
      </div>
    </el-form>
  </div>
</template>

<style scoped></style>
