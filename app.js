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
O=function(w,h,x,y,X,F,r,Y){
	var s={
		z:[w,h],
		p:{x:x,y:y},
		v:{x:X,y:0}
	}, D=s.p;
	s.T=function(t){
			D.x += s.v.x*t;
			D.y += s.v.y*t;
			D.x <- w && (s==P?D.x=-w+1:s.E());
			Y && s.C() && (P.E() || s.E());
			s == P && D.x > W-w && (D.x = W - w) || (D.y < -h || D.y > H) && s.E();
			c[f] = F;
			c[J](D.x,D.y,w,h);
			c[G]()
	}
	s.E=function(){
			s==P && 0 < --s.l && (D.x=x,D.y=y) ||
			r.splice(r.indexOf(s),1);
			0 < P.l && P.s++
	}
	s.C=function(){
		return P.l>0 && Z(P.p.x-D.x)<w/2+P.z[0]/2 &&
			Z(P.p.y-D.y)<h/2+P.z[1]/2
	}
	return s;
};
M=[A=[],B=[]];
B[q](P=new O(j,u,10,300,0,'red',B));
K=function(t){
	for(i in t)
		if(k==i)
			return t[i];
};
C=function(px,py) {
	return function(e){
		k = e.keyCode;
		P.v.x = K(px) || 0;
		P.v.y = K(py) || 0;
	}
};
b.onkeydown = C({68:1,65:-1},{87:-1,83:1});
b.onkeyup = C({68:0,65:0},{87:0,83:0});
N = Date.now;
S=N();
P.s=P.l=3;
R=Math.random;
rd='new O(j,8,W,u+j*A[V],-0.4,"white",A);';
function E(d){
	if(!A[V]) while(A[V]<5) A[q](eval(rd));
	d % R() > 0.8 && B[V] < 8 &&
		B[q](new O(j,u,W,R()*H,-R(),'yellow',B,1));
	}
c.font="35px Sans";
~function L(){
	requestAnimationFrame(L);
	D=N()-S;
	E(S+=D);
	c.clearRect(0,0,W,H);
	c[f]='gray';
	c[J](0,0,W,H);
	c[G]();
	p=function(o){ o.T(D) }
	A[U](p);
	c[Q]("♥"+P.l,0,u);
	0 >= P.l && c[Q]("Score: "+P.s,W/2.5,250);
	B[U](p);
}()