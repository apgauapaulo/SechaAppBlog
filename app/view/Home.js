Ext.define('AppSencha.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    
    config: {
        title: 'Home',
        iconCls: 'home',
        layout: 'fit',
        scrollable: true,
        styleHtmlContent: true,
        StyleHtmlCls: 'homepage',
        html: ['<h1>Welcome to our App Sencha</h1>',
        '<hr>',
        '<p>This is a text sample</p>'
        ].join(""),

        items: [
            {
                xtype: 'titlebar',
                title: 'Home Page',
                docked: 'top'
            }
        ]
    }
})