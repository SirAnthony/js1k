f='fillStyle',
U='forEach',
V='length',
q='unshift',
G='fill',
J='fillRect',
Q='fillText',
Z=Math.abs,
W=a.width,
H=a.height,
j=120,
u=70;
O=function(w,h,x,y,X,Y,F,r,cd){
	var s={
		z:[w,h],
		p:{x:x,y:y},
		v:{x:X,y:Y},
		T:function(t){
			s.p.x += s.v.x*t;
			s.p.y += s.v.y*t;
			s.p.x <- w && (s==P?s.p.x=-w+1:s.E());
			cd && s.C(P) && (P.E() || s.E());
			s == P && (s.p.x > (W - w) && (s.p.x = W - w)) || (s.p.y < -h || s.p.y > H) && s.E();
		},
		D:function(){
			c[f] = F;
			c[J](s.p.x,s.p.y,w,h);
			c[G]();
		},
		E:function(){
			(s==P && (--s.l>0) && (s.p.x=x,s.p.y=y)) ||
			M[r].splice(M[r].indexOf(s),1);
			P.l > 0 && P.s++;
		},
		C:function(o){
			return (Z(o.p.x-s.p.x)<(w/2+o.z[0]/2)) &&
				   (Z(o.p.y-s.p.y)<(h/2+o.z[1]/2));
			}
	};
	return s;
};

P=new O(j,u,10,300,0,0,'red',1);
K=function dr(kk,t){
	for(i in t)
		if(kk==i)
			return t[i];
};
C=function(v,px,py) {
	return function(e){
		k = e.keyCode;
		v.x = K(k,px) || 0;
		v.y = K(k,py) || 0;
	}
};
b.onkeydown = C(P.v,{68:1,65:-1},{87:-1,83:1});
b.onkeyup = C(P.v,{68:0,65:0},{87:0,83:0});
N = Date.now;
S=N();
M=[[],[P]];
A=M[0];
B=M[1];
P.l=3;
P.s=0;
R=Math.random;
rd='new O(j,8,W,u+j*A[V],-0.4,0,"white",0);';
function E(d){
	if(!A[V]) while(A[V]<5) A[q](eval(rd));
	d % R() > 0.8 && B[V] < 8 &&
		B[q](new O(j,u,W,R()*H,-R(),0,'yellow',1,1));
	}
c.font="35px Arial";
~function L(){
	requestAnimationFrame(L);
	D=N()-S;
	E(S+=D);
	c.clearRect(0,0,W,H);
	c[f]='gray';
	c[J](0,0,W,H);
	c[G]();
	p=function(o){ o.T(D);o.D(); }
	A[U](p);
	c[Q]("Lives: "+P.l,0,u);
	P.l <= 0 && c[Q]("Game over. Score: "+P.s,W/2.5,250);
	B[U](p);
}()