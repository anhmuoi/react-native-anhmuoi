import { Dimensions, StyleSheet } from 'react-native';
const win = Dimensions.get('window');

export const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFDFF',
        paddingBottom: 10
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        flexDirection: 'row',
    },
    logo: {
        width: win.width / 8,
        height: win.width / 8,
    },
    headerDesc: {},
    headerName: {
        color: '#ACABAC',
        fontWeight: 'bold',
        fontSize: 11,
    },
    HeaderLocation: {
        flexDirection: 'row',
    },
    textLocation: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    headerRight: {},
    account: {
        width: win.width / 9,
        height: win.width / 9,
    },

    headerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
    },
    search: {
        backgroundColor: '#E4E2E6',
        borderRadius: 10,
        width: win.width / 1.12,
        height: win.width / 9,
        alignItems: 'center',
        flexDirection: 'row',
    },
    option: {
        
    },
});
