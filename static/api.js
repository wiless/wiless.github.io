"use strict";

let wiless = new API();

function API() {
  let _magicword = "sendil";
  let headers ;
  let apiurl;
  let id_token;
  let funcpaths = new Map();

  (function () {        
    apiurl = "https://wilessapi.appspot.com";
    funcpaths.set("new", { path: "/new", method: "get" })
    .set("system", { path: "/system", method: "get" })
    .set("login", { path: "/login", method: "post" })
    .set("logout", { path: "/logout", method: "get" })
    .set("hexgrid", { path: "/geom/hexgrid", method: "get" })
    .set("google", { path: "/auth/google", method: "post" });

    headers = { 'Authorization': "Bearer " + id_token };
    console.log("Wiless API : "+apiurl+" Instance Created..");
  })();


  this.Ping = () => {
    // console.log("Ping");
    return "ping";
  }

  this.Hello = (name) => {
    // console.log("Hello ", name);
    return "Hello " + name + " " + _magicword;
  }

  this.Token = ()=>{
    return this.id_token;
  }

  this.APIcalls = function (arg, jdata) {

    var val = funcpaths.get(arg);
    // console.log("Val ", val);
    if (arg == "login") {
      return this.CallAPI(val.path, val.method, jdata).then(d => { headers = { 'Authorization': "Bearer " + d.token };this.id_token = d.token;return d.token });
    } else {
      return this.CallAPI(val.path, val.method, jdata);
    }
    
  }

  this.LoginViaGoogle = function (gtoken) {
    var val = funcpaths.get("google");
    var jdata= { "token": gtoken };
     return this.CallAPI(val.path, val.method, jdata).then(d => { headers = { 'Authorization': "Bearer " + d.token };this.id_token = d.token;return d.token });
  }

  this.CallAPI = function (path, method, data) {
    // console.log("calling callapi : ", path);
    if (method == undefined) {
      method = "GET"
    }

    return fetch(apiurl + path, {
      method: method,
      credentials:"include",
      headers: headers,
      body: JSON.stringify(data)
    }).then(function (resp) {
      console.log("fetch : status", resp.status);
      return resp.json();
    }).then(function (rdata) {
      console.log(method, ":", path, '=>', rdata);      
      return rdata;
    });
  }

}

(function () {
  console.log("Wiless API Library Initialized");
})()

