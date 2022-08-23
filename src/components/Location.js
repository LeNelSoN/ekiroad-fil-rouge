import { useMapEvents } from "react-leaflet"

function Location() {
  const map = useMapEvents({
    dblclick() {
      map.locate()
    },
    locationfound(e) {
      map.flyTo(e.latlng, 12)
    }
  })
}

export default Location;