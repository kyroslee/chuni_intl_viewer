# chuni_intl_viewer

A bookmarklet tool to let you view the records of [CHUNITHM-NET (International)](https://chunithm-net-eng.com/) in rating order.

Minified file genrated by [google closure compiler](https://closure-compiler.appspot.com/home).

Chart constant data extracted from [chunirec](https://chunirec.net/dev/api/1.3/docs).

# Usage

1. Drag [chuni intl viewer](https://github.com/kyroslee/chuni_intl_viewer) to your bookmark bar.
2. Edit the bookmark. Copy the following code ([bookmarklet.js](https://raw.githubusercontent.com/kyroslee/chuni_intl_viewer/main/bookmarklet.js)) and paste it as the url of the bookmark
```
javascript:(function()%7Bvar%20%24jscomp%3D%24jscomp%7C%7C%7B%7D%3B%24jscomp.scope%3D%7B%7D%3B%24jscomp.createTemplateTagFirstArg%3Dfunction(a)%7Breturn%20a.raw%3Da%7D%3B%24jscomp.createTemplateTagFirstArgWithRaw%3Dfunction(a%2Cb)%7Ba.raw%3Db%3Breturn%20a%7D%3B%24jscomp.arrayIteratorImpl%3Dfunction(a)%7Bvar%20b%3D0%3Breturn%20function()%7Breturn%20b%3Ca.length%3F%7Bdone%3A!1%2Cvalue%3Aa%5Bb%2B%2B%5D%7D%3A%7Bdone%3A!0%7D%7D%7D%3B%24jscomp.arrayIterator%3Dfunction(a)%7Breturn%7Bnext%3A%24jscomp.arrayIteratorImpl(a)%7D%7D%3B%24jscomp.makeIterator%3Dfunction(a)%7Bvar%20b%3D%22undefined%22!%3Dtypeof%20Symbol%26%26Symbol.iterator%26%26a%5BSymbol.iterator%5D%3Breturn%20b%3Fb.call(a)%3A%24jscomp.arrayIterator(a)%7D%3B%24jscomp.arrayFromIterator%3Dfunction(a)%7Bfor(var%20b%2Cc%3D%5B%5D%3B!(b%3Da.next()).done%3B)c.push(b.value)%3Breturn%20c%7D%3B%24jscomp.arrayFromIterable%3Dfunction(a)%7Breturn%20a%20instanceof%20Array%3Fa%3A%24jscomp.arrayFromIterator(%24jscomp.makeIterator(a))%7D%3B%24jscomp.ASSUME_ES5%3D!1%3B%24jscomp.ASSUME_NO_NATIVE_MAP%3D!1%3B%24jscomp.ASSUME_NO_NATIVE_SET%3D!1%3B%24jscomp.SIMPLE_FROUND_POLYFILL%3D!1%3B%24jscomp.ISOLATE_POLYFILLS%3D!1%3B%24jscomp.FORCE_POLYFILL_PROMISE%3D!1%3B%24jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION%3D!1%3B%24jscomp.defineProperty%3D%24jscomp.ASSUME_ES5%7C%7C%22function%22%3D%3Dtypeof%20Object.defineProperties%3FObject.defineProperty%3Afunction(a%2Cb%2Cc)%7Bif(a%3D%3DArray.prototype%7C%7Ca%3D%3DObject.prototype)return%20a%3Ba%5Bb%5D%3Dc.value%3Breturn%20a%7D%3B%24jscomp.getGlobal%3Dfunction(a)%7Ba%3D%5B%22object%22%3D%3Dtypeof%20globalThis%26%26globalThis%2Ca%2C%22object%22%3D%3Dtypeof%20window%26%26window%2C%22object%22%3D%3Dtypeof%20self%26%26self%2C%22object%22%3D%3Dtypeof%20global%26%26global%5D%3Bfor(var%20b%3D0%3Bb%3Ca.length%3B%2B%2Bb)%7Bvar%20c%3Da%5Bb%5D%3Bif(c%26%26c.Math%3D%3DMath)return%20c%7Dthrow%20Error(%22Cannot%20find%20global%20object%22)%3B%7D%3B%24jscomp.global%3D%24jscomp.getGlobal(this)%3B%24jscomp.IS_SYMBOL_NATIVE%3D%22function%22%3D%3D%3Dtypeof%20Symbol%26%26%22symbol%22%3D%3D%3Dtypeof%20Symbol(%22x%22)%3B%24jscomp.TRUST_ES6_POLYFILLS%3D!%24jscomp.ISOLATE_POLYFILLS%7C%7C%24jscomp.IS_SYMBOL_NATIVE%3B%24jscomp.polyfills%3D%7B%7D%3B%24jscomp.propertyToPolyfillSymbol%3D%7B%7D%3B%24jscomp.POLYFILL_PREFIX%3D%22%24jscp%24%22%3Bvar%20%24jscomp%24lookupPolyfilledValue%3Dfunction(a%2Cb)%7Bvar%20c%3D%24jscomp.propertyToPolyfillSymbol%5Bb%5D%3Bif(null%3D%3Dc)return%20a%5Bb%5D%3Bc%3Da%5Bc%5D%3Breturn%20void%200!%3D%3Dc%3Fc%3Aa%5Bb%5D%7D%3B%24jscomp.polyfill%3Dfunction(a%2Cb%2Cc%2Ce)%7Bb%26%26(%24jscomp.ISOLATE_POLYFILLS%3F%24jscomp.polyfillIsolated(a%2Cb%2Cc%2Ce)%3A%24jscomp.polyfillUnisolated(a%2Cb%2Cc%2Ce))%7D%3B%24jscomp.polyfillUnisolated%3Dfunction(a%2Cb%2Cc%2Ce)%7Bc%3D%24jscomp.global%3Ba%3Da.split(%22.%22)%3Bfor(e%3D0%3Be%3Ca.length-1%3Be%2B%2B)%7Bvar%20g%3Da%5Be%5D%3Bif(!(g%20in%20c))return%3Bc%3Dc%5Bg%5D%7Da%3Da%5Ba.length-1%5D%3Be%3Dc%5Ba%5D%3Bb%3Db(e)%3Bb!%3De%26%26null!%3Db%26%26%24jscomp.defineProperty(c%2Ca%2C%7Bconfigurable%3A!0%2Cwritable%3A!0%2Cvalue%3Ab%7D)%7D%3B%24jscomp.polyfillIsolated%3Dfunction(a%2Cb%2Cc%2Ce)%7Bvar%20g%3Da.split(%22.%22)%3Ba%3D1%3D%3D%3Dg.length%3Be%3Dg%5B0%5D%3Be%3D!a%26%26e%20in%20%24jscomp.polyfills%3F%24jscomp.polyfills%3A%24jscomp.global%3Bfor(var%20p%3D0%3Bp%3Cg.length-1%3Bp%2B%2B)%7Bvar%20t%3Dg%5Bp%5D%3Bif(!(t%20in%20e))return%3Be%3De%5Bt%5D%7Dg%3Dg%5Bg.length-1%5D%3Bc%3D%24jscomp.IS_SYMBOL_NATIVE%26%26%22es6%22%3D%3D%3Dc%3Fe%5Bg%5D%3Anull%3Bb%3Db(c)%3Bnull!%3Db%26%26(a%3F%24jscomp.defineProperty(%24jscomp.polyfills%2Cg%2C%7Bconfigurable%3A!0%2Cwritable%3A!0%2Cvalue%3Ab%7D)%3Ab!%3D%3Dc%26%26(void%200%3D%3D%3D%24jscomp.propertyToPolyfillSymbol%5Bg%5D%26%26(%24jscomp.propertyToPolyfillSymbol%5Bg%5D%3D%24jscomp.IS_SYMBOL_NATIVE%3F%24jscomp.global.Symbol(g)%3A%24jscomp.POLYFILL_PREFIX%2Bg)%2C%24jscomp.defineProperty(e%2C%24jscomp.propertyToPolyfillSymbol%5Bg%5D%2C%7Bconfigurable%3A!0%2Cwritable%3A!0%2Cvalue%3Ab%7D)))%7D%3B%24jscomp.underscoreProtoCanBeSet%3Dfunction()%7Bvar%20a%3D%7Ba%3A!0%7D%2Cb%3D%7B%7D%3Btry%7Breturn%20b.__proto__%3Da%2Cb.a%7Dcatch(c)%7B%7Dreturn!1%7D%3B%24jscomp.setPrototypeOf%3D%24jscomp.TRUST_ES6_POLYFILLS%26%26%22function%22%3D%3Dtypeof%20Object.setPrototypeOf%3FObject.setPrototypeOf%3A%24jscomp.underscoreProtoCanBeSet()%3Ffunction(a%2Cb)%7Ba.__proto__%3Db%3Bif(a.__proto__!%3D%3Db)throw%20new%20TypeError(a%2B%22%20is%20not%20extensible%22)%3Breturn%20a%7D%3Anull%3B%24jscomp.generator%3D%7B%7D%3B%24jscomp.generator.ensureIteratorResultIsObject_%3Dfunction(a)%7Bif(!(a%20instanceof%20Object))throw%20new%20TypeError(%22Iterator%20result%20%22%2Ba%2B%22%20is%20not%20an%20object%22)%3B%7D%3B%24jscomp.generator.Context%3Dfunction()%7Bthis.isRunning_%3D!1%3Bthis.yieldAllIterator_%3Dnull%3Bthis.yieldResult%3Dvoid%200%3Bthis.nextAddress%3D1%3Bthis.finallyAddress_%3Dthis.catchAddress_%3D0%3Bthis.finallyContexts_%3Dthis.abruptCompletion_%3Dnull%7D%3B%24jscomp.generator.Context.prototype.start_%3Dfunction()%7Bif(this.isRunning_)throw%20new%20TypeError(%22Generator%20is%20already%20running%22)%3Bthis.isRunning_%3D!0%7D%3B%24jscomp.generator.Context.prototype.stop_%3Dfunction()%7Bthis.isRunning_%3D!1%7D%3B%24jscomp.generator.Context.prototype.jumpToErrorHandler_%3Dfunction()%7Bthis.nextAddress%3Dthis.catchAddress_%7C%7Cthis.finallyAddress_%7D%3B%24jscomp.generator.Context.prototype.next_%3Dfunction(a)%7Bthis.yieldResult%3Da%7D%3B%24jscomp.generator.Context.prototype.throw_%3Dfunction(a)%7Bthis.abruptCompletion_%3D%7Bexception%3Aa%2CisException%3A!0%7D%3Bthis.jumpToErrorHandler_()%7D%3B%24jscomp.generator.Context.prototype%5B%22return%22%5D%3Dfunction(a)%7Bthis.abruptCompletion_%3D%7B%22return%22%3Aa%7D%3Bthis.nextAddress%3Dthis.finallyAddress_%7D%3B%24jscomp.generator.Context.prototype.jumpThroughFinallyBlocks%3Dfunction(a)%7Bthis.abruptCompletion_%3D%7BjumpTo%3Aa%7D%3Bthis.nextAddress%3Dthis.finallyAddress_%7D%3B%24jscomp.generator.Context.prototype.yield%3Dfunction(a%2Cb)%7Bthis.nextAddress%3Db%3Breturn%7Bvalue%3Aa%7D%7D%3B%24jscomp.generator.Context.prototype.yieldAll%3Dfunction(a%2Cb)%7Bvar%20c%3D%24jscomp.makeIterator(a)%2Ce%3Dc.next()%3B%24jscomp.generator.ensureIteratorResultIsObject_(e)%3Bif(e.done)this.yieldResult%3De.value%2Cthis.nextAddress%3Db%3Belse%20return%20this.yieldAllIterator_%3Dc%2Cthis.yield(e.value%2Cb)%7D%3B%24jscomp.generator.Context.prototype.jumpTo%3Dfunction(a)%7Bthis.nextAddress%3Da%7D%3B%24jscomp.generator.Context.prototype.jumpToEnd%3Dfunction()%7Bthis.nextAddress%3D0%7D%3B%24jscomp.generator.Context.prototype.setCatchFinallyBlocks%3Dfunction(a%2Cb)%7Bthis.catchAddress_%3Da%3Bvoid%200!%3Db%26%26(this.finallyAddress_%3Db)%7D%3B%24jscomp.generator.Context.prototype.setFinallyBlock%3Dfunction(a)%7Bthis.catchAddress_%3D0%3Bthis.finallyAddress_%3Da%7C%7C0%7D%3B%24jscomp.generator.Context.prototype.leaveTryBlock%3Dfunction(a%2Cb)%7Bthis.nextAddress%3Da%3Bthis.catchAddress_%3Db%7C%7C0%7D%3B%24jscomp.generator.Context.prototype.enterCatchBlock%3Dfunction(a)%7Bthis.catchAddress_%3Da%7C%7C0%3Ba%3Dthis.abruptCompletion_.exception%3Bthis.abruptCompletion_%3Dnull%3Breturn%20a%7D%3B%24jscomp.generator.Context.prototype.enterFinallyBlock%3Dfunction(a%2Cb%2Cc)%7Bc%3Fthis.finallyContexts_%5Bc%5D%3Dthis.abruptCompletion_%3Athis.finallyContexts_%3D%5Bthis.abruptCompletion_%5D%3Bthis.catchAddress_%3Da%7C%7C0%3Bthis.finallyAddress_%3Db%7C%7C0%7D%3B%24jscomp.generator.Context.prototype.leaveFinallyBlock%3Dfunction(a%2Cb)%7Bvar%20c%3Dthis.finallyContexts_.splice(b%7C%7C0)%5B0%5D%3Bif(c%3Dthis.abruptCompletion_%3Dthis.abruptCompletion_%7C%7Cc)%7Bif(c.isException)return%20this.jumpToErrorHandler_()%3Bvoid%200!%3Dc.jumpTo%26%26this.finallyAddress_%3Cc.jumpTo%3F(this.nextAddress%3Dc.jumpTo%2Cthis.abruptCompletion_%3Dnull)%3Athis.nextAddress%3Dthis.finallyAddress_%7Delse%20this.nextAddress%3Da%7D%3B%24jscomp.generator.Context.prototype.forIn%3Dfunction(a)%7Breturn%20new%20%24jscomp.generator.Context.PropertyIterator(a)%7D%3B%24jscomp.generator.Context.PropertyIterator%3Dfunction(a)%7Bthis.object_%3Da%3Bthis.properties_%3D%5B%5D%3Bfor(var%20b%20in%20a)this.properties_.push(b)%3Bthis.properties_.reverse()%7D%3B%24jscomp.generator.Context.PropertyIterator.prototype.getNext%3Dfunction()%7Bfor(%3B0%3Cthis.properties_.length%3B)%7Bvar%20a%3Dthis.properties_.pop()%3Bif(a%20in%20this.object_)return%20a%7Dreturn%20null%7D%3B%24jscomp.generator.Engine_%3Dfunction(a)%7Bthis.context_%3Dnew%20%24jscomp.generator.Context%3Bthis.program_%3Da%7D%3B%24jscomp.generator.Engine_.prototype.next_%3Dfunction(a)%7Bthis.context_.start_()%3Bif(this.context_.yieldAllIterator_)return%20this.yieldAllStep_(this.context_.yieldAllIterator_.next%2Ca%2Cthis.context_.next_)%3Bthis.context_.next_(a)%3Breturn%20this.nextStep_()%7D%3B%24jscomp.generator.Engine_.prototype.return_%3Dfunction(a)%7Bthis.context_.start_()%3Bvar%20b%3Dthis.context_.yieldAllIterator_%3Bif(b)return%20this.yieldAllStep_(%22return%22in%20b%3Fb%5B%22return%22%5D%3Afunction(c)%7Breturn%7Bvalue%3Ac%2Cdone%3A!0%7D%7D%2Ca%2Cthis.context_%5B%22return%22%5D)%3Bthis.context_%5B%22return%22%5D(a)%3Breturn%20this.nextStep_()%7D%3B%24jscomp.generator.Engine_.prototype.throw_%3Dfunction(a)%7Bthis.context_.start_()%3Bif(this.context_.yieldAllIterator_)return%20this.yieldAllStep_(this.context_.yieldAllIterator_%5B%22throw%22%5D%2Ca%2Cthis.context_.next_)%3Bthis.context_.throw_(a)%3Breturn%20this.nextStep_()%7D%3B%24jscomp.generator.Engine_.prototype.yieldAllStep_%3Dfunction(a%2Cb%2Cc)%7Btry%7Bvar%20e%3Da.call(this.context_.yieldAllIterator_%2Cb)%3B%24jscomp.generator.ensureIteratorResultIsObject_(e)%3Bif(!e.done)return%20this.context_.stop_()%2Ce%3Bvar%20g%3De.value%7Dcatch(p)%7Breturn%20this.context_.yieldAllIterator_%3Dnull%2Cthis.context_.throw_(p)%2Cthis.nextStep_()%7Dthis.context_.yieldAllIterator_%3Dnull%3Bc.call(this.context_%2Cg)%3Breturn%20this.nextStep_()%7D%3B%24jscomp.generator.Engine_.prototype.nextStep_%3Dfunction()%7Bfor(%3Bthis.context_.nextAddress%3B)try%7Bvar%20a%3Dthis.program_(this.context_)%3Bif(a)return%20this.context_.stop_()%2C%7Bvalue%3Aa.value%2Cdone%3A!1%7D%7Dcatch(b)%7Bthis.context_.yieldResult%3Dvoid%200%2Cthis.context_.throw_(b)%7Dthis.context_.stop_()%3Bif(this.context_.abruptCompletion_)%7Ba%3Dthis.context_.abruptCompletion_%3Bthis.context_.abruptCompletion_%3Dnull%3Bif(a.isException)throw%20a.exception%3Breturn%7Bvalue%3Aa%5B%22return%22%5D%2Cdone%3A!0%7D%7Dreturn%7Bvalue%3Avoid%200%2Cdone%3A!0%7D%7D%3B%24jscomp.generator.Generator_%3Dfunction(a)%7Bthis.next%3Dfunction(b)%7Breturn%20a.next_(b)%7D%3Bthis%5B%22throw%22%5D%3Dfunction(b)%7Breturn%20a.throw_(b)%7D%3Bthis%5B%22return%22%5D%3Dfunction(b)%7Breturn%20a.return_(b)%7D%3Bthis%5BSymbol.iterator%5D%3Dfunction()%7Breturn%20this%7D%7D%3B%24jscomp.generator.createGenerator%3Dfunction(a%2Cb)%7Bvar%20c%3Dnew%20%24jscomp.generator.Generator_(new%20%24jscomp.generator.Engine_(b))%3B%24jscomp.setPrototypeOf%26%26a.prototype%26%26%24jscomp.setPrototypeOf(c%2Ca.prototype)%3Breturn%20c%7D%3B%24jscomp.asyncExecutePromiseGenerator%3Dfunction(a)%7Bfunction%20b(e)%7Breturn%20a.next(e)%7Dfunction%20c(e)%7Breturn%20a%5B%22throw%22%5D(e)%7Dreturn%20new%20Promise(function(e%2Cg)%7Bfunction%20p(t)%7Bt.done%3Fe(t.value)%3APromise.resolve(t.value).then(b%2Cc).then(p%2Cg)%7Dp(a.next())%7D)%7D%3B%24jscomp.asyncExecutePromiseGeneratorFunction%3Dfunction(a)%7Breturn%20%24jscomp.asyncExecutePromiseGenerator(a())%7D%3B%24jscomp.asyncExecutePromiseGeneratorProgram%3Dfunction(a)%7Breturn%20%24jscomp.asyncExecutePromiseGenerator(new%20%24jscomp.generator.Generator_(new%20%24jscomp.generator.Engine_(a)))%7D%3B(function()%7Bvar%20a%2Cb%2Cc%2Ce%2Cg%2Cp%2Ct%2CH%2Cu%2CA%2Cx%2CI%2CB%2CJ%2CC%2CD%2CK%2CL%2CE%2CM%2CN%2CO%2Cw%2Cy%2CF%2Cz%2CP%2CG%2CQ%2Cv%3Breturn%20%24jscomp.asyncExecutePromiseGeneratorProgram(function(q)%7Bswitch(q.nextAddress)%7Bcase%201%3Areturn%22chunithm-net-eng.com%22!%3D%3Dwindow.location.hostname%26%26(alert(%22%5Bchuni_intl_viewer%5D%20This%20tools%20could%20only%20be%20used%20under%20chunithm-net%20international.%22)%2Cwindow.location.replace(%22https%3A%2F%2Fchunithm-net-eng.com%2F%22))%2Ca%3D%5B%5D%2Cb%3Dfunction()%7Bvar%20d%2Ch%3Breturn%20%24jscomp.asyncExecutePromiseGeneratorProgram(function(f)%7Bif(1%3D%3Df.nextAddress)return%20f.yield(fetch(%22https%3A%2F%2Fchunithm-net-eng.com%2Fmobile%2Frecord%2FmusicGenre%2F%22)%2C3)%3Bif(2!%3Df.nextAddress)return%20f.yield(f.yieldResult.text()%2C2)%3Bd%3Df.yieldResult%3Bh%3Ddocument.createElement(%22div%22)%3Bh.innerHTML%3Dd%3Breturn%20f%5B%22return%22%5D(h.querySelector(%22form%22).token.value)%7D)%7D%2Cc%3Dfunction()%7Bvar%20d%2Ch%2Cf%2Cr%2Cm%2Ck%2Cn%3Breturn%20%24jscomp.asyncExecutePromiseGeneratorProgram(function(l)%7Bswitch(l.nextAddress)%7Bcase%201%3Areturn%20d%3Dnew%20FormData%2Cd.append(%22genre%22%2C99)%2Ch%3Dd%2Cf%3Dh.append%2Cl.yield(b()%2C2)%3Bcase%202%3Areturn%20f.call(h%2C%22token%22%2Cl.yieldResult)%2Cl.yield(fetch(%22https%3A%2F%2Fchunithm-net-eng.com%2Fmobile%2Frecord%2FmusicGenre%2FsendMaster%22%2C%7Bheaders%3A%7B%22Cache-Control%22%3A%22no-cache%22%7D%2Cmethod%3A%22POST%22%2Cbody%3Ad%7D)%2C3)%3Bcase%203%3Areturn%20r%3Dl.yieldResult%2Cl.yield(r.text()%2C4)%3Bcase%204%3Areturn%20m%3Dl.yieldResult%2Ck%3Ddocument.createElement(%22div%22)%2Ck.innerHTML%3Dm%2Cn%3Ddocument.createDocumentFragment()%2Cn.appendChild(k)%2Cl%5B%22return%22%5D(n)%7D%7D)%7D%2Cq.yield(c()%2C2)%3Bcase%202%3Ae%3Dq.yieldResult%2Cg%3D%5B%5D.concat(%24jscomp.arrayFromIterable(e.querySelectorAll(%22form%22)))%2Cg.shift()%2Cp%3Dfunction(d%2Ch)%7Breturn%20Math.floor(100*(h%2B(1007500%3C%3Dd%3F2%3A1005E3%3C%3Dd%3F1.5%2B10*(d-1005E3)%2F5E4%3A1E6%3C%3Dd%3F1%2B5*(d-1E6)%2F5E4%3A975E3%3C%3Dd%3F2*(d-975E3)%2F5E4%3A95E4%3C%3Dd%3F-1.5%2B3*(d-95E4)%2F5E4%3A925E3%3C%3Dd%3F-3%2B3*(d-925E3)%2F5E4%3A-5%2B4*(d-9E5)%2F5E4)))%2F100%7D%2Ct%3Dfunction(d%2Ch)%7Bvar%20f%2Cr%2Cm%2Ck%2Cn%3Breturn%20%24jscomp.asyncExecutePromiseGeneratorProgram(function(l)%7Bif(1%3D%3Dl.nextAddress)return%20f%3Dnew%20FormData%2Cf.append(%22idx%22%2Cd)%2Cf.append(%22token%22%2Ch)%2Cl.yield(fetch(%22https%3A%2F%2Fchunithm-net-eng.com%2Fmobile%2Frecord%2FmusicGenre%2FsendMusicDetail%2F%22%2C%7Bheaders%3A%7B%22Cache-Control%22%3A%22no-cache%22%7D%2Cmethod%3A%22POST%22%2Cbody%3Af%7D)%2C2)%3Bif(3!%3Dl.nextAddress)return%20r%3Dl.yieldResult%2Cl.yield(r.text()%2C3)%3Bm%3Dl.yieldResult%3Bk%3Ddocument.createElement(%22div%22)%3Bk.innerHTML%3Dm%3Bn%3Ddocument.createDocumentFragment()%3Bn.appendChild(k)%3Breturn%20l%5B%22return%22%5D(n)%7D)%7D%2CH%3Dfunction(d)%7Bvar%20h%3Dfunction(k)%7Breturn%20Number(%5B%5D.concat(%24jscomp.arrayFromIterable(k)).filter(function(n)%7Breturn%22%2C%22!%3D%3Dn%7D).join(%22%22))%7D%2Cf%3D%5B%5D%2Cr%3Dd.querySelector(%22.play_musicdata_title%22).innerText%2Cm%3Dd.querySelector(%22.bg_expert%22)%3Bd%3Dd.querySelector(%22.bg_master%22)%3Bm%26%26(f%5B0%5D%3D%7B%7D%2Cf%5B0%5D.title%3Dr%2Cf%5B0%5D.difficulty%3D%22EXP%22%2Cf%5B0%5D.date%3Dm.querySelector(%22.musicdata_detail_date%22).innerText%2Cf%5B0%5D.score%3Dh(m.querySelector(%22.text_b%22).innerText)%2Cf%5B0%5D.playCount%3Dh(m.querySelector(%22.text_n%22).nextElementSibling.innerText))%3Bd%26%26(f%5B1%5D%3D%7B%7D%2Cf%5B1%5D.title%3Dr%2Cf%5B1%5D.difficulty%3D%22MAS%22%2Cf%5B1%5D.date%3Dd.querySelector(%22.musicdata_detail_date%22).innerText%2Cf%5B1%5D.score%3Dh(d.querySelector(%22.text_b%22).innerText)%2Cf%5B1%5D.playCount%3Dh(d.querySelector(%22.text_n%22).nextElementSibling.innerText))%3Breturn%20f.filter(function(k)%7Breturn%20k%7D)%7D%2Cu%3Ddocument.createElement(%22div%22)%2Cu.style.fontSize%3D%221.5rem%22%2Cu.style.padding%3D%221rem%22%2Cdocument.body.insertAdjacentElement(%22afterBegin%22%2Cu)%2CA%3D%24jscomp.makeIterator(g.entries())%2Cx%3DA.next()%3Bcase%203%3Aif(x.done)return%20u.innerText%3D%22Fetch%20Complete%22%2Cq.yield(fetch(%22https%3A%2F%2Fapi.chunirec.net%2F1.3%2Fmusic%2Fshowall.json%3Ftoken%3D252db1d77e53f52fd85c5b346fef7c90e345b3b3f0b12018a2074298e4b35182%22)%2C8)%3BI%3Dx.value%3BB%3D%24jscomp.makeIterator(I)%3BJ%3DB.next().value%3BC%3DB.next().value%3Bu.innerText%3D%22Fetching%20song%20data%3A%20%22%2B(J%2B1)%2B%22%20%2F%20%22%2Bg.length%3BD%3Da.push%3BK%3DD.apply%3BL%3Da%3BE%3D%24jscomp%3BM%3DE.arrayFromIterable%3BN%3DH%3Breturn%20q.yield(t(C.idx.value%2CC.token.value)%2C6)%3Bcase%206%3AK.call(D%2CL%2CM.call(E%2CN(q.yieldResult)))%3Bx%3DA.next()%3Bq.jumpTo(3)%3Bbreak%3Bcase%208%3Areturn%20q.yield(q.yieldResult.json()%2C7)%3Bcase%207%3AO%3Dq.yieldResult%3Ba.map(function(d)%7Bvar%20h%3DO.find(function(f)%7Breturn%20f.meta.title%3D%3D%3Dd.title%7D).data%5Bd.difficulty%5D%5B%22const%22%5D%3Bd.rating%3Dp(d.score%2Ch)%3Bd.songConst%3Dh%3Breturn%20d%7D)%3Ba.sort(function(d%2Ch)%7Breturn%20h.rating-d.rating%7D)%3Bw%3Ddocument.createElement(%22table%22)%3By%3Dfunction(d%2Ch)%7Bh%3Dvoid%200%3D%3D%3Dh%3F!1%3Ah%3Bfor(var%20f%3Ddocument.createElement(%22tr%22)%2Cr%3Dh%3F%22th%22%3A%22td%22%2Cm%3D%24jscomp.makeIterator(d)%2Ck%3Dm.next()%3B!k.done%3Bk%3Dm.next())%7Bk%3Dk.value%3Bvar%20n%3Ddocument.createElement(r)%3Bn.innerText%3Dk%3Bn.style.padding%3D%220.5rem%22%3Bf.appendChild(n)%7Dreturn%20f%7D%3Bw.appendChild(y(%5B%22Song%20Name%22%2C%22Difficulty%22%2C%22Constant%22%2C%22Score%22%2C%22Rating%22%5D%2C!0))%3BF%3D%24jscomp.makeIterator(a.entries())%3Bfor(z%3DF.next()%3B!z.done%3Bz%3DF.next())P%3Dz.value%2CG%3D%24jscomp.makeIterator(P)%2CQ%3DG.next().value%2Cv%3DG.next().value%2Cw.appendChild(y(%5Bv.title%2Cv.difficulty%2Cv.songConst%2Cv.score%2Cv.rating%5D))%2C29%3D%3D%3DQ%26%26w.appendChild(y(%5B%22%3D%3D%3D%3D%3D(Best%2030%20Border)%3D%3D%3D%3D%3D%22%5D))%3Bdocument.body.insertAdjacentElement(%22afterBegin%22%2Cw)%3Bq.jumpToEnd()%7D%7D)%7D)()%7D)()

```
4. Open https://chunithm-net-eng.com/ and run the bookmarklet
5. Wait for the program to finish

# Tips
- If you want to run the bookmarklet on mobile chrome, type the name of the bookmark at url bar, and then click on the bookmark to execute the code.
- [How can a bookmarklet be ADDED on mobile Chrome without copying and pasting? - Android Enthusiasts Stack Exchange](https://android.stackexchange.com/questions/159308/how-can-a-bookmarklet-be-added-on-mobile-chrome-without-copying-and-pasting)
