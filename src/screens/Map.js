import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import CurrentLocationButton from '../components/CurrentLocationButton';


function Map() {
    const [location, setLocation] = useState({
        latitude: '37.78825',
        longitude: '-122.4324',
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [map, setMap] = useState({});
    useEffect(() => {
        //getLocation()
    }, []);

    function getLocation() {
        Geolocation.getCurrentPosition(info => {
                const latitude = JSON.stringify(info.coords.latitude);
                const longitude = JSON.stringify(info.coords.longitude);
                const latitudeDelta = JSON.stringify(info.coords.latitudeDelta);
                const longitudeDelta = JSON.stringify(info.coords.longitudeDelta);
                setLocation({
                    ...location,
                    latitude,
                    longitude,
                    latitudeDelta,
                    longitudeDelta,
                });
                console.log('initialPosition');
            },
            error => Alert.alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
        Geolocation.setRNConfiguration({distanceFilter: 1.0});
    }

    const onRegionChange = (region) => {
        //console.log('region',region)
    };
    const centerMap = () => {
        const {
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
        } = location;
        map.animateToRegion({
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
        });
    };
    return (
        <View style={styles.container}>
            <CurrentLocationButton myLocation={centerMap}/>
            <MapView
                style={styles.map}
                region={location}
                followsUserLocation={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                toolbarEnabled={true}
                zoomEnabled={true}
                ref={(map) => {
                    setMap(map);
                }}
                rotateEnabled={true}
                onRegionChange={onRegionChange}
            >
                <Marker
                    coordinate={{latitude: location.latitude, longitude: location.longitude}}
                />
            </MapView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default Map;
