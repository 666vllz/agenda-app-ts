import NewReservationButton from "@/components/new-reservation-button"
import ReservationCard from "@/components/reservation-card"
import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function TabOneScreen() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Reservas</Text>
      <ReservationCard />
      <ReservationCard />
      <ReservationCard />
      <ReservationCard />
      <ReservationCard />
      <ReservationCard />
      <NewReservationButton />
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontWeight: "bold",
  },
}))
