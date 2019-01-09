function authentication(req,res,next){
    console.log('authenticating and login...');
    next();
}
module.exports = authentication;