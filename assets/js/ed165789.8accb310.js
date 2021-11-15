"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3456],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5277:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"index",title:"Introduction"},s=void 0,p={unversionedId:"datatypes/index",id:"datatypes/index",isDocsHomePage:!1,title:"Introduction",description:"ZIO contains a few data types that can help you solve complex problems in asynchronous and concurrent programming. ZIO data types categorize into these sections:",source:"@site/docs/datatypes/index.md",sourceDirName:"datatypes",slug:"/datatypes/index",permalink:"/next/datatypes/index",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",next:{title:"ZIO",permalink:"/next/datatypes/core/zio/zio"}},m=[{value:"Core Data Types",id:"core-data-types",children:[],level:2},{value:"Contextual Data Types",id:"contextual-data-types",children:[],level:2},{value:"Concurrency",id:"concurrency",children:[{value:"Fiber Primitives",id:"fiber-primitives",children:[],level:3},{value:"Concurrency Primitives",id:"concurrency-primitives",children:[],level:3},{value:"STM",id:"stm",children:[],level:3}],level:2},{value:"Resource Management",id:"resource-management",children:[],level:2},{value:"Streaming",id:"streaming",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO contains a few data types that can help you solve complex problems in asynchronous and concurrent programming. ZIO data types categorize into these sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#core-data-types"},"Core Data Types")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#contextual-data-types"},"Contextual Data Types")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#concurrency"},"Concurrency"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fiber-primitives"},"Fiber Primitives")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#concurrency-primitives"},"Concurrency Primitives")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#stm"},"STM")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#resource-management"},"Resource Management")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#streaming"},"Streaming")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#miscellaneous"},"Miscellaneous"))),(0,i.kt)("h2",{id:"core-data-types"},"Core Data Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/zio/zio"},"ZIO"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO")," is a value that models an effectful program, which might fail or succeed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/zio/uio"},"UIO"))," \u2014 An ",(0,i.kt)("inlineCode",{parentName:"li"},"UIO[A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Nothing, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/zio/urio"},"URIO"))," \u2014 An ",(0,i.kt)("inlineCode",{parentName:"li"},"URIO[R, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[R, Nothing, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/zio/task"},"Task"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Task[A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Throwable, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/zio/rio"},"RIO"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"RIO[R, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[R, Throwable, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/zio/io"},"IO"))," \u2014 An ",(0,i.kt)("inlineCode",{parentName:"li"},"IO[E, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[Any, E, A]"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/zioapp"},"ZIOApp"))," \u2014 The ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIOApp")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIOAppDefault")," are entry points for ZIO applications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/runtime"},"Runtime"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime[R]")," is capable of executing tasks within an environment ",(0,i.kt)("inlineCode",{parentName:"li"},"R"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/exit"},"Exit"))," \u2014 An ",(0,i.kt)("inlineCode",{parentName:"li"},"Exit[E, A]")," describes the result of executing an ",(0,i.kt)("inlineCode",{parentName:"li"},"IO")," value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/core/cause"},"Cause"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"Cause[E]")," is a description of a full story of a fiber failure. ")),(0,i.kt)("h2",{id:"contextual-data-types"},"Contextual Data Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/has"},"Has"))," \u2014 The trait ",(0,i.kt)("inlineCode",{parentName:"li"},"Has[A]")," is used with the ",(0,i.kt)("a",{parentName:"li",href:"/next/datatypes/contextual/index#zio-environment"},"ZIO environment")," to express an effect's dependency on a service of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/zservicebuilder"},"ZServiceBuilder"))," \u2014 The ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[-R, +E, +A]")," data type describes an effect that requires an input type of ",(0,i.kt)("inlineCode",{parentName:"li"},"R"),", as an environment, may fail with an error of type ",(0,i.kt)("inlineCode",{parentName:"li"},"E")," or succeed and produces a value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/rservicebuilder"},"RServiceBuilder"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"RServiceBuilder[-RIn, +ROut]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZServiceBuilder[RIn, Throwable, ROut]"),", which represents a service builder that requires ",(0,i.kt)("inlineCode",{parentName:"li"},"RIn")," as its input, it may fail with ",(0,i.kt)("inlineCode",{parentName:"li"},"Throwable")," value, or returns ",(0,i.kt)("inlineCode",{parentName:"li"},"ROut")," as its output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/uservicebuilder"},"UServiceBuilder"))," \u2014 UServiceBuilder","[+ROut]"," is a type alias for ZServiceBuilder","[Any, Nothing, ROut]",", which represents a service builder that doesn't require any services as its input, it can't fail, and returns ROut as its output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/servicebuilder"},"ServiceBuilder"))," \u2014 ServiceBuilder","[+E, +ROut]"," is a type alias for ZServiceBuilder","[Any, E, ROut]",", which represents a service builder that doesn't require any services, it may fail with an error type of E, and returns ROut as its output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/urservicebuilder"},"URServiceBuilder"))," \u2014 URServiceBuilder","[-RIn, +ROut]"," is a type alias for ZServiceBuilder","[RIn, Nothing, ROut]",", which represents a set of services that requires RIn as its input, it can't fail, and returns ROut as its output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/contextual/taskservicebuilder"},"TaskServiceBuilder"))," \u2014 TaskServiceBuilder","[+ROut]"," is a type alias for ZServiceBuilder","[Any, Throwable, ROut]",", which represents a set of services that doesn't require any services as its input, it may fail with Throwable value, and returns ROut as its output.")))),(0,i.kt)("h2",{id:"concurrency"},"Concurrency"),(0,i.kt)("h3",{id:"fiber-primitives"},"Fiber Primitives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/fiber/fiber"},"Fiber"))," \u2014 A fiber value models an ",(0,i.kt)("inlineCode",{parentName:"li"},"IO")," value that has started running, and is the moral equivalent of a green thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/fiber/fiberref"},"FiberRef"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef[A]")," models a mutable reference to a value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),". As opposed to ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref[A]"),", a value is bound to an executing ",(0,i.kt)("inlineCode",{parentName:"li"},"Fiber")," only.  You can think of it as Java's ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadLocal")," on steroids."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/fiber/fiberstatus"},"Fiber.Status"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Fiber.Status")," describe the current status of a Fiber."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/fiber/fiberid"},"FiberId"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberId")," describe the unique identity of a Fiber.")),(0,i.kt)("h3",{id:"concurrency-primitives"},"Concurrency Primitives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/concurrency/zref"},"ZRef"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZRef[EA, EB, A, B]")," is a polymorphic, purely functional description of a mutable reference. The fundamental operations of a ",(0,i.kt)("inlineCode",{parentName:"li"},"ZRef")," are ",(0,i.kt)("inlineCode",{parentName:"li"},"set")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"get"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/concurrency/ref"},"Ref"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref[A]")," models a mutable reference to a value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),". The two basic operations are ",(0,i.kt)("inlineCode",{parentName:"li"},"set"),", which fills the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref")," with a new value, and ",(0,i.kt)("inlineCode",{parentName:"li"},"get"),", which retrieves its current content. All operations on a ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref")," are atomic and thread-safe, providing a reliable foundation for synchronizing concurrent programs."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/concurrency/zrefsynchronized"},"ZRef.Synchronized"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZRef.Synchronized[RA, RB, EA, EB, A, B]")," is a polymorphic, purely functional description of a mutable reference.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/concurrency/refsynchronized"},"Ref.Synchronized"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref.Synchronized[A]")," models a ",(0,i.kt)("strong",{parentName:"li"},"mutable reference")," to a value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," in which we can store ",(0,i.kt)("strong",{parentName:"li"},"immutable")," data, and update it atomically ",(0,i.kt)("strong",{parentName:"li"},"and")," effectfully."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/concurrency/promise"},"Promise"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise")," is a model of a variable that may be set a single time, and awaited on by many fibers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/concurrency/queue"},"Queue"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Queue")," is an asynchronous queue that never blocks, which is safe for multiple concurrent producers and consumers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/concurrency/hub"},"Hub"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"Hub")," is an asynchronous message hub that allows publishers to efficiently broadcast values to many subscribers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/concurrency/semaphore"},"Semaphore"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Semaphore")," is an asynchronous (non-blocking) semaphore that plays well with ZIO's interruption.")),(0,i.kt)("h3",{id:"stm"},"STM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/stm"},"STM"))," - An ",(0,i.kt)("inlineCode",{parentName:"li"},"STM")," represents an effect that can be performed transactionally resulting in a failure or success."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/tarray"},"TArray"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"TArray")," is an array of mutable references that can participate in transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/tset"},"TSet"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"TSet")," is a mutable set that can participate in transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/tmap"},"TMap"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"TMap")," is a mutable map that can participate in transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/tref"},"TRef"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"TRef")," is a mutable reference to an immutable value that can participate in transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/tpriorityqueue"},"TPriorityQueue"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"TPriorityQueue")," is a mutable priority queue that can participate in transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/tpromise"},"TPromise"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"TPromise")," is a mutable reference that can be set exactly once and can participate in transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/tqueue"},"TQueue"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"TQueue")," is a mutable queue that can participate in transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/treentrantlock"},"TReentrantLock"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"TReentrantLock")," is a reentrant read / write lock that can be composed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stm/tsemaphore"},"TSemaphore"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"TSemaphore")," is a semaphore that can participate in transactions.")),(0,i.kt)("h2",{id:"resource-management"},"Resource Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/resource/zmanaged"},"ZManaged"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZManaged")," is a value that describes a perishable resource that may be consumed only once inside a given scope.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/resource/managed"},"Managed"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Managed[E, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZManaged[Any, E, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/resource/task-managed"},"TaskManaged"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"TaskManaged[A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZManaged[Any, Throwable, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/resource/rmanaged"},"RManaged"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"RManaged[R, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZManaged[R, Throwable, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/resource/umanaged"},"UManaged"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"UManaged[A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZManaged[Any, Nothing, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/resource/urmanaged"},"URManaged"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"URManaged[R, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZManaged[R, Nothing, A]"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/resource/zpool"},"ZPool"))," \u2014 An asynchronous and concurrent generalized pool of reusable managed resources.")),(0,i.kt)("h2",{id:"streaming"},"Streaming"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stream/zstream"},"ZStream"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZStream")," is a lazy, concurrent, asynchronous source of values.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stream/stream"},"Stream"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Stream[E, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZStream[Any, E, A]"),", which represents a ZIO stream that does not require any services, and may fail with an ",(0,i.kt)("inlineCode",{parentName:"li"},"E"),", or produce elements with an ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),". "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stream/zsink"},"ZSink"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZSink")," is a consumer of values from a ",(0,i.kt)("inlineCode",{parentName:"li"},"ZStream"),", which may produces a value when it has consumed enough.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stream/sink"},"Sink"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Sink[InErr, A, OutErr, L, B]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZSink[Any, InErr, A, OutErr, L, B]"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stream/zpipeline"},"ZPipeline"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZPipeline")," is a polymorphic stream transformer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/stream/subscription-ref"},"SubscriptionRef"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"SubscriptionRef[A]")," contains a current value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," and a stream that can be consumed to observe all changes to that value.")),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/misc/chunk"},"Chunk"))," \u2014 ZIO ",(0,i.kt)("inlineCode",{parentName:"li"},"Chunk"),": Fast, Pure Alternative to Arrays"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/misc/schedule"},"Schedule"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Schedule")," is a model of a recurring schedule, which can be used for repeating successful ",(0,i.kt)("inlineCode",{parentName:"li"},"IO")," values, or retrying failed ",(0,i.kt)("inlineCode",{parentName:"li"},"IO")," values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/next/datatypes/misc/supervisor"},"Supervisor"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Supervisor[A]")," is allowed to supervise the launching and termination of fibers, producing some visible value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," from the supervision.")),(0,i.kt)("p",null,"To learn more about these data types, please explore the pages above, or check out the Scaladoc documentation."))}c.isMDXComponent=!0}}]);