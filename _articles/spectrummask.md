---
layout: wide
title: Understanding IMT Spectrum Mask
summary: Article on understanding of IMT Spectrum mask used for sharing studies
index: 10 
<!-- img: /imgs/<imagefilename.jpg> -->
--- 
    
# Spectrum Mask

<div id="observablehq-viewof-txpower-cbf3a84d"></div>
<div id="observablehq-viewof-fcMHz-cbf3a84d"></div>
<div id="observablehq-viewof-BWMHz-cbf3a84d"></div>
<div id="observablehq-totalsuppression-cbf3a84d"></div>
<div id="observablehq-viewof-rxoffaxisfactor-cbf3a84d"></div>
<div id="observablehq-viewof-couplingMargin-cbf3a84d"></div>
<div id="observablehq-emissionmask-cbf3a84d"></div>
<div id="observablehq-fpl_distkm-cbf3a84d"></div>
<div id="observablehq-p452_distkm-cbf3a84d"></div>
<div id="observablehq-viewof-showNoise-cbf3a84d"></div>
<div id="observablehq-plotMask-cbf3a84d"></div>
<p>Credit: <a href="https://observablehq.com/@wiless/imt-station-emission-pattern">IMT Station Emission Pattern by ssk</a></p>

<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@wiless/imt-station-emission-pattern.js?v=3";
new Runtime().module(define, name => {
  if (name === "viewof txpower") return new Inspector(document.querySelector("#observablehq-viewof-txpower-cbf3a84d"));
  if (name === "viewof fcMHz") return new Inspector(document.querySelector("#observablehq-viewof-fcMHz-cbf3a84d"));
  if (name === "viewof BWMHz") return new Inspector(document.querySelector("#observablehq-viewof-BWMHz-cbf3a84d"));
  if (name === "totalsuppression") return new Inspector(document.querySelector("#observablehq-totalsuppression-cbf3a84d"));
  if (name === "viewof rxoffaxisfactor") return new Inspector(document.querySelector("#observablehq-viewof-rxoffaxisfactor-cbf3a84d"));
  if (name === "viewof couplingMargin") return new Inspector(document.querySelector("#observablehq-viewof-couplingMargin-cbf3a84d"));
  if (name === "emissionmask") return new Inspector(document.querySelector("#observablehq-emissionmask-cbf3a84d"));
  if (name === "fpl_distkm") return new Inspector(document.querySelector("#observablehq-fpl_distkm-cbf3a84d"));
  if (name === "p452_distkm") return new Inspector(document.querySelector("#observablehq-p452_distkm-cbf3a84d"));
  if (name === "viewof showNoise") return new Inspector(document.querySelector("#observablehq-viewof-showNoise-cbf3a84d"));
  if (name === "plotMask") return new Inspector(document.querySelector("#observablehq-plotMask-cbf3a84d"));
  return ["txpowerpsd","aclr1","aclr2","updateDistance","couplingMargin","txpower"].includes(name);
});
</script>
