#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// C:/Users/86186/AppData/Roaming/nvm/v16.18.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "C:/Users/86186/AppData/Roaming/nvm/v16.18.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file://C:\\Users\\86186\\AppData\\Roaming\\nvm\\v16.18.0\\node_modules\\tsno\\dist\\client.js");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiQzovVXNlcnMvODYxODYvQXBwRGF0YS9Sb2FtaW5nL252bS92MTYuMTguMC9ub2RlX21vZHVsZXMvdHNuby9kaXN0L2NsaWVudC5qcyIsICJzY3JpcHRzL3V0aWxzLnRzIiwgInNjcmlwdHMvY2hlY2sudHMiLCAic2NyaXB0cy9wcmUtY29tbWl0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2NyZWF0ZVJlcXVpcmUgYXMgX18kJGNyZWF0ZVJlcXVpcmV9IGZyb20gJ21vZHVsZSc7dmFyIHJlcXVpcmU9X18kJGNyZWF0ZVJlcXVpcmUoXCJmaWxlOi8vQzpcXFxcVXNlcnNcXFxcODYxODZcXFxcQXBwRGF0YVxcXFxSb2FtaW5nXFxcXG52bVxcXFx2MTYuMTguMFxcXFxub2RlX21vZHVsZXNcXFxcdHNub1xcXFxkaXN0XFxcXGNsaWVudC5qc1wiKTtcbmltcG9ydCB7XG4gIGNvbG9yc1xufSBmcm9tIFwiLi9jaHVuay1GSERYWE9LWS5qc1wiO1xuXG5cbi8vIHNyYy9jbGllbnQudHNcbnZhciBmZXRjaCA9ICh1cmwsIGluaXQpID0+IGltcG9ydChcIi4vc3JjLTRRN1E2N0MzLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQodXJsLCBpbml0KSk7XG52YXIgYXhpb3MgPSAoY29uZmlnKSA9PiBpbXBvcnQoXCIuL2F4aW9zLVBJWjRDNVVaLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQoY29uZmlnKSk7XG5leHBvcnQge1xuICBheGlvcyxcbiAgY29sb3JzLFxuICBmZXRjaFxufTtcbiIsICJpbXBvcnQgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengvY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50T2JqZWN0KFxuICBvYmplY3Q6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgUHJvY2Vzc091dHB1dCxcbiAgbWV0aG9kOiAnbG9nJyB8ICd3YXJuJyB8ICdlcnJvcicgPSAnbG9nJ1xuKSB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGVbbWV0aG9kXShgJHtrZXl9OlxcbiR7dmFsdWV9XFxuYClcbiAgfVxufVxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XG5cbmltcG9ydCB0eXBlIHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4J1xuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xuaW1wb3J0IHsgcHJpbnRPYmplY3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5hd2FpdCAkYHBucG0gc3BlbGxjaGVja2AuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xuICBjb25zb2xlLmxvZyhvdXQpXG5cbiAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXG59KVxuXG4vLyBhd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludGBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XG4vLyAgIHByaW50T2JqZWN0KG91dClcbi8vICAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXG4vLyB9KVxuXG4vLyBjaGVjayB0eXBlIGFuZCBzdGFnZVxuYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSB0eXBlLWNoZWNrYCwgJGBwbnBtIGxpbnQ6c3RhZ2VgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xuICBwcmludE9iamVjdChvdXQpXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxufSlcbiIsICIjIS91c3IvYmluL2VudiB6eFxuXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXG5cbmNvbnNvbGUubG9nKCdcdTVGMDBcdTU5Q0JcdTYyNjdcdTg4NENcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzAuLi5cXG4nKVxuXG5hd2FpdCBpbXBvcnQoJy4vY2hlY2snKS5jYXRjaCgob3V0KSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcignXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwXHU1OTMxXHU4RDI1LCBcdThCRjdcdTY4QzBcdTY3RTVcdTRFRTNcdTc4MDEnKVxufSlcblxuY29uc29sZS5sb2coJ3ByaW50ZiBcIlx1NjhDMFx1NkQ0Qlx1OTAxQVx1OEZDNywgXHU1MjFCXHU1RUZBIGNvbW1pdCBcdTRFMkQuLi5cXG4nKVxuXG5hd2FpdCAkYGdpdCBhZGQgLmBcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUEsU0FBUSxpQkFBaUIseUJBQXdCO0FBQWpELElBQThEQTtBQUE5RDtBQUFBO0FBQTBELElBQUlBLFdBQVEsa0JBQWtCLCtGQUErRjtBQUFBO0FBQUE7OztBQ0VoTCxTQUFTLFlBQ2QsUUFDQSxTQUFtQyxPQUNuQztBQUNBLGFBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxPQUFPLFFBQVEsTUFBTSxHQUFHO0FBRWpELFlBQVEsUUFBUSxHQUFHO0FBQUEsRUFBUztBQUFBLENBQVM7QUFBQSxFQUN2QztBQUNGO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFHQSxTQUFTLFNBQVM7QUFIbEI7QUFBQTtBQUFBO0FBSUE7QUFFQSxVQUFNLG1CQUFtQixNQUFNLENBQUMsUUFBdUI7QUFDckQsY0FBUSxJQUFJLEdBQUc7QUFFZixZQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBUUQsVUFBTSxRQUFRLElBQUksQ0FBQyxvQkFBb0Isa0JBQWtCLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBdUI7QUFDeEYsa0JBQVksR0FBRztBQUNmLFlBQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUFBLElBQzVCLENBQUM7QUFBQTtBQUFBOzs7QUNyQkQ7QUFFQSxTQUFTLEtBQUFDLFVBQVM7QUFFbEIsUUFBUSxJQUFJLG1FQUFpQjtBQUU3QixNQUFNLHVDQUFrQixNQUFNLENBQUMsUUFBUTtBQUNyQyxRQUFNLElBQUksTUFBTSxrRkFBaUI7QUFDbkMsQ0FBQztBQUVELFFBQVEsSUFBSSxtRUFBZ0M7QUFFNUMsTUFBTUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiLCAiJCJdCn0K
