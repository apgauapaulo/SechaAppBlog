Ext.define('AppSencha.view.Details', {
    extend: 'Ext.Panel',
    xtype: 'details',
    config: {
        title: 'Details',
        layout: 'fit',
        scrollable: true,
        styleHtmlContent: true,
        StyleHtmlCls: 'details',
        tpl: '<h1><b>{title}</b></h1> <h3>{published)}</h3> <h3>{content)}</h3>'
    }
});