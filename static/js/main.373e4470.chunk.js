(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39337940-7876-4585-892f-858a4e8a1c44/dd5sol0-059c4769-4ab8-48d9-9067-351cbd40f50f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzkzMzc5NDAtNzg3Ni00NTg1LTg5MmYtODU4YTRlOGExYzQ0XC9kZDVzb2wwLTA1OWM0NzY5LTRhYjgtNDhkOS05MDY3LTM1MWNiZDQwZjUwZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.0gkfoALDqGc3RsAFcpf_orkRZkVNNw4tEwVisnSNUH8"},{"id":2,"image":"https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png"},{"id":3,"image":"https://upload.wikimedia.org/wikipedia/en/a/a5/Lois_Griffin.png"},{"id":4,"image":"https://upload.wikimedia.org/wikipedia/en/c/c7/Meg_Griffin.png"},{"id":5,"image":"https://upload.wikimedia.org/wikipedia/en/f/fe/Glenn_Quagmire.png"},{"id":6,"image":"https://upload.wikimedia.org/wikipedia/en/1/12/Brian_Griffin.png"},{"id":7,"image":"https://upload.wikimedia.org/wikipedia/en/0/02/Stewie_Griffin.png"},{"id":8,"image":"https://upload.wikimedia.org/wikipedia/en/d/df/Chris_Griffin.png"},{"id":9,"image":"https://vignette.wikia.nocookie.net/familyguy/images/d/d1/Herbert.JPG/revision/latest?cb=20060929205023"},{"id":10,"image":"https://upload.wikimedia.org/wikipedia/en/a/a3/Adam_West_on_Family_Guy.png"},{"id":11,"image":"https://upload.wikimedia.org/wikipedia/en/e/e4/Cleveland_Brown.png"},{"id":12,"image":"https://vignette.wikia.nocookie.net/cleveland/images/0/04/Loretta_1.jpg/revision/latest?cb=20091109150758"}]')},,,,function(e,i,t){e.exports=t(18)},,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var a=t(0),n=t.n(a),c=t(2),r=t.n(c),s=t(6),o=t(3),d=t(4),l=t(8),m=t(7);t(14);t(15);var p=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.children))};t(16);var g=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{src:e.image,alt:e.id,onClick:function(){return e.handleIncrement(e.id)}})))},h=t(5),u=function(e){Object(l.a)(t,e);var i=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=i.call.apply(i,[this].concat(n))).state={friends:h,score:0,highScore:0,click:[],message:"click to play"},e.handleIncrement=function(i){e.state.click.includes(i)?(e.setState({message:"try again"}),e.state.highScore<e.state.score&&e.setState({highScore:e.state.score}),e.setState({click:[]}),e.setState({score:0})):(e.setState({message:"awesome"}),e.setState({score:e.state.score+1}),e.setState({click:[].concat(Object(s.a)(e.state.click),[i])})),e.state.friends.sort((function(){return Math.random()-.5}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar fixed-top"},n.a.createElement("h2",null,"score=",this.state.score),n.a.createElement("h4",null," Family Guy Clicky game"),n.a.createElement("h2",null,"highScore=",this.state.highScore)),n.a.createElement("div",{className:"jumbotron mb-0 mt-5 bg-secondary text-light"},n.a.createElement("h1",{className:"text-center"}," ",this.state.message)),n.a.createElement(p,null,this.state.friends.map((function(i){return n.a.createElement(g,{id:i.id,key:i.id,image:i.image,handleIncrement:e.handleIncrement})}))))}}]),t}(a.Component);t(17);r.a.render(n.a.createElement(u,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.373e4470.chunk.js.map