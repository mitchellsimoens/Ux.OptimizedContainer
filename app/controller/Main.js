Ext.define('MyApp.controller.Main', {
    extend : 'Ext.app.Controller',

    config : {
        control : {
            'button[ui=forward]' : {
                tap : 'goForward'
            },
            'button[ui=back]'    : {
                tap : 'goBack'
            }
        }
    },

    goForward : function(btn) {
        var cnt = btn.up('main');

        cnt.setActiveItem(1);
    },

    goBack : function(btn) {
        var cnt = btn.up('main');

        cnt.setActiveItem(0);
    }
});