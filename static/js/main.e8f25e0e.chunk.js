(this.webpackJsonptodosaucepersist=this.webpackJsonptodosaucepersist||[]).push([[0],{109:function(n,e,t){},112:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(16),o=t.n(i),c=t(4),u=t(5);function l(){var n=Object(c.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  nav {\n    margin: 0px 10px;\n    ul {\n      display: flex;\n      flex-direction: column;\n      li {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        background: white;\n        min-width: 300px;\n        min-height: 40px;\n        max-width: 400px;\n        padding: 10px 20px;\n        border-radius: 6px;\n        margin: 3px 0px;\n        line-height: 20px;\n        font-family: "sans-serif";\n        font-size: 12px;\n        span {\n          max-width: 80%;\n        }\n        img {\n          width: 22px;\n          cursor: pointer;\n        }\n      }\n    }\n  }\n']);return l=function(){return n},n}var d=u.a.div(l());function p(){var n=Object(c.a)(["\n  margin: 20px 10px;\n\n  width: 300px;\n  & div {\n    max-width: 0px;\n    width: 100%;\n    background: #075454;\n    height: 3px;\n    transition: all 0.5s;\n    position: relative;\n    left: 50%;\n  }\n  & input:focus + div {\n    max-width: 300px;\n    left: 0%;\n  }\n"]);return p=function(){return n},n}function f(){var n=Object(c.a)(["\n  padding: 10px 20px;\n  margin-right: 10px;\n  width: 100%;\n  &:focus {\n    outline: none;\n  }\n"]);return f=function(){return n},n}var s=u.a.input(f()),m=u.a.label(p());function x(n){var e=n.forwardRef;return a.a.createElement(m,null,a.a.createElement(s,{type:"text",ref:e}),a.a.createElement("div",null))}function v(){var n=Object(c.a)(["\n  padding: 10px 20px;\n  background: white;\n  border-radius: 5px;\n  transition: all 0.2s;\n  cursor: pointer;\n  margin-bottom: 10px;\n  &:hover {\n    background: #a71e4d;\n    color: white;\n    font-weight: 600;\n  }\n"]);return v=function(){return n},n}var b,g=u.a.button(v()),h=t(23),O=t(17),E=t(24),j={todo:[]},w=Object(O.createActions)({addTodo:["text"],removeTodo:["id"]}),y=w.Types,k=w.Creators,R=(b={},Object(h.a)(b,y.ADD_TODO,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0,t=Object(E.a)(n,(function(n){n.todo.push(e.text)}));return t})),Object(h.a)(b,y.REMOVE_TODO,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0,t=Object(E.a)(n,(function(n){n.todo=n.todo.filter((function(n,t){return t!==e.id}))}));return t})),b),T=Object(O.createReducer)(j,R),D=t(6);function A(n){var e=n.paramRef,t=Object(D.b)();return a.a.createElement(g,{onClick:function(){""!==e.current.value&&(t(k.addTodo(e.current.value)),e.current.value="")}},"Adicionar")}var C=t(41),J=t.n(C);function M(){var n=Object(D.c)((function(n){return n.todo})),e=Object(D.b)(),t=Object(r.useRef)(null);return a.a.createElement(d,null,a.a.createElement(x,{forwardRef:t}),a.a.createElement(A,{paramRef:t}),a.a.createElement("nav",null,a.a.createElement("ul",null,n.map((function(n,t){return a.a.createElement("li",{key:t},a.a.createElement("span",null,n)," ",a.a.createElement("img",{src:J.a,alt:"delete",onClick:function(){e(k.removeTodo(t))}}))})))))}t(109);var _=t(3),z=t(26),B=t(42),I={key:"root",storage:t.n(B).a},S=Object(z.a)(I,T),V=Object(_.c)(S),q=Object(z.b)(V),F=t(43);var G=function(){return a.a.createElement(D.a,{store:V},a.a.createElement(F.a,{loading:null,persistor:q},a.a.createElement(M,null)))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root"))},41:function(n,e,t){n.exports=t.p+"static/media/delete.ed18eff6.svg"},44:function(n,e,t){n.exports=t(112)}},[[44,1,2]]]);
//# sourceMappingURL=main.e8f25e0e.chunk.js.map