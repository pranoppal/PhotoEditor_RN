import {StyleSheet} from 'react-native'
import { colorAccent, colorPrimary, colorWhite } from '../../utils/colors'

const styles = StyleSheet.create({
    headerContainer:{
        flex:0.8,
        justifyContent:'center',
    },
    buttonContainer:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center',
    },
    descLabel:{
        fontSize:16,
        textAlign:'center',
        marginTop:16,
    },
    descContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    headerTitleLabel:{
        color:colorPrimary,
        fontSize:24,
        textAlign:'center',
    },
    buttonLabelStyle:{
        color:colorWhite,
    },
    buttonStyle:{
        borderRadius:25,
        height:50,
        width:180,
        backgroundColor: colorAccent,
        justifyContent:'center',
        alignItems:'center',
    },  
    uploadImageStyle:{
        height:200,
        width:300,
        borderRadius:12,
    }
})

export default styles