/**
 * @module ui/tree-view.reel
 */
var AbstractComponentActionDelegate = require("ui/abstract/abstract-component-action-delegate").AbstractComponentActionDelegate;

/**
 * @class TreeView
 * @extends Component
 */
exports.TreeView = AbstractComponentActionDelegate.specialize({
    _isExpanded: {
        value: null
    },

    isExpanded: {
        get: function() {
            return this._isExpanded;
        },
        set: function(isExpanded) {
            this._isExpanded = isExpanded;
            if (isExpanded) {
                if (this._controller) {
                    this._controller.open(this._selectedPath);
                }
            }
        }
    },

    _controller: {
        value: null
    },

    controller: {
        get: function() {
            return this._controller;
        },
        set: function(controller) {
            if (this._controller !== controller) {
                this._controller = controller;
            }
        }
    },

    handleBackButtonAction: {
        value: function () {
            if (this.controller.parent) {
                this.controller.open(this.controller.parent.path);
            }
        }
    },

    handleCancelAction: {
        value: function () {
            this._close();
        }
    },

    handleSelectAction: {
        value: function () {
            this.selectedPath = this.selectedNode;
            this.isExpanded = false;
        }
    },

    _close: {
        value: function() {
            this.isExpanded = false;
            this.controller.open(this.selectedPath);
        }
    }
});
