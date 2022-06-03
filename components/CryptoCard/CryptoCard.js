import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native'

const CryptoCard = () => {
    return(
        <View style={styles.cardContainer}>
            <View>
                <Text>Bitcoin</Text>
                <Text>BTC</Text>
            </View>
            <View>
                <Text>$3000</Text>
                <View >
                    <Text>!</Text>
                    <Text>1,82%</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        marginBottom:10,
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        width:Dimensions.get('screen').width - 100
    }
})

export default CryptoCard