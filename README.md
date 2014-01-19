jquery.flexibleCssSize
==================

指定したタグの横幅を基準に、指定した基準サイズとの割合でcssを変更するjQuery Plugin


仕様
------
1. 変更したいcssを指定して
2. 基準となる幅のタグを指定して
3. 基準となるサイズを指定して
4. min or max で大きさを制御する
5. その基準より大きさを調整したい場合に調整したい値を入力

使い方
------
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jquery.flexibleCssSize.js"></script>

オプション
------

 * css : どのスタイルに適応したいか
 * content : どのコンテンツの幅を基準とするか
 * standard : サイズが変更になる基準の幅
 * minSize : 小さくなりすぎないようにサイズ指定
 * maxSize : 大きくなりすぎないようにサイズ指定
 * minParcent : 小さくなりすぎないように%指定
 * maxParcent : 大きくなりすぎないように%指定
 （※ 両方指定されていても小さい方を基準にします。）
 * adjustment : 調整したい場合

### 初期設定 ###

	css : "font-size",
	content : $(window),
	standard : 480,
	minSize : 0,
	maxSize : 1000,
	minParcent : 0,
	maxParcent : 1,
	adjustment : 0


例
------

	$("header,main,footer").flexibleCssSize({
		css: "zoom", // zoomの値を変更
		content : $('body'), //bodyの横幅を基準として
		minParcent : 0.6, // 最小0.6%
		maxParcent : 1.3, //最大1.3%
		standard : $('header').width() //headerの横幅を基準とする
	});

ライセンス
----------
+ Copyright 2014 &copy; kamem
+ [http://www.opensource.org/licenses/mit-license.php][mit]

[develo.org]: http://develo.org/ "develo.org"
[MIT]: http://www.opensource.org/licenses/mit-license.php