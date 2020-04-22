(this.webpackJsonptodosaucepersist=this.webpackJsonptodosaucepersist||[]).push([[0],{130:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(17),i=t.n(o),c=t(3),l=t(4);function u(){var n=Object(c.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  nav {\n    margin: 0px 10px;\n    ul {\n      display: flex;\n      flex-direction: column;\n      li {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        background: white;\n        min-width: 300px;\n        min-height: 40px;\n        max-width: 400px;\n        padding: 10px 20px;\n        border-radius: 6px;\n        margin: 3px 0px;\n        line-height: 20px;\n        font-family: "sans-serif";\n        font-size: 12px;\n        span {\n          max-width: 80%;\n        }\n        img {\n          width: 25px;\n          cursor: pointer;\n        }\n      }\n    }\n  }\n']);return u=function(){return n},n}var d=l.b.div(u());function p(){var n=Object(c.a)(["\n  margin: 20px 10px;\n\n  width: 300px;\n  & div {\n    max-width: 0px;\n    width: 100%;\n    background: #a71e4d;\n    height: 3px;\n    transition: all 0.5s;\n    position: relative;\n    left: 50%;\n    top: -2px;\n  }\n  & input:focus + div {\n    max-width: 300px;\n    left: 0%;\n  }\n"]);return p=function(){return n},n}function s(){var n=Object(c.a)(["\n  padding: 10px 20px;\n  margin-right: 10px;\n  width: 100%;\n  color: white;\n  background: transparent;\n  border-bottom: 1px solid white;\n  &:focus {\n    border-bottom: 0;\n    outline: none;\n  }\n"]);return s=function(){return n},n}var f=l.b.input(s()),b=l.b.label(p());function m(n){var e=n.forwardRef;return a.a.createElement(b,null,a.a.createElement(f,{type:"text",ref:e}),a.a.createElement("div",null))}function x(){var n=Object(c.a)(["\n  padding: 10px 20px;\n  background: white;\n  border-radius: 5px;\n  transition: all 0.2s;\n  cursor: pointer;\n  margin-bottom: 10px;\n  &:hover {\n    background: #a71e4d;\n    color: white;\n    font-weight: 600;\n  }\n"]);return x=function(){return n},n}var v,g=l.b.button(x()),h=t(25),O=t(18),j=t(26),E={todo:[]},w=Object(O.createActions)({addTodo:["text"],removeTodo:["id"]}),y=w.Types,k=w.Creators,R=(v={},Object(h.a)(v,y.ADD_TODO,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0,t=Object(j.a)(n,(function(n){n.todo.push(e.text)}));return t})),Object(h.a)(v,y.REMOVE_TODO,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0,t=Object(j.a)(n,(function(n){n.todo=n.todo.filter((function(n,t){return t!==e.id}))}));return t})),v),T=Object(O.createReducer)(E,R),D=t(6);function A(n){var e=n.paramRef,t=Object(D.b)();return a.a.createElement(g,{onClick:function(){""!==e.current.value&&(t(k.addTodo(e.current.value)),e.current.value="")}},"Adicionar")}var C=t(48),z=t.n(C);function J(){var n=Object(D.c)((function(n){return n.todo})),e=Object(D.b)(),t=Object(r.useRef)(null);return a.a.createElement(d,null,a.a.createElement(m,{forwardRef:t}),a.a.createElement(A,{paramRef:t}),a.a.createElement("nav",null,a.a.createElement("ul",null,n.map((function(n,t){return a.a.createElement("li",{key:t},a.a.createElement("span",null,n)," ",a.a.createElement("img",{src:z.a,alt:"delete",onClick:function(){e(k.removeTodo(t))}}))})))))}t(115),t(127);var M=t(5),_=t(28),B=t(49),I={key:"root",storage:t.n(B).a},S=M.c.apply(void 0,[]),V=Object(_.a)(I,T),q=Object(M.d)(V,S),F=Object(_.b)(q),G=t(50);var H=function(){return a.a.createElement(D.a,{store:q},a.a.createElement(G.a,{loading:null,persistor:F},a.a.createElement(J,null)))};function K(){var n=Object(c.a)(["\n\n*,\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  list-style: none;\n  outline: none;\n  \n}\n\nbody,html,#root {\n  background: #9d60b8;\n  height:100%;\n}\n\n\n"]);return K=function(){return n},n}var L=Object(l.a)(K());i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(H,null),a.a.createElement(L,null)),document.getElementById("root"))},48:function(n,e,t){n.exports=t.p+"static/media/delete.ed18eff6.svg"},51:function(n,e,t){n.exports=t(130)}},[[51,1,2]]]);
//# sourceMappingURL=main.ca8c820d.chunk.js.map