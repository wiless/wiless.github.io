$(document)
    .ready(function() {
        // fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'
        });
        $('.overlay').visibility({
            type: 'fixed',
            offset: 10
        });

        // lazy load images
        $('.image').visibility({
            type: 'image',
            transition: 'vertical flip in',
            duration: 500
        });

        // show dropdown on hover
        $('.main.menu  .ui.dropdown').dropdown({
            on: 'hover'
        });


    });


var pvslocation = "";

function ShowLogin() {
    pvslocation = window.location;
    $('.ui.modal').modal('show');
}


function Logout() {
    console.log("Logout Clicked ");

    $.get("/logout", function(data, status) {
        // alert("Logout Success");
        window.location.reload();
    });

    // $('.ui.modal').modal('show');
}

var figure = new MediumButton({
    label: '<i class="fa fa-picture-o"></i>',
    start: '<figure>',
    end: '<figcaption> Fig :  </figcaption></figure> <div class="ui divider"></div>'
});

var tldr = new MediumButton({
    label: '<i class="fa fa-paperclip"></i>',
    start: '<div id="description">',
    end: '</div>'
});

function Delete(ed) {
    el = ed.elements[0];
    // var title = "";
    // var restricted = false;
    var filename = "";

    if (el.dataset.filename == undefined) {
        return;
    } else {
        filename = el.dataset.filename;
    }

    obj = {
        path: filename,
    };
    jsobobj = JSON.stringify(obj);


    url = '/api/deletePost';


    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function statechanged() {
        if (xhr.readyState == xhr.DONE) {
            status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // if (xhr.status == 200) {
                var response = xhr.responseText;
                console.log("Done.. ", response);
                // var xhrHistory = response.getElementsByTagName('xhrHistory').item(0).firstChild.data;
                // resptxt = document.createTextNode(response);
                // var msgbox = document.getElementById("messagebox ");
                // msgbox.lastElementChild.textContent = resptxt;
                // msgbox.hidden = false;

            } else {
                alert("xhr Error Saving " + xhr.readyState + " and the status is " + xhr.status + xhr.responseText);
                var response = xhr.responseText;
                console.log("Done.. ", response);
            }
        }

    };
    xhr.send(jsobobj);
    window.location.href = "/";

}

function publish(obj, createpost) {
    console.log("Sending to server.. filename : ", filename);
    jsobobj = JSON.stringify(obj);

    // var postform = new FormData();
    // postform.append("title ", title);
    // postform.append("content ", content);
    url = '/api/createPost';
    if (!createpost) {
        url = '/api/updatePost';
    }


    // fetch(url, {credentials:"include ", method: "POST ",mode: 'cors',  body: jsobobj,headers:myHeaders}).then(response => console.log(response.text())).then(data => console.log(data));
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function statechanged() {
        if (xhr.readyState == xhr.DONE) {
            status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // if (xhr.status == 200) {
                var response = xhr.responseText;
                console.log("Done.. ", response);
                // var xhrHistory = response.getElementsByTagName('xhrHistory').item(0).firstChild.data;
                // resptxt = document.createTextNode(response);
                // var msgbox = document.getElementById("messagebox ");
                // msgbox.lastElementChild.textContent = resptxt;
                // msgbox.hidden = false;
                window.location.href = "/";

            } else {
                alert("xhr Error Saving " + xhr.readyState + " and the status is " + xhr.status + xhr.responseText);
                var response = xhr.responseText;
                console.log("Done.. ", response);
            }
        }

    };
    xhr.send(jsobobj);
}

var imageids = {};
var counter = 0;
// editor.subscribe('focus',listener);


var toolbaropts = {
    /* These are the default options for the toolbar,
       if nothing is passed this is what is used */
    allowMultiParagraphSelection: true,
    buttons: ['figure', 'warning', 'anchor', 'h2', 'h3', 'quote', 'removeFormat', 'orderedlist', 'unorderedlist', 'tldr'],
    buttonLabels: 'fontawesome',
    diffLeft: 0,
    diffTop: -10,
    firstButtonClass: 'medium-editor-button-first',
    lastButtonClass: 'medium-editor-button-last',
    relativeContainer: null,
    standardizeSelectionStart: false,
    static: true,
    /* options which only apply when static is true */
    align: 'center',
    sticky: true,
    updateOnEmptySelection: false,
    imageDragging: true
};
var opts = {
    toolbar: toolbaropts,
    activeButtonClass: 'medium-editor-button-active',
    buttonLabels: 'fontawesome',
    contentWindow: window,
    delay: 0,
    disableReturn: false,
    disableDoubleReturn: false,
    disableExtraSpaces: false,
    disableEditing: false,
    elementsContainer: false,
    ownerDocument: document,
    spellcheck: true,
    targetBlank: false,
    autoLink: true,
    fileDragging: true,
    imageDragging: true,
    paste: {
        forcePlainText: false,
        cleanPastedHTML: false
    },
    extensions: {
        'figure': figure,
        'tldr': tldr
    }
};

async function processelement(el) {
    uploaded = el.dataset.uploaded;
    if (uploaded == undefined) {
        return;
    }
    if (uploaded == "false") {
        console.log("ID ", element.id, el.dataset.blobid);
        console.log("step 1.1 ");
        el = element;
        url = el.src;
        fname = el.dataset.blobid; //  el.getAttribute("blobid ");

        let response = await fetch(url);
        let result = await response.blob();
        blob = result;
        console.log("Will upload this blob", blob);
        var formData = new FormData();
        formData.append('imagefiles', result, filename = fname);
        console.log("uploading ..starts ");

        let imgresponse = await fetch('/api/uploadImage', {
            method: "POST",
            body: formData,
        })
        let imguploadresponse = await imgresponse.json();

        console.log("Image Link ", imguploadresponse);
        el.src = imguploadresponse.link;
        el.dataset.uploaded = "true";


        console.log("uploading .. ", el.id, "done.. ");
        console.log("step 1.2 ");
    }
}


async function Save(ed) {
    // console.log("params ", editor);
    el = ed.elements[0];
    imgs = el.getElementsByTagName("img");

    for (let index = 0; index < imgs.length; index++) {
        element = imgs[index];
        processed = element.dataset.uploaded;
        console.log(processed);
        await processelement(element);
    }

    console.log("All elements Done ");
    localStorage.setItem("default", editor.getContent());
    var title = "";
    var restricted = false;
    var filename = "";
    if (document.getElementById("title") != null) {
        title = document.getElementById("title").textContent.trim();
        restricted = document.getElementById("restricted").checked;
        filename = document.getElementById("filename").value.trim().toLowerCase();
    }

    var createPost = true;
    if (el.dataset.filename != undefined) {
        // if its Editing ARTICLE
        filename = el.dataset.filename;
        createPost = false;
    }

    obj = {
        title: title,
        content: ed.getContent(),
        path: filename,
        restricted: restricted
    };

    console.log("Found attrib ", el.dataset.filename);
    // el.dataset.filename

    publish(obj, createPost);

}



function manageClipboard(e) {
    //  e.preventDefault();

    var items = e.clipboardData.items;
    console.log("Clipboard Pasted ", items); // will give you the mime types
    if (items[0].kind == "file") {

        var blob = items[0].getAsFile();

        console.log("Blob", blob); // will give you the mime types

        bloburl = URL.createObjectURL(blob);
        blobuid = bloburl.split("/").pop() + ".png";

        imagename = "image" + counter;
        imageids[imagename] = bloburl;
        // Upload(blob,imagename+".png");

        var myobj = event.target;
        im = document.createElement('img');
        im.src = bloburl;
        im.setAttribute("id", imagename);
        im.style.maxWidth = "100%";
        im.style.width = "auto";
        im.dataset.uploaded = false;
        im.dataset.blobid = blobuid;
        console.log(im);
        myobj.parentElement.appendChild(im);
        counter++;
    }
};