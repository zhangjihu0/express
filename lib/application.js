const Router = require('./router');
const methods = require('methods');
const slice = Array.prototype.slice;
function Application(){
  // this._router = new Router();
  // this._router = [];
};
Application.prototype.lazyrouter = function(){
  if(!this._router){
    this._router =new Router();
  }
}
methods.forEach(function(mathod){
  Application.prototype[method] = function(path){
    this.lazyrouter();
    //这样写支持多个处理函数
    this_router[method].apply(this._router,slice.call(arguments))
    return this;
  }
})
Application.prototype.get = function(path,handler){
  
  this._router.get(path,handler);//调用router上的get
}
Application.prototype.listen = function(){
  let server = http.createServer(function(req,res){
    function done(){//如果没有任何路由规则匹配的话走此函数
      res.end(`Cannot ${req.method} ${req.url}`)
    }
    //如果路由系统无法处理，也就是没有一条路由规则请求匹配是会把请求交给done
    this._router.handler(req,res,done);//done传参给Router中的out
    // let {pathname} = url.parse(req.url,true);
    // for(let i=1;i<this._router.length;i++){
    //   let { path,method,handler } = this._router[i];
    //   if(pathname ==path&&method == req.method.toLowerCase()){
    //     return handler(req,res);
    //   }
    // }
    // this._router[0].handler(req,res);
  });
  server.listen.apply(server,arguments);
}
module.exports = Application;