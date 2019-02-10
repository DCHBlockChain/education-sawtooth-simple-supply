import * as util from '../util/Util'
import {defaultHeaders} from '../util/Util'
import {appendAccessTokenHeader} from '../util/Util'
import {refreshToken} from '../util/Util'


export const login = (payload) =>
    fetch("/api/auth/login",{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload)
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log("Error while registration: " + err);
        return err;
    });

export const validateSession = (self, redirectPath) =>
    fetch("/api/auth/validate",{
        method: 'POST',
        headers: appendAccessTokenHeader()
    }).then((res) => {
        if(res.status===200){
            res.json().then((data)=>{
                console.log('[setCurrentUserData]: ', data);
                self.$store.commit('setCurrentUserData', data);
                if(redirectPath){
                    self.$router.push(redirectPath);
                }
            });
            self.$store.commit('setSessionActive', { flag: true });
            return res;
        }
        else if(res.status===401){
            refreshToken(self, function (flag) {
                if(flag){
                    validateSession(self);
                }
                else {
                    self.$store.commit('setSessionActive', { flag: false });
                    util.invalidateJWTSession(self);
                    return res;
                }
            })
        }
        else{
            util.invalidateJWTSession(self);
            console.log("Error: ", res);
        }
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const validateRoleSession = (self, role="", redirectPath) =>
    fetch(`/api/auth/validate/${role}`,{
        method: 'POST',
        headers: appendAccessTokenHeader()
    }).then((res) => {
        if(res.status===200){
            res.json().then((data)=>{
                console.log('[setCurrentUserData]: ', data);
                self.$store.commit('setCurrentUserData', data);
                if(redirectPath){
                    self.$router.push(redirectPath);
                }
            });
            self.$store.commit('setSessionActive', { flag: true });
            return res;
        }
        else if(res.status===401){
            refreshToken(self, function (flag) {
                if(flag){
                    validateRoleSession(self);
                }
                else {
                    self.$store.commit('setSessionActive', { flag: false });
                    util.invalidateJWTSession(self);
                    return res;
                }
            })
        }
        else{
            console.log("Error: ", res);
            util.invalidateJWTSession(self);
        }
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const isUserLoggedIn = (self) =>
    fetch("/api/auth/validate",{
        method: 'POST',
        headers: appendAccessTokenHeader()
    }).then((res) => {
        if(res.status===401) {
            refreshToken(self, function (flag) {
                if (flag) {
                    isUserLoggedIn(self);
                }
                else {
                    self.$store.commit('setSessionActive', {flag: false});
                    console.log("refreshtoken: ", false);
                    return res;
                }
            })
        }
        else if(res.status===200){
            res.json().then((data)=>{
                console.log('[setCurrentUserData]: ', data);
                self.$store.commit('setCurrentUserData', data);
            });
            self.$store.commit('setSessionActive', { flag: true });
            return res;
        }
        else {
            console.log("Error: ", res);
        }
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const verifyUpdatePasswordToken = (payload) =>
    fetch("/api/auth/verifypasswordchangetoken",{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload)
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const updatePassword = (payload) =>
    fetch("/api/auth/updatepassword",{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload)
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const verifyAccount = (payload) =>
    fetch("/api/auth/verifyaccount",{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload)
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const forgotPassword = (payload) =>
    fetch("/api/auth/forgotpassword",{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload)
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

/*export const logout = (self) =>
    fetch("/api/auth/logout",{
        method: 'POST',
        headers: appendAccessTokenHeader()
    }).then((res) => {
        if(res.status===200){
            self.$store.commit('setSessionActive', { flag: false });
            util.invalidateJWTSession(self);
        }
        else{
            console.log("Error in Logout: ", res);
        }
        return res;
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });*/