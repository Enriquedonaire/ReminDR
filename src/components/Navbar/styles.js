import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'rgba(-255, -255, -255, 0.6);transparent',
        borderRadius: 15,
        margin: '0 0 0 0',
        marginBottom: '75px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 70px',
    },
    heading: { 
        color: 'rgba(103, 191, 165, 0.50)',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '1px',
        borderRadius: '100px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        color: 'rgba(0,183,255, 1)',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));