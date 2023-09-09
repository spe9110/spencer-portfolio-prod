const mm=gsap.matchMedia();mm.add("(min-width:900px)",()=>{var r;gsap.registerPlugin(ScrollTrigger);let t=gsap.timeline({scrollTrigger:{trigger:".hero",start:"top 90%",end:"bottom"}});t.from(".hero",{duration:0,overflowX:"hidden"}).from(".navbar, .logo, .contact",{duration:1,opacity:0,y:"-100%",stagger:.5}).from(".name-hero",{duration:1.5,opacity:0,x:"-30%",delay:.3,stagger:.5}).from(".job, .hr",{duration:1,y:"100%",opacity:0,delay:.4,stagger:.5}).from(".description",{duration:1.5,opacity:0,x:"-30%",delay:.5,stagger:.5}).from(".button-contact",{duration:.8,opacity:0,y:"80%",delay:.6,stagger:.5}).from(".photos-profil",{duration:1.8,opacity:0,x:"15%",delay:.8,stagger:.5}).from(".social-media",{duration:1.5,opacity:0,delay:.9,stagger:.5}),gsap.timeline().from(".photo-auto-slider",{duration:2,opacity:0,x:"-4%",scrollTrigger:{trigger:".photo-auto-slider",start:"top 80%",end:"top 30%",scrub:1}}).from(".about-content",{duration:2,opacity:0,x:"4%",delay:.1,scrollTrigger:{trigger:".about-content",start:"top 80%",end:"top 10%",scrub:1}}).from("#service-one",{duration:1.5,opacity:0,x:"-30%",scrollTrigger:{trigger:"#service-one",start:"top 80%",end:"top 30%",scrub:1}}).from("#service-two",{duration:1.5,opacity:0,x:"-30%",scrollTrigger:{trigger:"#service-two",start:"top 80%",end:"top 30%",scrub:1}}).from("#service-three",{duration:1.5,opacity:0,x:"-30%",scrollTrigger:{trigger:"#service-three",start:"top 80%",end:"top 30%",scrub:1}}).from("#service-four",{duration:1.5,opacity:0,x:"30%",scrollTrigger:{trigger:"#service-four",start:"top 80%",end:"top 10%",scrub:1}}).from("#service-five",{duration:1.5,opacity:0,x:"30%",scrollTrigger:{trigger:"#service-five",start:"top 80%",end:"top 10%",scrub:1}}).from("#service-six",{duration:1.5,opacity:0,x:"30%",scrollTrigger:{trigger:"#service-six",start:"top 80%",end:"top 10%",scrub:1}}).from(".about-statistic",{duration:1.5,opacity:0,y:"30%",scrollTrigger:{trigger:".about-statistic",start:"top 80%",end:"top 30%",scrub:1}}),gsap.from("#video-one",{duration:2,opacity:0,scrollTrigger:{trigger:"#video-one",start:"top 80%",end:"top 30%"}}),gsap.from("#video-two",{duration:2,opacity:0,delay:1,scrollTrigger:{trigger:"#video-two",start:"top 80%",end:"top 30%"}}),gsap.from("#video-three",{duration:2,opacity:0,delay:2,scrollTrigger:{trigger:"#video-three",start:"top 80%",end:"top 30%"}}),gsap.from(".getintouch-image",{duration:2.5,opacity:0,x:"-15%",scrollTrigger:{trigger:".getintouch-image",start:"top 80%",end:"top 30%",scrub:1}}),gsap.from(".getintouch-content",{duration:2.5,opacity:0,x:"15%",scrollTrigger:{trigger:".getintouch-content",start:"top 80%",end:"top 20%",scrub:1}})}),mm.add("(max-width:768px)",()=>{gsap.registerPlugin(ScrollToPlugin);let r=gsap.timeline({scrollTrigger:{trigger:".hero",start:"top 70%",end:"top 10%"}});r.from(".info-profil",{duration:2,opacity:0,x:"-100%",stagger:.5}).from(".photos-profil",{duration:2,opacity:0,x:"100%",delay:1,stagger:.5}).from(".social-media",{duration:2,opacity:0,delay:1.2,stagger:.5}).from(".about-content",{duration:2.2,opacity:0,x:"-100%",stagger:1}).from(".photo-auto-slider",{duration:2,opacity:0,x:100,delay:1,stagger:1})});