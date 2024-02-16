import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const ModalScreen = () => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontWeight: "bold",
  },
}))

export default ModalScreen
