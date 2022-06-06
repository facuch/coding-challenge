import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import CryptoCard from '../../components/CryptoCard/CryptoCard';
import routes from '../../constants/routes';
import { fetchData } from '../../redux/actions/cryptoAction';

const HomeScreen = ({crypto}) => {
    const [refreshing, setRefreshing] = useState(false)
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const refreshHandler = React.useCallback(async () => {
        try {
            setRefreshing(true);
            dispatch(fetchData()).then(setRefreshing(false));
        } catch (error) {
            console.log(error)
            setRefreshing(false)
        }
    }, []);

    useEffect(()=>{
        console.log(crypto.data)
    },[crypto])

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
                <TouchableOpacity onPress={()=>navigation.navigate(routes.ADD_CRYPTO)}>
                    <Text style={styles.addCryptoText}>+ Add another cryptocurrency</Text>
                </TouchableOpacity>
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

const mapStateToProps = (state) => {
    const { crypto } = state
    return { crypto }
};

export default connect(mapStateToProps)(HomeScreen)