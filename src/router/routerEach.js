import router from "./router";

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = "时光机 - 时光带走的，我帮你留下";
    }
    next();
});
