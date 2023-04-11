Ext.define('AppSencha.view.Blog', {
    extend: 'Ext.Panel',
    xtype: 'blog',
    
    config: {
        title: 'Posts',
        iconCls: 'maps',
        items: [
            {
                xtype: 'list',        
                width: '100%',
                height: '100%',
                store: 'Poststore',
                itemTpl: '<h1><b>{title:ellipsis(35)}</b></h1> <h3>{published:ellipsis(50)}</h3> <h3>{content:ellipsis(70)}</h3>'
            }
        ]
    }
});