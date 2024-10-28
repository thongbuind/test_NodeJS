import algorithmRouter from "./algorithmRouter.js";

export default function route(app) {
    app.use('/', algorithmRouter);

}
