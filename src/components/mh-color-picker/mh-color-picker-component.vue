<template>
  <v-text-field v-model="val" v-mask="mask" hide-details class="ma-0 pa-0" solo>
    <template v-slot:append>
      <v-menu
        v-model="menu"
        top
        nudge-bottom="105"
        nudge-left="16"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <div :style="swatchStyle" v-on="on" />
        </template>
        <v-card>
          <v-card-text class="pa-0">
            <v-color-picker v-model="val" flat />
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "mh-color-picker", // mhColorPicker
  props: {
    value: {
      type: String,
    },
  },
  data: () => ({
    // color: "#1976D2FF",
    mask: "!#XXXXXXXX",
    menu: false,
  }),

  computed: {
    val: {
      get() {
        return this.value;
      },
      set(newColor) {
        this.$emit("input", newColor);
      },
    },
    swatchStyle() {
      const { val, menu } = this;
      return {
        backgroundColor: val,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: menu ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
  },
};
</script>

<style></style>
