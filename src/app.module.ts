import { Module, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PokemonMiddleware } from "./middleware/pokemon.middleware";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PokemonMiddleware).forRoutes("pokemon");
  }
}
