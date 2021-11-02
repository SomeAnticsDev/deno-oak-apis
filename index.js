import {Application, Router} from 'https://deno.land/x/oak@v9.0.1/mod.ts';

const router = new Router();
const app = new Application();

router.get('/', (ctx) => {
	ctx.response.body = '<h1>Hello with HTML!</h1>';
	ctx.response.headers.set('Content-Type', 'text/html');
});

router.get('/about', (ctx) => {
	ctx.response.body = '<h1>All About Oak</h1>';
	ctx.response.headers.set('Content-Type', 'text/html');
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => {
	console.log('Server running on port 8080');
});

app.listen({
	port: 8080
});