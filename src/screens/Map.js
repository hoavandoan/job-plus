import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


function Map() {
    const [location, setLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    useEffect(()=>{
        Geolocation.getCurrentPosition(info => {
            setLocation({
                ...location,
                latitude: info.coords['latitude'],
                longitute: info.coords['longitude'],
            });
            console.log('initialPosition',location)
        });
    },[])
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={location}
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
