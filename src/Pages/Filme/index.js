import React,{Component} from "react";
import { View,Text,Image, StyleSheet,TouchableOpacity } from "react-native";

export default class Filme extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=> alert(this.props.data.descricao)}>
                <Text style={styles.nomeFilme}>{this.props.data.nome}</Text>
                <Image style={styles.capaFilme}  source={{uri: this.props.data.foto}}/>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    nomeFilme:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent:"center",
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 10
    },
    capaFilme:{
        width: 200,
        height: 250,
        alignSelf:"center",
        borderRadius: 20,
        marginBottom:15
    }
});