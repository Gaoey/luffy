import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Portal, FAB } from 'react-native-paper';

export default function FABSettings() {
  const navigation = useNavigation();
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'cog' : 'plus'}
        actions={[
          {
            icon: 'tools',
            label: 'HTTP inspector',
            onPress: () => navigation.navigate("HTTPInspector"),
          },
        ]}
        onStateChange={onStateChange}
      />
    </Portal>
  )
}
