import{e as y,r as m,o as i,c,a as e,w,F as _,f as h,p as b,g as v}from"./index.500f494e.js";import{r as p,s as u,u as x,l as S,g as G}from"./firebaseConfig.afea2d22.js";const f=s=>(b("data-v-631c2aef"),s=s(),v(),s),B={class:"container"},I=f(()=>e("section",{class:"hero-banner"},[e("div",{class:"text-center"},[e("p",{class:"fs3-t m-w mt-5"},"Nuestra historia con familia y amigos "),e("iframe",{class:"mt-5",src:"https://www.youtube.com/embed/ayO4A9xOQOo",title:"Boda Marcela y German",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}),e("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/playlist/7h3gRV7wEJFoKSz4GfelGA?utm_source=generator",width:"100%",height:"80",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"}),e("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/playlist/2XScnMouoRDzRm2in7ZP9s?utm_source=generator",width:"100%",height:"80",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"}),e("iframe",{style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/playlist/7w9DGSWdqxNxbytisXgJSs?utm_source=generator",width:"100%",height:"80",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})]),e("div",{class:"row text-center mt-5 mb-5"},[e("a",{href:"https://wa.me/+573213137873?text=Queridos%20Marcela%20y%20German",target:"_blank",class:"btn btn-success"},"Dejanos un Mensaje")]),e("div",{class:"row justify-content-between align-content-center mt-5 mb-5"},[e("div",{class:"text-center"},[e("p",{class:"fs3-t m-w"},"Comparte con nosotros los mejores momentos de esta reuni\xF3n ")])])],-1)),R=f(()=>e("input",{class:"btn btn-secondary",type:"Submit",value:"Subir Imagen a Galeria"},null,-1)),j={class:"galeria"},z=["src"],M={__name:"GaleriasView",setup(s){const r=m([]),n=m();console.log(r.value);const g=o=>{n.value=o.target.files[0];const a={contentType:"image/jpeg"},t=p(u,"galeria-fotos/"+n.value.name);x(t,n.value,a).then(l=>{console.log(l)})},d=()=>{const o=p(u,"/galeria-fotos");S(o).then(a=>{a.items.map(t=>G(p(u,t._location.path)).then(l=>{r.value.includes(l)?console.error():r.value.push(l)}))})};return d(),(o,a)=>(i(),c("div",B,[I,e("form",{onSubmit:a[1]||(a[1]=w(t=>d(),["prevent"])),action:"",enctype:"multipart/form-data"},[e("input",{onChange:a[0]||(a[0]=t=>g(t)),class:"inputfile-1 btn btn-secondary",type:"file",accept:"image/*"},null,32),R],32),e("section",null,[e("div",j,[(i(!0),c(_,null,h(r.value,t=>(i(),c("div",{key:t},[e("img",{class:"img-cover",src:t,alt:""},null,8,z)]))),128))])])]))}},D=y(M,[["__scopeId","data-v-631c2aef"]]);export{D as default};
