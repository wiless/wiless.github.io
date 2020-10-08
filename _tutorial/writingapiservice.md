---
layout: article
title: Few learnings from integrating `ObservableHQ`, My blog and API service
---

# Few learnings Integration of API and ObservableHQ 

> This post is still work-in-progress !!

Lately, I have been tinkering around to convert some of <a href="https://github.com/wiless/cellular">cellular</a> library writen in `#golang` as REST API services. I am not from a web-development profession. I had to depend mainly on `google` for finding learning and understanding the issues thrown by browsers. In this blog, I will try to capture some solutions.


<div class="mermaid">
sequenceDiagram
    autonumber
    participant Client
    participant WebServer
    participant APIserver    
    participant ObserverableHQ
    Note left of WebServer: Hosted on Github Pages, #jekyl semantic-ui 
    Note left of APIserver: Hosted on GAE, #golang
    WebServer->>Client: Load Static Pages    
    Client->>APIserver: Authenticate Me!    
    APIserver->>Client: Returns a `signed Token`
    ObserverableHQ->>Client: Import Module
    Client-->>APIserver: Call Cellular APIs 
    Note over Client,APIserver: Uses `fetch` based calls, using lookup functions in .js hosted along WebServer 
    APIserver-->Client:  return JSON objects
    Client->>ObserverableHQ: Redefine variables on Observerable Notebook cell
    ObserverableHQ->>Client: Renders the plots/diagram (based on d3)    

</div>



