import { DarukServer, controller, get, DarukContext } from 'daruk';

(async () => {
  const app = DarukServer();

  @controller()
  class Index {
    @get('/')
    public async index(ctx: DarukContext) {
      ctx.body = 'hello world';
    }
  }

  await app.binding();
  app.listen(3000);
})();
