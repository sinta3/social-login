// import React, {useState, useEffect} from 'react'
// import { FacebookProvider, Login} from 'react-facebook';
// import { useHistory } from 'react-router-dom';

// function Facebook() {
//     const history = useHistory();
//     const [facebook, setFacebook] = useState({})
//     function handleResponse(data){
//         setFacebook(data);
//     }

//     function handleError(error){
//         this.setState({error});

//     }

//     useEffect(() => {
//         if (facebook.profie !== undefined) {
//             // history.push('/Profil')
//             console.log(facebook.profile)
//         }
//     }, [facebook,history])
//     return (
//         <FacebookProvider appId="987592321673770">
//             <Login 
//             scope="email"
//             onCompleted={handleResponse}
//             onError={handleError}>
//                 {({loading,handleClick,error,data}) => {
//                     <button onClick={handleClick()}>
//                         Login Via Facebook
//                         {loading && <span> Loading.. </span>}
//                     </button>
//                 }}
//             </Login>

//         </FacebookProvider>
//     )
// }

// export default Facebook
import React, { useState } from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    margin:0;
    padding:0;
    margin-left:50px;
    width: 100px;
    background: #98DFEA;
    border:none;
    box-shadow:1px 2px #26A7BA;
`;

function Facebook() {
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [user,setUser] = useState({
        name:'',
        email:'',
        avatar:'',
    })
    const handleResponse = (data) => {
        setUser({
            ...user,
            name:data.profile.name,
            email:data.profile.email,
            avatar:data.profile.picture.data.url,
        })

        history.push('/Profil')
    };


    const handleError = (error) => {
        console.log(errors);

        setErrors({ error });
    };

    localStorage.setItem('user',JSON.stringify(user))
    console.log(user)
   
    return (
        <FacebookProvider appId="987592321673770">
            <Login
                scope="email"
                onCompleted={handleResponse}
                onError={handleError}
            >
                {({ loading, handleClick, error, data }) => (
                    <Button onClick={handleClick}>
                        {loading ? (
                            <span>Loading...</span>
                        ) : (
                            "Login via Facebook"
                        )}
                    </Button>
                )}
            </Login>
        </FacebookProvider>
    );
}
export default Facebook;