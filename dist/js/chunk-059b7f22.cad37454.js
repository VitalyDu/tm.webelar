(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-059b7f22"],{"0521":function(t,e,s){},"1d21":function(t,e,s){"use strict";s.r(e);s("a4d3"),s("e01a");var i=s("7a23"),a={class:"row"},c={key:0,class:"col s6 offset-s3 update-form"},n={class:"chips",ref:"chips"},r={class:"input-field"},d=Object(i["g"])("label",{for:"description"},"Textarea",-1),o={class:"character-counter",style:{float:"right","font-size":"12px"}},p={type:"text",ref:"datepicker"},u={key:0,class:"buttons"},l=Object(i["g"])("button",{class:"btn",type:"submit",style:{"margin-right":"1rem",display:"flex","align-items":"center"}},[Object(i["g"])("i",{class:"large material-icons"},"autorenew"),Object(i["f"])("Обновить")],-1),h={key:1};function b(t,e,s,b,f,k){return Object(i["p"])(),Object(i["d"])("div",a,[k.task?(Object(i["p"])(),Object(i["d"])("div",c,[Object(i["g"])("h1",null,Object(i["y"])(k.task.title),1),Object(i["g"])("form",{onSubmit:e[3]||(e[3]=Object(i["E"])((function(){return k.submitHandler.apply(k,arguments)}),["prevent"]))},[Object(i["g"])("div",n,null,512),Object(i["g"])("div",r,[Object(i["D"])(Object(i["g"])("textarea",{style:{"min-height":"150px"},id:"description","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.description=e}),class:"materialize-textarea","data-length":"120"},null,512),[[i["B"],t.description]]),d,Object(i["g"])("span",o,Object(i["y"])(t.description.length)+"/120",1)]),Object(i["g"])("input",p,null,512),"completed"!==k.task.status?(Object(i["p"])(),Object(i["d"])("div",u,[l,Object(i["g"])("button",{class:"btn blue",type:"button",onClick:e[2]||(e[2]=function(){return k.completeTask.apply(k,arguments)})},"Завершить задание")])):Object(i["e"])("",!0)],32)])):(Object(i["p"])(),Object(i["d"])("p",h,"Task not found"))])}var f={computed:{task:function(){return this.$store.getters.taskById(+this.$route.params.id)}},data:function(){return{description:"",chips:null,date:null}},mounted:function(){this.description=this.task.description,this.chips=M.Chips.init(this.$refs.chips,{placeholder:"Task tags",data:this.task.tags}),this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date(this.task.date),setDefaultDate:!0}),setTimeout((function(){M.updateTextFields()}),0)},methods:{submitHandler:function(){this.$store.dispatch("updateTask",{id:this.task.id,description:this.description,date:this.date.date}),this.$router.push("/list")},completeTask:function(){this.$store.dispatch("completeTask",this.task.id),this.$router.push("/list")}},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()}};s("8386");f.render=b;e["default"]=f},8386:function(t,e,s){"use strict";s("0521")}}]);
//# sourceMappingURL=chunk-059b7f22.cad37454.js.map