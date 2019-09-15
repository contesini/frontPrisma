import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { GetUserByToken } from '../../graphql/mutations/user'
import { bindActionCreators } from 'redux'
import { checkToken } from '../../duck/actions/authAction'
import { navigate } from 'hookrouter'
import { connect } from 'react-redux'
import Layout from '../../components/Layout/Layout';
import { menus } from '../../config/menus';
import { colors } from '../../config/colors'
import { CircularProgress, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const ResultadoContent = (props) => {
     const classes = useStyles();
    return (
        <div>
      <Paper className={classes.root}>
        <Typography variant="h3" component="h3">
          Parabéns Joana da Silva, você teve seu direito à justiça garantido.
        </Typography>
        <br/>
        <Typography variant="h4" component="h4">
          Abaixo seu número do processo:
        </Typography>
        <br/>
        <Typography  variant="h4" component="h4">
         Processo n. 1000275-34.2019.5.02.9999
        </Typography>
        <br/>
         <br/>
          <br/>
           <br/>
            <br/>
            <div style={{display:'flex', flexDirection: 'row' }}>
                <Button>Encaminhar acordo para o CEJUSC</Button>
            <Button></Button>
            </div>
            
      </Paper>
    </div>
 
    );
}
const Resultado = (props) => {
    const [checkToken, { data }] = useMutation(GetUserByToken, {
        onCompleted: (resp) => props.checkToken(resp.getUserByToken),
        onError: (error) => { localStorage.setItem('token', ""); }
    })
    useEffect(() => {
        if (localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null) {
            checkToken({ variables: { token: localStorage.getItem('token').split(' ')[1] } });
        } else {
            navigate('/login')
        }
    }, [props.checkedToken])
    if (props.checkedToken)
        return <Layout
            withAppBar={true}
            menus={menus}
            withMenu={false}
            paddinTopMenu="5vh"
            colors={colors}
            textTopMenu=""
            logo="https://www.trzcacak.rs/myfile/full/316-3169204_angry-panda-logo.png"
            logoTxt="Panda"
            logoStyle={{ width: '10%', height: '20%' }}
            content={<ResultadoContent {...props} />
            }
        />
    return <Container><CircularProgress disableShrink /></Container>
}
const mapStateToProps = state => ({
    checkedToken: state.auth.checkedToken
})
const mapDispatchToProps = dispatch => bindActionCreators({ checkToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Resultado)

