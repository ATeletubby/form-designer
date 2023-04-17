<script setup lang="ts">
import { useConfigStore } from "../../stores/config";
import {
  DesignerComponent,
  ComponentSchema,
  RulesLogic,
  AdditionalOperation,
  visibleRuleOperationList,
} from "../../model";

const store = useConfigStore();

function handleKeyChange(newKey: string) {
  const prevFormKey = store.formKeys.find(x => x.id === store.activeComponent.id);
  if (prevFormKey) {
    this.updateAllVisibleRule(store.productSchema.components, prevFormKey.key, newKey);
    prevFormKey.key = newKey;
  }
}

function updateAllVisibleRule(components: ComponentSchema[], prevKey: string, newKey: string) {
  for (const component of components) {
    this.updateVisibleRule(component.visibleRule, prevKey, newKey);
    const children = Array.isArray(component.children) ? component.children : [];
    this.updateAllVisibleRule(children, prevKey, newKey);
  }
}

function updateVisibleRule(rule: RulesLogic<AdditionalOperation>, prevKey: string, newKey: string) {
  const operationKey = visibleRuleOperationList.find(operation => Reflect.has(rule, operation));
  if (operationKey) {
    if (rule[operationKey][0].var !== `formValue.${prevKey}`) return;
    rule[operationKey][0].var = `formValue.${newKey}`;
    return;
  }

  const groupKey = ["or", "and"].find(operation => Reflect.has(rule, operation));
  if (!groupKey) return;
  for (const item of rule[groupKey]) {
    this.updateVisibleRule(item, prevKey, newKey);
  }
}

function setDefaultValue(val: any) {
  // 将 ui 组件的 defaultValue 转换为字段串
  if (Array.isArray(val)) {
    return val.join(",");
  }
  if (typeof val === "boolean") {
    return `${val}`;
  }
  return val;
}

function onDefaultValueInput(str: string) {
  // 将字符串转换为不同组件 的 defaultValue
  if (Array.isArray(store.activeComponent.defaultValue)) {
    this.$set(
      store.activeComponent,
      "defaultValue",
      str.split(",").map(val => (typeof val === "number" ? +val : val)),
    );
  } else if (["true", "false"].indexOf(str) > -1) {
    this.$set(store.activeComponent, "defaultValue", JSON.parse(str));
  } else {
    this.$set(store.activeComponent, "defaultValue", typeof str === "number" ? +str : str);
  }
}

function openExpressionDialog() {
  (this.$refs["expression-dialog"] as any).openDialog();
}
</script>

<template>
  <div>
    <el-divider>基础配置</el-divider>
    <el-form-item label="字段key">
      <el-input v-model="store.activeComponent.key" disabled @change="handleKeyChange" />
    </el-form-item>
    <el-form-item label="标签">
      <el-input v-model="store.activeComponent.label" />
    </el-form-item>
    <el-form-item label="标签提示">
      <el-input v-model="store.activeComponent.tip" />
    </el-form-item>
    <el-form-item label="默认值">
      <el-input
        :value="setDefaultValue(store.activeComponent.defaultValue)"
        @input="onDefaultValueInput"
      />
      <el-button type="text" @click="openExpressionDialog">查看表达式</el-button>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="store.activeComponent.showLabel"></el-switch>
    </el-form-item>
    <el-form-item label="是否必填">
      <el-switch v-model="store.activeComponent.required"></el-switch>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="store.activeComponent.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="禁用编辑">
      <el-switch v-model="store.activeComponent.editDisabled"></el-switch>
    </el-form-item>

    <ExpressionDialog ref="expression-dialog"></ExpressionDialog>
  </div>
</template>

<style scoped></style>
