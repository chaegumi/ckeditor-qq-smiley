CKEDITOR.plugins.add('qqsmiley', {
	lang : "en,zh-cn",
	icons : 'qqsmiley',
	init : function (editor) {
		editor.addCommand('qqsmiley', new CKEDITOR.dialogCommand('qqsmileyDialog'));

		editor.ui.addButton('QQSmiley', {
			label : editor.lang.qqsmiley.addfa,
			command : 'qqsmiley',
			toolbar : 'insert'
		});

		CKEDITOR.dialog.add('qqsmileyDialog', this.path + 'dialogs/qqsmiley.js');

		if (editor.contextMenu) {
			editor.addMenuGroup('qqsmileyGroup');
			editor.addMenuItem('qqsmileyItem', {
				label : editor.lang.qqsmiley.editfa,
				icon : this.path + 'icons/qqsmiley.png',
				command : 'qqsmiley',
				group : 'qqsmileyGroup'
			});

			editor.contextMenu.addListener(function (element) {
				if (element.getAscendant('img', true)) {
					return {
						qqsmileyItem : CKEDITOR.TRISTATE_OFF
					};
				}
			});
		}

	}
});