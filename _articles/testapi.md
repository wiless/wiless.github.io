---
layout: wide
title: Test of observerable module
summary: Test page to validate my observable notebook/modules here
index: 10 
<!-- img: /imgs/<imagefilename.jpg> -->
--- 
    
# 
  
<script type="module">

        import * as Plot from "https://cdn.skypack.dev/@observablehq/plot@0.1";
        import * as d3 from "https://cdn.skypack.dev/d3@7";

        import * as units from "https://api.observablehq.com/@wiless/units.js?v=3";
        console.log(units)
        var val = Array.from({ length: 100 }, (_, i) => Math.sin(2 * Math.PI * i / 100
        ))
        var options = {
                grid: true, marks: [Plot.line(val, { x: d3.range(100), y: val })]
        }
        var domobj = Plot.plot(options)
        document.getElementByID("layout").appendChild(domobj);

</script>

  <div id="layout">
  
  
  </div>
