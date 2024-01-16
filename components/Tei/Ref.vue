<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

const url = props.node
  ? props.node.getAttribute("target")?.replace("#", "")
  : null;
</script>
<template>
  <template v-if="url">
    <a :href="url">
      <TeiNodes :nodes="node?.childNodes" />
    </a>
  </template>
  <template v-else>
    <TeiNodes :nodes="node?.childNodes" />
  </template>
</template>