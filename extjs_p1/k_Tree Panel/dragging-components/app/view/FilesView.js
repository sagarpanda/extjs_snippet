/**
 * @class MyApp.view.FilesView
 * @extends Ext.view.View
 *  <am>
 * This is the definition of the files data view component
 */
Ext.define('MyApp.view.FilesView', {
    extend 		: 'Ext.view.View',
   	alias       : 'widget.filesview',
    store		: 'Files',
	emptyText	:'No files available',
	itemSelector: 'div.file',
	frame:false,
	ddGroup:undefined,
	style:{
		backgroundColor:'white'
	},
	mixins: { //drag an drop configuration mixin
		draggable   : 'Ext.ux.DataView.Draggable'
	},
	tpl:[
		'<tpl for =".">',
			'<div class="file">',
				'<div class="content">',
					'<img src="resources/images/invoice64.png"  height="60" width="60">',
				'</div>',					
				'<b>{name}</b></br>',
				'<spam>{[Ext.util.Format.date(values.created_at)]}</spam>',
		    '</div>',
		'</tpl>'].join(''),
	initComponent : function(){
		var me = this;
	    this.mixins.draggable.init(this, {
	            ddConfig: {
	                ddGroup: 'filesDDGroup'
	            }
	    });
		this.callParent();
	}
});