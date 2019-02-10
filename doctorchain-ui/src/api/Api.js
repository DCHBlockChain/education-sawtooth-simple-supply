import * as util from '../util/Util'
import {defaultHeaders} from '../util/Util'
import {appendAccessTokenHeader} from '../util/Util'
import {refreshToken} from '../util/Util'


export const addDna　 = (dna) =>
    fetch("/api/adddna",{
        method: 'POST',
        headers:{
            ...defaultHeaders
        },
        body: JSON.stringify(dna)
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log("Error while registration: " + err);
        return err;
    });

export const fetchDnaBank = (payload) =>
    fetch("/api/dna/finddnas",{
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(payload)
    }).then((res) => {
        return res;
    }).catch((err) => {
        console.log("Error: " + err);
        return err;
    });
