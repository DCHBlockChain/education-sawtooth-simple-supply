export function invalidateJWTSession(self) {
    console.log("invalidateJWTSession");
    localStorage.removeItem('doctorchain');
    self.$store.commit('setSessionActive', { flag: false });
    self.$store.commit('setCurrentUserData', {});
    self.$router.push("/login");
}

export let defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const appendAccessTokenHeader = (()=> {
    if(localStorage.hasOwnProperty('doctorchain')){
        let data = JSON.parse(localStorage.getItem('doctorchain'));
        console.log('data:' , data);
        defaultHeaders = {
            ...defaultHeaders,
            'Authorization': "Bearer " + data.access_token
        };
    }
    console.log('[appendAccessTokenHeader] defaultHeaders: ', defaultHeaders);
    return defaultHeaders
});

const appendRefreshTokenHeader = (()=> {
    if(localStorage.hasOwnProperty('doctorchain')){
        let data = JSON.parse(localStorage.getItem('doctorchain'));
        defaultHeaders = {
            ...defaultHeaders,
            'Authorization': "Bearer " + data.refresh_token
        };
    }
    console.log('[appendRefreshTokenHeader] defaultHeaders: ', defaultHeaders);
    return defaultHeaders
});

export const refreshToken = (self, callback) =>
    fetch("/api/auth/refresh",{
        method: 'POST',
        headers: appendRefreshTokenHeader()
    }).then((res) => {
        console.log("Access Token Expired. Acquiring new access token with refresh token");
        if(res.status===200){
            res.json().then((token_data)=>{
                console.log('before localStorage: ', JSON.parse(localStorage.getItem('doctorchain')));
                console.log('token_data : ', token_data);
                let token = JSON.parse(localStorage.getItem('doctorchain'));
                token = {
                    ...token,
                    'access_token': token_data.access_token,
                    'refresh_token': token_data.refresh_token
                };
                localStorage.setItem('doctorchain', JSON.stringify(token));
                console.log('after localStorage: ', JSON.parse(localStorage.getItem('doctorchain')));
                callback(true);
            });
        }
        else {
            self.$store.commit('setSessionActive', { flag: false });
            callback(false);
        }
    }).catch((err) => {
        console.log("Error while accessing new access token with refresh token: " + err);
        return err;
    });