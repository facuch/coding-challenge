import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    RefreshControl,
    TouchableOpacity,
    FlatList,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import CryptoCard from '../../components/CryptoCard/CryptoCard';
import routes from '../../constants/routes';
import { fetchData } from '../../redux/actions/cryptoAction';

const HomeScreen = ({crypto}) => {
    const [refreshing, setRefreshing] = useState(false)
    const [listData, setListData] = useState(null)
    const navigation = useNavigation();
    const listRef = useRef()
    const dispatch = useDispatch();

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const refreshHandler = React.useCallback(async () => {
        try {
            setRefreshing(true);
            dispatch(fetchData());
            wait(2000).then(() => setRefreshing(false));
        } catch (error) {
            console.log(error)
            setRefreshing(false)
        }
    }, []);


    useEffect(()=>{
        setListData(crypto.chosen)
    },[crypto.chosen])

    const renderItem = ({item}) => {
        return(
            <CryptoCard 
                name={item?.name}
                symbol={item?.symbol}
                price={item?.metrics?.market_data?.price_usd.toFixed(4)}
                down={item?.metrics?.market_data?.percent_change_usd_last_24_hours < 0}
                percentage={item?.metrics?.market_data?.percent_change_usd_last_24_hours.toFixed(4)}
                item={item}
            />
        )
    }

    const EmptyComponent = () =>{
        return(
            <Text style={styles.noCryptos}>Add your cryptos to visualize them!</Text>
        )
    }

    const FooterComponent = () =>{
        return(
            <>
                <TouchableOpacity onPress={()=>navigation.navigate(routes.ADD_CRYPTO)}>
                    <Text style={styles.addCryptoText}>+ Add another cryptocurrency</Text>
                </TouchableOpacity>
                {
                    crypto.last_update !== "" ?
                <Text style={styles.last_update}>Last update: {crypto.last_update}</Text>
                    :null
                }
            </>
        )
    }

    return(
        <SafeAreaView style={styles.screenContainer}>
                <FlatList
                    data={listData}
                    renderItem={renderItem}
                    keyExtractor={(item, index)=>item.id}
                    ListHeaderComponent={<Header/>}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={refreshHandler}
                        />
                    }
                    ListEmptyComponent={<EmptyComponent/>}
                    ListFooterComponent={<FooterComponent/>}
                    contentContainerStyle={styles.contentContainerStyle}
                />
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
        color:'#416cad',
        textAlign:'center'
    },
    last_update:{
        marginTop:10,
        opacity:0.5,
        textAlign:'center'
    },
    noCryptos:{
        marginBottom:10,
        fontSize:16,
        textAlign:'center'
    }
})

const mapStateToProps = (state) => {
    const { crypto } = state
    return { crypto }
};

export default connect(mapStateToProps)(HomeScreen)