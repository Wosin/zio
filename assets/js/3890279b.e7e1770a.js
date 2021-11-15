"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4603],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"zstate",title:"ZState"},p=void 0,c={unversionedId:"datatypes/misc/zstate",id:"datatypes/misc/zstate",isDocsHomePage:!1,title:"ZState",description:"ZStateS] models a value of type S that can be read from and written to during the execution of an effect. This is a higher-level construct built on top of [FiberRef and the environment type to support using ZIO where we might have traditionally used state monad transformers.",source:"@site/docs/datatypes/misc/zstate.md",sourceDirName:"datatypes/misc",slug:"/datatypes/misc/zstate",permalink:"/next/datatypes/misc/zstate",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/misc/zstate.md",tags:[],version:"current",frontMatter:{id:"zstate",title:"ZState"},sidebar:"datatypes-sidebar",previous:{title:"Supervisor",permalink:"/next/datatypes/misc/supervisor"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZState[S]")," models a value of type ",(0,o.kt)("inlineCode",{parentName:"p"},"S")," that can be read from and written to during the execution of an effect. This is a higher-level construct built on top of ",(0,o.kt)("a",{parentName:"p",href:"/next/datatypes/fiber/fiberref"},(0,o.kt)("inlineCode",{parentName:"a"},"FiberRef"))," and the environment type to support using ZIO where we might have traditionally used state monad transformers."),(0,o.kt)("p",null,"Let's try a simple example of using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZState"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import java.io.IOException\nimport zio._\n\nval myApp: ZIO[Has[Console], IOException, Unit] =\n  for {\n    counter <- ZState.make(0)\n    _ <- counter.update(_ + 1)\n    _ <- counter.update(_ + 2)\n    state <- counter.get\n    _ <- Console.printLine(s"current state: $state")\n  } yield ()\n')),(0,o.kt)("p",null,"The idiomatic way to work with ",(0,o.kt)("inlineCode",{parentName:"p"},"ZState")," is as part of the environment using operators defined on ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO"),". So instead of creating ",(0,o.kt)("inlineCode",{parentName:"p"},"ZState")," directly using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZState.make")," constructor, we can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZState")," from the environment, and finally, provide proper service builder using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZState.makeServiceBuilder")," constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nobject ZStateExample extends zio.ZIOAppDefault {\n  val myApp: ZIO[Has[Console] with Has[ZState[Int]], IOException, Unit] = for {\n    s <- ZIO.service[ZState[Int]]\n    _ <- s.update(_ + 1)\n    _ <- s.update(_ + 2)\n    state <- s.get\n    _ <- Console.printLine(s"current state: $state")\n  } yield ()\n\n  def run = myApp.injectCustom(ZState.makeServiceBuilder(0))\n}\n')),(0,o.kt)("p",null,"Because we typically use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZState")," as part of the environment, it is recommended to define our own state type ",(0,o.kt)("inlineCode",{parentName:"p"},"S")," such as ",(0,o.kt)("inlineCode",{parentName:"p"},"MyState")," rather than using a type such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," to avoid the risk of ambiguity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport java.io.IOException\n\nfinal case class MyState(counter: Int)\n\nobject ZStateExample extends zio.ZIOAppDefault {\n\n  val myApp: ZIO[Has[Console] with Has[ZState[MyState]], IOException, Unit] =\n    for {\n      counter <- ZIO.service[ZState[MyState]]\n      _ <- counter.update(state => state.copy(counter = state.counter + 1))\n      _ <- counter.update(state => state.copy(counter = state.counter + 2))\n      state <- counter.get\n      _ <- Console.printLine(s"Current state: $state")\n    } yield ()\n\n  def run = myApp.injectCustom(ZState.makeServiceBuilder(MyState(0)))\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type also has some helper methods to work with ",(0,o.kt)("inlineCode",{parentName:"p"},"ZState")," as the environment of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effect such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.updateState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.getState"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.getStateWith"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'final case class MyState(counter: Int)\n\nval myApp: ZIO[Has[Console] with Has[ZState[MyState]], IOException, Int] =\n  for {\n    _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 1))\n    _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 2))\n    state <- ZIO.getStateWith[MyState](_.counter)\n    _ <- Console.printLine(s"Current state: $state")\n  } yield state\n')),(0,o.kt)("p",null,"An important note about ",(0,o.kt)("inlineCode",{parentName:"p"},"ZState")," is that it is on top of the ",(0,o.kt)("inlineCode",{parentName:"p"},"FiberRef")," data type. So it will inherit its behavior from the ",(0,o.kt)("inlineCode",{parentName:"p"},"FiberRef"),"."),(0,o.kt)("p",null,"For example, when a fiber is going to join to its parent fiber, its state will be merged with its parent state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class MyState(counter: Int)\n\nobject ZStateExample extends ZIOAppDefault {\n  val myApp = for {\n    _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 1))\n    fiber <-\n      (for {\n        _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 1))\n        state <- ZIO.getState[MyState]\n        _ <- Console.printLine(s"Current state inside the forked fiber: $state")\n      } yield ()).fork\n    _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 5))\n    state1 <- ZIO.getState[MyState]\n    _ <- Console.printLine(s"Current state before merging the fiber: $state1")\n    _ <- fiber.join\n    state2 <- ZIO.getState[MyState]\n    _ <- Console.printLine(s"The final state: $state2")\n  } yield ()\n\n  def run =\n    myApp.injectCustom(\n      ZState.makeServiceBuilder(MyState(0))\n    )\n}\n')),(0,o.kt)("p",null,"The output of running this snippet code would be as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Current state before merging the fiber: MyState(6)\nCurrent state inside the forked fiber: MyState(2)\nThe final state: MyState(2)\n")))}d.isMDXComponent=!0}}]);