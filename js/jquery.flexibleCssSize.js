/**
 *	jQuery flexibleCssSize.
 *	jQuery required.
 *	
 *	* Copyright 2014 (c) kamem
 *	* http://develo.org/
 *	* Licensed Under the MIT.
 *	
 *	Date: 2014.01.19
 *	
 *	* css : どのスタイルに適応したいか
 *	* content : どのコンテンツの幅を基準とするか
 *	* standard : サイズが変更になる基準の幅
 *	* minSize : 小さくなりすぎないようにサイズ指定
 *	* maxSize : 大きくなりすぎないようにサイズ指定
 *	* minParcent : 小さくなりすぎないように%指定
 *	* maxParcent : 大きくなりすぎないように%指定
 *	* ※ 両方指定されていても小さい方を基準にします。
 *	* adjustment : 調整したい場合
 *	
 *	@class flexibleCssSize
 */
 
(function($){

$.fn.flexibleCssSize = function(options) {
	var $content = this,
		c = $.extend({
			css : "font-size",
			content : $(window),
			standard : 480,
			minSize : 0,
			maxSize : 1000,
			minParcent : 0,
			maxParcent : 1,
			adjustment : 0
		},options),

		//どこの幅を基準にするか
		width = c.content.width(),
	
		//基準になる横幅
		standard = c.standard,
	
		//最低と最高のサイズ
		minSize = c.minSize,
		maxSize = c.maxSize,
	
		//最低と最高の%
		minParcent = c.minParcent,
		maxParcent = c.maxParcent,
	
		//調節
		adjustment = c.adjustment,
	
		// css選択
		css = c.css,
	
		//基準のサイズ （pxがある場合は数字のみ抜き出す）
		size_default = $content.css(css).replace(/px/, '');

	/**
	 *	指定したmin,maxに合わせてcssのサイズを調整
	 *	
	 *	@method size
	 */
	function size() {
		var parcent = width/standard,
			size = (size_default * parcent) + adjustment,

			min = (minSize > size_default * minParcent) ? minSize : size_default * minParcent,
			max = (maxSize < size_default * maxParcent) ? maxSize : size_default * maxParcent;

		if(min < size && max > size) {
			$content.css(css,size);
		}
		else if(min > size) {
			$content.css(css,min);
		}
		else if(max < size) {
			$content.css(css,max);
		};

		if(css == "width") {
			$content.css("height","auto");
		};
	};

	size();

	$(window).bind("orientationchange resize",function(){
		width = c.content.width();

		size();
	});
}

}(jQuery));