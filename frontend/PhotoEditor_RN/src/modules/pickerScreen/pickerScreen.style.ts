import {StyleSheet} from 'react-native'
import { colorAccent, colorPrimary, colorWhite } from '../../utils/colors'

const styles  = StyleSheet.create({
    buttonContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    descContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    headerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imageStyle:{
        height:200,
        width:200,
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
    descLabel:{
        fontSize:16,
        marginVertical:16,
    },
    headerLabel:{
        fontSize:24,
        color:colorPrimary,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default styles