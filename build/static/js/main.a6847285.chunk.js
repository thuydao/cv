(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{3:function(e,a,t){e.exports=t(9)},8:function(e,a,t){},9:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(2),i=t.n(s);t(8);class o extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:null,title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",null,e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(e=>l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className}))))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}class c extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"https://raw.githubusercontent.com/thuydao/cv/master/public/images/profile.png",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}class r extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(e=>l.a.createElement("div",{className:"row item",key:e.YearOfPassing},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(e=>l.a.createElement("div",{className:"row item",key:e.YearOfLeaving},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("div",null,e.Achievements.split("\n").map((e,a)=>l.a.createElement("div",{key:e},e)))))))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(e=>l.a.createElement("li",{key:e.skillname},l.a.createElement("span",{className:"bar-expand "+e.skillname.toLowerCase().replace(" ","")}),l.a.createElement("em",null,e.skillname))))))))}}class m extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some highlight of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(e=>l.a.createElement("div",{className:"columns portfolio-item",key:e.name},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:""+e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:""+e.imgurl,className:"item-img",alt:"Foo eating a sandwich."}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description)))))))))))}}n.Component;class p extends n.Component{render(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to reach out to me for collaboration, work opportunities, or any suggestions through the contact details below. I\u2019m always open to new challenges and ideas!"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email | daoduythuy@gmail.com"),l.a.createElement("h4",null,"Phone | +84375365123"),l.a.createElement("h4",null,"Skype | daoduythuy9690")))))}}class d extends n.Component{render(){let e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(e=>l.a.createElement("li",{key:e.url},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}var u={imagebaseurl:"https://thuydao.github.io/cv",name:"DAO DUY THUY",role:"Mobile Technical Leader",skypeid:"daoduythuy9690",roleDescription:"I focus on delivering strategic solutions and building innovative technology products from business needs to technical deployment. With expertise in both strategy and execution, I guide teams through the product lifecycle, ensuring scalable, impactful solutions.As I grow, I aim to lead more in project management and consulting, aligning business goals with sustainable architectures.I'm always ready to embrace new challenges and continuously evolve with industry trends",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/th\u1ee7y-\u0111\xe0o-3452a840/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/thuydao",className:"fa fa-github"},{name:"skype",url:"skype://daoduythuy9690?chat",className:"fa fa-skype"}],aboutme:"I began working in 2012, taking on various roles across diverse technical platforms.I have experience working on projects in banking, stock trading, e- commerce, social networking, and voice IP.My expertise includes handling logical computations, performance tracing, and optimization.I\u2019m also skilled in communication and team leadership, ensuring a stable and positive environment within my teams.",address:"Ha Noi, Viet Nam",website:"https://thuydao.github.io/cv/",education:[{UniversityName:"Post & Telecommunications Institute of Technology, Viet Nam",specialization:"Computer Science",MonthOfPassing:"Jun",YearOfPassing:"2016",Achievements:"Master"},{UniversityName:"Post & Telecommunications Institute of Technology, Viet Nam",specialization:"Software Technology | Information Technology",MonthOfPassing:"Dec",YearOfPassing:"2012",Achievements:"Engineer"}],work:[{CompanyName:"Freelance",specialization:"Freelance",MonthOfLeaving:"",YearOfLeaving:"Present",Achievements:"- Co-founder, Manager of VNiPass\n- Automation tool, Antidetect browser \n- Optimization consulting for the project ttsopenai.com & doctransgpt.com"},{CompanyName:"SSI Securities Corporation",specialization:"Team Lead",MonthOfLeaving:"2/2021 -",YearOfLeaving:"12/2023",Achievements:"- I am focus on iBoard application\n- I develop product roadmap, product design, technical solution, team management \n- Top Employees of 2021 & 2022"},{CompanyName:"AxleHire",specialization:"Tech team",MonthOfLeaving:"9/2018 -",YearOfLeaving:"12/2021",Achievements:"- AxleHire is logistic startup base on US.\n- Mobile Apps (Flutter). Driver and Outbound\n- Map offline solution, passport scan, box auto detect on conveyor"},{CompanyName:"VTVCab",specialization:"Product Lead",MonthOfLeaving:"5/2017 -",YearOfLeaving:"2/2021",Achievements:"- I am responsible for VTVcab ON, ON Sport, ON Me, VieON. \n- Technology research.\n- Development DRM, integration to Harmonic transcode system"},{CompanyName:"SmartOSC",specialization:"Tech Lead",MonthOfLeaving:"12/2013 -",YearOfLeaving:"5/2017",Achievements:"- Pre-sale.\n- Define Architecture, convention for SmartOSC\u2019s projects.\n- Review code, avoid any risk in all commits of the members and follow convention.\n- Build library (\u2018TDCore\u2019), research new trend technology.\n- Join to dedicated team, project base, product team.\n- Team management"},{CompanyName:"VMODEV",specialization:"Developer",MonthOfLeaving:"1/2012 -",YearOfLeaving:"12/2013",Achievements:"- Development applications chat, voice calls, social networking, and utility applications\u2026\n- The technologies and languages applied for the job: Xmpp, lync, objective \u2013c, html, javascript, phonegap, java \u2026\n- Management and responsible for the progress and quality for team."}],skillsDescription:"Tech Skill",skills:[{skillname:"Objective-C"},{skillname:"Swift"},{skillname:"React Native"},{skillname:"Flutter"},{skillname:"Kotlin"},{skillname:"Java"},{skillname:"NodeJS"},{skillname:"Go"},{skillname:"Python"}],portfolio:[{name:"iBoard",description:"Finance, Stock",imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/cf/8b/75/cf8b753f-32cb-ec95-d74f-8e07d24d61c9/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",link:"https://apps.apple.com/vn/app/ssi-iboard/id1450916391?l=vi"},{name:"AxleHire Drive: Drive for Pay",description:"Logistic",imgurl:"https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/c2/6e/ef/c26eefd1-a473-bea1-0b5b-2ad107d98ad6/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",link:"https://apps.apple.com/us/app/axlehire-drive-drive-for-pay/id1496436156"},{name:"AxleHire Outbound",description:"Logistic",imgurl:"https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/bc/9b/e3/bc9be38a-c2f7-6e73-fbbe-905274c2e622/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",link:"https://apps.apple.com/us/app/axlehire-outbound/id1523276394"},{name:"VieON",description:"Meida",imgurl:"https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/c9/25/ba/c925ba0d-fd9c-041f-8354-35fcce35532a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",link:"https://apps.apple.com/us/app/vieon-xem-phim-show-livetv/id1357819721"},{name:"VTVcab ON",description:"Media",imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/08/fb/2e/08fb2e46-c8b6-6f87-ed40-e692a828f275/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",link:"https://apps.apple.com/vn/app/vtvcab-on/id1068120150"},{name:"ON Sports",description:"Media",imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0e/60/90/0e609058-bb21-e16c-b271-16f2a24aa978/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",link:"https://apps.apple.com/vn/app/on-sports/id1282845933"},{name:"My VNPost",description:"Logistic",imgurl:"https://play-lh.googleusercontent.com/zwGQ_RpbsDv7LpVaMqtKqc26VlXjMEUOe0hgjEthyEzc3sRubE8NZYmEMhm1B4DvtA=w240-h480-rw",link:"https://play.google.com/store/apps/details?id=com.vinatti.vietnampost&hl=en-VN"},{name:"X-POS",description:"Ecommerce",imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3b/79/e1/3b79e175-607f-a2c1-6e91-36be9231cad3/AppIcon1-0-0-85-220-0-0-5-0-2x.png/246x0w.webp",link:"https://apps.apple.com/vn/app/connectpos/id1494831927?l=vi"},{name:"eWAY SmartPOS",description:"Ecommerce",imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Purple49/v4/fd/80/b9/fd80b9ab-e0c4-112c-7a50-3da1cb815ab8/mzl.rfhwryjr.png/246x0w.webp",link:"https://apps.apple.com/au/app/eway-smartpos/id1029746660"},{name:"Brewery Explorer",description:"Social",imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c7/fd/8f/c7fd8f39-b79e-03ae-fb0d-9b61cf0644a0/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/246x0w.webp",link:"https://www.breweryexplorer.us/"},{name:"SimiCart",description:"Ecommerce",imgurl:"https://simicart.com/wp-content/uploads/simicart-logo-2782024.svg",link:"https://simicart.com/"},{name:"Paktor",description:"Dating",imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/95/ea/ea/95eaea92-a5f5-9d17-faee-7c4c80986146/AppIcon-1x_U007emarketing-0-10-0-0-85-220-0.png/246x0w.webp",link:"https://www.gopaktor.com/#/home"}],testimonials:[{description:"-",name:"NaN"}]};class h extends n.Component{render(){return l.a.createElement("div",{className:"App"},l.a.createElement(o,{resumeData:u}),l.a.createElement(c,{resumeData:u}),l.a.createElement(r,{resumeData:u}),l.a.createElement(m,{resumeData:u}),l.a.createElement(p,{resumeData:u}),l.a.createElement(d,{resumeData:u}))}}var g=h;const v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}i.a.render(l.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/cv",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/cv/service-worker.js";v?(!function(e){fetch(e).then(a=>{404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):E(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):E(e)})}}()}},[[3,1,2]]]);
//# sourceMappingURL=main.a6847285.chunk.js.map