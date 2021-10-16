import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(( theme ) => ({
    appBar: {
        backgroundColor: 'rgba(-255, -255, -255, 0.6);transparent',
        borderRadius: 15,
        margin: '0 0 0 0',
        marginBottom: '90px',
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        fontFamily:'Roboto',
    },
    image: {
        marginLeft: '15px',
    },
    
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
        flexDirection:'column-reverse'
        }
    }
    

}));    


