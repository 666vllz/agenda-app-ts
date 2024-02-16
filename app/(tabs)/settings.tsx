import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function SettingsScreen() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.backgroundPrimary,
  },
  text: {
    color: theme.colors.textPrimary,
  },
}))
