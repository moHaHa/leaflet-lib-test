<template>
  <v-app class="upload-image-page">
    <navigation :links="[]" >
    <v-btn v-if="mapImageUrl"  text @click="$vuetify.goTo('/full-product/preview')">
        <span class="mr-2">Next</span>
      </v-btn>
    </navigation>
    <v-main class="upload-image-page-MODEL-main">
      <v-container class="my-8">
        <v-row>
          <v-col  cols="6" offset="3" >
            <v-file-input
              dark
              clearable
              color="grey"
              :loading="loading"
              prepend-icon="mdi-camera"
              show-size
              :label="'upload image'"
              @change="createImageData"
            >
            </v-file-input>
          </v-col>

         
          
        </v-row>
        <v-row v-if="mapImageUrl" justify="center">
            <v-col cols="auto">
                <v-img :src="mapImageUrl" width="400"></v-img>
            </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-snackbar :timeout="2000" v-model="snackbar">
      {{ msg }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import navigation from "../../components/nav-bar/nav-bar-component";
import axios from "axios";
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    navigation,
  },
  data() {
    return {
      // imageUrl: "",
      loading: false,
      snackbar: false,
      msg:''

    };
  },
  created() {
    this.$vuetify.theme.themes.light = {
      primary: "#120543",
      secondary: "#03052C",
      accent: "#3A0473",
    };
  },
  computed:{
    ...mapGetters('full-product-store', ['mapImageUrl']),
    imageUrl:{
      get(){
        return this.mapImageUrl
      },
      set(newVal){
        this.setMapImageUrl(newVal) 
      }
    }
  },
  methods: {
    ...mapMutations('full-product-store', ['setMapImageUrl']),
    async createImageData(file) {
      this.msg = "";
      if (!file) {
        this.imageUrl = "";
        return;
      }
      this.loading = true;
      let formData = new FormData();
      formData.append("fileToUpload", file);
      try {
        let res = await axios.post(
          "http://imageupload.mhacd.com/upload.php",
          formData,
        //   { headers: { "Access-Control-Allow-Headers": "*" } }
        );
        this.loading = false;
        this.imageUrl = res.data;
        this.msg = res.data.search("not uploaded") === -1 ? 'success ' : '' + res.data;
        this.snackbar  = true
      } catch (err) {
        this.loading = false;
        console.log(err);
        console.log(err.message);
        this.msg = err.message;
        this.snackbar  = true
      }
    },
  },
};
</script>
<style lang="scss">
.upload-image-page {
  .upload-image-page-MODEL-main {
    background-image: repeating-linear-gradient(
      130deg,
      var(--v-primary-base) 0%,
      var(--v-secondary-base) 100%
    )
  }
}
</style>
