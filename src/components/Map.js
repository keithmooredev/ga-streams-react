import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer';

const center = [32.646111, -83.431667];

const SitesMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: center[0], lng: center[1] }}
  >
    {/* {props.data.map(({ name, value, coordinates, markerOffset }) => (
      <Marker
        key={name}
        position={{ lat: coordinates[1], lng: coordinates[0] }}
      />
    ))} */}
    <HeatmapLayer
      data={props.data}
      defaultData={[]}
      opacity="0.4"
    />
  </GoogleMap>
));

export default SitesMap;
