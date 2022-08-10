import Vue from 'vue'
import logoComponent from "./../assets/logo/logo-component.vue";

import mhComponent1 from "./mh-component-1/mh-component-1.vue";
import mhModuleNavBar from "./mh-module-nav-bar/index-mh-module-nav-bar";
import mhColorPicker from "./mh-color-picker/mh-color-picker-component.vue";


Vue.component(mhComponent1.name, mhComponent1)
Vue.component(mhModuleNavBar.name, mhModuleNavBar)
Vue.component(mhColorPicker.name,mhColorPicker)

Vue.component(logoComponent.name, logoComponent)