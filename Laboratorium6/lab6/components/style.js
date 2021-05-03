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
    slider: {
        alignSelf: 'center'
    },
    example: {
        backgroundColor: '#d4b2a7',
        justifyContent: 'space-around',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 170,
    },
    
    image: {
        width: 300,
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 3
    },
    input: {
        borderColor: '#928a9c',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 17,
        width: 280,
        textAlign: 'center',
        color: '#746d7d',
        alignSelf: 'center'
    }
})

export default styles