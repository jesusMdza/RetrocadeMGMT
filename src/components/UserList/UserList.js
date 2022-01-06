import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Row from './Row/Row';

const UserList = ({ userData }) => {
  console.log("this is the user data");
  console.log(userData);

  return (
    <View>
      <FlatList 
        style={styles.list}
        data={userData}
        renderItem={({ item }) => (
          <Row 
            firstName={item.firstName} 
            lastName={item.lastName} 
            email={item.email} 
            isCheckedIn={item.isCheckedIn} 
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'stretch',
  }
});

export default UserList;
