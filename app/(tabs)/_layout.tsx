import { Tabs } from "expo-router"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function TabLayout() {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <Tabs
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: theme.colors.textPrimary,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: theme.colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Ajustes",
        }}
      />
    </Tabs>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  header: {
    backgroundColor: theme.colors.backgroundPrimary,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  tabBar: {
    backgroundColor: theme.colors.backgroundPrimary,
    borderTopWidth: 0,
  },
}))
