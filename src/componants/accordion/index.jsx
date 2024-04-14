//스타일시트, 자바스크립트 데이터를 import
import './style.css' //이 파일 옆에 있는 style.css 가져다 쓰기
// ./ : 여기
// ../ : 한번 나가서
// / : 프로젝트 경로
// /src : src폴더로 들어가기
import data from "./data" // 이 파일 옆에 있는 data파일을 data란 키워드로 가져오기
import { useState } from 'react';

export default function Accordion()
{
	// 선택된 title의 번홀르 저장할 state (UI와 이을 변수)
	let [selected,setSelected] = useState(null)// useState를 호출하여 상태 초기값 설정
	//null : 없음
	// 선택되면 setSelected로 id 넣어주기

	// 플래그(단일선택 // 다중선택)
	let [enableMultiSelection, setEnableMultiSelection] = useState(false)
	//false면 단일 선택, true면 다중선택

	let [selectedList,setSelectedList] = useState([])


	function clickTitle(id){
		console.log(id);
		// 아이디를 selected에 넣는다(+한번 더 누르면 내용이 없어지게)==> setSelected(값)
		// useState의 값을 업데이트 하려면 두번째 있는 것을 쓰기

		// 조건체크 : 이미 눌렸다면 없애기 ==> null
		/*if (selected === id) {
			setSelected(null); // 이미 선택된 아이템을 다시 클릭하면 선택 해제
	} else {
			setSelected(id); // 새로운 아이템 선택
	}*/
		

		id !== selected ? setSelected(id) : setSelected(null)
	}
	function multiSelectTitle(id){
		//배열의 값을 업데이트하기 위해서 ...으로 나눴다가 다시 []로 감싼다.
		//객체의 값을 업데이트하기 위해서 ...으로 나눴다가 다시 {}로 감싼다.
		let copyList=[...selectedList]
		console.log(selectedList.indexOf(id))// 다중선택배열에서 id값을 검사
		//indexOf() : 배열안에서 id를 찾을 수 없으면 -1 리턴함, 찾으면 그 위치를 리턴함

		//있는 지 검사 ==> 없으면 넣기
		let findIndexOfID =selectedList.indexOf(id)
		//위치
		// jsx가 아닌 js문법이므로 if-else쓸 수 있음
		if(findIndexOfID === -1){
			copyList.push(id) //배열에 넣기 push(값)
		}
		else{
			//있었으면 배열에서 없애기 splice(인덱스, 몇개 지울지)
			copyList.splice(findIndexOfID,1)
			alert("새로넣음")
		}
		setSelectedList(copyList)
		console.log(selectedList)

		
	}
	// 다중 선택때는 선택된 것들을 모두 보관 ==> 배열
	//console.log(enableMultiSelection)
	//console.log(selectedList.indexOf(selectedList))

	return(
		<div className='wrapper'>
			<button onClick={()=>{setEnableMultiSelection(!enableMultiSelection)}}>여러가지 고르기 ON/OFF</button>
			<div className='accordion'>
				{
					data.map((element,idx)=>{
						return(
							<div className='item' key={idx}>
								<div className="title" onClick={()=>{
									enableMultiSelection === true ? multiSelectTitle(element.id)
									:clickTitle(element.id)
									
									}}>
									<h3>{element.title}</h3>{/* data[idx].title도 됨 */}
								<span>+</span>
							</div>
							{
								enableMultiSelection === true ?
								selectedList.indexOf(element.id) !==-1 && <div className='content'>{element.content}</div>
								:selected === element.id && <div className='content'>{element.content}</div>
							}

							{	//selected 값이 id와 같은 부분만 content 만들기
								//(selected ===element.id && enableMultiSelection === false)? 
								//<div className="content">{element.content}</div> : null
							}
							
						</div> 
						)
					})
				}
				{/* <div className='item'>
					<div class="title">
						<h3>{data[0].title}</h3>
						<span>+</span>
					</div>
				</div> */}
			</div>
		</div>
	);
}