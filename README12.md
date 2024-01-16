
![react shopping](https://github.com/gogoringhye/read/assets/145514996/c7aa4ae6-edab-46ee-8e22-bfc61e5136c2) 
##### Navigate 사용법 -- 어떤 페이지로 강제 이동(리다이렉트)
##### : react-router-dom의 component 

![image](https://github.com/gogoringhye/read/assets/145514996/acd440b4-0bad-4d52-8a41-aa7a786baef6) 
##### useParams
##### react-router-dom의 hook 
``` http://localhost:3004/products/1 ``` 
![image](https://github.com/gogoringhye/read/assets/145514996/ade7dc66-b1f8-4fd3-95b8-59d6531e3658)

##### url 주소에서 파라미터는 제일 뒤에 있는 1이라는 숫자이다. id 값이 들어와 있다.
##### 파라미터 값을 읽어와야할때 useParams hook이다 
![image](https://github.com/gogoringhye/read/assets/145514996/8cb8cc22-dfe3-4e65-9207-6ea926805a38) 

##### 문법 --> ? 
``` 
```
 product?.img ==> product가 있으면 product.img를 출력하라


# 🎃 쿼리 스트링 : (?뒤에 나오는 전체를 쿼리 스트링이라고함)
```
  쿼리스트링(query string)은 웹 주소(URL)에 추가적인 매개변수를 전달하는 방법 중 하나입니다.
    쿼리스트링은 URL의 끝에 "?" 문자로 시작하며, 이후에 "이름=값" 형태의 매개변수들이 "&" 문자로 구분되어 나열됩니다.
```

navigate(`/?q=${keyword}`) --> 쿼리스트링(query string) 입력하기
