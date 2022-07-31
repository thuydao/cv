(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(6),o=t.n(i),r=(t(12),t(1)),c=t(2),s=t(4),m=t(3),p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:null,title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",null,e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),u=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),t}(n.Component),d=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return l.a.createElement("div",{className:"row item",key:e.YearOfPassing},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))})))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e){return l.a.createElement("div",{className:"row item",key:e.YearOfLeaving},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("div",null,e.Achievements.split("\n").map((function(e,a){return l.a.createElement("div",{key:e},e)})))))})))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map((function(e){return l.a.createElement("li",{key:e.skillname},l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase().replace(" ",""))}),l.a.createElement("em",null,e.skillname))})))))))}}]),t}(n.Component),h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some highlight of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map((function(e){return l.a.createElement("div",{className:"columns portfolio-item",key:e.name},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"".concat(e.link),target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:"Foo eating a sandwich."}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))}))))))}}]),t}(n.Component),v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))}))))," ")," ")," "),"  ")}}]),t}(n.Component),f=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email | daoduythuy@gmail.com"),l.a.createElement("h4",null,"Phone | +84375365123"),l.a.createElement("h4",null,"Skype | daoduythuy9690")))))}}]),t}(n.Component),g=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.url},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),E={imagebaseurl:"https://thuydao.github.io/cv",name:"\u0110\xc0O DUY TH\u1ee6Y",role:"Mobile Technical Leader",skypeid:"daoduythuy9690",roleDescription:"I'm Mobile Manager and Product owner. I develop a product vision, strategy, roadmap and lifecycle management framework. And collaborate with stakeholders to define, design, and manage ongoing maintenance and improvement of product features. Coach and give guidance for the development of the team members. I always willing to learn and be to new challenges in the future.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/th\u1ee7y-\u0111\xe0o-3452a840/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/thuydao",className:"fa fa-github"},{name:"skype",url:"skype://daoduythuy9690?chat",className:"fa fa-skype"}],aboutme:"I started working in early 2012. I can work well with mobile native and hybrid (React native + Flutter). I have exp about finance, stock, e-commerce, social networking, xmpp, pjsip, socket, chart, media... I have exp for manage the project risks & conflicts that can affect the team's goals. Manage and resolve complex team members relations issues. And identify team core values, evaluate and orient the team progress.",address:"Ha Noi, Viet Nam",website:"https://github.com/thuydao",education:[{UniversityName:"Post & Telecommunications Institute of Technology, Viet Nam",specialization:"Computer Science",MonthOfPassing:"Jun",YearOfPassing:"2016",Achievements:"Master"},{UniversityName:"Post & Telecommunications Institute of Technology, Viet Nam",specialization:"Software Technology | Information Technology",MonthOfPassing:"Dec",YearOfPassing:"2012",Achievements:"Engineer"}],work:[{CompanyName:"SSI",specialization:"Mobile Manager",MonthOfLeaving:"-",YearOfLeaving:"Present",Achievements:"- SSI Securities Corporation.\n- I am focus on Iboard application\n- I develop product roadmap, product design, technical solution \n- Team management \n- Top 5 employees (2021)"},{CompanyName:"AxleHire",specialization:"Tech team",MonthOfLeaving:"Jan",YearOfLeaving:"2020",Achievements:"- AxleHire is logistic startup base on US.\n- Driver App (Flutter)\n- Outbound App (Flutter)\n- Map offline solution, passport scan, box auto detect on conveyor"},{CompanyName:"VTVCab",specialization:"Product Owner & Mobile Manager",MonthOfLeaving:"Oct",YearOfLeaving:"2019",Achievements:"- Technology research \n- Development VTVcab ON, ON Sport, ON Me, VieON. \n- Development DRM, integration to Harmonic transcode system. \n- Management ONSport team"},{CompanyName:"SmartOSC",specialization:"Mobile Manager",MonthOfLeaving:"May",YearOfLeaving:"2017",Achievements:"- Pre-sale.\n- Define Architecture, convention for SmartOSC\u2019s projects.\n- Review code, avoid any risk in all commits of the members and follow convention.\n- Build library (\u2018TDCore\u2019), research new trend technology.\n- Join to dedicated team, project base, product team.\n- Resource management"},{CompanyName:"QSoft VietNam",specialization:"Mobile Tech Leader",MonthOfLeaving:"Feb",YearOfLeaving:"2015",Achievements:"- Research new technology (Swift, RAD, game \u2026).\n- Support other ios developer in problem solving and bug fixing.\n- Incharge of solving difficult technical problems.\n- Successfully applied 3rd parties library/frame work to qsoft project such as easy tableView, cache resource webview, the google directions  \u2026\n- Sale support : aswer technical question, prepare technical proposal, estimate project effort."},{CompanyName:"VMODEV",specialization:"Developer",MonthOfLeaving:"Dec",YearOfLeaving:"2013",Achievements:"- Development applications chat, voice calls, social networking, and utility applications\u2026\n- The technologies and languages applied for the job: Xmpp, lync, objective \u2013c, html, javascript, phonegap, java \u2026\n- Management and responsible for the progress and quality for team."}],skillsDescription:"Skills list",skills:[{skillname:"Objective-C"},{skillname:"Swift"},{skillname:"React Native"},{skillname:"Flutter"},{skillname:"Kotlin"},{skillname:"Java"},{skillname:"NodeJS"},{skillname:"Go"},{skillname:"Python"}],portfolio:[{name:"iBoard",description:"Finance, Stock",imgurl:"https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/cf/8b/75/cf8b753f-32cb-ec95-d74f-8e07d24d61c9/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",link:"https://apps.apple.com/vn/app/ssi-iboard/id1450916391?l=vi"},{name:"AxleHire Drive: Drive for Pay",description:"Logistic",imgurl:"https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/c2/6e/ef/c26eefd1-a473-bea1-0b5b-2ad107d98ad6/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",link:"https://apps.apple.com/us/app/axlehire-drive-drive-for-pay/id1496436156"},{name:"AxleHire Outbound",description:"Logistic",imgurl:"https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/bc/9b/e3/bc9be38a-c2f7-6e73-fbbe-905274c2e622/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",link:"https://apps.apple.com/us/app/axlehire-outbound/id1523276394"},{name:"VieON",description:"Meida",imgurl:"https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/c9/25/ba/c925ba0d-fd9c-041f-8354-35fcce35532a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",link:"https://apps.apple.com/us/app/vieon-xem-phim-show-livetv/id1357819721"},{name:"VTVcab ON",description:"Media",imgurl:"images/portfolio/cabon.png",link:"https://apps.apple.com/vn/app/vtvcab-on/id1068120150"},{name:"ON Sports",description:"Media",imgurl:"images/portfolio/onsport.png",link:"https://apps.apple.com/vn/app/on-sports/id1282845933"},{name:"My VNPost",description:"Logistic",imgurl:"images/portfolio/vnpost.png",link:"https://play.google.com/store/apps/details?id=vn.vnpost.myvnpost&hl=en"},{name:"X-POS",description:"Ecommerce",imgurl:"images/portfolio/xpos.jpg",link:"https://apps.apple.com/us/app/x-pos/id893838651"},{name:"eWAY SmartPOS",description:"Ecommerce",imgurl:"images/portfolio/eway.png",link:"https://apps.apple.com/au/app/eway-smartpos/id1029746660"},{name:"PopBook",description:"Ecommerce",imgurl:"images/portfolio/popbook.png",link:"https://apps.apple.com/gb/app/pop-book-photobook-cutest/id946922333"},{name:"Brewery Explorer",description:"Social",imgurl:"images/portfolio/Brewery.jpg",link:"https://apps.apple.com/us/app/brewery-explorer/id943707682"},{name:"SimiCart",description:"Ecommerce",imgurl:"images/portfolio/SimiCart.jpg",link:"https://apps.apple.com/us/app/simi-superior/id1045850464"},{name:"Paktor",description:"Dating",imgurl:"images/portfolio/paktor.jpg",link:"https://apps.apple.com/us/app/paktor-dating-match-and-meet-singles-to-mingle/id654972611"},{name:"Tehuan",description:"Social",imgurl:"images/portfolio/tehuan.jpg",link:"https://play.google.com/store/apps/details?id=vn.vnpost.myvnpost&hl=en"}],testimonials:[{description:"-",name:"NaN"}]},b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:E}),l.a.createElement(u,{resumeData:E}),l.a.createElement(d,{resumeData:E}),l.a.createElement(h,{resumeData:E}),l.a.createElement(v,{resumeData:E}),l.a.createElement(f,{resumeData:E}),l.a.createElement(g,{resumeData:E}))}}]),t}(n.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/cv",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/cv","/service-worker.js");k?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):N(e)}))}}()},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.637a16bc.chunk.js.map