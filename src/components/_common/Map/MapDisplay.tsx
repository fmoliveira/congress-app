import React, { PureComponent } from "react"
import styled from "styled-components"

import { RequestStatusType } from "../../../reducers/requestStatus"

const GOOGLE_MAPS_KEY = "AIzaSyA-WTkvNO8bmhes9JzIzX5UTogM40H1Ufs"
const GOOGLE_MAPS_ELEMENT_ID = "googleMapsScript"
const GOOGLE_MAPS_CALLBACK_FN = "googleMapsLoaded"

interface IProps {
  address: string
}

interface IState {
  status: RequestStatusType
  coordinates: any
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  flex: 1;
`

export class MapDisplay extends PureComponent<IProps> {
  public state: IState = {
    coordinates: undefined,
    status: RequestStatusType.Loading
  }

  private mapRef = React.createRef<HTMLDivElement>()

  public componentDidMount() {
    this.loadGoogleMaps()
  }

  public render() {
    const { status } = this.state
    return (
      <Wrapper>
        <Container ref={this.mapRef}>
          {status === RequestStatusType.Loading && <div>Loading map...</div>}
          {status === RequestStatusType.Error && <div>Failed to load map!</div>}
        </Container>
      </Wrapper>
    )
  }

  private loadGoogleMaps() {
    window[GOOGLE_MAPS_CALLBACK_FN] = this.googleMapsLoaded

    // google maps is already loaded :)
    if (document.getElementById(GOOGLE_MAPS_ELEMENT_ID)) {
      this.googleMapsLoaded()
      return
    }

    const script = document.createElement("script")
    script.id = GOOGLE_MAPS_ELEMENT_ID
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&callback=${GOOGLE_MAPS_CALLBACK_FN}`
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }

  private googleMapsLoaded = () => {
    this.getOfficeCoordinates()
  }

  private displayMapAndMarker = () => {
    const { address } = this.props
    const { coordinates } = this.state

    const map = new google.maps.Map(this.mapRef.current, {
      center: coordinates,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoom: 13
    })

    const marker = new google.maps.Marker({
      map,
      position: coordinates
    })

    const infoWindow = new google.maps.InfoWindow({
      content: `<div>${address}</div>`
    })

    infoWindow.open(map, marker)
  }

  private getOfficeCoordinates = () => {
    const { address } = this.props
    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ address }, this.setOfficeCoordinates)
  }

  private setOfficeCoordinates = (results: any, status: any) => {
    if (status === "OK") {
      const coordinates = results[0].geometry.location
      this.setState(
        { status: RequestStatusType.Success, coordinates },
        this.displayMapAndMarker
      )
    } else {
      this.setState({ status: RequestStatusType.Error })
    }
  }
}
