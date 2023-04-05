import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpactity } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

             <SafeAreaView style={styles.droidSafeArea} />

             <View style={styles.titleBar}>

             </View>    
               <Text style={styles.titleText}> APP!</Text>

               <Text style={styles.titleText}> estrela</Text>

               <TouchableOpactity style={styles.routeCard}>
                <Text style={styles.routeText}> Nave espacial </Text> 
               </TouchableOpactity>

               <TouchableOpactity style={styles.routeCard}>
                <Text style={styles.routeText}> Mapa estrelar </Text>
               </TouchableOpactity>

               <TouchableOpactity style={styles.routeCard}>
                <Text style={styles.routeText}> Imagens Diarias </Text>
               </TouchableOpactity> 

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleBar: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontSize: 40,
        fontWeight: "hold",
        color: "blue"
    },
    droidSafeArea: {
        marginTo: Platform.OS === 'andorid'? StatusBar.currentHeight: 0
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"purble",
        marginTop: 50,
        paddingLeft: 30,
    },
    routeCard:{
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',
    },
})