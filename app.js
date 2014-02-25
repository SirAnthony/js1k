G = {
	r:'red',
	y:'yellow',
	g:'gray',
	w:'white',
	fs:'fillStyle',
	f:'fill',
	fr:'fillRect',
	ft:'fillText',
	i:'indexOf',
	s:'splice',
	e:'forEach',
	u:'unshift',
	l:'length'
};
abs=Math.abs;
W = a.width;
H = 400;
O = function(w,h,x,y,vx,vy,f,cd,r){
	var s = {
		z:[w,h],
		p:{x:x,y:y},
		v:{x:vx,y:vy},
		T:function(t){
			s.p.x+=s.v.x*t;s.p.y+=s.v.y*t;
			s.p.x < -w && (s==P ? s.p.x=-w+1 : s.E());
			cd && s.C(P) && (P.E() || s.E());
			s==P && (s.p.x > (W-w) && (s.p.x=W-w)) ||
				(s.p.y < -h || s.p.y > H) && s.E();
		},
		D:function(){
			c[G.fs] = f;
			c[G.fr](s.p.x,s.p.y,w,h);
			c[G.f]();
		},
		E:function(){
			((s==P) && ((s.l-- > 0) && (s.p.x=x,s.p.y=y))) ||
			M[r].splice(M[r].indexOf(s),1);
			P.l>=0&&P.s++;
		},
		C:function(o){
			return (abs(o.p.x-s.p.x)<(w/2+o.z[0]/2)) &&
				(abs(o.p.y-s.p.y)<(h/2+o.z[1]/2));
		}
	};
	return s;
};

P=new O(110,70,10,300,0,0,G.r,0,1);
K=function dr(kk, t){
	for(i in t)
		if(kk==i)
			return t[i];
};
V = function(v,px,py) {
	return function(e){
		k=e.keyCode;
		v.x=K(k, px) || 0;
		v.y=K(k, py) || 0;
	}
};
b.onkeydown = V(P.v,{68:1,65:-1},{87:-1,83:1});
b.onkeyup = V(P.v,{68:0,65:0},{87:0,83:0});
N=Date.now;
S=N();M=[[],[P]];A=M[0];B=M[1];P.l=3;P.s=0;
R=Math.random
rd='new O(120,8,W,60+120*A[G.l],-0.4,0,G.w,0,0);';
function E(d){
	!A[G.l] && A[G.u](eval(rd))	&&
		A[G.u](eval(rd)) &&
		A[G.u](eval(rd));
	d%R() > 0.8 && B[G.l] < 8 && B[G.u](
			new O(110,70,W,R()*H,-R(),0,G.y,1,1)
		);
}
c.font = "bold 35px Arial";
~function L(){
	requestAnimationFrame(L);
	D=N()-S;
	E(S+=D);
	c.clearRect(0,0,W,a.height);
	c[G.fs]=G.g;
	c[G.fr](0,0,W,H);
	c[G.f]();
	p=function(o){o.T(D);o.D();}
	A[G.e](p);B[G.e](p);
	c[G.fs] = G.y;
	c[G.ft]("Lives: "+P.l,0,40);
	P.l < 0 && c[G.ft]("Game over. Score: "+P.s,W/2.5,250);
}()