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
    .set("gcr", { path: "/gcr", method: "get" })
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

  this.Logout= ()=> { 
this.id_token=""; 
this.APIcalls("logout");
}
  this.Token = ()=>{
    return this.id_token;
  }

  this.APIcalls = function (arg, jdata) {
if (arg=="logout") {
id_token="";
this.id_token="";
headers = { 'Authorization': "Bearer " + id_token };
}
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
    console.log("header is ",headers);
  headers={ 'Authorization': "Bearer " + wiless.Token() };
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
  
   var el = document.getElementById("btnsignin");
  
      if (el!=null){        
        if (el.nodeName=="BUTTON"){          
        el.hidden=false;
        }
      }  
      
    var    el2 = document.getElementById("btnsignout");
  console.log("Hiding buttons" , el,el2);
      if (el2!=null){        
        if (el2.nodeName=="BUTTON"){          
        el2.hidden=true;
        }
      }  
        
  console.log("Wiless API Library Initialized");
})()


// Google API 
var userprofile;
var googleauth;

 function signIn() {
      //{prompt:"select_account"}
     var gauth = gapi.auth2.getAuthInstance();
     gauth.signIn().then(guser => onSignIn(guser));   
    
    }

 function initgapi() {
   
      
   
      console.log("Loaded Google Platform Library");
      gapi.load('auth2', function () {
        /* Ready. Make a call to gapi.auth2.init or some other API */        
        var param = { client_id: '565126014426-fis7623ann950k0i711upje0o5kt3qhp.apps.googleusercontent.com' };
        googleauth = gapi.auth2.init(param);
        googleauth.then(
          d => {
       
            console.log("Google Auth is ready")
            //signIn();
          }, e => console.log("Error ", e)
        );

      });
    }
    
function initBackend(token){
  
// Do things if user is logged in.. on client side..
  wiless.id_token=token;
  wiless.headers={ 'Authorization': "Bearer " + token };
}

function setProfilePic(elid){
   
     el = document.getElementById(elid);
      if (el!=null){        
        if (el.nodeName=="IMG"){          
      el.setAttribute("src", userprofile.getImageUrl());
        }
      }   
}

    function onSignIn(googleUser) {
      
//       <button class="ui item button" id="btnsignin" onclick="signIn()">Sign In</button>
//       <button class="ui item button" id="btnsignout" onclick="signOut()">Sign Out</button> 
      
        el = document.getElementById("btnsignin");
      if (el!=null){        
        if (el.nodeName=="BUTTON"){          
        el.hidden=true;
        }
      }  
      
      var el = document.getElementById("btnsignout");
      if (el!=null){        
        if (el.nodeName=="BUTTON"){          
        el.hidden=false;
        }
      }  
        
      userprofile = googleUser.getBasicProfile();
      // The ID token you need to pass to your backend:      
      // The ID token you need to pass to your backend:
      console.log('ID: ' + userprofile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + userprofile.getName());
      console.log('Image URL: ' + userprofile.getImageUrl());
      console.log('Email: ' + userprofile.getEmail()); // This is null if the 'email' scope is not present.
      
      var token=googleauth.currentUser.get().getAuthResponse().id_token;
      initBackend(token);
      
      // var opts = { "token": gtoken };
//       wiless.LoginViaGoogle(gtoken).then(
//         console.log("Google Signed In")
//       );
//       wiless.APIcalls("gcr"); 
//     TestSLSservice("/);
      
    }

 function signOut() {
       var auth2 = gapi.auth2.getAuthInstance();       
        auth2.signOut().then(function () {
          var el = document.getElementById("btnsignin");
      if (el!=null){        
        if (el.nodeName=="BUTTON"){          
        el.hidden=false;
        }
      }  
      
      var el = document.getElementById("btnsignout");
      if (el!=null){        
        if (el.nodeName=="BUTTON"){          
        el.hidden=true;
        }
      }  
        
          
          
//             document.getElementById("googlebtn").hidden = false;
//             document.getElementById("signout").hidden = true;
            wiless.Logout();
//             fetch("/logout").then().then();
            console.log('User signed out.');
        });
   

      //wiless.APIcalls("logout").then(console.log("Logged out Wiless API"));
    }
