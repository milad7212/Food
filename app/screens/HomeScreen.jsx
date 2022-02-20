import React from 'react';
import { StyleSheet,View ,Text,Image} from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';

function HomeScreen(props) {
    return (
        <Screen>
            <View style={styles.header}>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:28}}>Hello,</Text>
                        <Text style={{fontSize:28,fontWeight:'bold',marginLeft:10}}>Milad</Text>
                    </View>
                    <Text style={{marginTop:5,fontSize:22,color:colors.grey}}>What do you want today?</Text>
                </View>
                <Image style={styles.image} source={require('../assets/person.png')}/>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    image:{
        height:50,
        width:50,
        borderRadius:25,
    },
    header:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
    }
    
})
export default HomeScreen;