import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IconArrow from 'react-native-vector-icons/Feather'
import { useDispatch } from 'react-redux';
import { removeCrypto } from '../../redux/actions/cryptoAction';


const CryptoCard = ({name, symbol, price, down, percentage, item}) => {
    const dispatch = useDispatch();
    return(
        <View style={styles.cardContainer}>
            <View>
                <Text>{name}</Text>
                <Text>{symbol}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View>
                    <Text>$ {price}</Text>
                    <View style={styles.percentage}>
                        <IconArrow
                            name={!down ? "arrow-up-right" : "arrow-down-left"}
                            size={15}
                            color={!down ? "green" : "red"}
                        />
                        <Text>{percentage}%</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={()=>dispatch(removeCrypto(item))}
                >
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