import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BackArrow = () => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.buttonContainer}>
            <Icon name="arrow-back" size={30}/>
            <Text style={styles.text}>Back to list</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:"row",
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        position:'relative',
        top:15,
        left:15
    },
    text:{
        marginLeft:5
    }
})

export default BackArrow