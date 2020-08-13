import React from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  removeUser,
  selectTotalUsers,
  selectAllUsers
} from "../../stores/users/userSlice";
import { TextInput, Card, Headline, Paragraph, Button } from 'react-native-paper';

export default function HomeScreen() {
  const count = useSelector(selectTotalUsers);
  const users = useSelector(selectAllUsers);
  const usersLoading = useSelector(state => state.users.loading);
  const dispatch = useDispatch();
  console.log({ users })
  return (
    <View>
      <Text>Home</Text>
      <Button icon="login" mode="contained" onPress={() => dispatch(fetchUsers())}>FETCH</Button>
      <Text>{count} users</Text>
      {
        users.map(user =>
          console.log({ user }) || (
            < View >
              <Text>{`${user.first_name} ${user.last_name}`}</Text>
              <Button icon="login" mode="contained" onPress={() => dispatch(removeUser(user.id))}>REMOVE</Button>
            </View>
          ))
      }
    </View >
  )
}
