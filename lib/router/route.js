const Layer = require('./layer.js');
function Route(path){
  this.path = path;
  this.stack =[];
  //表示此路由中有此方法的处理函数methods
  this.methods = {};
}
Route.prototype.handle_method = function(method){
  method = method.toLowerCase();
  return this.methods[method];
}
methods.forEach(function(method){
  Router.prototype[method] = function(path){
    let handlers = slice.call(arguments);
    layer.methods[method] = true;
    for(let i=0;i<handlers.length;i++){
      let layer = new Layer('/',handlers[i]);//Route执行当前层
      layer.method = method;
      this.stack.push(layer);
    }
    return this;
  }
})
Route.prototype.dispatch = function(req,res,out){//循环匹配Route中的每一层
 //TODO
 let idx = 0;self =this;
 function next(){//执行当前路由中的下一个函数
  if(idx>=self.stack.length){
    out()//out即是route的next方法
  }
  let layer = self.stack[idx++];
  if(layer.method == req.method.toLowerCase()){//匹配方法名
    layer.handle_request(req,res,next);
  }else{
    next();
  }
 }
 next()
}
module.exports = Route;