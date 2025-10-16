import { Surface, Text } from "react-native-paper";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Surface
      style={{
        position: 'absolute',
        bottom: 0, 
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 12, color: "#646464", textAlign: "center" }}>
        Copyright © {currentYear} Atacadão SA | Desenvolvido por Transformação Digital ATC
      </Text>
    </Surface>
  );
}
