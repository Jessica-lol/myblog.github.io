
//花花特效
//onload=function(){var click_cnt=0,$html=document.getElementsByTagName("html")[0],$body=document.getElementsByTagName("body")[0];$html.onclick=function(e){var $elem=document.createElement("b");$elem.style.color="#FFC0CB",$elem.style.zIndex=9999,$elem.style.position="absolute",$elem.style.select="none";var x=e.pageX,y=e.pageY;switch($elem.style.left=x-10+"px",$elem.style.top=y-20+"px",clearInterval(anim),++click_cnt){case 10:$elem.innerText="OωO";break;case 20:$elem.innerText="(๑•́ ∀ •̀๑)";break;case 30:$elem.innerText="(๑•́ ₃ •̀๑)";break;case 40:$elem.innerText="(๑•̀_•́๑)";break;case 50:$elem.innerText="（￣へ￣）";break;case 60:$elem.innerText="(╯°口°)╯(┴—┴";break;case 70:$elem.innerText="૮( ᵒ̌皿ᵒ̌ )ა";break;case 80:$elem.innerText="╮(｡>口<｡)╭";break;case 90:$elem.innerText="( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";break;case 100:case 101:case 102:case 103:case 104:case 105:$elem.innerText="(ꐦ°᷄д°᷅)";break;default:$elem.innerText="🌸"}$elem.style.fontSize=10*Math.random()+8+"px";var increase=0,anim;setTimeout((function(){anim=setInterval((function(){150==++increase&&(clearInterval(anim),$body.removeChild($elem)),$elem.style.top=y-20-increase+"px",$elem.style.opacity=(150-increase)/120}),8)}),70),$body.appendChild($elem)}};

//社会主义核心价值观
var a_idx = 0;
jQuery(document).ready(function($) {
	$("body").click(function(e) {
		var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
		var $i = $("<span/>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX,
			y = e.pageY;
		let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
		// console.log(scrolly);  //控制台输出
		// // console.log(y);
		// lord = document.getElementById("color-toggle-icon").getAttribute('data');
		// console.log(lord);
		y = y - scrolly;
		$i.css({
			"-webkit-user-select": "none",
			"-moz-user-select": "none",
			"-o-user-select": "none",
			"user-select": "none",
			"z-index": 999,
			"top": y - 20,
			"left": x,
			"position": "fixed",
			"font-weight": "bold",
			"color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) +
				")"
		});
		$("body").append($i);
		$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});

	});
});

//引入小心心特效
//!function (e, t, a) {function r() {for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");requestAnimationFrame(r)}function n() {var t = "function" == typeof e.onclick && e.onclick;e.onclick = function (e) {t && t(), o(e)}}function o(e) {var a = t.createElement("div");a.className = "heart", s.push({el: a,x: e.clientX - 5,y: e.clientY - 5,scale: 1,alpha: 1,color: c()}), t.body.appendChild(a)}function i(e) {var a = t.createElement("style");a.type = "text/css";try {a.appendChild(t.createTextNode(e))} catch (t) {a.styleSheet.cssText = e}t.getElementsByTagName("head")[0].appendChild(a)}function c() {return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"}var s = [];e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {setTimeout(e, 1e3 / 60)}, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r()}(window, document);

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '😭 不要离开嘛 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '😘 终于回来啦 ~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});

<!--动态线条背景-->
var color_dark = "255,255,255";
var color_light = "0,0,0";
var opacity = '0.8';
var zIndex = "-2";
var count = "200";
// if(lord === "light"){
var Line_act = function(color) {
	function o(w, v, i) {
		return w.getAttribute(v) || i
	}

	function j(i) {
		return document.getElementsByTagName(i)
	}

	function l() {
		var i = j("script"),
			w = i.length,
			v = i[w - 1];
		return {
			l: w,
			z: o(v, "zIndex", -1),
			o: o(v, "opacity", 0.8),
			c: o(v, "color", color),
			n: o(v, "count", 100)
		}
	}

	function k() {
		r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height =
			window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}

	function b() {
		e.clearRect(0, 0, r, n);
		var w = [f].concat(t);
		var x, v, A, B, z, y;
		t.forEach(function(i) {
			i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x -
				0.5, i.y - 0.5, 1, 1);
			for (v = 0; v < w.length; v++) {
				x = w[v];
				if (i !== x && null !== x.x && null !== x.y) {
					B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
					y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(),
						e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x,
							x.y), e.stroke())
				}
			}
			w.splice(w.indexOf(i), 1)
		}), m(b)
	}
	var u = document.createElement("canvas"),
		s = l(),
		c = "c_n" + s.l,
		e = u.getContext("2d"),
		r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
			window.setTimeout(i, 1000 / 45)
		},
		a = Math.random,
		f = {
			x: null,
			y: null,
			max: 20000
		};
	u.id = c;
	u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
	j("body")[0].appendChild(u);
	k(), window.onresize = k;
	window.onmousemove = function(i) {
		i = i || window.event, f.x = i.clientX, f.y = i.clientY
	}, window.onmouseout = function() {
		f.x = null, f.y = null
	};
	for (var t = [], p = 0; s.n > p; p++) {
		var h = a() * r,
			g = a() * n,
			q = 2 * a() - 1,
			d = 2 * a() - 1;
		t.push({
			x: h,
			y: g,
			xa: q,
			ya: d,
			max: 6000
		})
	}
	setTimeout(function() {
		b()
	}, 100)
};


var lord = document.getElementById("color-toggle-icon").getAttribute('data');
if (lord == "light") {
	Line_act(color_dark);
} else {
	Line_act(color_light);
}

// 鼠标移动星星特效
(function() {
	function t() {
		i(), a()
	}

	function i() {
		document.addEventListener("mousemove", o), document.addEventListener("touchmove", e), document.addEventListener(
			"touchstart", e), window.addEventListener("resize", n)
	}

	function n(t) {
		d = window.innerWidth, window.innerHeight
	}

	function e(t) {
		if (t.touches.length > 0)
			for (var i = 0; i < t.touches.length; i++) s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() *
				r.length)])
	}

	function o(t) {
		u.x = t.clientX, u.y = t.clientY, s(u.x, u.y, r[Math.floor(Math.random() * r.length)])
	}

	function s(t, i, n) {
		var e = new l;
		e.init(t, i, n), f.push(e)
	}

	function h() {
		for (var t = 0; t < f.length; t++) f[t].update();
		for (t = f.length - 1; t >= 0; t--) f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1))
	}

	function a() {
		requestAnimationFrame(a), h()
	}

	function l() {
		this.character = "*", this.lifeSpan = 120, this.initialStyles = {
			"-webkit-user-select": "none",
			"-moz-user-select": "none",
			"-o-user-select": "none",
			"user-select": "none",
			position: "fixed",
			top: "0",
			display: "block",
			pointerEvents: "none",
			"z-index": "10000000",
			fontSize: "20px",
			"will-change": "transform"
		}, this.init = function(t, i, n) {
			this.velocity = {
					x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
					y: 1
				}, this.position = {
					x: t - 10,
					y: i - 20
				}, this.initialStyles.color = n /*, console.log(n)*/ , this.element = document.createElement("span"), this.element
				.innerHTML =
				this.character, c(this.element, this.initialStyles), this.update(), document.body.appendChild(this.element)
		}, this.update = function() {
			this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.element.style.transform =
				"translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 120 + ")"
		}, this.die = function() {
			this.element.parentNode.removeChild(this.element)
		}
	}

	function c(t, i) {
		for (var n in i) t.style[n] = i[n]
	}
	var r = ["#D61C59", "#E7D84B", "#1B8798", "#ffaaff", "#aaaaff"],
		d = window.innerWidth,
		u = (window.innerHeight, {
			x: d / 2,
			y: d / 2
		}),
		f = [];
	t()
})();

//运行时间bynote.cn
var now = new Date();

function createtime() {
	var grt = new Date("06/01/2023 14:18:00"); //在此处修改你的建站时间，格式：月/日/年 时:分:秒
	now.setTime(now.getTime() + 250);
	days = (now - grt) / 1000 / 60 / 60 / 24;
	dnum = Math.floor(days);
	hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
	hnum = Math.floor(hours);
	if (String(hnum).length == 1) {
		hnum = "0" + hnum;
	}
	minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
	mnum = Math.floor(minutes);
	if (String(mnum).length == 1) {
		mnum = "0" + mnum;
	}
	seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
	snum = Math.round(seconds);
	if (String(snum).length == 1) {
		snum = "0" + snum;
	}
	document.getElementById("timeDate").innerHTML = "我在这儿等了你 " + dnum + " 天 ";
	document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}
setInterval("createtime()", 250);

// // 气泡
// function qipao() {
//     $('#page-header').circleMagic({
//         radius: 10,
//         density: .2,
//         color: 'rgba(255,255,255,.4)',
//         clearOffset: 0.99
//     });
// }! function(p) {
//     p.fn.circleMagic = function(t) {
//         var o, a, n, r, e = !0,
//             i = [],
//             d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
//             l = this[0];

//         function c() { e = !(document.body.scrollTop > a) }

//         function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }

//         function h() {
//             if (e)
//                 for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
//             requestAnimationFrame(h)
//         }

//         function f() {
//             var t = this;

//             function e() { t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color }
//             t.pos = {}, e(), this.draw = function() { t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
//         }! function() {
//             o = l.offsetWidth, a = l.offsetHeight,
//                 function() {
//                     var t = document.createElement("canvas");
//                     t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
//                 }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
//             for (var t = 0; t < o * d.density; t++) {
//                 var e = new f;
//                 i.push(e)
//             }
//             h()
//         }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
//     }
// }(jQuery);

// // 调用气泡方法
// qipao();


// // 樱花飘落bynote.cn
// var stop, staticx;
// var img = new Image();
// img.src = "/img/樱花.png";

// function Sakura(x, y, s, r, fn) {
// 	this.x = x;
// 	this.y = y;
// 	this.s = s;
// 	this.r = r;
// 	this.fn = fn;
// }
// Sakura.prototype.draw = function(cxt) {
// 	cxt.save();
// 	var xc = 40 * this.s / 4;
// 	cxt.translate(this.x, this.y);
// 	cxt.rotate(this.r);
// 	cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
// 	cxt.restore();
// }
// Sakura.prototype.update = function() {
// 	this.x = this.fn.x(this.x, this.y);
// 	this.y = this.fn.y(this.y, this.y);
// 	this.r = this.fn.r(this.r);
// 	if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
// 		this.r = getRandom('fnr');
// 		if (Math.random() > 0.4) {
// 			this.x = getRandom('x');
// 			this.y = 0;
// 			this.s = getRandom('s');
// 			this.r = getRandom('r');
// 		} else {
// 			this.x = window.innerWidth;
// 			this.y = getRandom('y');
// 			this.s = getRandom('s');
// 			this.r = getRandom('r');
// 		}
// 	}
// }
// SakuraList = function() {
// 	this.list = [];
// }
// SakuraList.prototype.push = function(sakura) {
// 	this.list.push(sakura);
// }
// SakuraList.prototype.update = function() {
// 	for (var i = 0, len = this.list.length; i < len; i++) {
// 		this.list[i].update();
// 	}
// }
// SakuraList.prototype.draw = function(cxt) {
// 	for (var i = 0, len = this.list.length; i < len; i++) {
// 		this.list[i].draw(cxt);
// 	}
// }
// SakuraList.prototype.get = function(i) {
// 	return this.list[i];
// }
// SakuraList.prototype.size = function() {
// 	return this.list.length;
// }

// function getRandom(option) {
// 	var ret, random;
// 	switch (option) {
// 		case 'x':
// 			ret = Math.random() * window.innerWidth;
// 			break;
// 		case 'y':
// 			ret = Math.random() * window.innerHeight;
// 			break;
// 		case 's':
// 			ret = Math.random();
// 			break;
// 		case 'r':
// 			ret = Math.random() * 6;
// 			break;
// 		case 'fnx':
// 			random = -0.5 + Math.random() * 1;
// 			ret = function(x, y) {
// 				return x + 0.5 * random - 1.7;
// 			};
// 			break;
// 		case 'fny':
// 			random = 1.5 + Math.random() * 0.7
// 			ret = function(x, y) {
// 				return y + random;
// 			};
// 			break;
// 		case 'fnr':
// 			random = Math.random() * 0.03;
// 			ret = function(r) {
// 				return r + random;
// 			};
// 			break;
// 	}
// 	return ret;
// }

// function startSakura() {
// 	requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
// 		window.msRequestAnimationFrame || window.oRequestAnimationFrame;
// 	var canvas = document.createElement('canvas'),
// 		cxt;
// 	staticx = true;
// 	canvas.height = window.innerHeight;
// 	canvas.width = window.innerWidth;
// 	canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
// 	canvas.setAttribute('id', 'canvas_sakura');
// 	document.getElementsByTagName('body')[0].appendChild(canvas);
// 	cxt = canvas.getContext('2d');
// 	var sakuraList = new SakuraList();
// 	for (var i = 0; i < 50; i++) {
// 		var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
// 		randomX = getRandom('x');
// 		randomY = getRandom('y');
// 		randomR = getRandom('r');
// 		randomS = getRandom('s');
// 		randomFnx = getRandom('fnx');
// 		randomFny = getRandom('fny');
// 		randomFnR = getRandom('fnr');
// 		sakura = new Sakura(randomX, randomY, randomS, randomR, {
// 			x: randomFnx,
// 			y: randomFny,
// 			r: randomFnR
// 		});
// 		sakura.draw(cxt);
// 		sakuraList.push(sakura);
// 	}
// 	stop = requestAnimationFrame(function() {
// 		cxt.clearRect(0, 0, canvas.width, canvas.height);
// 		sakuraList.update();
// 		sakuraList.draw(cxt);
// 		stop = requestAnimationFrame(arguments.callee);
// 	})
// }
// window.onresize = function() {
// 	var canvasSnow = document.getElementById('canvas_snow');
// }
// img.onload = function() {
// 	startSakura();
// }

// function stopp() {
// 	if (staticx) {
// 		var child = document.getElementById("canvas_sakura");
// 		child.parentNode.removeChild(child);
// 		window.cancelAnimationFrame(stop);
// 		staticx = false;
// 	} else {
// 		startSakura();
// 	}
// }


// var reset=document.getElementById('navbarSupportedContent');
// 奇奇怪怪的修改方法

//   reset.addEventListener('click',function(){
//   	  lord = document.getElementById("color-toggle-icon").getAttribute('data');
// 	  var 	btnLight=document.getElementsByClassName("copy-btn copy-btn-light");
// 	  var   table=document.querySelector('table');
//   	  if(lord=="light")
// 	  {
// 		  btnLight.style.position = "fixed";
// 	  }
  	  
//   })

// const ap = new APlayer({
//     container: document.getElementById('aplayer'),
// 	fixed: true,
// });