'use strict';

angular.module('bMaps.version', [
  'bMaps.version.interpolate-filter',
  'bMaps.version.version-directive'
])

.value('version', '0.1');
