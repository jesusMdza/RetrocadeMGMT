import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import UserList from '../../components/UserList/UserList';

const Home = ({ navigation, userData }) => {
  console.log("HOME IS RENDERED");
  console.log(navigation);

  return (
    <View style={styles.view}>
      <View style={styles.navigationBar}>
        <Text style={[styles.heading, styles.letterSpacing]}>Members</Text>
        <View style={styles.rightNavSection}>
          <Image style={styles.boltIcon} source={require('../../assets/bolt.png')} />
          <Image style={styles.speedometerIcon} source={require('../../assets/speedometer.png')} />
          <Image style={styles.plusIcon} source={require('../../assets/plus.png')} />
          <TouchableOpacity 
            style={styles.scanButton} 
            onPress={() => navigation.navigate('Scan')}
          >
            <Image style={styles.scanIcon} source={require('../../assets/scan.png')} />
            <Text style={[styles.scanButtonText, styles.letterSpacing]}>Check In</Text>
          </TouchableOpacity>
        </View>
      </View> 
      <View style={styles.searchBar}>
        <Image style={styles.searchIcon} source={require('../../assets/search.png')} />
        <Text style={styles.placeholder}>Search Members</Text> 
      </View>
      <View style={styles.sortFilterBar}> 
        <Text style={[styles.grayText, styles.letterSpacing]}>{userData.length} Members</Text>
        <View style={styles.rightSortFilterSection}>
          <View style={styles.sort}>
            <Image style={styles.sortIcon} source={require('../../assets/sort.png')} />
            <Text style={[styles.grayText, styles.letterSpacing]}>A-Z</Text>
          </View>
          <View style={styles.filter}>
            <Image style={styles.filterIcon} source={require('../../assets/filter.png')} />
            <Text style={[styles.grayText, styles.letterSpacing]}>Filter</Text>
          </View>
        </View>
      </View>
      <UserList userData={userData} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#121114',
    paddingTop: 70,
    paddingHorizontal: 40
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40
  },
  rightNavSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sortFilterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 20
  },
  rightSortFilterSection: {
    flexDirection: 'row'
  },
  scanButton: {
    flexDirection: 'row',
    height: 36,
    paddingHorizontal: 16,
    backgroundColor: '#CEF72E',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scanButtonText: {
    fontFamily: 'SpaceMono_700Bold',
    letterSpacing: -.24
  },
  scanIcon: {
    width: 16,
    height: 16,
    marginRight: 10
  },
  boltIcon: {
    width: 14.3,
    height: 20,
    marginRight: 30
  },
  plusIcon: {
    width: 16,
    height: 16,
    marginRight: 30
  },
  sortIcon: {
    width: 12.5,
    height: 13.5,
    marginRight: 13
  },
  filterIcon: {
    width: 20,
    height: 11,
    marginRight: 10
  },
  speedometerIcon: {
    width: 18,
    height: 18,
    marginRight: 30
  },
  heading: {
    fontSize: 34,
    fontFamily: 'SpaceMono_700Bold',
    color: "#fff",
    letterSpacing: -.24
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222226',
    paddingVertical: 19,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginBottom: 20
  },
  searchIcon: {
    width: 18,
    height: 18
  },
  placeholder: {
    color: '#8B8B8D',
    fontSize: 15,
    marginLeft: 14,
    fontFamily: 'SpaceMono_700Bold',
    letterSpacing: -.24
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  grayText: {
    fontFamily: 'SpaceMono_400Regular',
    color: '#8B8B8D'
  },
  letterSpacing: {
    letterSpacing: -.24
  }
});

export default Home;
