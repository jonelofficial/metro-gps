import { Image, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import fonts from "../../config/fonts";
import AppHeading from "../AppHeading";
import AppText from "../AppText";
import Fonts from "../Fonts";
import Spacer from "../Spacer";

function UserDetails({ title, description }) {
  return (
    <Fonts style={styles.screen}>
      <View style={styles.profilePlaceholder}>
        <Image
          style={styles.image}
          source={require("../../assets/profile.jpg")}
        />
      </View>
      <View style={styles.detailsPlaceholder}>
        <View>
          <AppHeading size="h2" style={styles.title}>
            {title}
          </AppHeading>
        </View>
        <Spacer style={{ height: 6 }} />
        <View>
          <AppText style={styles.description}>{description}</AppText>
        </View>
      </View>
    </Fonts>
  );
}
const styles = StyleSheet.create({
  screen: { flexDirection: "row" },
  profilePlaceholder: {
    width: 57,
    height: 55,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsPlaceholder: {
    marginHorizontal: 15,
  },
  title: { fontFamily: fonts.primaryName, color: colors.primary },
  description: {
    fontFamily: fonts.primaryName,
    color: colors.medium,
    fontSize: 16,
  },
});

export default UserDetails;
