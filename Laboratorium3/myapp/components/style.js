import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#c9dcf5',
        justifyContent: 'center',
        flexGrow: 1
    },
    sort: {
        flex: 2,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexGrow: 1
    },
    lazy: {
        flex: 3,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexGrow: 1
    },
    step: {
        flex: 4,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexGrow: 1
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        flex: 1,
        backgroundColor: '#a7bad4',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    }
});

styles.sort = StyleSheet.create({
    sort: {
        flex: 2,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    description: {
        flex: 3,
        backgroundColor: '#abb6c4',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 80,
    },
    options: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    numbers: {
        flex: 5,
        backgroundColor: '#abb6c4',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
    },
    optButton: {
        flex: 1,
        backgroundColor: '#939dab',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 35,
        borderWidth: 1,
        borderColor: 'white'
    },
    optText: {
        color: 'white',
        fontSize: 15
    },
    nrText: {
        color: 'white',
        marginTop: 5,
        margin: 5,
        fontSize: 20
    }
});

export default styles
