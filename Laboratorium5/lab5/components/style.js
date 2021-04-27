import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#a0d99a',
        justifyContent: 'center',
        flexGrow: 1
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        backgroundColor: '#90c28c',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 90
    }
});

styles.scroll = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#a0d99a',
        flexGrow: 1
    },

    explain: {
        backgroundColor: '#90c28c',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 50
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginLeft: 5,
        marginRight: 5
    },
    example: {
        flex: 1,
        backgroundColor: '#90c28c',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 50
    },
    back: {
        backgroundColor: '#90c28c',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 500
    },
    scbox: {
        flex: 1,
        backgroundColor: '#82ad7f',
        height: 100,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10
    },
    scbox2: {
        flex: 1,
        backgroundColor: '#82ad7f',
        height: 100,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        width: 55,
        height: 460
    }
})

export default styles