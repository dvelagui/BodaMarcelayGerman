import{o as s,c as r,a,_ as i,d as c,b as n}from"./index.500f494e.js";import{O as d,I as m,d as u}from"./firebaseConfig.afea2d22.js";const b={class:"agenda"},p=a("img",{src:i,alt:""},null,-1),_={class:"form-body"},f=a("p",{class:"title text-center"},"\xBFASISTIR\xC1S?",-1),v=n('<div class="mb-3"><label for="mail" class="col-form-label">Correo electr\xF3nico:</label><input type="text" class="form-control" id="mail" required></div><div class="mb-3"><label for="nombre" class="col-form-label">Nombre:</label><input type="text" class="form-control" id="nombre" required></div><div class="mb-3"><label for="cedula" class="col-form-label">Numero de Identificaci\xF3n:</label><input type="text" class="form-control" id="cedula" required></div><div class="mb-3"><label for="phone" class="col-form-label">Celular:</label><input type="text" class="form-control" id="phone" required></div><div class="mb-3"><label for="inputState" class="form-label">Plato de preferencia</label><select id="inputState" class="form-select"><option selected>Pescado</option><option>Carne</option><option>Vegetariano</option></select></div><div class="mb-3"><label for="mensaje" class="col-form-label">Mensaje a los Novios:</label><textarea class="form-control" id="mensaje" required></textarea></div><input class="btn btn-secondary" type="submit" value="Confirmar">',7),g=[v],x=a("img",{src:c,alt:""},null,-1),S={__name:"ConfirmacionView",setup(y){const t=e=>{console.log(e.target),console.log(e.target[0].value),d(m(u,"RSVP"),{Cedula:e.target[2].value,Celular:e.target[3].value,Mensaje:e.target[5].value,Nombre:e.target[1].value,Plato:e.target[4].value,email:e.target[0].value})};return(e,l)=>(s(),r("div",b,[p,a("div",_,[f,a("form",{onSubmit:l[0]||(l[0]=o=>t(o))},g,32)]),x]))}};export{S as default};
