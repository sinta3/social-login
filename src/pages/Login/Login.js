import React from 'react'
import Google from '../../components/Google/Google'
import Facebook from '../../components/Facebook/Facebook'
import styled from 'styled-components'

const Div = styled.div`
    margin:auto;
    text-align:center;
`;

const Content = styled.div`
    display:flex;
    width:500px;
    justify-content:space-evenly;
    margin:auto;
`;

function Login() {
    return (
        <Div>
            <div>

            <h3>Login</h3>
            </div>
            
            <Content>

            <Google/>
            <Facebook/>
            </Content>
        </Div>
    )
}

export default Login
