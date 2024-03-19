import {View,Text,StyleSheet} from 'react-native'

export default function Box(){
    return(
        <View style ={styles.box}>
            <Text style ={styles.text}>Box</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        backgroundColor : "#fff",
        padding:20,
    },
    text :{
        fontSize:24,
        fontWeight:"bold",
        textAlign:'center',
    }
})