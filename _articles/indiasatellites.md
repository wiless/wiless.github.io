---
layout: wide
title: Satellites in use notified by India (March '21)
img: /imgs/isro.jpg
summary: Visualization of Indian GSO and nGSO satellites notifified to ITU-R till now.
index: 5

---

## Background 


## Space Service 


## Satellite Orbit and Frequency 


## Status 

<div id="observablehq-satelliteview-be1cfb5f" style="height: max-content;"></div>
<div id="observablehq-ngsoview-be1cfb5f"></div>

<script type="module">
  import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
  import define from "https://api.observablehq.com/@wiless/spectrum-plots.js?v=3";
  new Runtime().module(define, name => {
    if (name === "satelliteview") return new Inspector(document.querySelector("#observablehq-satelliteview-be1cfb5f"));
    if (name === "ngsoview") return new Inspector(document.querySelector("#observablehq-ngsoview-be1cfb5f"));
  });
</script>
