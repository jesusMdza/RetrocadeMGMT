import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.view}>
      <View style={styles.spaceBetweenRow}>
        <Text>Members</Text>
        <View>
          <Text>A</Text>
          <Text>B</Text>
          <Text>C</Text>
          <TouchableOpacity style={styles.scanButton}>
            <Text>Check In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.search}>
        <Text>Search Members</Text>
      </View>
      <View style={styles.spaceBetweenRow}> 
        <Text>348 Members</Text>
        <View>
          <Text>A</Text>
          <Text>B</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#121114',
  },
  spaceBetweenRow: {

  },
  scanButton: {

  }
});

export default Home;
