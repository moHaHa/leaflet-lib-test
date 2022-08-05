<template>
  <v-app-bar class="mh-module-nav-bar" app color="white" flat>
    
   <v-tooltip bottom>
      <template v-slot:activator="{on , attrs}">

      <v-btn v-bind="attrs" v-on="on" :to="backButton.path" depressed rounded icon small>
        <v-icon> {{ backButton.mdiIcon }} </v-icon>
      </v-btn>
      </template>
      <span>{{backButton.tooltip}}</span>
    </v-tooltip>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-btn v-for="(link, index) in links" :key="index" text :to="link.link">
        {{ link.text }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "mh-module-nav-bar",
  props: {
    links: {
      type: Array,
    },
    backButton: {
      type: Object,
      default: () => {
        return {
          tooltip: "Back To dashboard",
          mdiIcon: "mdi-arrow-left",
          path: "/",
        };
      },
    },
  },
};
</script>

<style></style>
