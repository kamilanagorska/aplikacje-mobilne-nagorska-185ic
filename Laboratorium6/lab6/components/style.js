import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#f2cec2',
        justifyContent: 'center',
        flexGrow: 1
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        backgroundColor: '#d4b2a7',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 70
    }
});

styles.img = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#f2cec2',
        flexGrow: 1
    },

    explain: {
        backgroundColor: '#d4b2a7',
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
    text1: {
        fontSize: 17,
        color: 'white',
        marginTop: 3
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
        height: 200,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10
    },
    image: {
        width: 300,
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 3
    },
    image2: {
        height: '100%', 
        width: 93
    },
    ex: {
        backgroundColor: '#82ad7f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 35,
        marginBottom: 10
    },
    input: {
        borderColor: '#90c28c',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 17,
        width: 300,
        textAlign: 'center',
        color: '#746d7d'
    },
    swipe: {
        backgroundColor: '#82ad7f',
        height: 80,
        alignItems: 'stretch'
    }
})

export default styles