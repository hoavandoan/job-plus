import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


function Map() {
    const [location, setLocation] = useState({
        latitude: '37.78825',
        longitude: '-122.4324',
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    useEffect(()=>{
        //getLocation()
    },[])
    function getLocation() {
        Geolocation.getCurrentPosition(info => {
                const latitude = JSON.stringify(info.coords.latitude)
                const longitude = JSON.stringify(info.coords.longitude)
                const latitudeDelta = JSON.stringify(info.coords.latitudeDelta)
                const longitudeDelta = JSON.stringify(info.coords.longitudeDelta)
                setLocation({
                    ...location,
                    latitude,
                    longitude,
                    latitudeDelta,
                    longitudeDelta
                });
                console.log('initialPosition')
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
        Geolocation.setRNConfiguration({distanceFilter: 1.0})
    }

    const onRegionChange = (region)=>{
        //console.log('region',region)
    }
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={location}
                followsUserLocation={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                toolbarEnabled={true}
                zoomEnabled={true}
                rotateEnabled={true}
                onRegionChange={onRegionChange}
            >
            </MapView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default Map;
