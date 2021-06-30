---
layout: wide
title: Test of observerable module
summary: Test page to validate my observable notebook/modules here
index: 10

--- 
<link crossorigin rel="stylesheet" href="https://unpkg.com/@observablehq/inspector@3.2.2/dist/inspector.css">
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/@observablehq/plot@0.1"></script>

<!--  img: /imgs/<imagefilename.jpg> -->
# What to find here 
 

## Plot

<div style="display:flex">
  <div id="controls">  </div>  
 <div id="layout">   </div>
 <div>
  
<script>
 // var module;
 </script>

<script type="module">
        import { Inspector } from "https://unpkg.com/@observablehq/inspector?module";

    //    import * as Plot from "https://cdn.skypack.dev/@observablehq/plot@0.1";
    //    import * as d3 from "https://cdn.skypack.dev/d3@7";

        import * as units from "https://api.observablehq.com/@wiless/units.js?v=3";
        console.log(units)
 
 var val = Array.from({ length: 100 }, (_, i) => Math.sin(2 * Math.PI * i / 100
        ))
        var options = {
                grid: true, marks: [Plot.line(val, { x: d3.range(100), y: val })]
        }
        var domobj = Plot.plot(options)
       // document.getElementById("layout").appendChild(domobj);
 
       document.getElementById("layout").appendChild(domobj);
 
  window.Inspector=Inspector;
  
   //  domobj=new Inspector.into(document.querySelector("#controls"))
     new Inspector(document.querySelector("#controls")).fulfilled(val)

 
 //    document.getElementById("controls").appendChild(val);

  
</script>
