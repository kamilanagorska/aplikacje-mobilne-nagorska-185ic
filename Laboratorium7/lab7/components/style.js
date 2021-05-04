import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#c9c2b5',
        flexGrow: 1
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        backgroundColor: '#b0a99d',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 70
    },
    image: {
        width: 300,
        height: 400,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 3,
        marginTop: 20
    },
    explain: {
        backgroundColor: '#b0a99d',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 50
    },
    input: {
        borderColor: '#b0a99d',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        width: 280,
        textAlign: 'center',
        color: '#746d7d',
        alignSelf: 'center'
    },
    example: {
        backgroundColor: '#b0a99d',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 220,
        alignItems: 'center'
    },
});


export default styles