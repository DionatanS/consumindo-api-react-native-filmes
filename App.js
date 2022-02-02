import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { SafeAreaView,Text,StyleSheet, FlatList } from 'react-native';
import Filme from './src/Pages/Filme';

import api from './src/services/Api';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      filmes:[]
    }
  }

  async componentDidMount(){
    const response = await api.get('/filmes');
    this.setState({
      filmes: response.data
    })
  }

  render(){
    return(      
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor='white'/>
        <FlatList
        data={this.state.filmes}
        keyExtractor={item => item.id}
        renderItem={({item})=> <Filme data={item}/>}
        />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    paddingTop:30

  }
})

