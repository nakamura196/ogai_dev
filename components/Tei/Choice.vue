<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

const orig = props.node ? props.node.querySelector("tei-orig") : null;
const reg = props.node ? props.node.querySelector("tei-reg") : null;

const sic = props.node ? props.node.querySelector("tei-sic") : null;
const corr = props.node ? props.node.querySelector("tei-corr") : null;

const corresp = props.node
  ? props.node.getAttribute("corresp")?.replace("#", "")
  : null;

const { xmlDoc } = useSettings();

let note: Element | null = null;

if (corresp) {
  note = xmlDoc.value?.querySelector(`[xml\\:id="${corresp}"]`) || null;
}
</script>

<template>
  <template v-if="orig && reg">
    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <span v-bind="props" class="clickable text-error">
          <TeiNodes :nodes="orig.childNodes" />
        </span>
      </template>
      <v-card max-width="500">
        <div class="pa-4">
          <TeiNodes :nodes="reg.childNodes" />
        </div>
        <template v-if="note">
          <v-divider></v-divider>
          <div class="pa-4">
            <TeiNodes :nodes="note.childNodes" />
          </div>
        </template>
      </v-card>
    </v-menu>
  </template>
  <template v-else-if="sic && corr">
    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <span v-bind="props" class="clickable text-error">
          <TeiNodes :nodes="sic.childNodes" />
        </span>
      </template>
      <v-card max-width="500">
        <div class="pa-4">
          <TeiNodes :nodes="corr.childNodes" />
        </div>
        <template v-if="note">
          <v-divider></v-divider>
          <div class="pa-4">
            <TeiNodes :nodes="note.childNodes" />
          </div>
        </template>
      </v-card>
    </v-menu>
  </template>
  <template v-else>
    <TeiNodes :tei-nodes="node?.childNodes" />
  </template>
</template>