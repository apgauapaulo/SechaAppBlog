Ext.define('AppSencha.view.PostContainer', {
    extend: 'Ext.NavigationView',
    xtype: 'postContainer',
    config: {
        title: 'Posts',
        iconCls: 'maps',
        items: [
            {
                xtype: 'blog'
            }
        ]
    }
})