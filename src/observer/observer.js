var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this._subscribedObservers = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this._subscribedObservers.includes(observer)) {
                _this._subscribedObservers.push(observer);
            }
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this._subscribedObservers.indexOf(observer);
        if (observerIndex !== -1) {
            this._subscribedObservers.splice(observerIndex, 1);
        }
    };
    InputObservable.prototype.publish = function () {
        var _this = this;
        this._subscribedObservers.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        this.element.innerText = observable.element.value;
    };
    return ParagraphObserver;
}());
// Client code
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var p = document.createElement('p');
    document.body.appendChild(p);
    return p;
}
var input1 = new InputObservable(makeInput());
var p1 = new ParagraphObserver(makeParagraph());
input1.subscribe(p1);
input1.element.addEventListener('keyup', function () {
    input1.publish();
});
