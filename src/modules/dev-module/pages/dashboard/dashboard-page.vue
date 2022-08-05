<template>
  <v-app id="inspire">
    <v-app-bar app >

      <v-toolbar-title>App Development env</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="4" xl="3" v-for="(link, index) in links" :key="index">
            <v-card height="180">
              <router-link :to="link.link">
                <v-img cover position="start" class="h-100" :src="link.img">
                </v-img>
              </router-link>
              <v-card-title>{{link.title}} </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          link: "quick-start/test",
          img: "https://github.com/HBO30/public/blob/images/images/quick-start-leaflet-test.jpg?raw=true",
          title: "Quick start",
        },
        {
          link: "jeojson/preview",
          img: "https://github.com/HBO30/public/blob/images/images/leaf-let-jeojson-preview.jpg?raw=true",
          title: "Jeo JSON",
        },
      ],
    };
  },
  //
};
</script>
