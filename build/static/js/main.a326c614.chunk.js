(this.webpackJsonpconnect4=this.webpackJsonpconnect4||[]).push([[0],{14:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s(3),a=s(5),i=s(4),u=s(1),c=s.n(u),l=s(8),h=s.n(l),o=(s(7),s(0));var d=function(e){var t=document.getElementById(e.number);return"P1"===e.value?t.classList.add("circle1"):"P2"===e.value?t.classList.add("circle2"):null!=t&&(t.classList.remove("circle1"),t.classList.remove("circle2")),Object(o.jsx)("button",{className:"square",children:Object(o.jsx)("span",{id:e.number})})},v=function(e){Object(a.a)(s,e);var t=Object(i.a)(s);function s(e){var n;Object(r.a)(this,s),(n=t.call(this,e)).resetButton=function(){for(var e=Array(n.wd),t=0;t<n.wd;t++)e[t]=Array(n.ht).fill(null);n.setState({squares:e,p1IsNext:!0,gameWon:!1})},n.ht=6,n.wd=7;for(var a=Array(n.wd),i=0;i<n.wd;i++)a[i]=Array(n.ht).fill(null);return n.state={squares:a,p1IsNext:!0,gameWon:!1},n}return Object(n.a)(s,[{key:"calculateWinner",value:function(){return!!(this.horizontalWinner()||this.verticalWinner()||this.diagonalWinner())&&(this.setState({gameWon:!0}),1)}},{key:"horizontalWinner",value:function(){for(var e=0;e<this.ht;e++)for(var t=0;t<this.wd-3;t++){var s=this.state.squares[t][e];if(null!==s&&this.state.squares[t+1][e]===s&&this.state.squares[t+2][e]===s&&this.state.squares[t+3][e]===s)return 1}return!1}},{key:"verticalWinner",value:function(){for(var e=0;e<this.ht-3;e++)for(var t=0;t<this.wd;t++){var s=this.state.squares[t][e];if(null!==s&&this.state.squares[t][e+1]===s&&this.state.squares[t][e+2]===s&&this.state.squares[t][e+3]===s)return 1}return!1}},{key:"diagonalWinner",value:function(){return!(!this.ascendingDiagonalWinner()&&!this.descendingDiagonalWinner())&&1}},{key:"ascendingDiagonalWinner",value:function(){for(var e=0;e<this.ht-3;e++)for(var t=0;t<this.wd-3;t++){var s=this.state.squares[t][e];if(null!==s&&this.state.squares[t+1][e+1]===s&&this.state.squares[t+2][e+2]===s&&this.state.squares[t+3][e+3]===s)return 1}return!1}},{key:"descendingDiagonalWinner",value:function(){for(var e=this.ht-1;e>2;e--)for(var t=0;t<this.wd-3;t++){var s=this.state.squares[t][e];if(null!==s&&this.state.squares[t+1][e-1]===s&&this.state.squares[t+2][e-2]===s&&this.state.squares[t+3][e-3]===s)return 1}return!1}},{key:"renderSquare",value:function(e,t){return Object(o.jsx)(d,{number:6*e+t,value:this.state.squares[e][t]})}},{key:"findLowestSquare",value:function(e){for(var t=-1,s=0;s<this.ht;s++)if(!this.state.squares[e][s])return t=s;return t}},{key:"handleClick",value:function(e){if(!this.state.gameWon){var t=this.state.squares.slice(),s=this.findLowestSquare(e);-1!==s?(t[e][s]=this.state.p1IsNext?"P1":"P2",this.calculateWinner()||this.setState({squares:t,p1IsNext:!this.state.p1IsNext})):alert("Column is full")}}},{key:"renderColumn",value:function(e){var t=this;return Object(o.jsxs)("div",{className:"board-column",onClick:function(){return t.handleClick(e)},children:[this.renderSquare(e,0),this.renderSquare(e,1),this.renderSquare(e,2),this.renderSquare(e,3),this.renderSquare(e,4),this.renderSquare(e,5)]})}},{key:"render",value:function(){var e,t=this;e=this.state.gameWon?(this.state.p1IsNext?"P1":"P2")+" is the winner!":"Next player: "+(this.state.p1IsNext?"P1":"P2");var s=this.state.p1IsNext?"status1":"status2";return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:s,children:e}),Object(o.jsxs)("div",{className:"board",children:[this.renderColumn(0),this.renderColumn(1),this.renderColumn(2),this.renderColumn(3),this.renderColumn(4),this.renderColumn(5),this.renderColumn(6)]}),Object(o.jsxs)("button",{className:"resetbutton",onClick:function(){return t.resetButton()},children:[" ","Reset"," "]})]})}}]),s}(c.a.Component),f=function(e){Object(a.a)(s,e);var t=Object(i.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(v,{})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{}),Object(o.jsx)("ol",{})]})]})}}]),s}(c.a.Component);h.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))},7:function(e,t,s){}},[[14,1,2]]]);
//# sourceMappingURL=main.a326c614.chunk.js.map