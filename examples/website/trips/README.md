This is a minimal standalone version of the TripsLayer example
on [deck.gl](http://deck.gl) website.

### Usage

Copy the content of this folder to your project. 

To see the base map, you need a [Mapbox access token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/). You can either set an environment variable:

```bash
export MapboxAccessToken=<mapbox_access_token>
```

Or set `MAPBOX_TOKEN` directly in `app.js`.

Other options can be found at [using with Mapbox GL](../../../docs/get-started/using-with-mapbox-gl.md).

```bash
# install dependencies
npm install
# or
yarn
# bundle and serve the app with webpack
npm start
```

### Data format

Sample data is stored in [deck.gl Example Data](https://github.com/visgl/deck.gl-data/tree/master/examples/trips), showing taxi trips in Manhattan. [Source](http://www.nyc.gov/html/tlc/html/about/trip_record_data.shtml)

To use your own data, check out
the [documentation of TripsLayer](../../../docs/api-reference/geo-layers/trips-layer.md).