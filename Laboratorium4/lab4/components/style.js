import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#cfc3de',
        justifyContent: 'center',
        flexGrow: 1
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        backgroundColor: '#c0b4cf',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 90
    }
});
styles.textInp = StyleSheet.create({
    example: {
        backgroundColor: '#c0b4cf',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 140
    },
    input: {
        borderColor: '#928a9c',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 17,
        width: 300,
        textAlign: 'center',
        color: '#746d7d'
    },
    text: {
        fontSize: 18,
        color: 'white',
        marginLeft: 5,
        marginRight: 5
    },
    text2: {
        fontSize: 20,
        color: 'white',
        marginLeft: 5,
        marginRight: 5
    },
    textSm: {
        fontSize: 15,
        color: '#746d7d'
    },
    explain: {
        backgroundColor: '#a8a3ad',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 50
    }
});
styles.select = StyleSheet.create({
    pick: {
        borderColor: '#928a9c',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 17,
        width: 150,
        textAlign: 'center',
        color: '#746d7d',
        height: 50,
    }
});
styles.switch = StyleSheet.create({
    examples: {
        flex: 2
    },
    position: {
        flex: 1,
        justifyContent: "center"
    },
    modalView: {
        justifyContent: 'space-around',
        backgroundColor: "#c0b4cf",
        borderRadius: 10,
        borderColor: '#928a9c',
        borderWidth: 1.5,
        margin: 20,
        paddingTop: 25,
        paddingBottom: 15,
        alignItems: "center"
    },
    button: {
        backgroundColor: '#928a9c',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#a8a3ad'

    },
    text: {
        fontSize: 18,
        color: 'white',
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 10
    },
});
styles.date = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#cfc3de',
        flexGrow: 1
    },
    example: {
        backgroundColor: '#c0b4cf',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 300
    },
    button: {
        backgroundColor: '#928a9c',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 50,
        borderWidth: 2,
        borderColor: '#a8a3ad'
    }
});
styles.toast = StyleSheet.create({
    example: {
        backgroundColor: '#c0b4cf',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 100
    }
});
export default styles