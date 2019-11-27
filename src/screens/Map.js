import React,{useState,useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


class Map extends React.Component{
    state={
        location:{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }
    watchID: ?number = null;

    componentDidMount(){
        this.getLocation()
    }
    getLocation = ()=>{
        const data = Geolocation.getCurrentPosition(info =>{
            const initialPosition = JSON.stringify(info);
            this.setState({location:{...this.state.location,latitude:info.coords['latitude'],longitute:info.coords['longitude']}})
            console.log('location',this.state.location)
        })
        console.log(data)
    }

        render(){
            return (
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        region={this.state.location}
                    >

                    </MapView>
                </View>
            );
        }

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
