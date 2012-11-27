Ext.define('MyApp.view.Main', {
    extend : 'Ext.Container',
    xtype  : 'main',

    requires : [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button',
        'Ux.OptimizedContainer'
    ],

    config : {
        layout : 'card',
        items  : [
            {
                xtype : 'optimizedcontainer',
                items : [
                    {
                        xtype  : 'toolbar',
                        docked : 'top',
                        items  : [
                            {
                                text : 'Forward',
                                ui   : 'forward'
                            }
                        ]
                    },
                    {
                        xtype : 'fieldset',
                        title : 'Some Fields',
                        items : [
                            {
                                xtype : 'textfield',
                                label : 'One Field'
                            },
                            {
                                xtype : 'textfield',
                                label : 'One Field'
                            }
                        ]
                    },
                    {
                        xtype : 'button',
                        text  : 'Hello',
                        ui    : 'confirm'
                    }
                ]
            },
            {
                html  : 'All items from first item should be unrendered',
                items : [
                    {
                        xtype  : 'toolbar',
                        docked : 'top',
                        items  : [
                            {
                                xtype : 'button',
                                text  : 'Go Back',
                                ui    : 'back'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
