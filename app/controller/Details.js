Ext.define('AppSencha.controller.Details', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            postContainer: 'postContainer'
        },
        control: {
            'postContainer blog list': {
                itemtap: function(list, index, target, record){
                    var detailsView = Ext.create('AppSencha.view.Details');
                    detailsView.setData(record.data);
                    this.getPostContainer().push(detailsView);
                }
            }
        }
    }
});
