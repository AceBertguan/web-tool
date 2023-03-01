const homeRouter = [
  { path: "/", redirect: "/goChange" },
  {
    path: "/goChange",
    name: "goChange",
    meta: {
      name: "go结构体转换",
    },
    component: () => import("../../pages/go-change/index.vue"),
  },
];


export default homeRouter;