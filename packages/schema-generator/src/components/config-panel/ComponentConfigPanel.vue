<script setup lang="ts">
import { useConfigStore } from "../../stores/config";
import { DesignerComponent } from "../../model";
import CardConfig from "./CardConfigPanel.vue";
import InputConfig from "./InputConfigPanel.vue";
import ButtonConfig from "./ButtonConfigPanel.vue";
import FormItemConfig from "./FormItemConfigPanel.vue";
import SwitchConfig from "./SwitchConfigPanel.vue";
import SelectConfig from "./SelectConfigPanel.vue";
import RadioConfig from "./RadioConfigPanel.vue";
const store = useConfigStore();
</script>

<template>
  <el-form label-width="80px" w:p="l-10px r-10px" size="small">
    <CardConfig
      v-if="store.activeComponent && store.activeComponent.component === DesignerComponent.Card"
    />
    <FormItemConfig
      v-if="store.activeComponent && store.activeComponent.component === DesignerComponent.FormItem"
    />
    <InputConfig
      v-if="store.activeComponent && store.activeComponent.component === DesignerComponent.Input"
    />
    <SwitchConfig
      v-if="store.activeComponent && store.activeComponent.component === DesignerComponent.Switch"
    />
    <SelectConfig
      v-if="store.activeComponent && store.activeComponent.component === DesignerComponent.Select"
    />
    <RadioConfig
      v-if="store.activeComponent && store.activeComponent.component === DesignerComponent.Radio"
    />
    <CheckBoxConfig
      v-if="store.activeComponent && store.activeComponent.component === DesignerComponent.CheckBox"
    />
    <DialogConfig
      v-if="store.activeComponent && store.activeComponent.component === DesignerComponent.Dialog"
    />
    <ButtonConfig
      v-if="store.activeComponent && store.activeComponent.component === DesignerComponent.Button"
    />
    <VisibleConfigComponent v-if="store.activeComponent && store.activeComponent.visibleRule" />
    <RuleConfigComponent v-if="store.activeComponent && store.activeComponent.rules" />
  </el-form>
</template>

<style scoped></style>
