<template>
  <div class="map" id="map"></div>
</template>
<script>
import { Map, View } from 'ol';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

export default {
  name: 'Map',
  components: {},
  data() {
    return {
      map: null,
    };
  },
  methods: {
    initMap() {
      this.map = new Map({
        target: 'map',
        layers: [
          new Tile({
            source: new OSM(),
          }),
        ],
        view: new View({
          projection: 'EPSG:4326',
          center: [120.9738819, 23.97565],
          minZoom: 10,
          zoom: 12,
        }),
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>
<style lang="scss" scoped>
.map {
  height: 100%;
}
</style>
