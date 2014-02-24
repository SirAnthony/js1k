G = {
	r:'red',
	y:'yellow',
	g:'gray',
	w:'white',
	fs:'fillStyle',
	f:'fill',
	fr:'fillRect',
	ft:'fillText',
};
gw = a.width;
gh = 400;
O = function(w,h,x,y,vx,vy,fs,cd){
	var s = {
		z:[w,h],
		p:{x:x,y:y},
		v:{x:vx,y:vy},
		t:function(t){
			s.p.x+=s.v.x*t;s.p.y+=s.v.y*t;
			s.p.x < -w && (s==pl ? s.p.x=-w+1 : s.e());
			cd && s.cl(pl) && (pl.e() || s.e());
			s==pl && (s.p.x > (gw-w) && (s.p.x=gw-w)) ||
				(s.p.y < -h || s.p.y > gh) && s.e();
		},
		d:function(){
			c[G.fs] = fs;
			c[G.fr](s.p.x,s.p.y,w,h);
			c[G.f]();
		},
		e:function(){
			((s==pl) && ((s.l-- > 0) && (s.p.x=x,s.p.y=y))) ||
			om.splice(om.indexOf(s),1);
		},
		cl:function(o){
			return (Math.abs(o.p.x-s.p.x)<(w/2+o.z[0]/2)) &&
				(Math.abs(o.p.y-s.p.y)<(h/2+o.z[1]/2));
		}
	}
	return s;
};

pl=new O(110,70,10,300,0,0,G.r);
function dr(kk, t){
	for(i in t)
		if(kk==i)
			return t[i];
};
kev = function(v,px,py) {
	return function(e){
		v.x=dr(e.keyCode, px) || 0;
		v.y=dr(e.keyCode, py) || 0;
	}
};
b.onkeydown = kev(pl.v,{68:1,65:-1},{87:-1,83:1});
b.onkeyup = kev(pl.v,{68:0,65:0},{87:0,83:0});
dn=Date.now;
ts=dn();
om=[pl];
pl.l=3;
function E(){
	if (om.length < 2)
		om.unshift(
			new O(120,8,gw,60,-0.4,0,G.w),
			new O(120,8,gw,180,-0.4,0,G.w),
			new O(120,8,gw,300,-0.4,0,G.w)
		);
	if (om.length < 5)
		om.unshift(
			new O(110,70,gw,60,-0.4,0,G.y,1)
		);
}
c.font = "bold 35px Arial";
(function L(){
	requestAnimationFrame(L);
	dt=dn()-ts;
	ts+=dt;
	E();
	c.clearRect(0,0,gw,gh);
	c[G.fs]=G.g;
	c[G.fr](0,0,gw,gh);
	c[G.f]();
	om.forEach(function(o){
		o.t(dt);
		o.d();
	})
	c[G.fs] = G.y;
	c[G.ft]("Lives: "+pl.l,0,40);
	pl.l < 0 && c[G.ft]("Game over",gw/2.5,250);
})()