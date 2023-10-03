import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    clip: {
        flex: 1,
        resizeMode: "contain",
        width: 35,
        height: 35,
    },
    lock: {
        flex: 1,
        resizeMode: "contain",
        width: 15,
        height: 15,

        
    },
    lock1: {
        flex: 1,
        resizeMode: "contain",
        width: 15,
        height: 15,
        marginTop:-50
        
    },
    lock2: {
        flex: 1,
        resizeMode: "contain",
        width: 15,
        height: 15,
        marginTop:-50
        
    },
    lock3: {
        flex: 1,
        resizeMode: "contain",
        width: 15,
        height: 15,
        right:28
        
    },
    input: {
        width: "90%",
    },
    icon: {
        resizeMode: "contain",
        height: 20,
        width: 20,
        alignSelf: "center",
        marginHorizontal: 5
    },
    container: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 5,
        flexDirection: "row",
    },
});

export default styles;