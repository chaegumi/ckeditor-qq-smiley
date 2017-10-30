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

使用ckeditor做微信公众号回复消息内容编辑器的配置如下：

```javascript

var editor = CKEDITOR.replace('textcontent', {
    height:250,
    allowedContent: true,
    ignoreEmptyParagraph : false,
    enterMode : CKEDITOR.ENTER_BR,
    pasteFromWordRemoveFontStyles:false,
    pasteFromWordRemoveStyles: false,
    extraPlugins : 'autogrow,qqsmiley',
    toolbarGroups: [
	{"name":"insert","groups":["insert"]},
	{"name":"links"}
    ],
    removeButtons: 'PageBreak,Table,Smiley,SpecialChar,Image,HorizontalRule,Iframe,Flash'
});

```
