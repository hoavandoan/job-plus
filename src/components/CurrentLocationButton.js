import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();
const WIDTH = Dimensions.get('window').widget;
const HEIGHT = Dimensions.get('window').HEIGHT;
const CurrentLocationButton = ({myLocation, bottom}) => {
    const bt = bottom ? bottom : 65;
    return (
        <View style={styles.container}>
            <Icon name="my-location" size={30} color="#900" onPress={myLocation}/>
        </View>
    );
};

export default CurrentLocationButton;

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'relative',
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        // left: Dimensions.get('window').width - 200,
        borderRadius: 50,
        shadowColor: '#000000',
        elevation: 7,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
