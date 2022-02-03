import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

class todo extends Component{

  constructor(props){
    super(props);

    this.state = {
      items: [],
      temp_item: ""
    }
  }

  addItemToList = () => {
    let newItems = this.state.items.concat(this.state.temp_item);
    this.setState({
      items: newItems,
      temp_item: ""
    });
  }

  remove = (index) => {
    console.log(index);
    let newList = this.state.items;
    newList.splice(index, 1);
    this.setState({items: newList});
  }

  render(){
    return (
      <View>
        <TextInput
          placeholder='Add to list'
          onChangeText={value => this.setState({temp_item: value})}
          value={this.state.temp_item}
        />
        <Button 
          onPress={() => {
            this.addItemToList();
          }}
          title="Add"
        />

        <FlatList
          data={this.state.items}
          renderItem={({item, index}) => 
            <View>
              <Text>{item}</Text>
              <Button
                onPress={() => this.remove(index)}
                title="Done"
              />
            </View>
          }
        />
      </View>
    )
  }


}

export default todo;