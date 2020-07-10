import React,{useState} from 'react';
import {GoogleLogin} from 'react-google-login';
import {useHistory} from 'react-router-dom';


function Google() {
    const history = useHistory();
    const [user,setUser] = useState({
        name:'',
        email:'',
        avatar:'',
    });

    const responseGoogle = (response) => {
        if (response !== null) {
            setUser({
                ...user,
                name:response.profileObj.name,
                email:response.profileObj.email,
                avatar:response.profileObj.imageUrl,
            })
            
            history.push('/Profil')
        }
    };

    

        localStorage.setItem('user',JSON.stringify(user))
        console.log(user)
       
    
    return (
        <GoogleLogin
            clientId="513739602459-0b5brb8u02ajmg8tpst88u60rn15gohq.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default Google
