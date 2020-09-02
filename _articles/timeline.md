---
layout: wide
permalink: 
title: Story of official 5G
summary: Timeline of the development of official 5G at ITU-R (updated July 2020)
index: 99
---


<style>

/* body
* {
  box-sizing: border-box;
}
*/ 

/* body {
  background-color: #474e5d;
}*/

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  background-color: #474e5d;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.containernew {
  padding: 10px 40px;
  position: relative;
  background-color: inherit; 


  width: 50%;
  
}

/* The circles on the timeline */
.containernew::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.containerleft {
  left: 0;
}

/* Place the container to the right */
.containerright {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.containerleft::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.containerright::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
 .containerright::after {
  left: -26px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  
  /* Full-width containers */
  .containernew {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .containernew::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .containerleft::after, .containerright::after {
  left: 15px;
  }
  
  /* Make all right containers behave like the left ones */
   .containerright {
  left: 0%;
  }
}
</style>

# Story of the Official 5G

*Official 5G* - The technology recognized and recommended by ITU-R to be deployed in IMT spectrum bands, that has been built to meet the requirments of new generation. Once in every 10 years, ITU-R meets to identify new requirements and vision of next generation of IMT technology. IMT-2000, IMT-Advanced (2010), IMT-2020 (2020) and next will be in 2030!.  

Among all the generations of mobile technology, #5G has made lot of momentum and expectations from the technology right from the day when it was chalked out on a whiteboard. The journey of official 5G began in 2014 and completed the vision of IMT and overall objectives of the future development of IMT for 2020 and beyond (see report M.2483) in Sept 2015. This ITU-R recommendation was based on inputs various administrations, standards body and members of ITU. 



## 3GPP 5G initiatives 

3GPP is the only standardization body which had actively started developing specifications in 2015 that can deliver the wish-list of the IMT-2020. 3GPP technologies 2G,3G,4G have been widely adopted by all cellular operators in all countries. 3GPP kick starts its 5G standards development by the landmark RAN 5G workshop -”Start of Something” in Sept 2015 in USA. The workshop summary is available in [2]. More than 550 members participated with 70 presentations !!. Major operators, equipment manufacturers contributed in the workshop. 
Suprisingly no companies or organization from India contributed to this workshop !!

There is one more wirelesss technology that we use in our day-to-day life - WiFi a standard developed by IEEE. WiFi is based on 802.11 series (802.11a/b/g/n/ac) specifications. WiFi technology dont fall under the category of IMT (lack cellular mobility support). IEEE had developed  WiMAX (802.16m) which supported mobility and is also an IMT-Advanced (official 4G) technology. WiMAX lost market adoption and failed to become a global cellular technology.


## Did IEEE develop 5G too ?? 

IEEE 802 standards group formed formed a standing committee IEEE 802 EC 5G / IMT-2020 standing committee to assess (by July 2016)[4]: 

- Costs and benefits of creating an IEEE 5G specification 
- Costs and benefits of providing a proposal for IMT2020 

Finally, IEEE decided NOT to develop and submit a IEEE based 5G candidate technology to ITU-R 
IEEE being such a large member driven body did a good homework before spending time to develop specifications for IMT2020 requirements !!  

<div class="timeline">
  <div class="containernew containerleft">
    <div class="content">
      <h2>2017</h2>
<h3>New 5G requirements at ITU-R</h3>
<p> 
Almost during the finalization (around Mid 2017) of “Evaluation Methdologies report” and “Minimum Performance requirements report”, India submitted a new mandatory “configuration to be simulated” for a rural and also defined a corresponding minimal spectral efficiency requirement. See [Press article - Global body nod to India's LMLC configuration]
      </p>
    </div>
  </div>
  <div class="containernew containerright">
    <div class="content">
      <h2>June 2018 : </h2>
 
 <div class="ui accordion">
  <div class="title active">    <i class="dropdown icon"></i>
    TSDSI
  </div>
  <div class="content active">
      <p class="transition visible" style="display: block !important;">
One of the organizational partner of 3GPP submitted its intention to submit a 3GPP Rel 15 based specifications as another candidate technology for 5G [5]. And also informed that final submission of the entire specification along with self-evaluation report in the required format will be submitted by meeting#32 in Brazil (July 2019)</p>
  </div>
  
  <div class="title active">    <i class="dropdown icon"></i>
    DECT Forum
  </div>
  <div class="content active">
      <p class="transition visible" style="display: block !important;">
Forum of members inside ETSI submitted its intention to submit a candidate technology to ITU-R. [6]. Based on this initial submission, it seemed like DECT forum was  developing a new DECT specifications (non-3GPP) that can meet all the IMT2020/5G requirments of eMBB, URLLC and mMTC. DECT is well known in the fixed cordless phone ecosystem.</p>  
      </div>
    </div>
  </div>
  <div class="containernew containerleft">
    <div class="content">
      <h2>July 2019</h2>
      <p>July 2019 : This was the final meeting of ITU-R where all the proponents were expected to submit the FINAL SUBMISSION of their candidate technology. A surprisingly one more candidate technology was received. </p>
    </div>
  </div>
  <div class="containernew containerleft">
    <div class="content">
      <h2>July 2019</h2>
      <p>Meanwhile, within IEEE 802 AANI SC group, some of the members (like broadcomm, NuFront) continued to assess the capability of  IEEE 802.11ax to meet some of the IMT2020 requirements. These discussions continued in July, Sept and Nov meetings in 2018 to propose 802.11ax as complimentary solution for some of the environment like Indoor Hotspot and Dense Urban. IEEE and 3GPP exchanged LS to participate together for the ITU-R submission. In May 2019, NuFront proposed a  joint candidate technology (IEEE 802.11ax and EUHT) submission to ITU-R.  (See [16])  
      </p>
    </div>
  </div>
  <div class="containernew containerright">
    <div class="content">
      <h2>2019</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="containernew containerleft">
    <div class="content">
      <h2>2011</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="containernew containerright">
    <div class="content">
      <h2>2007</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
</div>



# What do these technology claim?

All the proponents of 5G candidate technolgies are expected to include a self-assessment report of their technology in their final submissions (June 2019) to ITU-R.  

All technology being different, the ITU-R has setup a common methdology [17] on how to evaluate a performance metric, for each performance metric that need to be evaluated using simulation there are configuration paramters like frequency, height of the basestations, transmit power etc.  
All self-evaluation has to strictly follow these methodology in their evaluation. 

In addition to the self-assessment report, ITU-R had invited independent evaluation groups who can contribute to ITU-R by evaluating these submissions and independently re-assessing the technology if they meet the requirements of 5G/IMT-2020 set by ITU-R. Not all the IEGs were expected to evaluate all the candidate 5G technologies.

All the final reports from all the IEGs were expected to be submitted to ITU-R by Feb 2020. The official summary of the conclusions from the reports in Feb 2020 are available here IMT2020/38.

<div class="ui accordion">
  <div class="title active">
    <i class="dropdown icon"></i>
    What is a dog?
  </div>
  <div class="content active">
    <p class="transition visible" style="display: block !important;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
  </div>
</div>


<div class="ui accordion">
  <div class="title active">
    <i class="dropdown icon"></i>
    What is a dog?
  </div>
  <div class="content active">
    <p class="transition visible" style="display: block !important;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    What kinds of dogs are there?
  </div>
  <div class="content">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    How do you acquire a dog?
  </div>
  <div class="content">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </div>
</div>

