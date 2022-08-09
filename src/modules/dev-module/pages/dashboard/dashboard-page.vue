<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-toolbar-title>App Development env</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6"  lg="4"  xl="3" v-for="(link, index) in links" :key="index">
            <router-link class="text-decoration-none" :to="link.link">
              <v-card>
                <v-img cover position="start" min-height="180" class="h-100" :src="link.img">
                </v-img>
                <v-card-title>
                  <span class="me-2"><v-img
                  
                    max-width="30"
                    :src="chooseIcon(link.leafletlib)"
                  ></v-img></span>
                  {{ link.title }}
                </v-card-title>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import libVue from "@/assets/docs/libVue.png";
import libJs from "@/assets/docs/libJs.png";
import libGeoman from "@/assets/docs/libGeoman.svg";
export default {
  data() {
    return {
      libVue,
      libJs,
      libGeoman,
      links: [
        {
          link: "quick-start/test",
          img: "https://github.com/HBO30/public/blob/images/images/quick-start-leaflet-test.jpg?raw=true",
          title: "Quick start",
          leafletlib: "js",
        },
        {
          link: "jeojson/preview",
          img: "https://github.com/HBO30/public/blob/images/images/leaf-let-jeojson-preview.jpg?raw=true",
          title: "Jeo JSON",
          leafletlib: "js",
        },
        {
          link: "/vue-leaflet/test",
          img: "https://github.com/HBO30/public/blob/images/images/vue-leaflet.jpg?raw=true",
          title: "Quick Start With Vue Leaflet",
          leafletlib: "vue",
        },
        {
          link: "/leaflet-geoman/test",
          img: "https://github.com/HBO30/public/blob/images/images/geoman-quick-start.jpg?raw=true",
          title: "Quick Start with Leaflet Geoman",
          leafletlib: "geoman",
        },
        {
          link: "/geoman-non-geographical/test",
          img: "https://github.com/HBO30/public/blob/images/images/geoman-non-geographical.jpg?raw=true",
          title: "Geoman & Non-Geographical",
          leafletlib: "geoman",
        },
      ],
    };
  },
  methods: {
    chooseIcon(lib) {
      let img;
      switch (lib) {
        case "geoman":
          img = this.libGeoman;
          break;
        case "vue":
          img = this.libVue;
          break;
        default:
          img = this.libJs;
      }
      return img;
    },
  },
  //
};
</script>
