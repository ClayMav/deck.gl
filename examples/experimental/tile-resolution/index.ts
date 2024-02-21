import './style.css';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Deck } from '@deck.gl/core';
import { PathLayer } from '@deck.gl/layers';
import { TileLayer } from '@deck.gl/geo-layers';
import { BASEMAP, vectorTableSource, VectorTileLayer } from '@deck.gl/carto';
import GUI from 'lil-gui';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const accessToken = import.meta.env.VITE_TOKEN;
const connectionName = import.meta.env.VITE_CONNECTION;
const tableName = import.meta.env.VITE_GLOBAL_TILESET;

const cartoConfig = { apiBaseUrl, accessToken, connectionName };

///////////////////////////////////////////////////////////////
// MAP

const INITIAL_VIEW_STATE = {
  latitude: 36.5210,
  longitude: -6.2805,
  zoom: 14,
  minZoom: 1,
  pitch: 0,
  bearing: 0,
};

const map = new maplibregl.Map({
  container: 'map',
  style: BASEMAP.POSITRON,
  interactive: false,
});

const deck = new Deck({
  canvas: 'deck-canvas',
  initialViewState: INITIAL_VIEW_STATE,
  controller: true
});

deck.setProps({
  onViewStateChange: ({viewState}) => {
    const {longitude, latitude, ...rest} = viewState;
    map.jumpTo({center: [longitude, latitude], ...rest});
  }
});

///////////////////////////////////////////////////////////////
// GUI

const searchParams = new URLSearchParams(location.search);

const params = { 
  tileSize: Number(searchParams.get('tileSize')) || 1024,
  tileResolution: Number(searchParams.get('tileResolution')) || 1,
  tileResolutionLocked: searchParams.has('tileResolutionLocked') ? Boolean(Number(searchParams.get('tileResolutionLocked'))) :  true,
  tileBorder: searchParams.has('tileBorder') ? Boolean(Number(searchParams.get('tileBorder'))) : true,
};

const gui = new GUI({width: 150});
const tileSizeCtrl = gui.add(params, 'tileSize', [256, 512, 1024, 2048, 4096]);
const tileResCtrl = gui.add(params, 'tileResolution', [0.25, 0.5, 1, 2, 4]).name('tileRes').enable(!params.tileResolutionLocked).listen();
const tileResLockCtrl = gui.add(params, 'tileResolutionLocked').name('tileResLock');
const tileBorderCtrl = gui.add(params, 'tileBorder');

tileSizeCtrl.onChange(() => {
  params.tileResolution = params.tileSize / 1024;
});

tileResLockCtrl.onChange(() => {
  tileResCtrl.enable(!params.tileResolutionLocked);
  params.tileResolution = params.tileSize / 1024;
});

let timeout = -1;
gui.onChange(() => {
  clearTimeout(timeout);
  timeout = setTimeout(render, 250) as unknown as number;
});

///////////////////////////////////////////////////////////////
// RENDER

function render() {
  const source = vectorTableSource({
    ...cartoConfig,
    tableName,
    // @ts-ignore
    tileResolution: params.tileResolution
  });

  const layers = [
    // data
    new VectorTileLayer({
      id: 'roads',
      data: source as any,
      tileSize: params.tileSize,
      uniqueIdProperty: 'geoid',
      pointRadiusUnits: 'pixels',
      lineWidthUnits: 'pixels',
      lineWidthMinPixels: 2,
      stroked: true,
      filled: true,
      pickable: false,
    }),
    // borders
    params.tileBorder && new TileLayer({
      tileSize: params.tileSize,
      renderSubLayers: props => {
        const {boundingBox: [min, max]} = props.tile;
        const [west, south] = min;
        const [east, north] = max;
        return [
            new PathLayer({
              id: `${props.id}-border`,
              data: [
                [
                  [west, north],
                  [west, south],
                  [east, south],
                  [east, north],
                  [west, north]
                ]
              ],
              getPath: d => d,
              getColor: [155, 155, 155],
              widthMinPixels: 2
            })
        ];
      }
    })
  ];

  deck.setProps({ layers });

  searchParams.set('tileSize', params.tileSize + '');
  searchParams.set('tileResolution', params.tileResolution + '');
  searchParams.set('tileResolutionLocked', params.tileResolutionLocked ? '1' : '0');
  searchParams.set('tileBorder', params.tileBorder ? '1' : '0');
  history.replaceState(null, '', location.pathname + '?' + searchParams.toString())
}

render();
