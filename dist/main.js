"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_setupt_1 = require("./common/config/swagger.setupt");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await (0, swagger_setupt_1.setupSwagger)(app);
    await app.listen(process.env.PORT ?? 5910);
    console.log(`http://localhost:5910/umidjon-swag`);
}
bootstrap();
//# sourceMappingURL=main.js.map