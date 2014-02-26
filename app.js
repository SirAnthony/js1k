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
u=65;
v=83;
z=68;
_=['#FFF','#FF3','red'];
$=eval;
function O(w,h,x,y,X,r,F){
	var s={
		v:X,V:0,
		z:w,Z:h,
		p:x,P:y,
	};
	s.T=function(t){
			s.p += s.v*t;
			s.P += s.V*t;
			s.p < -w && (s==P?s.p=-w+1:s.E());
			F == 1 &&
				P.l>0 && Z(P.p-s.p)<w/2+P.z/2 &&
				Z(P.P-s.P)<h/2+P.Z/2 &&
				(P.E() || s.E());
			F == 2 && s.p > W-w && (s.p = W - w) || (s.P < -h || s.P > H) && s.E();
			c[f] = _[F];
			c[J](s.p,s.P,w,h);
			c[f] = '#06F';
			F && c[J](s.p+v,s.P+5,9,u-9)
			c[G]()
	}
	s.E=function(){
			F == 2 && 0 < --s.l && (s.p=x,s.P=y) ||
			r.splice(r.indexOf(s),1);
			0 < P.l && (P.s+=P.p/9)
	}
	return s;
};
M=[A=[],B=[]];
B[q](P=new O(j,u,9,300,0,B,2));
C=function(d) {
	F=87;
	return function(e){
		k = e.keyCode;
		P.v = d * (k - z ? k - u ? 0 : -1 : 1);
		P.V = d * (k - v ? k - F ? 0 : -1 : 1);
	}
};
b.onkeydown = C(1);
b.onkeyup = C(0);
N = Date.now;
S = N();
P.s = P.l = 3;
R = Math.random;
r = 'new O(j,8,W,u+j*A[V],-0.4,A,0)';
E = 'if(!A[V])while(A[V]<5)A[q]($(r));S%R()>0.8&&B[V]<8&&B[q](new O(j,u,W,R()*H,-R(),B,1))';
c.font='35px Sans';
~function L(){
	requestAnimationFrame(L);
	D=N()-S;
	S+=D;
	$(E);
	c.clearRect(0,0,W,H);
	c[f]='gray';
	c[J](0,0,W,H);
	c[G]();
	p=function(o){ o.T(D) }
	A[U](p);
	c[Q]('♥'+P.l,9,40);
	0 >= P.l && c[Q]('Score: '+~~P.s,W/2.5,250);
	B[U](p);
}()