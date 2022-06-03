import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Dimensions, TouchableOpacity } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import BackArrow from '../../components/BackArrow/BackArrow';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';

const AddCrypto = () => {
    const dataset = [{id:1,title:'Bitcoin'},{id:2,title:'Ethereum'},{id:3,title:'Tether'},{id:4,title:'USDC'},{id:5,title:'Litecoin'}]
    
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.screenContainer}>
            <BackArrow/>
            <View style={styles.mainContainer}>
                
                    <Text style={styles.title}>Add a cryptocurrency</Text>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        onSelectItem={(item)=>{console.log(item)}}
                        dataSet={dataset}
                        containerStyle={styles.inputContainerStyle}
                    />
                <TouchableOpacity
                    onPress={()=>{navigation.navigate(routes.MAIN)}}
                    style={styles.button}
                >
                    <Text style={styles.insideButton}>Add</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer:{
        flex:1
    },
    mainContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop:40,
        width:Dimensions.get('screen').width -100,
        marginLeft:50
    },
    title:{
        fontWeight:'600',
        fontSize:22,
        marginBottom:15,
        alignSelf:'flex-start'
    },
    inputContainerStyle:{
        width:Dimensions.get('screen').width - 100
    },
    button:{
        width:100,
        padding:10,
        backgroundColor:'#dbcf53',
        borderRadius:5,
        alignSelf:'flex-end',
        marginTop:15
    },
    insideButton:{
        fontWeight:'600',
        textAlign:'center'
    }
})

export default AddCrypto