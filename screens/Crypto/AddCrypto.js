import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import BackArrow from '../../components/BackArrow/BackArrow';

const AddCrypto = () => {
    return(
        <SafeAreaView style={styles.screenContainer}>
            <BackArrow/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer:{
        flex:1
    }
})

export default AddCrypto