---
layout: wide
title: Digital Twin | Communication Networks
summary: From a communication engineer's perspective !!, Some thoughts and collection of responses and info from web on Digital Twins
index: 11 
img: /imgs/—Pngtree—isometric 3d render of a_4041514.jpg
--- 

# Understanding Digital Twin
*From a communication engineer's perspective !!, Some thoughts and collection of responses and info from web*

 > From a communication engineer's perspective !!, Some thoughts and collection of responses and info from web

<details>
  <summary>Disclaimer</summary>
  <code>
  The views expressed in this article are purely personal and do not necessarily reflect the views of any organization. - 
  </code>
</details>

> **Digital Twin** is digital replica of real-world (or atleast few parts of it) with geometry, physical parts 
--- 
 
<!-- 
```js  
var colorInput=display(html`<input type="color"  value=${d3.color("steelblue").formatHex()} style="width:30px">`)
// var color=view(Inputs.color({label:"Theme",value:"#00000",format:(x)=>"22",width:30}))
var color=Generators.input(colorInput)
```

```js
var r = document.querySelector(':root');
r.style.setProperty('--theme-foreground', color);

``` -->
<style>

   #sidebar {
    position: sticky;
    /* Set desired width for sidebar */
    width: 250px;
    top:0px;
    /* bottom:50px; */
    left:10%;
    background-color: blue;
    z-index: 100;
    /* Initially hidden */
    display: none;
  }
 
  #hiddenDiv {
    display: none;
  }
</style> 


<div id="sidebar">
DOES THIs work
  <div id="hiddenDiv" style="display: none;">
    This is the hidden content that will be shown on click.
  </div>
</div>

## Background {#background}

*Digital twins (DT)* have emerged as a powerful technology with applications across various industries. Research and development efforts are surging, along with real-world adoption in gaming, manufacturing, and even government initiatives for smart city infrastructure. It has also got attention by the ITU ^[Digital Twin - https://www.itu.int/cities/dt-resource-hub/digitaltwin/ ]; leading to few recommendations (See [ITU-T Y.3090](https://www.itu.int/rec/T-REC-Y.3090)) and focus groups.  
 
One might consider digital twins an advanced evolution of the metaverse concept, which focuses on user interaction within a virtual world. However, digital twins offer a distinct set of capabilities.
 And metaverse itself has been there for few years in the Gaming industry. For e.g. the well-known multiplayer game `PUBG` has a shared virtual world, where multiple players interact in real-time. Recall the `Microsoft Flight Simulator` game, where various landmarks, airports and runway are preloaded and the server provides real-life data and information about flight that are overlayed on the game. These geographical information of locations are typically only the environments and gives a good visual appeal. Where as the simulated flight itself includes various physics an interaction with the console and controls. 

When we advance towards digital twin (DT), the real-world objects (static as well as  moving), environment/topography with some level of precision (position) are synchronically represented and updated in the digital space. This may sound initially as good as live video stream of a location or a factory floor, but it is not. The digital twin is more of data-driven representation of physical entities. These physical entities are represented with good geometric and functional approximation, it may even include other properties like the material, weight and various `states`. 

Take, for example, a sophisticated manufacturing plant (see figure), the DT would encompass every machine, its properties (material, weight), and real-time operational state. Crucially, these digital objects can be interacted with programmatically, allowing for simulations, optimization, and remote control.

<figure class="image">
  <img src="/imgs/—Pngtree—isometric 3d render of a_4041514.jpg" alt="Free Image from pngtree.com">
  <figcaption>Sample rendering of digital representation of factory floor <a href="http://pngtree.com">http://pngtree.com</a></figcaption>
</figure>

---
If we need to scale and DT has to become mainstream by 2030, here are the key aspects to be considered. Following sections are based on my survey on the aspects like [`standards`](#standards-%26-specifications), `physics model`, `requirements on network communications`, `cloud operations` etc., 
 
### DT Flow

<figure class="image">
  <img src="/imgs/dt-flow.png" alt="Typical flow in DT">
  <figcaption>Typical flow in DT </figcaption>
</figure>

---
## Standards & Specifications 

> Are there Industry standards and specifications to create digital twin to store,share and render over multiple devices ? 


Standardized specifications have an important role - representing the Digital Assets (reusability, large scale adoption) , representation of digital-twin with relative positioning of the assets in the digital twin, and continous update of the states of these assets from real-world (through various connectivity network), accessible through various cloud applications to learn, model and validate various aspects mechanical assembly, physics engine and even fluid mechanics simulations.
{#main-container}


### Data formats for 3D models:

- **[JT Open](https://plm.sw.siemens.com/en-US/plm-components/jt/)** (.jt) :  Focuses on interoperability between CAD (Computer-Aided Design) systems for exchanging product data.
- **[STEP](https://www.iso.org/obp/ui/#iso:std:iso:10303:-1:ed-3:v1:en)** (ISO 10303)[STEP AP214] (*.stp, *.step) : - A broader standard for exchanging product data across different engineering disciplines.
- **[glTF](https://www.khronos.org/gltf/)** Khronos Group (.gltf, .glb): A real-time asset format gaining traction for its efficiency and compatibility with various rendering engines.
- **[OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file#Geometric_vertex)** Wavefront OBJ format (.obj) : A simple common format for 3D geometry, but lacks material and texture information.

### Rendering Engines:

To visualize the Digital assets, over various device and client interfaces, there are various industry initiatives.

- *Web technologies (WebGL, WebGPU)*:  Allow embedding interactive 3D content within web browsers for cross-device viewing.
- *Game engines (Unity, Unreal Engine)*: Powerful for creating real-time visualizations and simulations, but require additional effort for deployment beyond desktops/consoles.
- *Cloud-based rendering platforms*: Offer scalable rendering capabilities for complex digital twins, accessible from various devices.

### Standardization efforts:

- **Digital Twin Consortium ([DTC](https://www.digitaltwinconsortium.org/))**: A consortium working on defining reference architectures and vocabularies for digital twins.
- **Open Geospatial Consortium ([OGC](https://www.ogc.org/standards/standards-architecture-diagram/))**: Provides domain-specific guidelines for creating interoperable digital twins of mainly on geospatial info (e.g. Urban, Future Cities DT, Ocean ).

Choosing the right standards and specifications depends on several factors:

- *Complexity of the digital twin*: Simple models might use OBJ, while complex ones might benefit from STEP or glTF.
- *Target platforms*: Web technologies are ideal for web browsers, while game engines cater to desktops and consoles. Cloud rendering offers flexibility.
- *Interoperability needs*: If data exchange with other systems is crucial, JT Open or STEP might be preferred. For e.g. digital assets from multiple public and private repositories[^3drepo]

A successful *multi-device digital twin* project requires a well-defined information model that clearly outlines the data and functionalities required in the digital twin.
- *Performance Optimized 3D models*: Reduce complexity for efficient rendering on various devices.
- *Leverage standardized formats*: Ensure data can be exchanged and visualized across different platforms.

The industry is constantly evolving, so staying updated on emerging standards and tools is essential for creating effective digital twins accessible across multiple devices.

> There isn't a single, unified standard for creating digital twins and rendering them across multiple devices. However, there are several industry practices and specifications that play a crucial role

---
##   Digital Twin: State and Event Propagation  

As mentioned earlier, one of the crucial component of Digital Twin is to continously monitor and reflect the states of various objects, environments from the real-world in the DT. For e.g., in DT of a factory floor, states and process of different machines, position of the AGVs etc., could be key. For an city infrastructure; traffic congestion, movements of vehicles, environmental sensors may be essential. These sensors and devices need to communicate with the DT server to send event-driven or periodic data. In most cases, not all sensors/devices use the same connectivity platform. They may be geographically distributed, or even limited by its capabilities like power, form factor etc. The DT server also need to propage these events/states to the connected clients to facilate rendering.


There are several approaches for propagating events (changes) in a digital twin to client device/platform, depending on the chosen architecture and communication protocols. Here are some common methods:

*1. Publish-Subscribe (Pub/Sub) Messaging:* A central message broker acts as a hub.  The digital twin core (server-side) publishes event messages whenever something changes (e.g., sensor data update, equipment status change). Rendering clients subscribe to specific topics or channels relevant to them. When a new event message is published, the message broker pushes it to all subscribed clients.

*2. Real-time APIs:*  The digital twin core exposes APIs that rendering clients can call to fetch the latest state or specific data points. Clients can continuously poll the APIs at a set interval to check for updates. Alternatively, server-push mechanisms within the API can be implemented where the server pushes updates to subscribed clients when changes occur. This method gives clients more control over data retrieval but requires more development effort.

*3. WebSockets:*  These persistent, two-way communication channels enable real-time data exchange between the server and clients. The digital twin core can initiate a WebSocket connection with clients and then push event messages whenever something changes in the simulation. Clients can also send messages back to the server, enabling interactive features within the digital twin.

*4. Cloud-Based Solutions:*  Some cloud platforms specifically designed for digital twins offer built-in functionalities for event propagation. These platforms handle communication between the server-side logic and rendering clients, often using a combination of Pub/Sub or WebSockets under the hood. This approach simplifies development but might introduce vendor lock-in.

Choosing the right approach depends on factors like:

- *Frequency of updates*: For highly dynamic simulations, Pub/Sub or WebSockets might be better for real-time updates.
- *Data volume*: For large amounts of data, polling APIs might be less efficient compared to Pub/Sub.
- *Client-side development complexity*: Pub/Sub and WebSockets require less client-side coding compared to constantly polling APIs.
- *Scalability*: Pub/Sub and cloud solutions are generally more scalable for handling many clients.
  
Regardless of the chosen method, it's important to ensure *efficient data transmission and minimize latency (delay)* for a smooth user experience in the rendering clients.

> What if two remote users interact with the Digital Twin ?  e.g. Rendering and state synchronisation between two clients and the server

*Synchronizing* two clients and the server in a multi-user digital twin experience is crucial to maintain consistency in the visualized data. For e.g. especially if the two users are in two different wireless environment, cells or even technology. I found these approaches being used in DT industry. 

- *Data Model and Versioning:* A well-defined data model acts as the single source of truth for the digital twin's state. It specifies the data types and structures representing the physical asset.
Versioning mechanisms track changes to the data model. This ensures clients rendering different versions don't display inconsistencies. Updates are typically pushed from the server to clients.
- *Event-Driven Synchronization:*  As discussed previously, event propagation is key. The server broadcasts events (changes) to all connected clients whenever something happens in the digital twin (e.g., sensor data update, user interaction within one client). Clients receive these events and update their local representation of the digital twin accordingly. This ensures all clients reflect the latest state as much as possible.
- *Optimistic Locking (Conflict Resolution)*: In scenarios where multiple clients might try to modify the same data simultaneously (e.g., two users adjusting a virtual valve in the digital twin), optimistic locking can be implemented. Each client holds a version number for the data they're working with. When a client attempts to save changes, the server verifies if the version number matches the current server-side version. If versions differ, a conflict is detected. The server might notify the client of the conflict and ask them to refresh their data or provide mechanisms to merge changes.
- *Client-side Rendering and Reconciliation*: Clients typically handle the rendering of the digital twin based on the data they receive from the server.
To manage potential inconsistencies due to *network latency or processing differences*, reconciliation techniques can be employed.
This might involve the client periodically requesting full state updates from the server to ensure they're aligned with the authoritative source.

**Additional Considerations:**

*Network Latency Management:* Network delays can cause inconsistencies in real-time scenarios. Techniques like client-side prediction and interpolation can be used to smooth out visual updates while waiting for server confirmation. Especially, *5G* networks have capabilities to define expected QoS for specific data pipe, referred to as *Network Slice*. 

*Data Compression*: Depending on the complexity of the digital twin data, compression techniques can be used to reduce network bandwidth usage during synchronization.

By implementing these strategies, one can maintain a consistent and synchronized experience for all clients viewing the digital twin, even when working on *different devices* or with *slight network delays*.

---
## Digital twin : Computation and Why ?
 
> Digital Twin is not just for creating a snapshot of the real-world environment and state of a system, but also *replay*, learning models and validate system physics, simulation of rigid[^rigid] and soft[^soft] body mechanics. Most promising aspiration from a digital twin is to *predict*, *prevent failures* or take necessary actions in the real world through *actuators*. 

 
Modelling and computational work-load in a digital twin can be implemented in a few different places depending on the architecture and complexity of the system. Here are the common scenarios:

- *Server-side Simulation*: The core logic and physics engine reside on the server. Sensor data from the real-world counterpart (physical asset) is streamed to the server. The server-side physics engine simulates the behavior of the physical asset based on the received data and the implemented physical laws. The simulation outputs (e.g., updated sensor values, equipment status) are then sent to the rendering clients for visualization. This approach is advantageous for complex simulations requiring significant computational power or when dealing with sensitive data that cannot be exposed to client-side devices. However, it can introduce latency between real-world changes and their reflection in the visualization.

- *Client-side Simulation with Server-side Synchronization*: Here, a lightweight physics engine might be integrated into the rendering client for real-time responsiveness. The client receives the initial state and data from the server. It then performs its own simulation based on the received data and a simplified physics model. This allows for smoother visualization and user interaction within the client. However, to maintain consistency, the client continuously synchronizes with the server. It sends its simulation updates to the server, and in return, receives corrections or confirmations to align with the authoritative server-side simulation.
This approach offers a balance between responsiveness and accuracy, suitable for less complex simulations or when low latency is critical.

- *Hybrid Approach*: A combination of server-side and client-side simulation can be implemented. The server handles the core simulation logic and complex physics calculations. Clients perform simpler physics tasks or visualizations based on the data received from the server. This approach leverages the strengths of both architectures, allowing for efficient resource utilization and tailored experiences for different clients.

The choice of where to implement physics modelling depends on several factors:

- *Complexity of the physical system*: Highly complex simulations might necessitate server-side processing for better accuracy.
- *Real-time vs. non-real-time needs*: For low-latency, real-time visualization, some client-side prediction or simulation might be necessary.
Computational capabilities of client devices: If clients have varying processing power, a server-centric approach might be preferred.
- *Network bandwidth limitations*: Extensive client-side simulations can lead to high bandwidth usage.
  
### Digital Twin : Simulations & Modelling
 
The specific physics aspects simulated in a digital twin of a machine or environment depend on the complexity and the intended use of the digital twin. Once can create a digital twin that accurately reflects the relevant physics of the machine, environment (for urban Infra) to evaluate valuable insights and predictions about the behavior in the real world. One should be able to predict potential events; based on the training from these data-sets. Develop correlations of wide-spread events of the real-world.
 
Ultimately, the goal is to achieve a balance between accuracy, performance, and a seamless user experience for interacting with the digital twin.

---
## Digital Twin : Network requirements
 
> Cant stop imagining the requirements Digital can impose on wireless networks of the future !! 

Quick glance on the elements of DT that impacts N/W design - bandwidth requirements for sending digital twin assets, rendering and events streaming:

- *Size of Assets:* Complexity of 3D models directly impacts file size. High-fidelity models with intricate details require more bandwidth compared to simpler models. Techniques like level-of-detail (LOD)^[LOD https://www.cgspectrum.com/blog/what-is-level-of-detail-lod-3d-modeling ] can be used to adjust model complexity based on viewing distance, reducing data sent at farther zooms.
  
- *Textures and Materials*: High-resolution textures and complex materials increase file size and bandwidth to transfer. Using texture compression techniques and optimizing material properties for efficient transmission.
  
- *Frequency of Events*: The number of updates sent per unit time significantly affects network bandwidth usage of both sensors as well as at the rendering clients. For highly dynamic simulations with frequent sensor data changes along with  user interactions, bandwidth requirements will be much higher.
  
- *Data Encoding and Compression*: Choosing efficient data formats plays a crucial role. Standardized formats like glTF often incorporate compression mechanisms to reduce file size without sacrificing quality significantly. Additional compression techniques can be applied during transmission depending on the chosen communication protocol (wired, wireless).
  
- *Network Conditions*: Bandwidth availability and latency (delay) on the connection between server and clients impact how much data can be sent effectively. Lower bandwidth or high latency might necessitate reducing data complexity or implementing strategies like data chunking for smoother transmission. 
 
---
# Summary

Every industry is assessing the application and usability of Digital Twin and the essential information needed to accurately represent the real-world scene and metrics. There is a big challenge to provide sufficient *connectivity* to such compute machines, rendering machines and also stream sensing of the environment and states of possible functional metric of a machines or infrastructure.

> *Industries are embracing Digital Twins* - Businesses across various sectors are recognizing the potential of Digital Twins to create virtual representations of physical assets and processes. This allows for better monitoring, analysis, and optimization.

Accurate Representation is Crucial: For a Digital Twin to be truly valuable, it needs accurate and timely data reflecting the real-world scenario. This data includes metrics like sensor readings, equipment states, and environmental conditions.

- *Connectivity is the Bottleneck*: Ensuring sufficient and reliable connectivity to the various components involved is a major hurdle. This includes:
   - *Compute Machines*: Powerful computers are needed to process and analyze the large amounts of data generated by sensors and other sources.
   - *Rendering Machines*: For visualizing the Digital Twin, high-performance rendering machines might be required, especially for complex simulations.
   - *Sensor Networks*: Real-time data streams from sensors monitoring the physical asset or environment are essential.
   - *Infrastructure Monitoring*: Connectivity is also necessary to capture data on the state of the physical infrastructure itself.
  

Therefore, the challenge lies in establishing a robust and scalable network infrastructure that can handle the continuous flow of data between these various elements. This includes addressing issues like:

- *Bandwidth*: The sheer volume of data generated by sensors and other sources can overwhelm traditional network infrastructure.
- *Latency*: Real-time data needs to be transmitted with minimal delay to ensure accurate representation in the Digital Twin.
- *Security*: Ensuring secure data transmission and protecting against cyberattacks is critical.
Overcoming these connectivity challenges is crucial for the successful implementation of Digital Twins and unlocking their full potential for improved efficiency, optimization, and predictive maintenance across industries.




[^rigid]: Rigid Body Mechanics simulation includes the motion (linear, angular) and interaction of solid objects within the machine, forces and torques (including gravity, motor forces) and resulting torques causing rotations. *Object collisions* including aspects like elasticity, friction, and energy transfer during impacts. *Fluid dynamics* for machines involving fluids (e.g., pumps, turbines, hydraulic systems), *computational fluid dynamics (CFD)* movement of fluids considerinig factors like pressure, viscosity, and flow rates and interacting with solid parts, affecting forces and potentially causing vibrations or deformations. *Thermodynamics*, *Temperature distribution*

[^soft]: Simulating flexible components like belts or hoses, soft body physics can be employed.
*Electromagnetism*, electrical components, electromagnetic simulations.



[^1]: My reference.


[^3drepo]: Few known ones - [Sketchfab](https://sketchfab.com/), [GrabCAD](https://grabcad.com/library),[TurboSquid](https://www.turbosquid.com/),[Thingiverse](https://www.thingiverse.com/) are few such repositories.  Some industrial automation software providers offer libraries of pre-built models for specific equipment types (e.g., valves, pumps, robots) used in their platforms. Manufacturing consortia repositories. 


<script>
  function showHiddenDiv(event) {
    // Prevent default behavior for anchor tags (if clicked)
    console.log("Clicked.")
    event.preventDefault();

    const hiddenDiv = document.getElementById("hiddenDiv");
    const sidebar = document.getElementById("sidebar");

    // Get clicked element position relative to the viewport
    const clickedElementRect = event.target.getBoundingClientRect();
console.log("Clicked.",clickedElementRect)
    // Adjust positioning for sidebar to appear next to clicked element
    // sidebar.style.top = clickedElementRect.top +200+ "px";

    // Calculate sidebar left position based on viewport width and sidebar width
    // const viewportWidth = window.innerWidth;
    // const sidebarLeft = viewportWidth - clickedElementRect.right - sidebar.offsetWidth;

    // sidebar.style.left = sidebarLeft + "px";

    // Toggle display of sidebar and hidden div
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
      hiddenDiv.style.display = "block";
    } else {
      sidebar.style.display = "none";
      hiddenDiv.style.display = "none";
    }
  }
  
   document.getElementById("main-container").addEventListener("click", showHiddenDiv);
  
  // Attach the click event listener to the document body
  
</script>

