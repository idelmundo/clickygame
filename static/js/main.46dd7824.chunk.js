(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://upload.wikimedia.org/wikipedia/en/a/a3/Adam_West_on_Family_Guy.png"},{"id":2,"image":"https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png"},{"id":3,"image":"https://upload.wikimedia.org/wikipedia/en/a/a5/Lois_Griffin.png"},{"id":4,"image":"https://upload.wikimedia.org/wikipedia/en/c/c7/Meg_Griffin.png"},{"id":5,"image":"https://upload.wikimedia.org/wikipedia/en/f/fe/Glenn_Quagmire.png"},{"id":6,"image":"https://upload.wikimedia.org/wikipedia/en/1/12/Brian_Griffin.png"},{"id":7,"image":"https://upload.wikimedia.org/wikipedia/en/0/02/Stewie_Griffin.png"},{"id":8,"image":"https://upload.wikimedia.org/wikipedia/en/d/df/Chris_Griffin.png"},{"id":9,"image":"https://vignette.wikia.nocookie.net/familyguy/images/d/d1/Herbert.JPG/revision/latest?cb=20060929205023"},{"id":10,"image":"https://upload.wikimedia.org/wikipedia/en/a/a3/Adam_West_on_Family_Guy.png"},{"id":11,"image":"https://upload.wikimedia.org/wikipedia/en/e/e4/Cleveland_Brown.png"},{"id":12,"image":"https://vignette.wikia.nocookie.net/cleveland/images/0/04/Loretta_1.jpg/revision/latest?cb=20091109150758"}]')},,,,,,,function(e,i,t){e.exports=t(18)},,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var a=t(0),n=t.n(a),r=t(3),c=t.n(r),s=t(4),o=t(5),l=t(7),d=t(6);t(13);t(14);var m=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.children,e.children))},p=(t(15),t(1));var g=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.id,src:e.image,onClick:e.handleIncrement})))};t(16);var u=function(e){Object(l.a)(t,e);var i=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))).state={friends:p,score:0,highScore:0,click:[],message:"click to play"},e.handleIncrement=function(i){e.state.click.includes(i)?(e.setState({message:"try again"}),e.state.highScore<e.state.score&&e.setState({highScore:e.state.score}),e.setState({click:[]}),e.setState({highScore:0})):(e.setState({message:"awesome"}),e.setState({score:e.state.score+=1}),e.setState({click:[e.state.click,i]})),e.state.friends.sort((function(){return Math.random()-.5}))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar fixed-top"},n.a.createElement("h2",null,"score=",this.state.score),n.a.createElement("h4",null," Family Guy Clicky game"),n.a.createElement("h2",null,"highScore=",this.state.highScore)),n.a.createElement("div",{className:"jumbotron mb-0 mt-5 bg-secondary text-light"},n.a.createElement("h1",{className:"text-center"}," ",this.state.message)),n.a.createElement(m,null,this.state.friends.map((function(i){return n.a.createElement(g,{id:i.id,image:i.image,handleIncrement:e.handleIncrement})}))))}}]),t}(a.Component);t(17);c.a.render(n.a.createElement(u,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.46dd7824.chunk.js.map