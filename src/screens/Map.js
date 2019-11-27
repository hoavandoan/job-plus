import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


function Map() {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    useEffect(()=>{
        getLocation()
    },[])
    function getLocation() {
        Geolocation.getCurrentPosition(info => {
                const latitude = JSON.stringify(info.coords.latitude)
                const longitute = JSON.stringify(info.coords.longitute)
                setLocation({
                    ...location,
                    latitude,
                    longitute
                });
                console.log('initialPosition',location)
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
        Geolocation.setRNConfiguration({distanceFilter: 5.0})
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
