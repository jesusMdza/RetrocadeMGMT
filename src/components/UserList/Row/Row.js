import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import UserProfileImage from '../../../data/UserProfileImage';

const Row = ({ firstName, lastName, email, imageName, isCheckedIn }) => {
  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <Image style={styles.profileImage} source={UserProfileImage[imageName]} />
        <View style={styles.memberText}>
          <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.emailText}>{email}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={isCheckedIn ? styles.checkedInStatusPill : styles.offlineStatusPill}>
          <View style={isCheckedIn ? styles.checkedInCircle : styles.offlineCircle} />
          <Text style={styles.statusText}>{isCheckedIn ? 'Checked In' : 'Offline'}</Text>
        </View>
        <Image style={styles.ellipsisIcon} source={require('../../../assets/ellipsis.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 19,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#323236',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 4,
    marginRight: 26
  },
  memberText: {
    marginBottom: 1
  },
  nameText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SpaceMono_700Bold',
  },
  emailText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'SpaceMono_400Regular'
  },
  checkedInCircle: {
    width: 6,
    height: 6,
    borderRadius: 100 / 2,
    backgroundColor: '#CEF72E',
    marginRight: 6
  },
  offlineCircle: {
    width: 6,
    height: 6,
    borderRadius: 100 / 2,
    backgroundColor: '#B9BEC4',
    marginRight: 6
  },
  checkedInStatusPill: {
    justifyContent: 'center',
    width: 112,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 38,
    marginBottom: 1,
    backgroundColor: '#383F19',
    borderRadius: 36
  },
  offlineStatusPill: {
    justifyContent: 'center',
    width: 112,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 38,
    marginBottom: 1,
    backgroundColor: '#222226',
    borderRadius: 36
  },
  statusText: {
    fontFamily: 'SpaceMono_700Bold',
    fontSize: 12,
    color: '#fff'
  },
  ellipsisIcon: {
    width: 16,
    height: 3
  }
});

export default Row;
