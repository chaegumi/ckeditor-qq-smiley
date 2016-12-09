# ckeditor-qq-smiley
ckeditor的qq表情插件

# Add-on Installation Instructions
If you want to add the plugin manually, you will need to:

Extract the downloaded plugin .zip into the plugins folder of your CKEditor installation. Example:

`http://example.com/ckeditor/plugins/qqsmiley`

Enable the plugin by using the extraPlugins configuration setting. Example:

```javascript

CKEDITOR.editorConfig = function(config){
	config.extraPlugins = 'qqsmiley';
};	

```	
