import React from 'react';
import { View, StyleSheet, Text, Dimensions } from "react-native"

const Header = () => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.title}>CryptoTracker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#416cad',
        height:60,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        width:Dimensions.get('screen').width
    },
    title:{
        fontWeight:'600',
        color:'white',
        fontSize:18
    }
})

export default Header