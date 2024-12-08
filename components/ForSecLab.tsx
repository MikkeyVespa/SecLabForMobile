import { Image, Text, View, StyleSheet } from "react-native";

export type ListProps = {
  language: string;
  experience: number;
  logo: {
    uri: string;
  };
};

export default function ForSecLab({
  language,
  experience,
  logo,
}: ListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{language}</Text>
      <Text>Время изучения (лет): {experience}</Text>
      <Image style={styles.logo} source={{ uri: logo.uri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
  },
  logo: {
    width: 100,
    height: 100,
  },
});