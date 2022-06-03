import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Header from '../../components/Header/Header';
import CryptoCard from '../../components/CryptoCard/CryptoCard';

const HomeScreen = () => {
    return(
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView style={styles.mainBody} contentContainerStyle={styles.contentContainerStyle}>
                <Header/>
                <CryptoCard/>
                <CryptoCard/>
                <CryptoCard/>
                <CryptoCard/>
                <CryptoCard/>
                <CryptoCard/>
                <CryptoCard/>
                <CryptoCard/>
                <CryptoCard/>
                <CryptoCard/>
                <CryptoCard/>
                <View>
                    <Text>Add another cryptocurrency</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer:{
        flex:1
    },
    contentContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    }
})

export default HomeScreen