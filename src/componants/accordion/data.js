const data= //한번 정하면 못 바꿈
[
	{
		id:'1',
		title:"리액트란 무엇인가?",
		content:"리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다. 리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다. "
	},
	{
		id:'2',
		title:"JSX란 무엇인가?",
		content:"JSX는 XML과 유사한 구문을 사용하여 문서 개체 모델 트리를 생성할 수 있는 JavaScript 확장입니다. "
	},
	{
		id:'3',
		title:"리액트는 왜 쓰는가?",
		content:"뛰어난 컴포넌트 재사용성과 빠른 렌더링 속도"
	},
	{
		id:'4',
		title:"아코디언 컴포넌트란?",
		content:"제목을 클릭하면 내용을 확인할 수 있는 구조"
	}

];

export default data; // data라는 변수를 이 파일의 기본 내보내기로 설정
// default는 한 파일에 하나만 만들 수 있음

//옛날 자바스크립트는 <script src="자바스크립트 파일 이름"></script>
// 해당 자바스크립트 파일을 모두 복붙

//js6
// -> export/import
// 꼭 필요한 것만 복붙해가게(웹 성능을 위해서)
