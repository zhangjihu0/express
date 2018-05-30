const Route = require('./route');
const Layer = require('./layer.js');
const methods = require('methods');
const url = require('url');
const slice = Array.prototype.slice;
const slice = Array.prototype.slice;
function Router(){
  this.stack =[];
}
//创建一个Route实例,向当前路由系统中添加一个层
Router.prototype.route = function(path){
  let route = new Route(path);
  let layer = new layer(path,route.dispatch.bind(route));//循环匹配方法名
  layer.route = route;
  this.stack.push(layer);
  return route;
}
methods.forEach(function(method){
  Router.prototype[method] = function(path){
    let route = this.route(path);//是在往router中添加一层
    route[method].apply(route,slice.call(arguments,1))//向route里添加一层；
    return this;
  }
})

Router.prototype.handler = function(req,res,out){
  let idx = 0,self = this;
  let {pathname} = url.parse(req.url,true);
  function next(){//当next 走完了，走out 
    let layer = this.stack[idx++];
    if(layer.match(pathname)&&layer.route&&route.handle_method(req.method.toLowerCase())){
      layer.handle_request(req,res,next); //匹配上了调用函数
    }else{
      next();
    }
  }//handle
  next();
}
module.exports = Router;
