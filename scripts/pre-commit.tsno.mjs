#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// ../../Program Files/nvm/v16.14.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "../../Program Files/nvm/v16.14.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file://D:\\Program Files\\nvm\\v16.14.0\\node_modules\\tsno\\dist\\client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await $`pnpm spellcheck`.catch((out) => {
      console.log(out);
      throw new Error(out.stdout);
    });
    await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch((out) => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vUHJvZ3JhbSBGaWxlcy9udm0vdjE2LjE0LjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovL0Q6XFxcXFByb2dyYW0gRmlsZXNcXFxcbnZtXFxcXHYxNi4xNC4wXFxcXG5vZGVfbW9kdWxlc1xcXFx0c25vXFxcXGRpc3RcXFxcY2xpZW50LmpzXCIpO1xuaW1wb3J0IHtcbiAgY29sb3JzXG59IGZyb20gXCIuL2NodW5rLUZIRFhYT0tZLmpzXCI7XG5cblxuLy8gc3JjL2NsaWVudC50c1xudmFyIGZldGNoID0gKHVybCwgaW5pdCkgPT4gaW1wb3J0KFwiLi9zcmMtNFE3UTY3QzMuanNcIikudGhlbigocmVzKSA9PiByZXMuZGVmYXVsdCh1cmwsIGluaXQpKTtcbnZhciBheGlvcyA9IChjb25maWcpID0+IGltcG9ydChcIi4vYXhpb3MtUElaNEM1VVouanNcIikudGhlbigocmVzKSA9PiByZXMuZGVmYXVsdChjb25maWcpKTtcbmV4cG9ydCB7XG4gIGF4aW9zLFxuICBjb2xvcnMsXG4gIGZldGNoXG59O1xuIiwgImltcG9ydCB7IFByb2Nlc3NPdXRwdXQgfSBmcm9tICd6eC9jb3JlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50T2JqZWN0KFxyXG4gIG9iamVjdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBQcm9jZXNzT3V0cHV0LFxyXG4gIG1ldGhvZDogJ2xvZycgfCAnd2FybicgfCAnZXJyb3InID0gJ2xvZydcclxuKSB7XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGVbbWV0aG9kXShgJHtrZXl9OlxcbiR7dmFsdWV9XFxuYClcclxuICB9XHJcbn1cclxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XHJcblxyXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3NPdXRwdXQgfSBmcm9tICd6eCdcclxuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xyXG5pbXBvcnQgeyBwcmludE9iamVjdCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5hd2FpdCAkYHBucG0gc3BlbGxjaGVja2AuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG91dClcclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXHJcbn0pXHJcblxyXG4vLyBhd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludGBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XHJcbi8vICAgcHJpbnRPYmplY3Qob3V0KVxyXG4vLyAgIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxyXG4vLyB9KVxyXG5cclxuLy8gY2hlY2sgdHlwZSBhbmQgc3RhZ2VcclxuYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSB0eXBlLWNoZWNrYCwgJGBwbnBtIGxpbnQ6c3RhZ2VgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xyXG4gIHByaW50T2JqZWN0KG91dClcclxuICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcclxufSlcclxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XHJcblxyXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXHJcblxyXG5jb25zb2xlLmxvZygnXHU1RjAwXHU1OUNCXHU2MjY3XHU4ODRDXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwLi4uXFxuJylcclxuXHJcbmF3YWl0IGltcG9ydCgnLi9jaGVjaycpLmNhdGNoKChvdXQpID0+IHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1x1NEVFM1x1NzgwMVx1OEQyOFx1OTFDRlx1OEJDNFx1NEYzMFx1NTkzMVx1OEQyNSwgXHU4QkY3XHU2OEMwXHU2N0U1XHU0RUUzXHU3ODAxJylcclxufSlcclxuXHJcbmNvbnNvbGUubG9nKCdwcmludGYgXCJcdTY4QzBcdTZENEJcdTkwMUFcdThGQzcsIFx1NTIxQlx1NUVGQSBjb21taXQgXHU0RTJELi4uXFxuJylcclxuXHJcbmF3YWl0ICRgZ2l0IGFkZCAuYFxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBLFNBQVEsaUJBQWlCLHlCQUF3QjtBQUFqRCxJQUE4REE7QUFBOUQ7QUFBQTtBQUEwRCxJQUFJQSxXQUFRLGtCQUFrQiw4RUFBOEU7QUFBQTtBQUFBOzs7QUNFL0osU0FBUyxZQUNkLFFBQ0EsU0FBbUMsT0FDbkM7QUFDQSxhQUFXLENBQUMsS0FBSyxLQUFLLEtBQUssT0FBTyxRQUFRLE1BQU0sR0FBRztBQUVqRCxZQUFRLFFBQVEsR0FBRztBQUFBLEVBQVM7QUFBQSxDQUFTO0FBQUEsRUFDdkM7QUFDRjtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBR0EsU0FBUyxTQUFTO0FBSGxCO0FBQUE7QUFBQTtBQUlBO0FBRUEsVUFBTSxtQkFBbUIsTUFBTSxDQUFDLFFBQXVCO0FBQ3JELGNBQVEsSUFBSSxHQUFHO0FBRWYsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQVFELFVBQU0sUUFBUSxJQUFJLENBQUMsb0JBQW9CLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQXVCO0FBQ3hGLGtCQUFZLEdBQUc7QUFDZixZQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBQUE7QUFBQTs7O0FDckJEO0FBRUEsU0FBUyxLQUFBQyxVQUFTO0FBRWxCLFFBQVEsSUFBSSxtRUFBaUI7QUFFN0IsTUFBTSx1Q0FBa0IsTUFBTSxDQUFDLFFBQVE7QUFDckMsUUFBTSxJQUFJLE1BQU0sa0ZBQWlCO0FBQ25DLENBQUM7QUFFRCxRQUFRLElBQUksbUVBQWdDO0FBRTVDLE1BQU1BOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlIiwgIiQiXQp9Cg==
