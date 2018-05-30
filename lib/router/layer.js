function Layer(path,handler){
  this.path =path;
  this.handler = handler;
}
//判断这一层和传入的路径是否匹配
Layer.prototype.match = function(path){
  return this.path ==path;
}
Layer.prototype.handle_request = function(req,res,next){
 // 在Router中router.dispatch被当做第二个参数传给layer 此时layer中的第二个参数就是handler
//this.handler指的是router.dispatch
  this.handler(req,res,next);//交给route的dispatch 统一处理
}
module.exports = Layer;