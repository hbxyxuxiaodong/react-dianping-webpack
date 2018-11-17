var koa = require('koa');
var app = new koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

// var router = require('koa-route');

// var koabo = require('koa-body');
// var koabody = new koabo();


// router.get('/', function * (next){
//     this.body = 'hello koa !'
// });
// router.get('/api', function * (next){
//     this.body = 'test data'
// });
// router.get('/api/1', function * (next){
//     this.body = 'test data'
// });
// router.get('/api/2', function * (next){
//     this.body = {
//         a:1,
//         b:'123'
//     }
// });
// router.post('/api/post', koabody, function * (next){
//     console.log(this.request.body)
//     this.body = JSON.stringify(this.request.body)
// });
// app.use(router.routes())
//    .use(router.allowedMethods());
router.get('/', async (ctx, next) => {
    ctx.response.body = 'hello koa';
});
router.get('/api/1', async (ctx,next) => {
    ctx.response.body =  'test data'
});
router.get('/api/2', async (ctx,next) => {
    ctx.response.body =   {
                a:1,
                b:'123'
            }
});
router.post('/api/post', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.response.body = JSON.stringify(ctx.request.body)
    
});
app.use(router.routes());
app.use(bodyParser());
app.listen(3000);

console.log('Koa listening on port 3000');
