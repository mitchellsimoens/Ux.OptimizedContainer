Ext.define('Ux.OptimizedContainer', {
    extend : 'Ext.Container',
    xtype  : 'optimizedcontainer',

    config : {
        /**
         * Keeps track of the items when deactivated to be re-added when activated.
         * @private
         */
        optimizedItems : null
    },

    constructor : function(config) {
        var me = this;

        config = config || {};

        config.optimizedItems = config.items || me.config.items;
        config.items          = null;

        me.callParent([config]);

        me.on({
            scope      : me,
            activate   : 'onCntActivate',
            deactivate : 'onCntDeactivate'
        });
    },

    destroy : function() {
        var items = this.getOptimizedItems(),
            i     = 0,
            iLen;

        if (items) {
            iLen = items.length;

            for (; i < iLen; i++) {
                items[i].destroy();
            }
        }

        this.callParent(arguments);
    },

    onCntActivate : function(me) {
        var items = this.getOptimizedItems();

        if (items) {
            this.add(items);

            this.setOptimizedItems(null);
        }
    },

    onCntDeactivate : function(me) {
        var items     = me.getItems(),
            i         = 0,
            optimized = [],
            iLen;

        if (items) {
            items = items.items;
            iLen  = items.length;

            for (; i < iLen; i++) {
                optimized.push(items[i]);
            }

            me.setOptimizedItems(optimized);

            me.removeAll(false, true);
        }
    }
});