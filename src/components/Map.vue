<template>
  <div class="map" id="map"></div>
</template>
<script>
import L from 'leaflet';

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
      // 臺灣地理中心
      // 120.9738819, 23.97565
      this.map = L.map('map', {
        center: [23.97565, 120.9738819],
        // 可以嘗試改變 zoom 的數值
        // 筆者嘗試後覺得 18 的縮放比例是較適當的查詢範圍
        zoom: 18,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 8,
      }).addTo(this.map);
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
