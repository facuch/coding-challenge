import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    RefreshControl,
    View,
} from 'react-native';
import Header from '../../components/Header/Header';
import CryptoCard from '../../components/CryptoCard/CryptoCard';

const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false)

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const refreshHandler = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return(
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView 
                contentContainerStyle={styles.contentContainerStyle} 
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={refreshHandler}
                    />
                }
            >
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
                    <Text style={styles.addCryptoText}>+ Add another cryptocurrency</Text>
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
    },
    addCryptoText:{
        color:'#416cad'
    }
})

export default HomeScreen