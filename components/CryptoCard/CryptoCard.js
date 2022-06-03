import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IconArrow from 'react-native-vector-icons/Feather'

const CryptoCard = () => {
    return(
        <View style={styles.cardContainer}>
            <View>
                <Text>Bitcoin</Text>
                <Text>BTC</Text>
            </View>
            <View style={styles.rightContainer}>
                <View>
                    <Text>$3000</Text>
                    <View style={styles.percentage}>
                        <IconArrow
                            name={true ? "arrow-up-right" : "arrow-down-left"}
                            size={15}
                            color={true ? "green" : "red"}
                        />
                        <Text>1,82%</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Icon
                        name="cross"
                        size={20}
                        style={styles.iconStyle}
                    />
                </TouchableOpacity>
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
    },
    rightContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    iconStyle:{
        marginLeft:10
    },
    percentage:{
        flexDirection:'row'
    }
})

export default CryptoCard