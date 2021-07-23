import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import IconList from './IconList';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <IconList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;