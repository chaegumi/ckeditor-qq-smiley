
CKEDITOR.dialog.add('qqsmileyDialog', function (editor) {
	var ref = CKEDITOR.tools.addFunction( function(obj) {
		editor.insertHtml(obj.innerHTML);
	});
	
	var path = '/resource/ckeditor/plugins/qqsmiley/';
	
	 var WX_REPLACE = ['<img src="'  + path + 'icons/qq/s_0.gif" alt="mo-微笑">','<img src="'  + path + 'icons/qq/s_1.gif" alt="mo-撇嘴">','<img src="'  + path + 'icons/qq/s_2.gif" alt="mo-色">','<img src="'  + path + 'icons/qq/s_3.gif" alt="mo-发呆">','<img src="'  + path + 'icons/qq/s_4.gif" alt="mo-得意">','<img src="'  + path + 'icons/qq/s_5.gif" alt="mo-流泪">','<img src="'  + path + 'icons/qq/s_6.gif" alt="mo-害羞">','<img src="'  + path + 'icons/qq/s_7.gif" alt="mo-闭嘴">','<img src="'  + path + 'icons/qq/s_8.gif" alt="mo-睡">','<img src="'  + path + 'icons/qq/s_9.gif" alt="mo-大哭">','<img src="'  + path + 'icons/qq/s_10.gif" alt="mo-尴尬">','<img src="'  + path + 'icons/qq/s_11.gif" alt="mo-发怒">','<img src="'  + path + 'icons/qq/s_12.gif" alt="mo-调皮">','<img src="'  + path + 'icons/qq/s_13.gif" alt="mo-呲牙">','<img src="'  + path + 'icons/qq/s_14.gif" alt="mo-惊讶">','<img src="'  + path + 'icons/qq/s_15.gif" alt="mo-难过">','<img src="'  + path + 'icons/qq/s_16.gif" alt="mo-酷">','<img src="'  + path + 'icons/qq/s_17.gif" alt="mo-冷汗">','<img src="'  + path + 'icons/qq/s_18.gif" alt="mo-抓狂">','<img src="'  + path + 'icons/qq/s_19.gif" alt="mo-吐">','<img src="'  + path + 'icons/qq/s_20.gif" alt="mo-偷笑">','<img src="'  + path + 'icons/qq/s_21.gif" alt="mo-可爱">','<img src="'  + path + 'icons/qq/s_22.gif" alt="mo-白眼">','<img src="'  + path + 'icons/qq/s_23.gif" alt="mo-傲慢">','<img src="'  + path + 'icons/qq/s_24.gif" alt="mo-饥饿">','<img src="'  + path + 'icons/qq/s_25.gif" alt="mo-困">','<img src="'  + path + 'icons/qq/s_26.gif" alt="mo-惊恐">','<img src="'  + path + 'icons/qq/s_27.gif" alt="mo-流汗">','<img src="'  + path + 'icons/qq/s_28.gif" alt="mo-憨笑">','<img src="'  + path + 'icons/qq/s_29.gif" alt="mo-大兵">','<img src="'  + path + 'icons/qq/s_30.gif" alt="mo-奋斗">','<img src="'  + path + 'icons/qq/s_31.gif" alt="mo-咒骂">','<img src="'  + path + 'icons/qq/s_32.gif" alt="mo-疑问">','<img src="'  + path + 'icons/qq/s_33.gif" alt="mo-嘘">','<img src="'  + path + 'icons/qq/s_34.gif" alt="mo-晕">','<img src="'  + path + 'icons/qq/s_35.gif" alt="mo-折磨">','<img src="'  + path + 'icons/qq/s_36.gif" alt="mo-衰">','<img src="'  + path + 'icons/qq/s_37.gif" alt="mo-骷髅">','<img src="'  + path + 'icons/qq/s_38.gif" alt="mo-敲打">','<img src="'  + path + 'icons/qq/s_39.gif" alt="mo-再见">','<img src="'  + path + 'icons/qq/s_40.gif" alt="mo-擦汗">','<img src="'  + path + 'icons/qq/s_41.gif" alt="mo-抠鼻">','<img src="'  + path + 'icons/qq/s_42.gif" alt="mo-鼓掌">','<img src="'  + path + 'icons/qq/s_43.gif" alt="mo-糗大了">','<img src="'  + path + 'icons/qq/s_44.gif" alt="mo-坏笑">','<img src="'  + path + 'icons/qq/s_45.gif" alt="mo-左哼哼">','<img src="'  + path + 'icons/qq/s_46.gif" alt="mo-右哼哼">','<img src="'  + path + 'icons/qq/s_47.gif" alt="mo-哈欠">','<img src="'  + path + 'icons/qq/s_48.gif" alt="mo-鄙视">','<img src="'  + path + 'icons/qq/s_49.gif" alt="mo-委屈">','<img src="'  + path + 'icons/qq/s_50.gif" alt="mo-快哭了">','<img src="'  + path + 'icons/qq/s_51.gif" alt="mo-阴险">','<img src="'  + path + 'icons/qq/s_52.gif" alt="mo-亲亲">','<img src="'  + path + 'icons/qq/s_53.gif" alt="mo-吓">','<img src="'  + path + 'icons/qq/s_54.gif" alt="mo-可怜">','<img src="'  + path + 'icons/qq/s_55.gif" alt="mo-菜刀">','<img src="'  + path + 'icons/qq/s_56.gif" alt="mo-西瓜">','<img src="'  + path + 'icons/qq/s_57.gif" alt="mo-啤酒">','<img src="'  + path + 'icons/qq/s_58.gif" alt="mo-篮球">','<img src="'  + path + 'icons/qq/s_59.gif" alt="mo-乒乓">','<img src="'  + path + 'icons/qq/s_60.gif" alt="mo-咖啡">','<img src="'  + path + 'icons/qq/s_61.gif" alt="mo-饭">','<img src="'  + path + 'icons/qq/s_62.gif" alt="mo-猪头">','<img src="'  + path + 'icons/qq/s_63.gif" alt="mo-玫瑰">','<img src="'  + path + 'icons/qq/s_64.gif" alt="mo-凋谢">','<img src="'  + path + 'icons/qq/s_65.gif" alt="mo-示爱">','<img src="'  + path + 'icons/qq/s_66.gif" alt="mo-爱心">','<img src="'  + path + 'icons/qq/s_67.gif" alt="mo-心碎">','<img src="'  + path + 'icons/qq/s_68.gif" alt="mo-蛋糕">','<img src="'  + path + 'icons/qq/s_69.gif" alt="mo-闪电">','<img src="'  + path + 'icons/qq/s_70.gif" alt="mo-炸弹">','<img src="'  + path + 'icons/qq/s_71.gif" alt="mo-刀">','<img src="'  + path + 'icons/qq/s_72.gif" alt="mo-足球">','<img src="'  + path + 'icons/qq/s_73.gif" alt="mo-瓢虫">','<img src="'  + path + 'icons/qq/s_74.gif" alt="mo-便便">','<img src="'  + path + 'icons/qq/s_75.gif" alt="mo-月亮">','<img src="'  + path + 'icons/qq/s_76.gif" alt="mo-太阳">','<img src="'  + path + 'icons/qq/s_77.gif" alt="mo-礼物">','<img src="'  + path + 'icons/qq/s_78.gif" alt="mo-拥抱">','<img src="'  + path + 'icons/qq/s_79.gif" alt="mo-强">','<img src="'  + path + 'icons/qq/s_80.gif" alt="mo-弱">','<img src="'  + path + 'icons/qq/s_81.gif" alt="mo-握手">','<img src="'  + path + 'icons/qq/s_82.gif" alt="mo-胜利">','<img src="'  + path + 'icons/qq/s_83.gif" alt="mo-抱拳">','<img src="'  + path + 'icons/qq/s_84.gif" alt="mo-勾引">','<img src="'  + path + 'icons/qq/s_85.gif" alt="mo-拳头">','<img src="'  + path + 'icons/qq/s_86.gif" alt="mo-差劲">','<img src="'  + path + 'icons/qq/s_87.gif" alt="mo-爱你">','<img src="'  + path + 'icons/qq/s_88.gif" alt="mo-NO">','<img src="'  + path + 'icons/qq/s_89.gif" alt="mo-OK">','<img src="'  + path + 'icons/qq/s_90.gif" alt="mo-爱情">','<img src="'  + path + 'icons/qq/s_91.gif" alt="mo-飞吻">','<img src="'  + path + 'icons/qq/s_92.gif" alt="mo-跳跳">','<img src="'  + path + 'icons/qq/s_93.gif" alt="mo-发抖">','<img src="'  + path + 'icons/qq/s_94.gif" alt="mo-怄火">','<img src="'  + path + 'icons/qq/s_95.gif" alt="mo-转圈">','<img src="'  + path + 'icons/qq/s_96.gif" alt="mo-磕头">','<img src="'  + path + 'icons/qq/s_97.gif" alt="mo-回头">','<img src="'  + path + 'icons/qq/s_98.gif" alt="mo-跳绳">','<img src="'  + path + 'icons/qq/s_99.gif" alt="mo-挥手">','<img src="'  + path + 'icons/qq/s_100.gif" alt="mo-激动">','<img src="'  + path + 'icons/qq/s_101.gif" alt="mo-街舞">','<img src="'  + path + 'icons/qq/s_102.gif" alt="mo-献吻">','<img src="'  + path + 'icons/qq/s_103.gif" alt="mo-左太极">','<img src="'  + path + 'icons/qq/s_104.gif" alt="mo-右太极">'];
	 
	 var smileystr = '<table>';
	 var t_smileystr = '';
	 for(var i=0; i< WX_REPLACE.length; i++){
		
		if(i % 20 == 0) t_smileystr += '<tr>';
		 
		t_smileystr += '<td><a href="javascript:;" onclick="CKEDITOR.tools.callFunction(' + ref + ', this);">' + WX_REPLACE[i] + '</a></td>';
		
		if(i % 20 == 19) t_smileystr += '</tr>'; 
		
	 }
	 
	 smileystr += t_smileystr + '</table>';

	return {
		title : editor.lang.qqsmiley.editfa,
		resizable : CKEDITOR.DIALOG_RESIZE_BOTH,
		minWidth : 500,
		minHeight : 200,
		contents : [{
				id : 'info',
				elements : [
					{
						id : 'fahtml',
						type : 'html',
						label : '',
						html : smileystr
					}
				]
			}
		],
		// buttons : [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton],
		buttons : [CKEDITOR.dialog.cancelButton],
		onCancel : function () {},
		onload : function () {},
		onOk : function () {
		},
		onShow : function () {
			var selection = editor.getSelection();
			var element = selection.getStartElement();
			if (element)
				element = element.getAscendant('img', true);

			if (!element || element.getAttribute('alt').indexOf('mo-') === -1) {
				element = editor.document.createElement('img');
				this.insertMode = true;
			} else {
				this.insertMode = false;
			}

			this.element = element;
			if (!this.insertMode) {
				this.setupContent(this.element);
			}
		}
	};
});