
function Compile (el, vm) {
    this.$vm = vm;
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);

    if (this.$el) {
        this.$fragment = this.node2Fragment(this.$el);
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    node2Fragment: function (el) {
        var fragment = document.createDocumentFragment();
        var child;

        while (child = el.firstChild) {
            fragment.appendChild(child);
        }

        return fragment;
    },
    init: function () {
        this.compileElement(this.$fragment)
    },
    compileElement: function (el) {
        var childNodes = el.childNodes,
            t = this;
        
        [].slice.call(childNodes).forEach(function (node) {
            var text = node.textContent;
            var reg = /{{(.*?)}}/;

            if (t.isElementNode(node)) {
                t.compile(node);
            } else if (t.isTextNode(node) && reg.test(text)) {
                t.compileText()
            }
        })
    },
    compile: function () {},
    conpileText: function () {},
    isElementNode: function (node) {
        return node.nodeType === 1;
    },
    isTextNode: function () {
        return nodeType == 3;
    }
}

var updater = {
    textUpdater: function (node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    },
    htmlUpdater: function () {
        
    }
}
