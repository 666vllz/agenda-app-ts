import { Pressable } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { FontAwesome } from "@expo/vector-icons"
import { Link } from "expo-router"

const NewReservationButton = () => {
  const { styles } = useStyles(stylesheet)

  return (
    <Link href="/modal" asChild>
      <Pressable style={styles.pressable}>
        <FontAwesome name="calendar-plus-o" size={24} color="white" />
      </Pressable>
    </Link>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  pressable: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 999,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
}))

export default NewReservationButton
