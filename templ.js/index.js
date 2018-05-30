let str = `
<%if(user){%>
    hello user
<%}else{%>
  hello guest
  <%}%>
`
let option ={user:{name:'zfpx'},total:5};
let ejs = require('ejs');
function render(str,options){
  let head = "let tpl = ``;\nwidth (obj){\n tpl+=`";
  str = str.replace(/<%([\s\S]+?)%>/g,function(){
    return "`;"+arguments[1] +"\n;tpl+=`";
  });
  let tail ="}\n return tpl;";
  let html = head +str + tail;
  console.log(html)
  let fn = new Function('obj',html);
  return fn(options);
}
let result = render(str,options);