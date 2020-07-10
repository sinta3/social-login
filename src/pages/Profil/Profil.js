import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
    width:500px;
    margin:auto;
    text-align:center;
`;
function Profil() {
    let users = localStorage.getItem('user')
    let user = JSON.parse(users);
    console.log(user);
    return (
        <Div>
            <h3>Hi {user.name}! </h3>
            <img  src={user.avatar} alt="ava"/>
            <h3>{user.email}</h3> 
        </Div>
    )
}

export default Profil
