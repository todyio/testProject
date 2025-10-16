import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NavBar() {

    return (
        <SafeAreaView
            style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#316643"
            }}
        >
            <View
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: 1,
                    gap: 5,
                    marginTop: 3,
                    marginBottom: 5,
                }}
            >
                <Image
                    source={require("../../../assets/logo-atacadao.png"
                    )}

                    style={{
                        width: 110,
                        height: 35,
                    }}
                />
            </View>
        </SafeAreaView >
    )
}