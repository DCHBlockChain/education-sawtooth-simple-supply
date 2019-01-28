import * as util from '../util/Util'
import {defaultHeaders} from '../util/Util'
import {appendAccessTokenHeader} from '../util/Util'
import {refreshToken} from '../util/Util'

export const register = (payload) =>
    fetch("/api/user/create",{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload)
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log("Error while registration: " + err);
        return err;
    });

export const verifySignupToken = (self, payload) =>
    fetch("/api/user/verifysignuptoken",{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload)
    }).then((res) => {
        console.log("verifySignupToken: ", res);
        if(res.status!==200){
            self.$message.warning("This site is currently available to a select few users only.");
            self.$router.push("/");
        }
    }).catch((err) => {
        console.log("Error while registration: " + err);
        return err;
    });

export const uploadProfileImage = (self, payload) =>
    fetch("/api/profile/image",{
        method: 'POST',
        headers: appendAccessTokenHeader(),
        body: JSON.stringify(payload)
    }).then((res) => {
        if(res.status===401){
            refreshToken(self, function (flag) {
                if(flag){
                    uploadProfileImage(self, payload);
                }
                else {
                    console.log("refreshtoken: " , false);
                    self.$message.error("error in refer!!!!");
                    util.invalidateJWTSession(self);
                }
            })
        }
        else if(res.status===200){
            self.$message.info("Upload Image successful");
            let temp_image = {
                'cropped': payload.cropped,
                'image_options': payload.image_options
            };
            if(payload.hasOwnProperty('image')){
                temp_image = {
                    ...temp_image,
                    'image': payload.image
                }
            }
            let temp_profile = {
                ...self.userProfile,
                ...temp_image
            };
            self.$store.commit("setProfileInfo", temp_profile)
        }
        else {
            self.$message.error("Error in Upload Image!!!!");
        }
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const updateUser = (self, payload) =>
    fetch("/api/user/update",{
        method: 'POST',
        headers: appendAccessTokenHeader(),
        body: JSON.stringify(payload)
    }).then((res) => {
        console.log("updateUser: ", res.status);
        if(res.status===401){
            refreshToken(self, function (flag) {
                if(flag){
                    updateUser(self, payload);
                }
                else {
                    self.$store.commit('setSessionActive', { flag: false });
                    console.log("refreshtoken: " , false);
                    self.$message.error("Session Expired. Login Again");
                }
            })
        }
        else if (res.status === 200) {
            res.json().then((data) => {
                console.log("[Profile] updateUser : ", data);
                self.$store.commit('setCurrentUserData', data);
                self.$store.commit('populateUser', {user : data});
            })
        }
        else{
            res.json().then((data)=>{
                self.$store.commit('setCurrentUserData', data);
                self.$store.commit('populateUser', {user : data});
            });
            console.log("[Profile] updateUser Error : ", res);
        }
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const updateUserProfile = (self, payload) =>
    fetch("/api/profile/update",{
        method: 'POST',
        headers: appendAccessTokenHeader(),
        body: JSON.stringify(payload)
    }).then((res) => {
        console.log("updateUserProfile: ", res.status);
        if(res.status===401){
            refreshToken(self, function (flag) {
                if(flag){
                    updateUserProfile(self, payload);
                }
                else {
                    self.$store.commit('setSessionActive', { flag: false });
                    console.log("refreshtoken: " , false);
                    self.$message.error("Session Expired. Login Again");
                }
            })
        }
        else if (res.status === 200) {
            res.json().then((data) => {
                console.log(data);
                self.$store.commit('populateUserProfile', { user: data });
            })
        }
        else {
            res.json().then((data)=>{
                self.$store.commit('populateUserProfile', { user: data });
            });
            console.log("[Profile] updateUserProfile: ", res);
        }
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const showLoggedInUserProfile = (self) =>
    fetch("/api/auth/validate",{
        method: 'POST',
        headers: appendAccessTokenHeader()
    }).then((res) => {
        if(res.status===200){
            res.json().then((data)=>{
                console.log('[setCurrentUserData]: ', data);
                self.$store.commit('setCurrentUserData', data);
                self.$router.push(`/profile/${data.user_id}`);
            });
            self.$store.commit('setSessionActive', { flag: true });
            return res;
        }
        else if(res.status===401){
            refreshToken(self, function (flag) {
                if(flag){
                    showLoggedInUserProfile(self);
                }
                else {
                    self.$store.commit('setSessionActive', { flag: false });
                    self.$message.info("Please Login to view Profile");
                    self.$router.push("/login");
                    console.log("refreshtoken: " , false);
                    return res;
                }
            })
        }
        else{
            return res;
        }
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });

export const findUser = (self, payload) =>
    fetch("/api/user/finduser",{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload)
    }).then((res) => {
        if(res.status===200){
            res.json().then((data)=>{
                console.log("[Profile] findUser : ", data);
                self.$store.commit("populateUser", {user: data});
            });
        }
        else {
            console.log("[Profile] pupulateUserDetails error : ", res);
        }
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });
