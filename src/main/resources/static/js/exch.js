function showTab(tabId) {
	// 모든 탭의 내용을 감춤
	document.querySelectorAll('.tab-content').forEach(function(tabContent) {
		tabContent.style.display = 'none';
	});
	// 선택한 탭의 내용을 보이게 함
	document.getElementById(tabId + '-content').style.display = 'block';
}

$(() => {
	// 현재 페이지 주소 가져오기
	var currentPageURL = window.location.href;

	// 현재 페이지의 경로 가져오기
	var currentPagePathname = window.location.pathname;

	// 현재 페이지의 호스트(도메인) 가져오기
	var currentHost = window.location.host;

	// 예시: 경로를 '/'를 기준으로 자르기
	var pathSegments = currentPagePathname.split('/');

	// 예시: 특정 위치의 경로 세그먼트 가져오기
	var desiredSegment = pathSegments[3]; // 예시로 세 번째 세그먼트를 가져오는 것입니다.

	// HTML 로드 후 실행
	$(document).ready(function() {
		console.log("ready!");
		document.getElementById('output').innerText = pathSegments[3];
	});
//	document.addEventListener('DOMContentLoaded', function() {
//
//		// HTML 요소에 값 삽입
//	})

	// 결과 출력
	console.log("전체 주소:", currentPageURL);
	console.log("경로:", currentPagePathname);
	console.log("호스트:", currentHost);
	console.log("세그먼트:", pathSegments[3]);
	console.log("특정 세그먼트:", desiredSegment);


//	let 주소;
//	let line = 주소에서자른거
//	let lines = ['top', 'jungle', 'mid', 'adc', 'sup']
	//	for (let i = 0; i < line.length; i++) {
	//		if (line == lines[i]) {
	//			showTab('tab' + (i + 1))
	//		}
	//	}
})