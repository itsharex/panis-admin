<script setup lang="ts" generic="T extends Record<string, unknown>, K = never">
import { VueDraggable } from 'vue-draggable-plus';

defineOptions({
  name: 'TableColumnSetting'
});

const columns = defineModel<NaiveUI.TableColumnCheck[]>('columns', {
  required: true
});
</script>

<template>
  <NPopover placement="bottom-end" trigger="click" class="p-8px">
    <template #trigger>
      <NButton size="small" quaternary>
        <template #icon>
          <icon-ic:round-settings class="text-icon" />
        </template>
      </NButton>
    </template>
    <VueDraggable v-model="columns" :animation="150" filter=".none_draggable">
      <div v-for="item in columns" :key="item.key" class="h-36px flex-y-center rd-4px hover:(bg-primary bg-opacity-20)">
        <icon-ic:round-drag-indicator class="mr-8px h-full cursor-move text-icon" />
        <NCheckbox v-model:checked="item.checked" class="none_draggable flex-1">
          <template v-if="typeof item.title === 'function'">
            <component :is="item.title" />
          </template>
          <template v-else>{{ item.title }}</template>
        </NCheckbox>
      </div>
    </VueDraggable>
  </NPopover>
</template>

<style scoped></style>
