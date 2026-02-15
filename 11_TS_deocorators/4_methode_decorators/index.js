var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var Project = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _fixBugInProduction_decorators;
    return _a = /** @class */ (function () {
            function Project() {
                this.budget = (__runInitializers(this, _instanceExtraInitializers), 900);
            }
            Project.prototype.writeTests = function () {
                console.log('Tests are important!!!');
            };
            Project.prototype.fixBugInProduction = function () {
                console.log('Fixing bug in production .... :(((');
            };
            return Project;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _fixBugInProduction_decorators = [logDecoratorInternals1];
            __esDecorate(_a, null, _fixBugInProduction_decorators, { kind: "method", name: "fixBugInProduction", static: false, private: false, access: { has: function (obj) { return "fixBugInProduction" in obj; }, get: function (obj) { return obj.fixBugInProduction; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var project = new Project();
project.fixBugInProduction();
function logDecoratorInternals1(target, propertyKey, descriptor) {
    console.log('target: ');
    console.log(target);
    console.log('propertyKey: ');
    console.log(propertyKey);
    console.log('descriptor: ');
    console.log(descriptor);
}
function logDecoratorInternals2(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('what is this???');
        console.log(this);
        originalMethod.apply(this, args);
    };
}
