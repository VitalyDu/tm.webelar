(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40217b1a"],{"1a33":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a"),c("4de4");var s=c("7a23"),a=Object(s["F"])("data-v-fe2196c6");Object(s["s"])("data-v-fe2196c6");var l=Object(s["g"])("h1",null,"Список задач",-1),n={class:"row"},i={class:"input-field col s6 filter"},b=Object(s["g"])("option",{value:"",disabled:"",selected:""},"Выберите статус",-1),j=Object(s["g"])("option",{value:"active",class:"green-text accent-4-text"},"В работе",-1),O=Object(s["g"])("option",{value:"Просрочено",class:"red-text darken-4-text"},"Просрочено",-1),r=Object(s["g"])("option",{value:"completed",class:"yellow-text accent-4-text"},"Выполнено",-1),u=Object(s["g"])("label",null,"Фильтр",-1),d=Object(s["g"])("hr",null,null,-1),o={key:1,class:"tasks"},f={class:"number"},p={class:"chips",ref:"chips"},g={class:"title"},k={class:"description"},v={class:"bottom"},y={class:"status_date"},h={key:0,class:"green-text accent-4-text task_status"},m=Object(s["g"])("i",{class:"tiny material-icons"},"access_time",-1),x={key:1,class:"yellow-text accent-4-text task_status"},w=Object(s["g"])("i",{class:"tiny material-icons"},"check",-1),_={key:2,class:"red-text darken-4-text task_status"},D=Object(s["g"])("i",{class:"tiny material-icons"},"alarm_off",-1),F={class:"date"},J={class:"task_link"},S=Object(s["f"])(" Открыть "),T={key:2};Object(s["q"])();var $=a((function(t,e,c,$,q,z){var A=Object(s["w"])("router-link");return Object(s["p"])(),Object(s["d"])("div",null,[l,Object(s["g"])("div",n,[Object(s["g"])("div",i,[Object(s["D"])(Object(s["g"])("select",{ref:"select","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.filter=e})},[b,j,O,r],512),[[s["A"],t.filter]]),u])]),t.filter?(Object(s["p"])(),Object(s["d"])("button",{key:0,class:"btn btn-small red",onClick:e[2]||(e[2]=function(e){return t.filter=null})},"Очистить фильтр")):Object(s["e"])("",!0),d,z.tasks.length?(Object(s["p"])(),Object(s["d"])("div",o,[(Object(s["p"])(!0),Object(s["d"])(s["a"],null,Object(s["v"])(z.displayTasks,(function(t,e){return Object(s["p"])(),Object(s["d"])("div",{class:"task z-depth-3",key:t.id},[Object(s["g"])("div",f,[Object(s["f"])(Object(s["y"])(e+1)+Object(s["y"])(t.chips)+" ",1),Object(s["g"])("div",p,null,512)]),Object(s["g"])("div",g,[Object(s["g"])("h2",null,Object(s["y"])(t.title),1)]),Object(s["g"])("div",k,[Object(s["g"])("p",null,Object(s["y"])(t.description),1)]),Object(s["g"])("div",v,[Object(s["g"])("div",y,["active"===t.status?(Object(s["p"])(),Object(s["d"])("span",h,[m,Object(s["f"])(Object(s["y"])(t.status),1)])):"completed"===t.status?(Object(s["p"])(),Object(s["d"])("span",x,[w,Object(s["f"])(Object(s["y"])(t.status),1)])):"Просрочено"===t.status?(Object(s["p"])(),Object(s["d"])("span",_,[D,Object(s["f"])(Object(s["y"])(t.status),1)])):Object(s["e"])("",!0),Object(s["g"])("span",F,Object(s["y"])(new Date(t.date).toLocaleDateString()),1)]),Object(s["g"])("div",J,[Object(s["g"])(A,{tag:"button",class:"btn btn-small",to:"/task/"+t.id},{default:a((function(){return[S]})),_:2},1032,["to"])])])])})),128))])):(Object(s["p"])(),Object(s["d"])("p",T,"No tasks"))])})),q={data:function(){return{filter:null}},computed:{tasks:function(){return this.$store.getters.tasks},displayTasks:function(){var t=this;return this.tasks.filter((function(e){return!t.filter||e.status===t.filter}))}},mounted:function(){M.FormSelect.init(this.$refs.select)}};c("67a5");q.render=$,q.__scopeId="data-v-fe2196c6";e["default"]=q},"620c":function(t,e,c){},"67a5":function(t,e,c){"use strict";c("620c")}}]);
//# sourceMappingURL=chunk-40217b1a.709931b9.js.map