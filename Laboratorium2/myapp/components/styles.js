import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#f5e1e7',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center'
    },
    lab: {
        marginTop: '10%',
        fontSize: 20,
        color: '#999697',
        marginBottom: 30
    },
    buttons:{
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 5
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#999697',
        borderWidth: 0.4,
        borderRadius: 4,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 3,
        paddingRight: 3
    },
    btntext: {
        color:'#c7777e'
    },
    img: {
        height: 255,
        width: 300,
        marginTop: 10
    }

});

styles.rest = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#f5e1e7',
        flexDirection: 'row'
    },
    buttons:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        flex: 2,
    },
    op: {
        flex: 1,
    },
    ex: {
        flex: 2,
    },
    optxt: {
        color: '#999697',
        marginTop: '10%',
        fontSize: 23,
        marginLeft: 5
    },
    extxt1: {
        color: '#999697',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 5
    },
    extxt2: {
        color: '#b08b8e',
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        borderWidth: 0.2,
        borderRadius: 3,
        borderColor: '#c7777e'
    }
});

styles.state = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#f5e1e7',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    buttons: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
    },
    descr: {
        flex: 2,
        flexDirection: 'row'    
    },
    text: {
        flex: 1,
    },
    ex: {
        flex: 2
        
    }
});

styles.spread = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#f5e1e7',
        justifyContent: 'center',
    },
    top: {
        flex: 1,
        flexDirection: 'row',
    },
    bottom: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        flex: 1,
    },
    buttons: {
        flex: 2,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
    }

});

export default styles