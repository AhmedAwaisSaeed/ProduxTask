import {StyleSheet, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Images, Layout, Colors} from './src/theme';
import {getPreciseDistance} from 'geolib';
import {Button, Section} from './src/components';
import MapViewDirections from 'react-native-maps-directions';
const data = [
  {
    id: '123',
    latitude: 37.78825,
    longitude: -122.4324,
  },
  {
    id: '456',
    latitude: 37.771,
    longitude: -122.4324,
  },
];

const App = () => {
  const [mapReady, setMapReady] = useState(false);
  const [distance, setDistance] = useState(undefined);
  const calculatePreciseDistance = () => {
    var pdis = getPreciseDistance(
      {latitude: data[0].latitude, longitude: data[0].longitude},
      {latitude: data[1].latitude, longitude: data[1].longitude},
    );
    setDistance(pdis / 1000);
  };

  const onMapReady = () => {
    setMapReady(true);
  };

  useEffect(() => {
    if (mapReady) {
      calculatePreciseDistance();
    }
  }, [mapReady]);

  return (
    <View style={styles.flexOne}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onMapReady={onMapReady}>
          {data && data.length
            ? data.map((item, index) => {
                return (
                  <Marker
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude,
                    }}
                    key={item?.id}>
                    <View style={styles.markerContainer}>
                      <Image
                        source={
                          index === 0 ? Images.markerIcon : Images.carIcon
                        }
                        style={styles.pinStyle}
                      />
                    </View>
                  </Marker>
                );
              })
            : null}
          <MapViewDirections
            origin={{latitude: data[0].latitude, longitude: data[0].longitude}}
            destination={{
              latitude: data[1].latitude,
              longitude: data[1].longitude,
            }}
            apikey={'AIzaSyB_7NjFCtkAXXsT4tzszUsHIKUqnEg2468'}
            strokeWidth={5}
            strokeColor={Colors.Primary.BLUE}
          />
        </MapView>
      </View>
      <View style={styles.secondSection}>
        <Section title={'Distance'} value={`${distance?.toFixed(1)} Km`} />

        <View style={styles.rowContainer}>
          <View style={styles.flexOne}>
            <Section title={'Cost'} value={distance?.toFixed(1) * 2000} />
          </View>
          <View style={styles.flexOne}>
            <Section title={'Time'} value={`${distance?.toFixed(1) * 5} min`} />
          </View>
        </View>

        <Button title={'Start'} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  flexOne: {
    flex: 1,
  },
  markerContainer: {
    width: Layout.SV_25,
    height: Layout.SV_25,
    borderWidth: 1,
    borderColor: Colors.Primary.Light_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary.WHITE,
    borderRadius: Layout.SV_5,
  },
  pinStyle: {
    width: Layout.SV_15,
    height: Layout.SV_15,
    resizeMode: 'contain',
  },
  secondSection: {
    flex: 1,
    marginTop: Layout.SV_30,
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: Layout.SV_20,
  },
});
