module.exports=(()=>{var e={45:(e,o,t)=>{"use strict";var r;t.d(o,{Z:()=>l}),e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=()=>'<!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="utf-8">\n      <meta\n        name="viewport" \n        width=device-width>\n    \n     <title>template</title>\n     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">\n     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\n    </head>\n    <body>\n      <div id="root"></div>\n      <script type="text/javascript" src="dist/bundle.js"><\/script>\n    </body>\n  </html>',l=a;var d,s;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(a,"default","/Users/yashmasani/project/mernNew/myPortfolio/index.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},579:(e,o,t)=>{"use strict";var r;t(78),require("webpack-dev-middleware"),require("webpack-hot-middleware"),t(83),e=t.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=e=>{},l={compile:a};var d,s;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(a,"compile","/Users/yashmasani/project/mernNew/myPortfolio/server/devBundle.js"),d.register(l,"default","/Users/yashmasani/project/mernNew/myPortfolio/server/devBundle.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},389:(e,o,t)=>{"use strict";t.r(o);const r=require("express");var a,l=t.n(r),d=(t(579),t(622)),s=t.n(d),n=t(45);e=t.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const i=process.cwd(),c=l()();c.use("/dist",l().static(s().join(i,"dist"))),c.use("/",((e,o)=>{o.status(200).send((0,n.Z)())}));let u=process.env.PORT||8080;var p,f;c.listen(u,(function(e){e&&console.log(e),console.log(`Listening to ${u}`)})),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(i,"curr_dir","/Users/yashmasani/project/mernNew/myPortfolio/server/server.js"),p.register(c,"app","/Users/yashmasani/project/mernNew/myPortfolio/server/server.js"),p.register(u,"port","/Users/yashmasani/project/mernNew/myPortfolio/server/server.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},83:(e,o,t)=>{var r;e=t.nmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=t(622),l=t(78),d=process.cwd(),s={name:"browser",mode:"development",devtool:"eval-source-map",entry:["webpack-hot-middleware/client?reload=true",a.join(d,"client/main.js")],output:{path:a.join(d,"/dist"),filename:"bundle.js",publicPath:"/dist/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:["babel-loader"]},{test:/\.css$/i,use:["style.css","css-loader"]},{test:/\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,use:["file-loader"]}]},plugins:[new l.HotModuleReplacementPlugin,new l.NoEmitOnErrorsPlugin],resolve:{alias:{"react-dom":"@hot-loader/react-dom"}}};var n,i;e.exports=s,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(d,"current_dir","/Users/yashmasani/project/mernNew/myPortfolio/webpack.config.client.js"),n.register(s,"config","/Users/yashmasani/project/mernNew/myPortfolio/webpack.config.client.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},622:e=>{"use strict";e.exports=require("path")},78:e=>{"use strict";e.exports=require("webpack")}},o={};function t(r){if(o[r])return o[r].exports;var a=o[r]={id:r,loaded:!1,exports:{}};return e[r](a,a.exports,t),a.loaded=!0,a.exports}return t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t(389)})();