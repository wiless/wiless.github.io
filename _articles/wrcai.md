---
layout: wide
title: WRC Agenda Items
summary: Various WRC-23 Agenda Items and spectrum bands
index: 10

--- 

<link crossorigin rel="stylesheet" href="https://unpkg.com/@observablehq/inspector@3.2.2/dist/inspector.css">
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/@observablehq/plot@0.1"></script>

<!--  img: /imgs/<imagefilename.jpg> -->
# WRC-23 Agenda Items
 

## Chapter 4


<button id="runme"> Click Me </button>
<div style="display:block"> 
  <div id="controls">  </div>  
 <div id="layout">   </div>

  <div id="aifilter" ></div>
  <div id="AIplots" ></div>
    <div id="frange"></div>
 </div> 
<script type="module" defer async>
 
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
 //      import * as Plot from "https://cdn.skypack.dev/@observablehq/plot@0.1";
    //    import * as d3 from "https://cdn.skypack.dev/d3@7";
        import * as units from "https://api.observablehq.com/@wiless/units.js?v=3";
//        console.log(units) 
//   ![image](https://user-images.githubusercontent.com/4603031/178706087-cef07944-2cc0-474e-bf77-d27a9023e48e.png) 

/* var val = Array.from({ length: 100 }, (_, i) => Math.sin(2 * Math.PI * i / 100
        ))
        var options = {
                grid: true, marks: [Plot.line(val, { x: d3.range(100), y: val })]
        }
        var domobj = Plot.plot(options)*/
 
       // document.getElementById("layout").appendChild(domobj);
  //     document.getElementById("layout").appendChild(domobj);
 

  
   //  domobj=new Inspector.into(document.querySelector("#controls"))
  //   new Inspector(document.querySelector("#controls")).fulfilled(val)

import define from "https://api.observablehq.com/d/789a850521ffd0e0@4799.js?v=3";
new Runtime().module(define, name => {
  if (name === "WRCAIplot") return new Inspector(document.querySelector("#AIplots"));
  if (name === "viewof fillByColumn") return new Inspector(document.querySelector("#aifilter"));
  if (name === "viewof bandrangeview") return new Inspector(document.querySelector("#frange"));
  //return ["Nsets","bandrange","WRCAIplot"].includes(name);
});

 
 //   document.getElementById("controls").appendChild(val);

  
</script>
