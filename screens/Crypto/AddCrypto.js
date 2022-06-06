import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Dimensions, TouchableOpacity } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { connect, useDispatch } from 'react-redux';
import BackArrow from '../../components/BackArrow/BackArrow';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
import { fetchData, addCrypto } from '../../redux/actions/cryptoAction';

const AddCrypto = ({crypto}) => {
    const [selectedCrypto, setSelectedCrypto] = useState({})
    const chosen = crypto.chosen
    const data = crypto.data
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const generateDataset = () => {
        let newChosenData = data
        if(chosen.length >= 1){
            chosen.forEach((value)=>{
                const index = newChosenData.findIndex((newValue)=>newValue.name === value.name)
                newChosenData.splice(index, 1)
            })
        }
        return newChosenData.map((crypto)=>{return ({id:crypto.serial_id, title:crypto.name})})

    }

    const handleSelectItem = (item) =>{
        if(item){
            const selected = data.filter((crypto)=> crypto.name === item.title)
            setSelectedCrypto(selected[0])
        }
    }
    const addAndContinue = () => {
        setSelectedCrypto({})
        dispatch(addCrypto(selectedCrypto))
        navigation.navigate(routes.MAIN)
    }


    useEffect(()=>{
        dispatch(fetchData())
    },[])
    
    return(
        <SafeAreaView style={styles.screenContainer}>
            <BackArrow/>
            <View style={styles.mainContainer}>
                
                    <Text style={styles.title}>Add a cryptocurrency</Text>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        onSelectItem={(item)=>handleSelectItem(item)}
                        dataSet={generateDataset()}
                        containerStyle={styles.inputContainerStyle}
                    />
                <TouchableOpacity
                    onPress={addAndContinue}
                    style={styles.button}
                    //disabled={Object.keys(selectedCrypto).length === 0}
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

const mapStateToProps = (state) => {
    const { crypto } = state
    return { crypto }
};

export default connect(mapStateToProps)(AddCrypto)