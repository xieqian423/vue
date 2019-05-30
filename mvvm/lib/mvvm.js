
function MVVM (options) {
    this.$options = options || {};
    var data = this._data = this.$options.data;
    var me  = this;

    this.$compile = new Complie(options.el || document.body, this)
}