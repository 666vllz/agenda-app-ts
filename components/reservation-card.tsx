import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const ReservationCard = () => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserva N°1</Text>
      <View style={styles.date}>
        <Text style={styles.dateText}>17/02/2024</Text>
        <Text style={styles.dateText}>12:00 - 14:00</Text>
      </View>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 16,
    color: theme.colors.textPrimary,
  },
  date: {
    flexDirection: "row",
    gap: 10,
  },
  dateText: {
    color: theme.colors.textTertiary,
  },
}))

export default ReservationCard
