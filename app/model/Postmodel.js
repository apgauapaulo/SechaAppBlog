Ext.define('AppSencha.model.Postmodel', {
    extend: 'Ext.data.Model', 
    config: {
        fields: [
            {
                name: 'title',
                type: 'string'
            }, 
            {
                name: 'published',
                type: 'string'
            },
            {
                name: 'content',
                type: 'string'
            }
        ]
    }
});