import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#efd9ae',
        flexGrow: 1
    },
    text: {
        fontSize: 20,
        color: '#894e01'
    },
    button: {
        backgroundColor: '#36a281',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 70,
        borderWidth: 3,
        borderColor: '#894e01'
    },
    modal: {
        backgroundColor: '#efd9ae',
        flex: 1,
        alignItems: 'center'
    },
    modalText: {
        fontSize: 25,
        color: '#894e01',
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20
    },
    cancel: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'right',
        paddingRight: 10
    },
    image: {
        width: 250,
        height: 385,
        alignSelf: 'center',
        marginTop: 20
    },
    logo: {
        width: 902,
        height: 599,
        alignSelf: 'center',
    },
    backLog: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        marginTop: 55,
        alignItems: 'center'
    },
    btntxt: {
        fontSize: 16,
        color: '#a06b3b'
    },
    button2: {
        backgroundColor: '#ffd050',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        borderColor: '#a06b3b',
        borderWidth: 2,
        marginBottom: 20
    },
    buttons: {
        alignItems:'center'
    },
    button3: {
        backgroundColor: '#c68f4c',
        padding: 5,
        borderRadius: 10,
        marginLeft: 20
    },
    bak: {
        marginTop: 20,
        backgroundColor: '#ffd050',
        borderRadius: 10,
        borderColor: '#a06b3b',
        borderWidth: 2
    },
    molly: {
        width: 310,
        height: 488
    },
    input: {
        borderColor: '#894e01',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        width: 280,
        textAlign: 'center',
        color: '#746d7d',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30
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