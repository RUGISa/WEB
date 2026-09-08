const courseInfo = {
  HTML: { title: '1. HTML — 구조 만들기', color: 'HTML' },
  CSS: { title: '2. CSS — 화면 꾸미기', color: 'CSS' },
  JS: { title: '3. JavaScript — 동작 만들기', color: 'JavaScript' },
  PROJECT: { title: '4. 실전 — 혼자 만들기', color: 'Project' }
};

const baseCss = `body {\n  margin: 0;\n  padding: 40px;\n  font-family: Arial, sans-serif;\n  color: #222;\n}\n`;

const lessons = [
  // HTML — 기초 구조부터 실제 문서 작성까지
  lesson('HTML','웹페이지와 HTML 문서','HTML의 역할','개념',
    '브라우저에 보이는 웹페이지는 먼저 HTML 문서에서 시작합니다. HTML은 화면의 색이나 동작보다 먼저, 어떤 내용이 있고 서로 어떤 관계인지 구조를 전달합니다. 이 레슨에서는 태그를 외우기보다 HTML 파일의 어느 부분이 화면에 표시되는지 먼저 확인합니다.',
    ['브라우저는 HTML 파일을 읽어 화면의 구조를 만듭니다.','head는 문서 정보, body는 사용자가 보는 내용을 담습니다.','body 안의 일반 글자도 텍스트 노드로 표시되며 자동으로 p 태그가 되는 것은 아닙니다.'],
    'HTML 문서 → head(문서 정보) + body(화면 내용)',
    'body 안의 안내 문장 아래에 “브라우저에 보이는 내용”이라는 텍스트를 한 줄 더 직접 입력하세요.',
    '새 태그를 만들 필요는 없습니다. <body>와 </body> 사이에 일반 텍스트를 추가하고 실행 결과를 확인하세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>첫 HTML 문서</title>\n  </head>\n  <body>\n    이 문장은 body 안에 있어서 화면에 보입니다.\n    \n  </body>\n</html>', css:'', js:''},
    f => /<body>[\s\S]*브라우저에 보이는 내용[\s\S]*<\/body>/i.test(f.html),
    [['<!DOCTYPE html>','현재 파일을 HTML5 문서로 해석하라고 브라우저에 알려줍니다.'],['<head>','브라우저 탭 제목, 문자 인코딩처럼 화면 본문이 아닌 문서 정보를 담습니다.'],['<body>','실제 화면에 표시할 내용이 들어갑니다. 태그 없이 적은 글자도 텍스트 노드로 표시됩니다.']]),

  lesson('HTML','태그, 요소 그리고 부모·자식','태그와 중첩','기초',
    'HTML의 구조는 태그를 열고 닫아 요소를 만드는 방식으로 표현합니다. 요소 안에 다른 요소를 넣으면 부모와 자식 관계가 생깁니다. 이 관계를 이해하면 들여쓰기와 문서 구조가 자연스럽게 보이기 시작합니다.',
    ['<p>는 여는 태그, </p>는 닫는 태그이며 둘과 내용 전체를 p 요소라고 부릅니다.','요소 안에 들어간 요소는 자식, 바깥 요소는 부모가 됩니다.','같은 단계의 요소는 형제 관계이며 같은 깊이로 들여쓰는 것이 좋습니다.'],
    '<main>  <h1>제목</h1>  <p>문장</p>  </main>',
    'main 안에 <h1>나의 첫 제목</h1>과 <p>HTML 구조를 배우는 중입니다.</p>를 직접 작성하세요.',
    '두 요소 모두 <main>과 </main> 사이에 있어야 합니다. 자동 태그 닫기와 Enter 자동 들여쓰기를 사용해보세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>태그와 요소</title>\n  </head>\n  <body>\n    <main>\n      \n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<main>[\s\S]*<h1>\s*나의 첫 제목\s*<\/h1>[\s\S]*<p>\s*HTML 구조를 배우는 중입니다\.\s*<\/p>[\s\S]*<\/main>/i.test(f.html),
    [['태그','<h1>처럼 요소의 시작이나 끝을 표시하는 문법입니다.'],['요소','<h1>제목</h1>처럼 여는 태그, 내용, 닫는 태그를 합친 하나의 구조입니다.'],['부모·자식','main 안에 h1과 p가 들어가면 main은 부모, h1과 p는 자식입니다.']]),

  lesson('HTML','속성과 값으로 정보 더하기','속성과 값','기초',
    '태그 이름만으로 부족한 정보는 속성(attribute)으로 추가합니다. 속성은 보통 여는 태그 안에서 이름="값" 형태로 작성합니다. 링크 주소, 이미지 설명, 요소의 언어 같은 정보가 모두 속성입니다.',
    ['속성은 여는 태그 안에 작성합니다.','하나의 요소에 여러 속성을 공백으로 구분해 넣을 수 있습니다.','속성값은 초보 단계에서는 항상 따옴표로 감싸는 습관을 들입니다.'],
    '<태그 속성="값">내용</태그>',
    'a 태그에 href="https://example.com"과 target="_blank" 두 속성을 모두 추가하세요.',
    '여는 <a> 태그 안에 두 속성을 공백으로 구분해 작성합니다. 링크 글자는 그대로 두세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>속성과 값</title>\n  </head>\n  <body>\n    <main>\n      <h1>속성 연습</h1>\n      <a>Example 사이트 열기</a>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<a\s+[^>]*href\s*=\s*["']https:\/\/example\.com\/?["'][^>]*target\s*=\s*["']_blank["'][^>]*>/i.test(f.html) || /<a\s+[^>]*target\s*=\s*["']_blank["'][^>]*href\s*=\s*["']https:\/\/example\.com\/?["'][^>]*>/i.test(f.html),
    [['href="..."','href는 링크가 이동할 목적지를 지정하는 속성입니다.'],['target="_blank"','링크를 새 탭에서 열도록 지정합니다.'],['lang="ko"','html 요소의 주 언어가 한국어임을 알려주는 속성입니다.']]),

  lesson('HTML','제목과 문단','텍스트 태그','기초',
    '글은 웹페이지에서 가장 많이 쓰는 콘텐츠입니다. 제목의 중요도는 h1부터 h6까지, 일반 문장은 p 태그로 표현합니다.',
    ['h1은 한 페이지의 대표 제목에 가깝습니다.','h2~h6은 하위 제목을 계층적으로 나눕니다.','p는 독립된 문단을 표현합니다.'],
    '<h1>제목</h1>  <p>문단</p>',
    'h1 아래에 h2 소제목과 p 문단을 각각 한 줄씩 직접 추가하세요. h2 내용은 “오늘 배울 내용”, p 내용은 “태그의 의미를 구분합니다.”로 작성하세요.',
    '기존 h1과 p 사이에 h2를 추가하고, 그 아래에 새 p 요소도 직접 작성하세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>제목과 문단</title>\n  </head>\n  <body>\n    <main>\n      <h1>HTML 텍스트</h1>\n      <p>제목과 문단을 구분해봅니다.</p>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<h2>\s*오늘 배울 내용\s*<\/h2>/i.test(f.html) && /<p>\s*태그의 의미를 구분합니다\.\s*<\/p>/i.test(f.html),
    [['<h1>','가장 높은 단계의 제목입니다.'],['<h2>','h1 아래의 소제목처럼 사용합니다.'],['<p>','한 덩어리의 문단을 의미합니다.']]),

  lesson('HTML','링크로 페이지 연결하기','링크','기초',
    '웹의 핵심은 문서와 문서를 연결하는 것입니다. a 태그의 href 속성에 이동할 주소를 적으면 링크가 됩니다.',
    ['a는 anchor의 약자입니다.','href에는 이동할 URL이나 파일 경로를 넣습니다.','target="_blank"를 쓰면 새 탭에서 열 수 있습니다.'],
    '<a href="주소">링크 이름</a>',
    'href를 https://example.com 으로 바꾸세요.',
    'a 태그 안의 href="..." 값만 바꾸면 됩니다.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>링크 연습</title>\n  </head>\n  <body>\n    <main>\n      <h1>유용한 링크</h1>\n      <a href="#">Example 사이트</a>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /href\s*=\s*["']https:\/\/example\.com\/?["']/i.test(f.html),
    [['<a>','클릭 가능한 링크를 만드는 태그입니다.'],['href','링크가 이동할 목적지를 지정하는 속성입니다.'],['https://','웹 주소의 통신 방식을 나타냅니다.']]),

  lesson('HTML','이미지 보여주기','이미지','기초',
    'img 태그는 이미지를 화면에 표시합니다. 닫는 태그가 없는 대표적인 빈 요소이며, src와 alt 속성을 자주 함께 사용합니다.',
    ['src에는 이미지 주소나 파일 경로를 넣습니다.','alt는 이미지가 보이지 않을 때 대신 설명하는 글입니다.','접근성을 위해 의미 있는 alt를 작성하는 습관이 중요합니다.'],
    '<img src="image.jpg" alt="이미지 설명">',
    'alt 값을 “산 풍경”으로 바꾸세요.',
    'img 태그의 alt="..." 부분을 수정하세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>이미지 연습</title>\n  </head>\n  <body>\n    <main>\n      <h1>여행 사진</h1>\n      <img src="https://picsum.photos/420/220" alt="사진">\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /alt\s*=\s*["']산 풍경["']/i.test(f.html),
    [['<img>','외부 이미지나 프로젝트 안의 이미지를 화면에 표시합니다.'],['src','source의 약자로 이미지 파일의 위치입니다.'],['alt','이미지를 볼 수 없는 상황에서도 내용을 전달하는 대체 텍스트입니다.']]),

  lesson('HTML','목록 만들기','목록','기초',
    '여러 항목을 묶어 보여줄 때는 목록 태그를 사용합니다. 순서가 중요하지 않으면 ul, 순서가 중요하면 ol을 사용합니다.',
    ['ul은 순서 없는 목록입니다.','ol은 순서 있는 목록입니다.','각 항목은 li 태그로 만듭니다.'],
    '<ul><li>항목</li></ul>',
    '목록에 “JavaScript” 항목을 하나 더 추가하세요.',
    '<li>JavaScript</li>를 ul 안쪽 마지막에 추가하세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>목록 연습</title>\n  </head>\n  <body>\n    <main>\n      <h1>배울 언어</h1>\n      <ul>\n        <li>HTML</li>\n        <li>CSS</li>\n      </ul>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<li>\s*JavaScript\s*<\/li>/i.test(f.html),
    [['<ul>','순서가 중요하지 않은 목록 전체를 감쌉니다.'],['<ol>','1, 2, 3처럼 순서가 있는 목록에 사용합니다.'],['<li>','목록 안의 한 항목을 나타냅니다.']]),

  lesson('HTML','폼과 입력 요소','폼 요소','기초',
    '사용자에게 값을 입력받을 때는 form, label, input, button을 함께 사용합니다. input만 놓는 것보다 label을 연결하면 무엇을 입력해야 하는지 의미가 분명하고 접근성도 좋아집니다.',
    ['form은 하나의 입력 작업을 묶습니다.','label의 for 값과 input의 id를 같게 연결합니다.','placeholder는 label을 대신하는 이름표가 아니라 보조 안내 문구로 사용합니다.'],
    '<label for="name">이름</label>  <input id="name">',
    'input에 id="name"을 추가하고, 바로 위에 <label for="name">이름</label>을 직접 작성하세요.',
    'label의 for와 input의 id가 같은 name인지 확인하세요. 두 값이 연결의 핵심입니다.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>입력 요소 연습</title>\n  </head>\n  <body>\n    <main>\n      <h1>프로필</h1>\n      <form>\n        <input type="text" placeholder="이름을 입력하세요">\n        <button type="submit">저장</button>\n      </form>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<label\s+[^>]*for\s*=\s*["']name["'][^>]*>\s*이름\s*<\/label>/i.test(f.html) && /<input\s+[^>]*id\s*=\s*["']name["'][^>]*>/i.test(f.html),
    [['<input>','한 줄의 텍스트나 숫자 등 다양한 값을 받을 수 있습니다.'],['type','input이 어떤 종류의 입력을 받을지 정합니다.'],['placeholder','입력창 안에 임시 안내 문구를 보여줍니다.']]),

  lesson('HTML','class와 id','요소 이름 붙이기','핵심',
    'CSS나 JavaScript에서 특정 요소를 찾으려면 이름표가 필요합니다. class는 여러 요소에, id는 보통 한 요소에 사용합니다.',
    ['class는 같은 스타일이나 역할을 여러 요소에 공유할 때 좋습니다.','id는 문서에서 고유한 요소를 구분할 때 사용합니다.','CSS와 JS에서 요소를 선택하는 기준이 됩니다.'],
    'class="card"  id="submitButton"',
    '두 번째 p 태그에도 class="note"를 추가하세요.',
    '<p class="note">처럼 class 속성을 붙여보세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>class와 id</title>\n  </head>\n  <body>\n    <main>\n      <h1>메모</h1>\n      <p class="note">첫 번째 메모</p>\n      <p>두 번째 메모</p>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => (f.html.match(/class\s*=\s*["']note["']/gi)||[]).length >= 2,
    [['class','여러 요소가 같은 그룹 이름을 공유할 수 있습니다.'],['id','한 요소를 고유하게 찾을 때 적합합니다.'],['.note','CSS에서 점(.)은 class를 선택한다는 뜻입니다.']]),

  lesson('HTML','표로 관계 있는 데이터 표현하기','표 만들기','핵심',
    '행과 열의 관계가 중요한 데이터는 table로 표현합니다. 단순히 화면을 칸으로 나누기 위해 table을 쓰는 것이 아니라 시간표, 가격표, 성적표처럼 실제 표 데이터에 사용합니다.',
    ['table은 표 전체를 감쌉니다.','tr은 한 행, th는 제목 셀, td는 일반 데이터 셀입니다.','표의 구조와 의미가 분명하면 스크린리더도 데이터를 더 잘 이해할 수 있습니다.'],
    '<table> <tr> <th>제목</th> <td>값</td> </tr> </table>',
    '두 번째 행을 추가하고 <td>JavaScript</td><td>동작</td> 두 셀을 작성하세요.',
    '기존 첫 번째 데이터 행 아래에 새로운 <tr>을 만들고 그 안에 td 두 개를 넣으세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>표 연습</title>\n  </head>\n  <body>\n    <main>\n      <h1>웹 기술 역할</h1>\n      <table>\n        <tr>\n          <th>기술</th>\n          <th>역할</th>\n        </tr>\n        <tr>\n          <td>HTML</td>\n          <td>구조</td>\n        </tr>\n      </table>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<tr>[\s\S]*<td>\s*JavaScript\s*<\/td>[\s\S]*<td>\s*동작\s*<\/td>[\s\S]*<\/tr>/i.test(f.html),
    [['<table>','표 데이터 전체를 감싸는 요소입니다.'],['<tr>','table row의 약자로 표의 한 행을 만듭니다.'],['<th> / <td>','th는 제목 셀, td는 실제 데이터 셀을 의미합니다.']]),

  lesson('HTML','의미 있는 레이아웃','시맨틱 태그','핵심',
    'div만으로도 화면은 만들 수 있지만 header, main, section, footer 같은 태그를 사용하면 구조의 의미가 더 분명해집니다.',
    ['header는 머리말 영역입니다.','main은 페이지의 핵심 콘텐츠입니다.','section은 주제별 묶음, footer는 하단 정보를 나타냅니다.'],
    '<header> <main> <section> <footer>',
    'main 안의 콘텐츠를 section 태그로 감싸세요.',
    '<main> 바로 안쪽에 <section>을 열고, 내용 뒤에서 </section>으로 닫아주세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>의미 있는 레이아웃</title>\n  </head>\n  <body>\n    <header>\n      <h1>나의 사이트</h1>\n    </header>\n    <main>\n      <h2>소개</h2>\n      <p>의미 있는 구조를 연습합니다.</p>\n    </main>\n    <footer>2026</footer>\n  </body>\n</html>', css:'', js:''},
    f => /<main>[\s\S]*<section>[\s\S]*<\/section>[\s\S]*<\/main>/i.test(f.html),
    [['<header>','사이트나 섹션의 시작 부분을 의미합니다.'],['<main>','현재 문서의 중심 콘텐츠를 나타냅니다.'],['<section>','같은 주제의 콘텐츠 묶음을 만듭니다.']]),

  lesson('HTML','HTML 미니 프로젝트','소개 페이지','프로젝트',
    '지금까지 배운 HTML만으로 작은 소개 페이지의 구조를 완성합니다. 아직 예쁘게 꾸미는 것은 신경 쓰지 않고 내용의 의미와 순서에 집중합니다.',
    ['h1로 페이지의 대표 제목을 만듭니다.','ul/li로 기술 목록을 만듭니다.','a로 다른 페이지로 이동하는 링크를 만듭니다.'],
    '구조 먼저 → 디자인은 나중',
    '제공된 전체 HTML 문서의 <main> 안에 제목, 소개 문단, 기술 목록, 링크를 직접 작성해 소개 페이지를 완성하세요.',
    '<h1>, <p>, <ul>/<li>, <a>를 직접 작성하세요. 기존 문서 골격은 유지하고 <main> 안의 콘텐츠는 스스로 구성합니다.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>나의 소개 페이지</title>\n  </head>\n  <body>\n    <main>\n      <!-- 여기부터 직접 소개 페이지의 전체 콘텐츠를 작성하세요. -->\n\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<h1[\s>]/i.test(f.html) && /<p[\s>]/i.test(f.html) && /<ul[\s>]/i.test(f.html) && /<li[\s>]/i.test(f.html) && /<a[\s>]/i.test(f.html),
    [['구조','무엇을 보여줄지 먼저 HTML로 정합니다.'],['계층','h1 아래에 제목과 내용을 자연스럽게 배치합니다.'],['링크','마지막에 사용자가 이동할 수 있는 경로를 제공합니다.']]),

  // CSS — 스타일의 원리와 레이아웃
  lesson('CSS','CSS 규칙의 구조','CSS 문법','기초',
    'CSS는 선택자로 꾸밀 대상을 찾고, 중괄호 안에 속성과 값을 작성합니다. 첫 단계에서는 HTML 연결 방법보다 CSS 한 규칙이 어떻게 읽히는지부터 정확히 익힙니다.',
    ['선택자는 어떤 HTML 요소를 꾸밀지 정합니다.','속성은 무엇을 바꿀지, 값은 어떻게 바꿀지 정합니다.','선언 끝에는 세미콜론을 쓰는 습관을 들입니다.'],
    '선택자 { 속성: 값; }',
    'h1 규칙 안의 color 값을 #344960으로 수정하고, 같은 규칙에 font-size: 36px;를 한 줄 직접 추가하세요.',
    'h1의 중괄호 안에서 속성: 값; 형태를 두 줄로 작성해보세요.',
    {html:'<h1>CSS 시작</h1>\n<p>이제 화면을 꾸며봅니다.</p>', css:'body { padding: 40px; font-family: Arial, sans-serif; }\nh1 { color: red; }', js:''},
    f => /h1\s*\{[^}]*color\s*:\s*#344960\s*;?[^}]*font-size\s*:\s*36px\s*;?[^}]*\}/i.test(f.css),
    [['h1','현재 규칙이 적용될 HTML 요소를 선택합니다.'],['color','글자색을 바꾸는 CSS 속성입니다.'],['#344960','16진수 방식으로 표현한 색상 값입니다.']]),

  lesson('CSS','색상과 배경','색상','기초',
    '글자색은 color, 배경색은 background-color로 지정합니다. 색은 HEX, RGB, HSL 등 여러 방식으로 표현할 수 있습니다.',
    ['color는 글자의 전경색입니다.','background-color는 요소의 배경색입니다.','색상은 디자인 전체에서 너무 많은 종류를 쓰지 않는 것이 좋습니다.'],
    'color: #222;  background-color: #f2f2f0;',
    'body 배경색을 #f2f2f0으로 바꾸세요.',
    'body 규칙 안에 background-color를 수정하세요.',
    {html:'<main>\n  <h1>차분한 화면</h1>\n  <p>배경색을 바꿔보세요.</p>\n</main>', css:'body {\n  margin: 0;\n  padding: 40px;\n  background-color: white;\n  color: #222;\n  font-family: Arial, sans-serif;\n}', js:''},
    f => /background-color\s*:\s*#f2f2f0\s*;?/i.test(f.css),
    [['color','텍스트의 색을 결정합니다.'],['background-color','요소의 안쪽 배경색을 결정합니다.'],['HEX','웹에서 자주 쓰는 #RRGGBB 형태의 색상 표현입니다.']]),

  lesson('CSS','글자 크기와 굵기','타이포그래피','기초',
    '읽기 좋은 웹사이트는 글자 크기, 굵기, 줄간격이 잘 정리되어 있습니다. font-size, font-weight, line-height를 자주 사용합니다.',
    ['font-size는 글자 크기입니다.','font-weight는 글자 굵기입니다.','line-height는 줄과 줄 사이의 높이를 정합니다.'],
    'font-size: 32px; font-weight: 700; line-height: 1.5;',
    'h1의 font-size를 42px로 바꾸세요.',
    'h1 CSS의 28px를 42px로 수정하세요.',
    {html:'<h1>좋은 타이포그래피</h1>\n<p>본문은 충분한 줄간격을 주면 읽기 편합니다.</p>', css:baseCss + '\nh1 { font-size: 28px; font-weight: 700; }\np { line-height: 1.7; }', js:''},
    f => /h1\s*\{[^}]*font-size\s*:\s*42px/i.test(f.css),
    [['font-size','글자의 크기를 설정합니다.'],['font-weight','400은 일반, 700은 굵은 글씨처럼 굵기를 조절합니다.'],['line-height','본문 가독성에 큰 영향을 주는 줄 높이입니다.']]),

  lesson('CSS','margin과 padding','여백','핵심',
    '웹 디자인의 완성도는 여백에서 크게 갈립니다. margin은 요소 바깥쪽, padding은 요소 안쪽 여백입니다.',
    ['margin은 다른 요소와의 거리입니다.','padding은 테두리와 내용 사이의 거리입니다.','여백은 8px, 16px, 24px처럼 일정한 규칙을 두면 정돈돼 보입니다.'],
    'margin: 24px;  padding: 16px;',
    '.card의 padding을 24px로 바꾸세요.',
    'CSS의 .card 안에 padding: 24px;로 수정하세요.',
    {html:'<div class="card">\n  <h2>Card</h2>\n  <p>안쪽 여백을 확인해보세요.</p>\n</div>', css:'body { margin: 0; padding: 40px; background: #f2f2f0; font-family: Arial, sans-serif; }\n.card { background: white; padding: 8px; }', js:''},
    f => /\.card\s*\{[^}]*padding\s*:\s*24px/i.test(f.css),
    [['margin','요소 바깥의 공간입니다.'],['padding','요소 안쪽의 공간입니다.'],['box model','content, padding, border, margin으로 요소의 크기를 이해하는 모델입니다.']]),

  lesson('CSS','테두리와 모서리','카드 만들기','기초',
    'border는 요소의 경계를 만들고 border-radius는 모서리를 둥글게 합니다. 카드, 입력창, 버튼에서 매우 자주 사용합니다.',
    ['border는 두께, 종류, 색 순서로 간단히 쓸 수 있습니다.','border-radius는 모서리 둥글기를 정합니다.','과한 그림자보다 얇은 경계선만으로도 깔끔한 UI를 만들 수 있습니다.'],
    'border: 1px solid #ddd; border-radius: 12px;',
    '.card의 border-radius를 16px로 바꾸세요.',
    '.card의 border-radius 값만 수정하세요.',
    {html:'<div class="card">\n  <strong>Simple Card</strong>\n  <p>깔끔한 카드 UI입니다.</p>\n</div>', css:'body { padding: 40px; background: #f3f3f1; font-family: Arial, sans-serif; }\n.card { max-width: 320px; padding: 24px; background: white; border: 1px solid #ddd; border-radius: 0; }', js:''},
    f => /border-radius\s*:\s*16px/i.test(f.css),
    [['border','요소 외곽에 선을 표시합니다.'],['solid','끊기지 않은 일반 실선입니다.'],['border-radius','값이 커질수록 모서리가 더 둥글어집니다.']]),

  lesson('CSS','박스 모델과 box-sizing','박스 모델','핵심',
    'HTML 요소는 내용(content), 안쪽 여백(padding), 테두리(border), 바깥 여백(margin)으로 이루어진 박스로 생각할 수 있습니다. box-sizing을 이해하면 실제 크기를 예상하기 쉬워집니다.',
    ['기본 content-box에서는 width에 padding과 border가 추가됩니다.','border-box는 지정한 width 안에 padding과 border를 포함합니다.','실무에서는 전체 요소에 border-box를 적용하는 경우가 많습니다.'],
    '* { box-sizing: border-box; }',
    '.card가 최종 너비 320px 안에 padding까지 포함하도록 box-sizing: border-box를 추가하세요.',
    '.card 블록 안에 box-sizing: border-box;를 직접 작성하세요.',
    {html:'<div class="card">박스 모델</div>', css:'body { padding: 40px; font-family: Arial, sans-serif; }\n.card {\n  width: 320px;\n  padding: 32px;\n  border: 4px solid #555;\n}', js:''},
    f => /\.card\s*\{[^}]*box-sizing\s*:\s*border-box\s*;?[^}]*\}/i.test(f.css),
    [['content','요소의 실제 글자나 이미지가 들어가는 영역입니다.'],['padding / border','content 주변의 안쪽 여백과 테두리입니다.'],['box-sizing: border-box','width 계산에 padding과 border를 포함합니다.']]),

  lesson('CSS','position으로 위치 기준 만들기','위치 지정','심화',
    '일반적인 배치는 Flexbox와 Grid가 우선이지만, 배지나 닫기 버튼처럼 특정 박스를 기준으로 겹쳐 놓을 때 position을 사용합니다. absolute는 가장 가까운 position 기준 조상을 찾아 위치합니다.',
    ['relative는 요소를 문서 흐름에 두면서 자식의 위치 기준이 될 수 있습니다.','absolute는 일반 흐름에서 빠져 기준 요소를 따라 배치됩니다.','top/right/bottom/left로 기준점과의 거리를 지정합니다.'],
    '.card { position: relative; }  .badge { position: absolute; top: 12px; right: 12px; }',
    '.badge가 card의 오른쪽 위를 기준으로 배치되도록 .card에는 relative, .badge에는 absolute를 추가하세요.',
    '두 선택자에 position 속성을 각각 직접 추가하세요. top과 right 값은 이미 준비되어 있습니다.',
    {html:'<div class="card"><span class="badge">NEW</span><h2>카드</h2><p>위치 기준을 연습합니다.</p></div>', css:'body { padding: 40px; font-family: Arial, sans-serif; }\n.card {\n  width: 280px;\n  padding: 24px;\n  border: 1px solid #ccc;\n}\n.badge {\n  top: 12px;\n  right: 12px;\n}', js:''},
    f => /\.card\s*\{[^}]*position\s*:\s*relative/i.test(f.css) && /\.badge\s*\{[^}]*position\s*:\s*absolute/i.test(f.css),
    [['position: relative','absolute 자식의 위치 기준점을 만들 때 자주 사용합니다.'],['position: absolute','일반 배치 흐름에서 벗어나 좌표처럼 배치합니다.'],['top / right','기준 요소의 위쪽·오른쪽에서 얼마나 떨어질지 정합니다.']]),

  lesson('CSS','display와 Flexbox','가로 배치','핵심',
    'Flexbox는 여러 요소를 한 줄 또는 한 열로 정렬할 때 가장 자주 쓰는 레이아웃 도구 중 하나입니다.',
    ['display: flex를 부모 요소에 적용합니다.','gap은 자식 요소 사이의 간격입니다.','justify-content와 align-items로 정렬 방향을 제어합니다.'],
    'display: flex; gap: 12px;',
    '.row에 display: flex를 추가하세요.',
    'CSS의 .row 중괄호 안에 display: flex;를 입력하세요.',
    {html:'<div class="row">\n  <div class="box">A</div>\n  <div class="box">B</div>\n  <div class="box">C</div>\n</div>', css:'body { padding: 40px; font-family: Arial, sans-serif; }\n.row { gap: 12px; }\n.box { width: 72px; height: 72px; display: grid; place-items: center; background: #e8eaec; border-radius: 10px; }', js:''},
    f => /\.row\s*\{[^}]*display\s*:\s*flex/i.test(f.css),
    [['display: flex','자식 요소를 Flexbox 레이아웃으로 배치합니다.'],['gap','자식 요소 사이에 일정한 간격을 만듭니다.'],['부모/자식','Flexbox의 정렬 규칙은 부모에 쓰고, 실제 배치되는 것은 자식입니다.']]),

  lesson('CSS','Flex 정렬 이해하기','정렬','핵심',
    'Flexbox의 축을 이해하면 가운데 정렬부터 양끝 배치까지 대부분의 UI를 쉽게 만들 수 있습니다.',
    ['justify-content는 주축 방향 정렬입니다.','align-items는 교차축 방향 정렬입니다.','flex-direction을 바꾸면 주축의 방향도 바뀝니다.'],
    'justify-content: center; align-items: center;',
    '.stage에 justify-content: center를 추가하세요.',
    'display: flex 아래에 justify-content: center;를 입력하세요.',
    {html:'<div class="stage">\n  <button>가운데 버튼</button>\n</div>', css:'body { margin: 0; font-family: Arial, sans-serif; }\n.stage { height: 100vh; display: flex; align-items: center; }\nbutton { padding: 12px 18px; }', js:''},
    f => /justify-content\s*:\s*center/i.test(f.css),
    [['justify-content','주축을 기준으로 자식 요소의 위치를 정합니다.'],['align-items','교차축을 기준으로 자식 요소를 정렬합니다.'],['center','축의 중앙에 요소를 배치합니다.']]),

  lesson('CSS','Grid로 카드 배열하기','Grid','핵심',
    'CSS Grid는 행과 열을 동시에 다루는 레이아웃에 강합니다. 카드 목록이나 갤러리를 만들 때 특히 편리합니다.',
    ['display: grid로 Grid를 시작합니다.','grid-template-columns로 열의 개수와 크기를 정합니다.','repeat와 fr 단위를 사용하면 균등한 열을 쉽게 만들 수 있습니다.'],
    'grid-template-columns: repeat(3, 1fr);',
    '.grid를 3열로 만드세요.',
    '.grid에 grid-template-columns: repeat(3, 1fr);를 추가하세요.',
    {html:'<div class="grid">\n  <div>1</div><div>2</div><div>3</div>\n  <div>4</div><div>5</div><div>6</div>\n</div>', css:'body { padding: 40px; font-family: Arial, sans-serif; }\n.grid { display: grid; gap: 10px; }\n.grid div { padding: 28px; background: #ececea; text-align: center; border-radius: 10px; }', js:''},
    f => /grid-template-columns\s*:\s*repeat\(\s*3\s*,\s*1fr\s*\)/i.test(f.css),
    [['display: grid','행과 열 기반 레이아웃을 활성화합니다.'],['repeat(3, 1fr)','같은 너비의 열 3개를 만듭니다.'],['fr','Grid에서 남은 공간의 비율을 나타내는 단위입니다.']]),

  lesson('CSS','반응형 웹의 기본','미디어 쿼리','심화',
    '같은 사이트라도 모바일과 데스크톱에서는 화면 폭이 다릅니다. 미디어 쿼리를 사용하면 특정 너비 이하에서 스타일을 바꿀 수 있습니다.',
    ['@media로 조건부 CSS를 작성합니다.','max-width는 화면이 특정 크기 이하일 때 적용됩니다.','반응형은 새로운 페이지를 만드는 것이 아니라 같은 구조를 유연하게 바꾸는 방식입니다.'],
    '@media (max-width: 600px) { ... }',
    '600px 이하에서 .grid를 1열로 바꾸는 코드를 완성하세요.',
    '@media 안에서 grid-template-columns: 1fr;를 사용하세요.',
    {html:'<div class="grid">\n  <div>A</div><div>B</div><div>C</div>\n</div>', css:'body { padding: 24px; font-family: Arial, sans-serif; }\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.grid div { padding: 30px; background: #eee; }\n\n@media (max-width: 600px) {\n  .grid {\n    /* 모바일에서는 1열 */\n  }\n}', js:''},
    f => /@media\s*\(\s*max-width\s*:\s*600px\s*\)[\s\S]*grid-template-columns\s*:\s*1fr/i.test(f.css),
    [['@media','조건이 맞을 때만 적용되는 CSS 영역입니다.'],['max-width: 600px','브라우저 폭이 600px 이하인지 확인합니다.'],['1fr','모바일에서 한 줄에 카드 하나만 표시하게 만듭니다.']]),

  lesson('CSS','CSS 미니 프로젝트','랜딩 카드','프로젝트',
    'HTML로 만든 구조를 실제 서비스처럼 정리해봅니다. 이번에는 정답 하나보다 여백과 정렬 원리를 적용하는 것이 목표입니다.',
    ['카드에 충분한 padding을 줍니다.','버튼과 텍스트 사이의 간격을 정리합니다.','너무 많은 색을 쓰지 않고 기본색과 강조색만 사용합니다.'],
    '깔끔함 = 규칙적인 여백 + 적은 색 + 명확한 계층',
    '.card에 padding, border-radius, background 세 속성을 모두 사용하세요.',
    '값은 자유롭게 선택해도 됩니다. 세 CSS 속성이 .card 안에 있으면 됩니다.',
    {html:'<div class="card">\n  <span>NEW COURSE</span>\n  <h1>Build your first web.</h1>\n  <p>HTML과 CSS를 이용해 작은 화면을 완성해보세요.</p>\n  <button>시작하기</button>\n</div>', css:'body { margin: 0; padding: 48px; background: #f2f2ef; font-family: Arial, sans-serif; }\n.card {\n  max-width: 460px;\n  /* 여기에 스타일을 완성하세요 */\n}\nbutton { padding: 11px 16px; }', js:''},
    f => /\.card\s*\{[^}]*padding\s*:/i.test(f.css) && /\.card\s*\{[^}]*border-radius\s*:/i.test(f.css) && /\.card\s*\{[^}]*background(?:-color)?\s*:/i.test(f.css),
    [['padding','카드 내용이 테두리에 붙지 않게 내부 여백을 만듭니다.'],['border-radius','카드의 인상을 부드럽게 만듭니다.'],['background','카드를 페이지 배경과 시각적으로 구분합니다.']]),

  // JavaScript — 문법에서 DOM 상호작용까지
  lesson('JS','JavaScript 시작하기','JS 시작','기초',
    'JavaScript는 HTML과 CSS로 만든 화면에 행동을 추가합니다. 가장 먼저 console.log를 이용해 코드가 실행되는지 확인해봅니다.',
    ['JavaScript는 위에서 아래로 코드를 실행합니다.','console.log는 개발 중 값을 확인하는 가장 기본적인 도구입니다.','문자열은 따옴표로 감쌉니다.'],
    'console.log("Hello");',
    'console.log에 “Hello JavaScript”를 출력하세요.',
    'JS 탭에서 따옴표 안의 문장을 바꾸세요.',
    {html:'<h1>JavaScript</h1>\n<p>개발자 도구의 콘솔도 확인해보세요.</p>', css:baseCss, js:'console.log("Hello");'},
    f => /console\.log\(\s*["']Hello JavaScript["']\s*\)/i.test(f.js),
    [['console.log','브라우저 개발자 도구의 콘솔에 값을 출력합니다.'],['"문자열"','글자 데이터는 따옴표로 감싸 표현합니다.'],[';','한 문장의 끝을 명확히 표시할 수 있습니다.']]),

  lesson('JS','console로 값과 오류 확인하기','콘솔과 디버깅','기초',
    'JavaScript를 공부할 때 화면만 보는 것보다 코드가 어떤 값을 가지고 있는지 확인하는 습관이 중요합니다. console.log는 개발자 도구 콘솔에 값을 출력해 흐름을 확인하게 해줍니다.',
    ['console.log는 변수나 계산 결과를 확인하는 가장 기본적인 디버깅 도구입니다.','오류 메시지는 실패가 아니라 어느 줄에서 무엇이 잘못됐는지 알려주는 정보입니다.','작은 단위로 실행하고 값을 확인하면 문제를 훨씬 빨리 찾을 수 있습니다.'],
    'console.log("확인할 값");',
    'message 변수의 값을 console.log(message);로 출력하는 한 줄을 추가하세요.',
    '변수를 만든 다음 줄에 console.log(message);를 직접 작성하세요.',
    {html:'<h1>콘솔 연습</h1>', css:baseCss, js:'const message = "JavaScript 실행 확인";\n\n'},
    f => /console\.log\(\s*message\s*\)\s*;?/i.test(f.js),
    [['console.log(...)','괄호 안의 값을 브라우저 개발자 도구 콘솔에 출력합니다.'],['오류 메시지','오류 종류와 위치를 읽으면 수정할 지점을 찾을 수 있습니다.'],['작게 확인하기','긴 코드를 한 번에 쓰기보다 중간 값을 자주 확인하는 습관이 좋습니다.']]),

  lesson('JS','변수로 값 기억하기','변수','기초',
    '변수는 값을 저장하고 이름을 붙이는 공간입니다. 값이 바뀔 수 있으면 let, 바뀌지 않는 값은 const를 주로 사용합니다.',
    ['let은 나중에 값을 다시 넣을 수 있습니다.','const는 같은 변수에 다른 값을 다시 대입할 수 없습니다.','좋은 변수 이름은 값의 의미를 설명합니다.'],
    'let count = 0;  const name = "Frame";',
    'score의 시작 값을 10으로 바꾸세요.',
    'let score = 0에서 숫자만 10으로 바꾸세요.',
    {html:'<h1 id="score">0</h1>', css:baseCss, js:'let score = 0;\ndocument.querySelector("#score").textContent = score;'},
    f => /let\s+score\s*=\s*10\s*;?/i.test(f.js),
    [['let score','score라는 이름의 변경 가능한 변수를 만듭니다.'],['= 10','오른쪽의 값을 왼쪽 변수에 저장합니다.'],['textContent','HTML 요소 안의 글자를 JavaScript에서 바꿉니다.']]),

  lesson('JS','숫자와 문자열','데이터 타입','기초',
    'JavaScript는 숫자, 문자열, 참/거짓처럼 여러 종류의 데이터를 다룹니다. 같은 + 기호라도 데이터 종류에 따라 결과가 달라질 수 있습니다.',
    ['숫자는 따옴표 없이 작성합니다.','문자열은 따옴표로 감쌉니다.','typeof를 사용하면 값의 데이터 타입을 확인할 수 있습니다.'],
    '10 + 5 → 15   "10" + "5" → "105"',
    'age의 값을 숫자 20으로 바꾸세요. 따옴표를 사용하면 안 됩니다.',
    'const age = "20"에서 따옴표를 제거하세요.',
    {html:'<p id="result"></p>', css:baseCss, js:'const age = "20";\ndocument.querySelector("#result").textContent = age + 1;'},
    f => /const\s+age\s*=\s*20\s*;?/i.test(f.js),
    [['20','따옴표가 없기 때문에 숫자입니다.'],['"20"','따옴표가 있으면 숫자처럼 보여도 문자열입니다.'],['+','숫자에서는 덧셈, 문자열에서는 이어 붙이기로 동작할 수 있습니다.']]),

  lesson('JS','조건에 따라 다르게 동작하기','조건문','기초',
    'if 문을 사용하면 조건이 참인지 거짓인지에 따라 다른 코드를 실행할 수 있습니다.',
    ['if 괄호 안에는 참/거짓으로 판단할 조건을 씁니다.','===는 두 값이 같은지 엄격하게 비교합니다.','else는 조건이 거짓일 때 실행됩니다.'],
    'if (조건) { ... } else { ... }',
    'score가 80 이상일 때 “PASS”가 나오도록 조건을 수정하세요.',
    'score > 80이 아니라 score >= 80으로 바꿔보세요.',
    {html:'<strong id="result"></strong>', css:baseCss, js:'const score = 80;\nconst result = document.querySelector("#result");\n\nif (score > 80) {\n  result.textContent = "PASS";\n} else {\n  result.textContent = "TRY AGAIN";\n}'},
    f => /if\s*\(\s*score\s*>=\s*80\s*\)/i.test(f.js),
    [['if','조건이 true일 때 중괄호 안의 코드를 실행합니다.'],['>=','왼쪽 값이 오른쪽 값보다 크거나 같은지 비교합니다.'],['else','if 조건이 false일 때 실행할 코드를 작성합니다.']]),

  lesson('JS','함수로 코드 묶기','함수','핵심',
    '함수는 여러 줄의 코드를 하나의 이름으로 묶어 필요할 때 다시 실행하게 합니다. 반복되는 코드를 줄이는 핵심 도구입니다.',
    ['function 키워드로 함수를 만들 수 있습니다.','괄호 안에는 함수가 받을 값을 적을 수 있습니다.','함수 이름 뒤에 ()를 붙이면 실행됩니다.'],
    'function hello() { ... }  hello();',
    '함수 이름을 sayHello로 바꾸고 호출 부분도 같은 이름으로 맞추세요.',
    'function hello와 맨 아래 hello()를 둘 다 sayHello로 바꾸세요.',
    {html:'<p id="message"></p>', css:baseCss, js:'function hello() {\n  document.querySelector("#message").textContent = "안녕하세요!";\n}\n\nhello();'},
    f => /function\s+sayHello\s*\(/i.test(f.js) && /sayHello\s*\(\s*\)\s*;?/i.test(f.js),
    [['function sayHello','sayHello라는 이름으로 코드 묶음을 정의합니다.'],['{ ... }','함수를 실행했을 때 수행할 코드입니다.'],['sayHello()','정의한 함수를 실제로 호출합니다.']]),

  lesson('JS','HTML 요소 찾기','DOM 선택','핵심',
    'JavaScript가 화면을 바꾸려면 먼저 HTML 요소를 찾아야 합니다. querySelector는 CSS 선택자 방식으로 요소 하나를 찾습니다.',
    ['#은 id, .은 class를 선택합니다.','querySelector는 조건에 맞는 첫 번째 요소를 가져옵니다.','찾은 요소는 변수에 저장해 다시 사용할 수 있습니다.'],
    'document.querySelector("#id")',
    'querySelector가 #title을 찾도록 수정하세요.',
    '"h1" 대신 "#title"을 넣으세요.',
    {html:'<h1 id="title">Before</h1>', css:baseCss, js:'const title = document.querySelector("h1");\ntitle.textContent = "After";'},
    f => /querySelector\(\s*["']#title["']\s*\)/i.test(f.js),
    [['document','현재 브라우저에 열린 HTML 문서를 의미합니다.'],['querySelector','CSS 선택자를 사용해 HTML 요소를 찾습니다.'],['#title','id가 title인 요소를 선택합니다.']]),

  lesson('JS','클릭 이벤트','이벤트','핵심',
    '사용자가 버튼을 클릭하거나 글자를 입력하면 이벤트가 발생합니다. addEventListener로 그 순간 실행할 코드를 연결합니다.',
    ['click은 클릭 이벤트 이름입니다.','이벤트 리스너 안의 함수가 클릭할 때마다 실행됩니다.','UI 대부분은 이벤트를 중심으로 동작합니다.'],
    'element.addEventListener("click", () => { ... });',
    '버튼을 클릭하면 제목이 “Clicked!”로 바뀌도록 빈칸을 완성하세요.',
    'addEventListener의 첫 번째 값에 "click"을 넣으세요.',
    {html:'<h1 id="title">Ready</h1>\n<button id="button">Click</button>', css:baseCss + '\nbutton { padding: 10px 16px; }', js:'const title = document.querySelector("#title");\nconst button = document.querySelector("#button");\n\nbutton.addEventListener("", () => {\n  title.textContent = "Clicked!";\n});'},
    f => /addEventListener\(\s*["']click["']/i.test(f.js),
    [['addEventListener','특정 이벤트가 발생할 때 실행할 함수를 등록합니다.'],['"click"','마우스나 터치로 클릭했을 때 발생하는 이벤트입니다.'],['() => { }','이벤트가 발생했을 때 실행할 함수입니다.']]),

  lesson('JS','입력값 읽기','입력 처리','핵심',
    'input 요소의 value를 읽으면 사용자가 입력한 내용을 JavaScript에서 사용할 수 있습니다.',
    ['input.value는 현재 입력창의 값입니다.','클릭 이벤트와 함께 사용하면 간단한 폼을 만들 수 있습니다.','입력값은 기본적으로 문자열로 다뤄지는 경우가 많습니다.'],
    'const value = input.value;',
    '버튼 클릭 시 message에 input.value가 표시되도록 빈칸을 완성하세요.',
    'message.textContent = input.value; 형태로 작성하세요.',
    {html:'<input id="name" placeholder="이름">\n<button id="show">표시</button>\n<p id="message"></p>', css:baseCss + '\ninput, button { padding: 10px; }', js:'const input = document.querySelector("#name");\nconst button = document.querySelector("#show");\nconst message = document.querySelector("#message");\n\nbutton.addEventListener("click", () => {\n  message.textContent = "";\n});'},
    f => /message\.textContent\s*=\s*input\.value\s*;?/i.test(f.js),
    [['input.value','사용자가 입력한 현재 글자를 가져옵니다.'],['textContent','가져온 값을 다른 요소의 텍스트로 표시할 수 있습니다.'],['이벤트 흐름','클릭 → 값 읽기 → 화면 변경 순서로 생각하면 쉽습니다.']]),

  lesson('JS','배열과 반복','반복 데이터','심화',
    '목록 데이터가 많아지면 같은 코드를 여러 번 쓰기 어렵습니다. 배열에 값을 모으고 forEach로 하나씩 처리할 수 있습니다.',
    ['배열은 여러 값을 순서대로 저장합니다.','forEach는 배열의 모든 값을 한 번씩 처리합니다.','실제 웹에서는 상품 목록, 댓글, 메뉴 같은 데이터를 반복 출력할 때 사용합니다.'],
    '["HTML", "CSS", "JS"].forEach(item => { ... })',
    'skills 배열에 “JavaScript”를 추가하세요.',
    '배열 마지막에 , "JavaScript"를 추가하세요.',
    {html:'<ul id="list"></ul>', css:baseCss, js:'const skills = ["HTML", "CSS"];\nconst list = document.querySelector("#list");\n\nskills.forEach((skill) => {\n  list.innerHTML += `<li>${skill}</li>`;\n});'},
    f => /const\s+skills\s*=\s*\[[^\]]*["']JavaScript["'][^\]]*\]/i.test(f.js),
    [['[ ... ]','여러 값을 하나의 배열로 묶습니다.'],['forEach','배열 안의 값을 앞에서부터 하나씩 처리합니다.'],['${skill}','템플릿 문자열 안에서 JavaScript 값을 삽입합니다.']]),

  lesson('JS','JavaScript 미니 프로젝트','카운터','프로젝트',
    '변수, DOM 선택, 클릭 이벤트를 합쳐 작은 카운터를 완성합니다. 이것만 이해해도 인터랙티브 UI의 기본 흐름을 경험할 수 있습니다.',
    ['count 변수에 현재 상태를 저장합니다.','버튼을 클릭하면 count 값을 변경합니다.','변경한 값을 textContent로 화면에 다시 반영합니다.'],
    '상태 → 이벤트 → 화면 갱신',
    '버튼을 누를 때마다 count가 2씩 증가하도록 수정하세요.',
    'count = count + 1의 숫자 1을 2로 바꾸세요.',
    {html:'<main>\n  <span>COUNT</span>\n  <strong id="count">0</strong>\n  <button id="plus">+2</button>\n</main>', css:'body { min-height: 100vh; margin: 0; display: grid; place-items: center; font-family: Arial, sans-serif; background: #f3f3f0; }\nmain { text-align: center; }\nstrong { display: block; margin: 12px 0; font-size: 64px; }\nbutton { padding: 11px 18px; }', js:'let count = 0;\nconst countText = document.querySelector("#count");\nconst plusButton = document.querySelector("#plus");\n\nplusButton.addEventListener("click", () => {\n  count = count + 1;\n  countText.textContent = count;\n});'},
    f => /count\s*=\s*count\s*\+\s*2\s*;?/i.test(f.js),
    [['count','현재 숫자를 기억하는 상태 변수입니다.'],['click','사용자의 행동이 상태를 바꾸는 시작점입니다.'],['textContent','새로운 상태를 화면에 다시 그려줍니다.']]),

  // PROJECT 01-04
  lesson('PROJECT','결과를 보고 따라 만들기','프로필 카드','연습',
    '이제 설명을 줄입니다. HTML과 CSS를 직접 조합해 간단한 프로필 카드를 완성하세요. 정답은 하나가 아닙니다.',
    ['HTML에는 이름과 소개 문장을 만듭니다.','CSS에는 배경, 여백, 둥근 모서리를 적용합니다.','완성 후 코드를 조금씩 바꿔 결과 차이를 확인합니다.'],
    'HTML + CSS',
    'class="profile" 요소와 border-radius를 사용해 프로필 카드를 만드세요.',
    'HTML에 class="profile"을 만들고 CSS에서 .profile을 꾸며보세요.',
    {html:'<!-- 프로필 카드 구조를 직접 작성하세요 -->\n', css:'body { padding: 48px; background: #f3f3f0; font-family: Arial, sans-serif; }\n/* .profile 스타일을 작성하세요 */\n', js:''},
    f => /class\s*=\s*["'][^"']*profile[^"']*["']/i.test(f.html) && /\.profile\s*\{[^}]*border-radius\s*:/i.test(f.css),
    [['HTML 구조','카드 안에 어떤 정보가 들어갈지 먼저 정합니다.'],['.profile','하나의 컴포넌트 단위로 CSS를 묶습니다.'],['반복 수정','값을 조금씩 바꾸고 바로 결과를 확인하는 습관이 중요합니다.']]),

  lesson('PROJECT','기능을 보고 구현하기','토글 버튼','연습',
    '이번에는 JavaScript 비중을 높입니다. 버튼을 누르면 문구가 바뀌는 간단한 인터랙션을 직접 완성합니다.',
    ['button과 결과 영역을 HTML에 만듭니다.','querySelector로 두 요소를 찾습니다.','click 이벤트에서 결과 텍스트를 변경합니다.'],
    'HTML → querySelector → click → textContent',
    'button, addEventListener, textContent를 모두 사용해 클릭 반응을 만드세요.',
    'id 이름은 자유롭습니다. 세 요소가 코드에 모두 등장하면 됩니다.',
    {html:'<!-- 버튼과 결과 문구를 만드세요 -->\n', css:baseCss, js:'// 클릭 이벤트를 직접 작성하세요\n'},
    f => /<button[\s>]/i.test(f.html) && /addEventListener\s*\(/i.test(f.js) && /textContent\s*=/i.test(f.js),
    [['button','사용자가 행동을 시작하는 UI입니다.'],['addEventListener','사용자 행동과 코드를 연결합니다.'],['textContent','행동 결과를 화면에 보여줍니다.']]),

  lesson('PROJECT','작은 웹앱 만들기','미니 Todo','도전',
    '입력창, 버튼, 목록을 이용해 아주 작은 Todo 기능을 만들어봅니다. 여기부터는 필요한 코드가 거의 제공되지 않습니다.',
    ['input에서 할 일을 입력받습니다.','버튼을 클릭하면 새로운 li를 만듭니다.','목록에 새 항목을 추가합니다.'],
    '입력 → 이벤트 → 새 요소 생성 → 목록 추가',
    'input, button, ul을 만들고 JS에서 createElement("li")를 사용하세요.',
    'document.createElement("li")가 핵심입니다.',
    {html:'<!-- Todo의 HTML을 직접 작성하세요 -->\n', css:'body { padding: 40px; font-family: Arial, sans-serif; background: #f4f4f2; }\n', js:'// Todo 동작을 직접 작성하세요\n'},
    f => /<input[\s>]/i.test(f.html) && /<button[\s>]/i.test(f.html) && /<ul[\s>]/i.test(f.html) && /createElement\(\s*["']li["']\s*\)/i.test(f.js),
    [['input','사용자에게 새 할 일의 내용을 받습니다.'],['createElement','JavaScript로 새로운 HTML 요소를 생성합니다.'],['append / appendChild','생성한 요소를 실제 문서 안에 추가할 때 사용합니다.']]),

  lesson('PROJECT','Final — 빈 화면에서 시작하기','자유 제작','최종',
    '마지막 레슨에는 정답도 시작 코드도 거의 없습니다. 지금까지 배운 HTML, CSS, JavaScript를 사용해 스스로 한 페이지를 완성하세요.',
    ['먼저 만들고 싶은 화면을 한 문장으로 정합니다.','HTML 구조를 먼저 만들고 CSS를 적용합니다.','마지막에 버튼이나 입력 같은 JavaScript 동작을 하나 이상 추가합니다.'],
    '생각 → 구조 → 스타일 → 동작 → 수정',
    'h1, button, addEventListener를 포함한 나만의 웹페이지를 완성하세요.',
    '가장 작은 기능부터 시작하세요. 제목 하나, 버튼 하나면 충분합니다.',
    {html:'<!-- HTML -->\n', css:'/* CSS */\n', js:'// JavaScript\n'},
    f => /<h1[\s>]/i.test(f.html) && /<button[\s>]/i.test(f.html) && /addEventListener\s*\(/i.test(f.js),
    [['1. 구조','먼저 HTML만으로 내용이 이해되는 페이지를 만듭니다.'],['2. 디자인','CSS로 읽기 쉽고 정돈된 화면을 만듭니다.'],['3. 동작','JavaScript로 사용자가 직접 경험할 기능을 하나 추가합니다.']])
];

function lesson(group, title, nav, kind, description, points, syntax, mission, hint, files, validate, explain) {
  return { group, title, nav, kind, description, points, syntax, mission, hint, files, validate, explain };
}

const storageKey = 'frame-study-v10';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch { saved = {}; }

const state = {
  current: Math.min(Number(saved.current || 0), lessons.length - 1),
  unlocked: lessons.length - 1,
  completed: Array.isArray(saved.completed) ? saved.completed.filter(i => i >= 0 && i < lessons.length) : [],
  code: saved.code && typeof saved.code === 'object' ? saved.code : {},
  activeFile: 'html'
};

const el = Object.fromEntries([
  'sidebar','sidebarClose','sidebarOverlay','curriculum','summaryProgress','progressBar','crumb','lessonNumber','lessonKind','lessonTitle','lessonDescription','learningPoints','syntaxCode','missionText','problemNumber','problemFile','successCondition','missionResult','codeFeedback','feedbackTitle','feedbackMessage','editorTabs','codeEditor','lineNumbers','languageBadge','hintButton','hintBox','runButton','previewFrame','explanationList','prevButton','nextButton','resetButton','menuButton','toast','saveState'
].map(id => [id, document.getElementById(id)]));

function filesFor(index) {
  if (!state.code[index]) state.code[index] = structuredClone(lessons[index].files);
  return state.code[index];
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify({
    current: state.current,
    unlocked: lessons.length - 1,
    completed: state.completed,
    code: state.code
  }));
  el.saveState.textContent = '저장됨 · 구문 강조 ON';
  clearTimeout(save.timer);
  save.timer = setTimeout(() => el.saveState.textContent = '자동 저장 · 구문 강조 · 자동 닫기 · 자동 들여쓰기 ON', 900);
}

function saveEditor() {
  filesFor(state.current)[state.activeFile] = getEditorText();
  save();
}

function renderCurriculum() {
  el.curriculum.innerHTML = '';
  Object.keys(courseInfo).forEach(group => {
    const indices = lessons.map((l, i) => l.group === group ? i : -1).filter(i => i >= 0);
    const wrapper = document.createElement('section');
    wrapper.className = 'course-group';
    const head = document.createElement('div');
    head.className = 'course-button';
    head.innerHTML = `<span>${courseInfo[group].title}</span><span>${indices.length}</span>`;
    const list = document.createElement('div');
    list.className = 'lesson-list';
    indices.forEach(index => {
      const item = lessons[index];
      const done = state.completed.includes(index);
      const btn = document.createElement('button');
      btn.className = `lesson-link ${index === state.current ? 'active' : ''}`;
      btn.innerHTML = `<span class="index">${String(indices.indexOf(index)+1).padStart(2,'0')}</span><span>${item.nav}</span><span class="state">${done ? '완료' : ''}</span>`;
      btn.addEventListener('click', () => {
        saveEditor();
        state.current = index;
        state.activeFile = bestFile(index);
        renderLesson();
        closeSidebar();
      });
      list.appendChild(btn);
    });
    wrapper.append(head, list);
    el.curriculum.appendChild(wrapper);
  });
  const completed = new Set(state.completed).size;
  el.summaryProgress.textContent = `${completed} / ${lessons.length}`;
  el.progressBar.style.width = `${Math.round((completed / lessons.length) * 100)}%`;
}

function bestFile(index) {
  const group = lessons[index].group;
  if (group === 'CSS') return 'css';
  if (group === 'JS') return 'js';
  return 'html';
}

function renderLesson() {
  const l = lessons[state.current];
  const groupIndices = lessons.map((x,i) => x.group === l.group ? i : -1).filter(i => i >= 0);
  const localNo = groupIndices.indexOf(state.current) + 1;
  el.crumb.textContent = `${courseInfo[l.group].color} · ${String(localNo).padStart(2,'0')}`;
  el.lessonNumber.textContent = String(localNo).padStart(2,'0');
  el.lessonKind.textContent = l.kind;
  el.lessonTitle.textContent = l.title;
  el.lessonDescription.textContent = l.description;
  el.learningPoints.innerHTML = l.points.map(p => `<li>${escapeHtml(p)}</li>`).join('');
  el.syntaxCode.textContent = l.syntax;
  el.missionText.textContent = l.mission;
  el.problemNumber.textContent = `문제 ${String(localNo).padStart(2,'0')}`;
  const editable = editableFiles(state.current);
  el.problemFile.textContent = editable.map(f => f === 'js' ? 'JavaScript' : f.toUpperCase()).join(' / ');
  el.successCondition.textContent = `위 요구사항을 ${el.problemFile.textContent} 코드에 정확히 반영한 뒤 ‘실행’을 누르세요.`;
  el.hintBox.textContent = l.hint;
  el.hintBox.classList.remove('show');
  el.hintButton.textContent = '힌트 보기';
  renderTabs();
  loadEditor();
  renderExplain();
  runPreview(false);
  renderCurriculum();
  el.prevButton.disabled = state.current === 0;
}

function editableFiles(index) {
  const group = lessons[index].group;
  if (group === 'PROJECT') return ['html', 'css', 'js'];
  return [bestFile(index)];
}

function renderTabs() {
  el.editorTabs.innerHTML = '';
  const files = editableFiles(state.current);
  if (!files.includes(state.activeFile)) state.activeFile = files[0];

  files.forEach(file => {
    const btn = document.createElement('button');
    btn.className = `editor-tab ${file === state.activeFile ? 'active' : ''}`;
    btn.textContent = file === 'js' ? 'JAVASCRIPT' : file.toUpperCase();
    btn.addEventListener('click', () => {
      saveEditor();
      state.activeFile = file;
      renderTabs();
      loadEditor();
    });
    el.editorTabs.appendChild(btn);
  });
}


function highlightJs(code) {
  const source = String(code || '');
  const tokenRe = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|`(?:\\[\s\S]|[^`])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:const|let|var|function|return|if|else|for|while|forEach|new|class|true|false|null|undefined|document|window)\b|\b\d+(?:\.\d+)?\b)/g;
  let out = '', last = 0;
  for (const match of source.matchAll(tokenRe)) {
    out += escapeHtml(source.slice(last, match.index));
    const token = match[0];
    let cls = 'tok-keyword';
    if (/^\/\//.test(token) || /^\/\*/.test(token)) cls = 'tok-comment';
    else if (/^["'`]/.test(token)) cls = 'tok-string';
    else if (/^\d/.test(token)) cls = 'tok-number';
    else if (/^(document|window)$/.test(token)) cls = 'tok-global';
    out += `<span class="${cls}">${escapeHtml(token)}</span>`;
    last = match.index + token.length;
  }
  return out + escapeHtml(source.slice(last));
}

function highlightCss(code) {
  const source = String(code || '');
  const tokenRe = /(\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[0-9a-fA-F]{3,8}\b|\b-?\d+(?:\.\d+)?(?:px|rem|em|vh|vw|%|s|ms|fr)?\b|@[\w-]+|--[\w-]+|[a-zA-Z-]+(?=\s*:))/g;
  let out = '', last = 0;
  for (const match of source.matchAll(tokenRe)) {
    const raw = source.slice(last, match.index);
    out += escapeHtml(raw).replace(/(^|\})(\s*)([^{}]+)(?=\{)/g, '$1$2<span class="tok-selector">$3</span>');
    const token = match[0];
    let cls = 'tok-property';
    if (/^\/\*/.test(token)) cls = 'tok-comment';
    else if (/^["']/.test(token)) cls = 'tok-string';
    else if (/^#/.test(token) || /^-?\d/.test(token)) cls = 'tok-number';
    else if (/^@/.test(token)) cls = 'tok-keyword';
    else if (/^--/.test(token)) cls = 'tok-variable';
    out += `<span class="${cls}">${escapeHtml(token)}</span>`;
    last = match.index + token.length;
  }
  out += escapeHtml(source.slice(last)).replace(/(^|\})(\s*)([^{}]+)(?=\{)/g, '$1$2<span class="tok-selector">$3</span>');
  return out;
}

function highlightHtmlTag(token) {
  if (/^<!--/.test(token)) return `<span class="tok-comment">${escapeHtml(token)}</span>`;
  if (/^<!DOCTYPE/i.test(token)) return `<span class="tok-keyword">${escapeHtml(token)}</span>`;
  const m = token.match(/^(<\/?)([A-Za-z][\w:-]*)([\s\S]*?)(\/?>)$/);
  if (!m) return escapeHtml(token);
  let attrs = '', last = 0;
  const attrRe = /([:\w-]+)(\s*=\s*)("[^"]*"|'[^']*'|[^\s>]+)/g;
  for (const a of m[3].matchAll(attrRe)) {
    attrs += escapeHtml(m[3].slice(last, a.index));
    attrs += `<span class="tok-attr">${escapeHtml(a[1])}</span>${escapeHtml(a[2])}<span class="tok-string">${escapeHtml(a[3])}</span>`;
    last = a.index + a[0].length;
  }
  attrs += escapeHtml(m[3].slice(last));
  return `<span class="tok-punc">${escapeHtml(m[1])}</span><span class="tok-tag">${escapeHtml(m[2])}</span>${attrs}<span class="tok-punc">${escapeHtml(m[4])}</span>`;
}

function highlightHtml(code) {
  const source = String(code || '');
  const tokenRe = /<!--[\s\S]*?-->|<!DOCTYPE[^>]*>|<\/?[A-Za-z][^>]*>/gi;
  let out = '', last = 0;
  for (const match of source.matchAll(tokenRe)) {
    out += escapeHtml(source.slice(last, match.index));
    out += highlightHtmlTag(match[0]);
    last = match.index + match[0].length;
  }
  return out + escapeHtml(source.slice(last));
}

let editorComposing = false;

function getEditorText() {
  return (el.codeEditor.textContent || '').replace(/\r/g, '');
}

function getEditorSelection() {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0 || !el.codeEditor.contains(sel.anchorNode)) {
    const length = getEditorText().length;
    return { start: length, end: length };
  }
  const range = sel.getRangeAt(0);
  const beforeStart = document.createRange();
  beforeStart.selectNodeContents(el.codeEditor);
  beforeStart.setEnd(range.startContainer, range.startOffset);
  const beforeEnd = document.createRange();
  beforeEnd.selectNodeContents(el.codeEditor);
  beforeEnd.setEnd(range.endContainer, range.endOffset);
  return { start: beforeStart.toString().length, end: beforeEnd.toString().length };
}

function setEditorSelection(start, end = start) {
  const total = getEditorText().length;
  start = Math.max(0, Math.min(start, total));
  end = Math.max(0, Math.min(end, total));
  const walker = document.createTreeWalker(el.codeEditor, NodeFilter.SHOW_TEXT);
  let node;
  let pos = 0;
  let startPoint = null;
  let endPoint = null;
  while ((node = walker.nextNode())) {
    const next = pos + node.nodeValue.length;
    if (!startPoint && start <= next) startPoint = [node, start - pos];
    if (!endPoint && end <= next) { endPoint = [node, end - pos]; break; }
    pos = next;
  }
  const range = document.createRange();
  if (!startPoint) {
    range.selectNodeContents(el.codeEditor);
    range.collapse(false);
  } else {
    range.setStart(startPoint[0], startPoint[1]);
    const ep = endPoint || startPoint;
    range.setEnd(ep[0], ep[1]);
  }
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function highlightedMarkup(code) {
  const file = state.activeFile;
  return file === 'html' ? highlightHtml(code) : file === 'css' ? highlightCss(code) : highlightJs(code);
}

function renderEditorText(code, selection = null) {
  el.codeEditor.innerHTML = highlightedMarkup(code);
  if (!el.codeEditor.firstChild && code === '') el.codeEditor.appendChild(document.createTextNode(''));
  if (selection) setEditorSelection(selection.start, selection.end);
  el.languageBadge.textContent = state.activeFile === 'js' ? 'JavaScript' : state.activeFile.toUpperCase();
}

function updateHighlight() {
  if (editorComposing) return;
  const selection = getEditorSelection();
  const code = getEditorText();
  renderEditorText(code, selection);
}

function syncEditorScroll() {
  el.lineNumbers.scrollTop = el.codeEditor.scrollTop;
}

function loadEditor() {
  const code = filesFor(state.current)[state.activeFile] || '';
  renderEditorText(code, { start: 0, end: 0 });
  updateLines();
  el.codeEditor.scrollTop = 0;
  el.codeEditor.scrollLeft = 0;
}

function updateLines() {
  const count = Math.max(1, getEditorText().split('\n').length);
  el.lineNumbers.textContent = Array.from({length: count}, (_,i) => i + 1).join('\n');
}

function replaceEditorRange(text, start, end, caret = start + text.length) {
  const value = getEditorText();
  const next = value.slice(0, start) + text + value.slice(end);
  renderEditorText(next, { start: caret, end: caret });
  updateLines();
  saveEditor();
}

function renderExplain() {
  el.explanationList.innerHTML = lessons[state.current].explain.map(([code, text]) => `
    <div class="explanation-item"><code>${escapeHtml(code)}</code><p>${escapeHtml(text)}</p></div>
  `).join('');
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function makePreview(files) {
  const runtimeGuard = `<script>window.__frameStudyRuntimeErrors=[];window.addEventListener("error",function(e){window.__frameStudyRuntimeErrors.push(e.message||"JavaScript 실행 오류");});window.addEventListener("unhandledrejection",function(e){window.__frameStudyRuntimeErrors.push(String(e.reason||"처리되지 않은 Promise 오류"));});<\/script>`;
  const hasFullDocument = /<!doctype|<html[\s>]/i.test(files.html);
  if (hasFullDocument) {
    return files.html.replace(/<\/head>/i, `<style>${files.css}</style>${runtimeGuard}</head>`).replace(/<\/body>/i, `<script>${safeJs(files.js)}<\/script></body>`);
  }
  return `<!doctype html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${files.css}</style>${runtimeGuard}</head><body>${files.html}<script>${safeJs(files.js)}<\/script></body></html>`;
}

function safeJs(js) { return String(js).replace(/<\/script>/gi, '<\\/script>'); }

function lineNumberAt(text, index) {
  return String(text).slice(0, Math.max(0, index)).split('\n').length;
}

function validateHtmlSyntax(html) {
  const source = String(html || '');
  const stack = [];
  const voidTags = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
  const tagRe = /<!--[\s\S]*?-->|<!DOCTYPE\s+html\s*>|<\/?[A-Za-z][^<>]*>/gi;
  let last = 0;
  let match;

  while ((match = tagRe.exec(source))) {
    const gap = source.slice(last, match.index);
    const badOffset = gap.search(/[<>]/);
    if (badOffset !== -1) {
      const index = last + badOffset;
      return { ok: false, file: 'HTML', line: lineNumberAt(source, index), message: '태그의 < 또는 >가 올바르게 닫히지 않았습니다.' };
    }

    const token = match[0];
    const index = match.index;
    last = tagRe.lastIndex;
    if (/^<!--/.test(token) || /^<!DOCTYPE/i.test(token)) continue;

    const close = token.match(/^<\/\s*([A-Za-z][\w:-]*)\s*>$/);
    if (close) {
      const tag = close[1].toLowerCase();
      const top = stack.pop();
      if (!top) return { ok: false, file: 'HTML', line: lineNumberAt(source, index), message: `닫는 태그 </${tag}>에 대응하는 여는 태그가 없습니다.` };
      if (top.tag !== tag) return { ok: false, file: 'HTML', line: lineNumberAt(source, index), message: `<${top.tag}>를 닫아야 하는데 </${tag}>가 입력되었습니다.` };
      continue;
    }

    const open = token.match(/^<\s*([A-Za-z][\w:-]*)([\s\S]*?)>$/);
    if (!open) return { ok: false, file: 'HTML', line: lineNumberAt(source, index), message: '태그 문법을 확인하세요.' };
    const tag = open[1].toLowerCase();
    const attrs = open[2] || '';

    const quoteCountDouble = (attrs.match(/"/g) || []).length;
    const quoteCountSingle = (attrs.match(/'/g) || []).length;
    if (quoteCountDouble % 2 || quoteCountSingle % 2) {
      return { ok: false, file: 'HTML', line: lineNumberAt(source, index), message: `<${tag}>의 속성 따옴표가 닫히지 않았습니다.` };
    }
    // HTML에서는 공백이나 따옴표 등이 없는 단순 속성값은 따옴표 없이도 문법상 허용됩니다.
    // 학습 문제에서 따옴표 사용을 요구하고 싶다면 문법 검사가 아니라 해당 레슨의 성공 조건에서 검사합니다.

    const selfClosing = /\/\s*>$/.test(token);
    if (!voidTags.has(tag) && !selfClosing) stack.push({ tag, index });
  }

  const tail = source.slice(last);
  const badTail = tail.search(/[<>]/);
  if (badTail !== -1) {
    const index = last + badTail;
    return { ok: false, file: 'HTML', line: lineNumberAt(source, index), message: '완성되지 않은 HTML 태그가 있습니다.' };
  }
  if (stack.length) {
    const top = stack[stack.length - 1];
    return { ok: false, file: 'HTML', line: lineNumberAt(source, top.index), message: `<${top.tag}> 태그를 닫는 </${top.tag}>가 없습니다.` };
  }

  const hasHtml = /<html[\s>]/i.test(source);
  if (hasHtml) {
    if (!/<!DOCTYPE\s+html\s*>/i.test(source)) return { ok: false, file: 'HTML', line: 1, message: '전체 HTML 문서에는 <!DOCTYPE html> 선언이 필요합니다.' };
    if (!/<head[\s>][\s\S]*<\/head>/i.test(source)) return { ok: false, file: 'HTML', line: 1, message: '<head>...</head> 구조가 필요합니다.' };
    if (!/<body[\s>][\s\S]*<\/body>/i.test(source)) return { ok: false, file: 'HTML', line: 1, message: '<body>...</body> 구조가 필요합니다.' };
  }
  return { ok: true };
}

function splitCssDeclarations(block) {
  const out = [];
  let start = 0, quote = '', depth = 0;
  for (let i = 0; i < block.length; i++) {
    const ch = block[i];
    if (quote) {
      if (ch === '\\') { i++; continue; }
      if (ch === quote) quote = '';
      continue;
    }
    if (ch === '"' || ch === "'") { quote = ch; continue; }
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
    else if (ch === ';' && depth === 0) { out.push(block.slice(start, i)); start = i + 1; }
  }
  out.push(block.slice(start));
  return out;
}

function validateCssSyntax(css) {
  const source = String(css || '');
  const clean = source.replace(/\/\*[\s\S]*?\*\//g, '');
  let quote = '', depthParen = 0, depthBrace = 0;
  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i];
    if (quote) {
      if (ch === '\\') { i++; continue; }
      if (ch === quote) quote = '';
      continue;
    }
    if (ch === '"' || ch === "'") { quote = ch; continue; }
    if (ch === '(' || ch === '[') depthParen++;
    else if (ch === ')' || ch === ']') {
      depthParen--;
      if (depthParen < 0) return { ok: false, file: 'CSS', line: lineNumberAt(clean, i), message: '닫는 괄호가 너무 많습니다.' };
    } else if (ch === '{') depthBrace++;
    else if (ch === '}') {
      depthBrace--;
      if (depthBrace < 0) return { ok: false, file: 'CSS', line: lineNumberAt(clean, i), message: '닫는 중괄호 }에 대응하는 여는 중괄호 {가 없습니다.' };
    }
  }
  if (quote) return { ok: false, file: 'CSS', line: lineNumberAt(clean, clean.length), message: '문자열 따옴표가 닫히지 않았습니다.' };
  if (depthParen !== 0) return { ok: false, file: 'CSS', line: lineNumberAt(clean, clean.length), message: 'CSS 괄호의 짝이 맞지 않습니다.' };
  if (depthBrace !== 0) return { ok: false, file: 'CSS', line: lineNumberAt(clean, clean.length), message: 'CSS 중괄호 { }의 짝이 맞지 않습니다.' };

  function inspectRules(text, baseIndex = 0) {
    let cursor = 0;
    while (cursor < text.length) {
      while (cursor < text.length && /\s/.test(text[cursor])) cursor++;
      if (cursor >= text.length) break;
      const open = text.indexOf('{', cursor);
      if (open === -1) {
        if (text.slice(cursor).trim()) return { ok: false, file: 'CSS', line: lineNumberAt(source, baseIndex + cursor), message: '선택자 뒤에 { } 블록이 필요합니다.' };
        break;
      }
      const header = text.slice(cursor, open).trim();
      if (!header) return { ok: false, file: 'CSS', line: lineNumberAt(source, baseIndex + open), message: 'CSS 선택자가 비어 있습니다.' };
      let depth = 1, i = open + 1, q = '';
      for (; i < text.length; i++) {
        const ch = text[i];
        if (q) {
          if (ch === '\\') { i++; continue; }
          if (ch === q) q = '';
          continue;
        }
        if (ch === '"' || ch === "'") { q = ch; continue; }
        if (ch === '{') depth++;
        else if (ch === '}') { depth--; if (depth === 0) break; }
      }
      const body = text.slice(open + 1, i);
      if (/^@media\b/i.test(header) || /^@supports\b/i.test(header)) {
        const nested = inspectRules(body, baseIndex + open + 1);
        if (!nested.ok) return nested;
      } else if (/^@keyframes\b/i.test(header)) {
        // 자유 프로젝트에서 사용할 수 있으므로 내부 선언은 브라우저 파서에 맡깁니다.
      } else if (!header.startsWith('@')) {
        for (const raw of splitCssDeclarations(body)) {
          const decl = raw.trim();
          if (!decl) continue;
          let colon = -1, q2 = '', d2 = 0;
          for (let k = 0; k < decl.length; k++) {
            const ch = decl[k];
            if (q2) { if (ch === '\\') k++; else if (ch === q2) q2 = ''; continue; }
            if (ch === '"' || ch === "'") { q2 = ch; continue; }
            if (ch === '(' || ch === '[') d2++;
            else if (ch === ')' || ch === ']') d2 = Math.max(0, d2 - 1);
            else if (ch === ':' && d2 === 0) { colon = k; break; }
          }
          if (colon === -1) return { ok: false, file: 'CSS', line: lineNumberAt(source, baseIndex + open + 1 + body.indexOf(raw)), message: `CSS 선언에 ':'가 없습니다: ${decl}` };
          const prop = decl.slice(0, colon).trim();
          const value = decl.slice(colon + 1).trim();
          if (!/^--[\w-]+$/.test(prop) && !/^[a-z-]+$/i.test(prop)) return { ok: false, file: 'CSS', line: lineNumberAt(source, baseIndex + open + 1 + body.indexOf(raw)), message: `CSS 속성 이름이 올바르지 않습니다: ${prop}` };
          if (!value) return { ok: false, file: 'CSS', line: lineNumberAt(source, baseIndex + open + 1 + body.indexOf(raw)), message: `${prop} 속성의 값이 비어 있습니다.` };
          if (!prop.startsWith('--') && typeof CSS !== 'undefined' && CSS.supports && !CSS.supports(prop, value)) {
            return { ok: false, file: 'CSS', line: lineNumberAt(source, baseIndex + open + 1 + body.indexOf(raw)), message: `브라우저가 이해할 수 없는 CSS입니다: ${prop}: ${value}` };
          }
        }
      }
      cursor = i + 1;
    }
    return { ok: true };
  }

  return inspectRules(clean, 0);
}

function validateJsSyntax(js) {
  const source = String(js || '');
  try {
    new Function(source);
    return { ok: true };
  } catch (err) {
    const match = String(err && err.stack || '').match(/<anonymous>:(\d+):\d+/);
    return { ok: false, file: 'JavaScript', line: match ? Number(match[1]) - 2 : null, message: err && err.message ? err.message : 'JavaScript 문법 오류가 있습니다.' };
  }
}

function filesForRequirementCheck(files) {
  return {
    html: String(files.html || '').replace(/<!--[\s\S]*?-->/g, ''),
    css: String(files.css || '').replace(/\/\*[\s\S]*?\*\//g, ''),
    js: String(files.js || '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
  };
}

function validateSyntaxForLesson(files) {
  const group = lessons[state.current].group;
  const checks = [];
  if (group === 'HTML' || group === 'PROJECT') checks.push(validateHtmlSyntax(files.html));
  if (group === 'CSS' || group === 'PROJECT') checks.push(validateCssSyntax(files.css));
  if (group === 'JS' || group === 'PROJECT') checks.push(validateJsSyntax(files.js));
  return checks.find(result => !result.ok) || { ok: true };
}

function showFeedback(type, title, message) {
  el.codeFeedback.className = `code-feedback show ${type || ''}`.trim();
  el.feedbackTitle.textContent = title;
  el.feedbackMessage.textContent = message;
}

function runPreview(check = true) {
  saveEditor();
  const files = filesFor(state.current);
  const syntax = validateSyntaxForLesson(files);

  // 1. 문법이 잘못된 경우에만 미리보기를 중단합니다.
  if (!syntax.ok) {
    el.previewFrame.onload = null;
    el.previewFrame.srcdoc = '<!doctype html><html lang="ko"><body style="font-family:system-ui;padding:32px;color:#666"><strong>코드 오류를 먼저 수정하세요.</strong><p>문법이 올바르면 정답 여부와 관계없이 미리보기가 표시됩니다.</p></body></html>';
    const location = syntax.line ? `${syntax.file} ${syntax.line}줄 · ` : `${syntax.file} · `;
    showFeedback('error', '코드 오류', location + syntax.message);
    updateMission(false, true);
    return;
  }

  // 2. 문법이 맞으면 정답 판정 전에 먼저 미리보기를 갱신합니다.
  //    문제를 아직 풀지 않았어도 현재 작성한 결과를 항상 볼 수 있어야 합니다.
  el.previewFrame.onload = () => {
    let runtimeErrors = [];
    try { runtimeErrors = el.previewFrame.contentWindow.__frameStudyRuntimeErrors || []; } catch (_) {}

    // JavaScript 과정에서는 문법이 맞아도 실행 중 오류가 날 수 있습니다.
    // 이 경우 화면은 그대로 보여주되 문제는 통과시키지 않습니다.
    if (runtimeErrors.length) {
      showFeedback('error', 'JavaScript 실행 오류', runtimeErrors[0]);
      updateMission(false, true);
      return;
    }

    // 3. 미리보기가 정상적으로 만들어진 뒤에 문제 성공 조건을 별도로 검사합니다.
    let requirementSuccess = false;
    try {
      const checkedFiles = filesForRequirementCheck(files);
      requirementSuccess = Boolean(lessons[state.current].validate(checkedFiles));
    } catch (err) {
      console.error('Lesson validation error:', err);
      showFeedback('error', '문제 판정 오류', '미리보기는 정상적으로 실행됐지만 이 레슨의 정답 검사 코드에 문제가 있습니다.');
      updateMission(false, true);
      return;
    }

    if (requirementSuccess) {
      showFeedback('success', '정답입니다', '문법과 실행 상태가 정상이고 문제의 성공 조건도 만족했습니다.');
      updateMission(true, false);
      if (check) completeLesson();
    } else {
      showFeedback('', '미리보기는 정상입니다', '코드 문법에는 문제가 없습니다. 결과를 확인한 뒤 위의 “해야 할 일”과 “성공 조건”을 만족하도록 코드를 수정하세요.');
      updateMission(false, false);
    }
  };

  showFeedback('', '미리보기 실행', '문법 검사를 통과했습니다. 정답 여부와 관계없이 현재 코드를 미리보기에 표시합니다.');
  updateMission(false, false);
  el.previewFrame.srcdoc = makePreview(files);
}

function updateMission(success, hasError = false) {
  el.missionResult.textContent = success ? '완료' : hasError ? '코드 오류' : '미완료';
  el.missionResult.classList.toggle('done', success);
  el.missionResult.classList.toggle('error', hasError);
  const isLast = state.current === lessons.length - 1;
  el.nextButton.disabled = isLast;
  el.nextButton.textContent = isLast ? '마지막 챕터' : '다음 챕터 →';
}

function completeLesson() {
  if (!state.completed.includes(state.current)) state.completed.push(state.current);
  save();
  renderCurriculum();
  updateMission(true);
  el.toast.textContent = '이 문제를 완료했습니다.';
  el.toast.classList.add('show');
  clearTimeout(completeLesson.timer);
  completeLesson.timer = setTimeout(() => el.toast.classList.remove('show'), 1600);
}

function insertEditorText(text, caretOffset = text.length) {
  const { start, end } = getEditorSelection();
  const pos = start + caretOffset;
  replaceEditorRange(text, start, end, pos);
}

function handleHtmlAutoClose(e) {
  if (state.activeFile !== 'html' || e.key !== '>') return false;
  const sel = getEditorSelection();
  const start = sel.start;
  if (start !== sel.end) return false;
  const before = getEditorText().slice(0, start);
  const match = before.match(/<([A-Za-z][\w:-]*)(?:\s[^<>]*)?$/);
  if (!match) return false;
  const tag = match[1].toLowerCase();
  const voidTags = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
  if (voidTags.has(tag) || /\/\s*$/.test(before)) return false;
  e.preventDefault();
  insertEditorText(`></${tag}>`, 1);
  return true;
}

function handlePairCompletion(e) {
  if (e.metaKey || e.ctrlKey || e.altKey) return false;
  const pairs = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'", '`': '`' };
  const closing = new Set(Object.values(pairs));
  const { start, end } = getEditorSelection();
  const editorValue = getEditorText();
  const selected = editorValue.slice(start, end);

  if (pairs[e.key]) {
    const next = editorValue[start] || '';
    if ((e.key === '"' || e.key === "'" || e.key === '`') && next === e.key && start === end) {
      e.preventDefault();
      setEditorSelection(start + 1);
      return true;
    }
    e.preventDefault();
    if (selected) insertEditorText(e.key + selected + pairs[e.key], 1 + selected.length);
    else insertEditorText(e.key + pairs[e.key], 1);
    return true;
  }

  if (closing.has(e.key) && editorValue[start] === e.key && start === end) {
    e.preventDefault();
    setEditorSelection(start + 1);
    return true;
  }
  return false;
}

function handleSmartEnter(e) {
  if (e.key !== 'Enter') return false;

  const { start, end } = getEditorSelection();
  const value = getEditorText();
  const before = value.slice(0, start);
  const after = value.slice(end);
  const currentLine = before.slice(before.lastIndexOf('\n') + 1);
  const baseIndent = (currentLine.match(/^\s*/) || [''])[0];
  const trimmedBefore = before.trimEnd();
  const trimmedAfter = after.trimStart();
  const indentUnit = '  ';

  // <section>|</section> 또는 {|} 사이에서 Enter를 누르면
  // VS Code처럼 내부 한 줄을 만들고 닫는 줄의 들여쓰기를 자동 정렬합니다.
  let htmlBetweenPair = false;
  if (state.activeFile === 'html') {
    const openMatch = trimmedBefore.match(/<([A-Za-z][\w:-]*)(?:\s[^<>]*)?>$/);
    const closeMatch = trimmedAfter.match(/^<\/([A-Za-z][\w:-]*)>/);
    htmlBetweenPair = !!(openMatch && closeMatch && openMatch[1].toLowerCase() === closeMatch[1].toLowerCase());
  }
  const braceBetweenPair = /\{$/.test(trimmedBefore) && /^\}/.test(trimmedAfter);

  e.preventDefault();

  if (htmlBetweenPair || braceBetweenPair) {
    const text = `\n${baseIndent}${indentUnit}\n${baseIndent}`;
    const cursor = start + 1 + baseIndent.length + indentUnit.length;
    replaceEditorRange(text, start, end, cursor);
    return true;
  }

  let nextIndent = baseIndent;

  if (state.activeFile === 'html') {
    const voidTags = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
    const openMatch = trimmedBefore.match(/<([A-Za-z][\w:-]*)(?:\s[^<>]*)?>$/);
    if (openMatch && !voidTags.has(openMatch[1].toLowerCase()) && !/\/\s*>$/.test(trimmedBefore)) {
      nextIndent += indentUnit;
    }
  }

  if (/\{$/.test(trimmedBefore)) nextIndent += indentUnit;

  const text = `\n${nextIndent}`;
  const cursor = start + text.length;
  replaceEditorRange(text, start, end, cursor);
  return true;
}


function handleHtmlClosingIndent(e) {
  if (state.activeFile !== 'html' || e.key !== '>') return false;
  const sel = getEditorSelection();
  const start = sel.start;
  if (start !== sel.end) return false;
  const value = getEditorText();
  const lineStart = value.lastIndexOf('\n', start - 1) + 1;
  const beforeOnLine = value.slice(lineStart, start);
  if (!/^\s+<\/[A-Za-z][\w:-]*$/.test(beforeOnLine)) return false;
  const indent = (beforeOnLine.match(/^\s*/) || [''])[0];
  if (indent.length < 2) return false;
  e.preventDefault();
  const rest = beforeOnLine.slice(indent.length);
  const replacement = indent.slice(0, -2) + rest + '>';
  replaceEditorRange(replacement, lineStart, start, lineStart + replacement.length);
  return true;
}

function handleClosingOutdent(e) {
  const sel = getEditorSelection();
  const start = sel.start;
  if (start !== sel.end) return false;
  const value = getEditorText();
  const lineStart = value.lastIndexOf('\n', start - 1) + 1;
  const beforeOnLine = value.slice(lineStart, start);
  if (!/^\s+$/.test(beforeOnLine) && beforeOnLine !== '') return false;

  if (e.key === '}' && beforeOnLine.length >= 2) {
    e.preventDefault();
    const replacement = beforeOnLine.slice(0, -2) + '}';
    replaceEditorRange(replacement, lineStart, start, lineStart + replacement.length);
    return true;
  }
  return false;
}

el.codeEditor.addEventListener('compositionstart', () => { editorComposing = true; });
el.codeEditor.addEventListener('compositionend', () => {
  editorComposing = false;
  updateLines();
  updateHighlight();
  saveEditor();
});
el.codeEditor.addEventListener('input', () => {
  updateLines();
  if (!editorComposing) updateHighlight();
  saveEditor();
});
el.codeEditor.addEventListener('paste', e => {
  e.preventDefault();
  const text = (e.clipboardData || window.clipboardData).getData('text/plain').replace(/\r/g, '');
  const { start, end } = getEditorSelection();
  replaceEditorRange(text, start, end, start + text.length);
});
el.codeEditor.addEventListener('scroll', syncEditorScroll);
el.codeEditor.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); runPreview(true); return; }

  if (e.key === 'Tab') {
    e.preventDefault();
    insertEditorText('  ');
    return;
  }

  if (handleClosingOutdent(e)) return;
  if (handleHtmlClosingIndent(e)) return;
  if (handleSmartEnter(e)) return;
  if (handleHtmlAutoClose(e)) return;
  handlePairCompletion(e);
});
el.runButton.addEventListener('click', () => runPreview(true));
el.hintButton.addEventListener('click', () => {
  const show = !el.hintBox.classList.contains('show');
  el.hintBox.classList.toggle('show', show);
  el.hintButton.textContent = show ? '힌트 닫기' : '힌트 보기';
});
el.resetButton.addEventListener('click', () => {
  state.code[state.current] = structuredClone(lessons[state.current].files);
  loadEditor(); runPreview(false); save();
});
el.prevButton.addEventListener('click', () => {
  if (state.current === 0) return;
  saveEditor(); state.current -= 1; state.activeFile = bestFile(state.current); renderLesson(); window.scrollTo({top:0, behavior:'smooth'});
});
el.nextButton.addEventListener('click', () => {
  if (el.nextButton.disabled || state.current >= lessons.length - 1) return;
  saveEditor(); state.current += 1; state.activeFile = bestFile(state.current); renderLesson(); window.scrollTo({top:0, behavior:'smooth'});
});
let drawerScrollY = 0;
let drawerTouchY = null;
let drawerScrollGuard = false;

function lockMainPage() {
  drawerScrollY = window.scrollY || window.pageYOffset || 0;

  document.documentElement.classList.add('drawer-open');
  document.body.classList.add('drawer-open');

  /* Lock the document itself at the exact current position. */
  document.documentElement.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${drawerScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
}

function unlockMainPage() {
  document.documentElement.classList.remove('drawer-open');
  document.body.classList.remove('drawer-open');

  document.documentElement.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  document.body.style.overflow = '';

  window.scrollTo(0, drawerScrollY);
}

function openSidebar() {
  if (el.sidebar.classList.contains('open')) return;

  lockMainPage();
  el.sidebar.classList.add('open');
  el.sidebar.setAttribute('aria-hidden', 'false');
  el.sidebarOverlay.classList.add('show');

  requestAnimationFrame(() => {
    const active = el.curriculum.querySelector('.lesson-link.active');
    if (active) active.scrollIntoView({ block: 'nearest' });
  });
}

function closeSidebar() {
  if (!el.sidebar.classList.contains('open')) return;

  el.sidebar.classList.remove('open');
  el.sidebar.setAttribute('aria-hidden', 'true');
  el.sidebarOverlay.classList.remove('show');
  unlockMainPage();
}

el.menuButton.addEventListener('click', () => {
  if (el.sidebar.classList.contains('open')) closeSidebar(); else openSidebar();
});
el.sidebarClose.addEventListener('click', closeSidebar);
el.sidebarOverlay.addEventListener('click', closeSidebar);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

/*
  While the drawer is open, ONLY .curriculum may move.
  Wheel/trackpad input anywhere inside the drawer is routed to that list.
  Input outside the drawer is swallowed, so the page behind cannot move.
*/
document.addEventListener('wheel', e => {
  if (!el.sidebar.classList.contains('open')) return;

  e.preventDefault();
  e.stopPropagation();

  if (el.sidebar.contains(e.target)) {
    el.curriculum.scrollTop += e.deltaY;
  }
}, { passive: false, capture: true });

/* Keyboard scrolling is also confined to the curriculum while open. */
document.addEventListener('keydown', e => {
  if (!el.sidebar.classList.contains('open')) return;
  const key = e.key;
  if (!['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(key)) return;

  e.preventDefault();
  if (key === 'ArrowUp') el.curriculum.scrollTop -= 40;
  if (key === 'ArrowDown') el.curriculum.scrollTop += 40;
  if (key === 'PageUp') el.curriculum.scrollTop -= el.curriculum.clientHeight * .85;
  if (key === 'PageDown' || key === ' ') el.curriculum.scrollTop += el.curriculum.clientHeight * .85;
  if (key === 'Home') el.curriculum.scrollTop = 0;
  if (key === 'End') el.curriculum.scrollTop = el.curriculum.scrollHeight;
}, { capture: true });

document.addEventListener('touchstart', e => {
  if (!el.sidebar.classList.contains('open') || !e.touches.length) return;
  if (!el.sidebar.contains(e.target)) {
    drawerTouchY = null;
    return;
  }
  drawerTouchY = e.touches[0].clientY;
}, { passive: true, capture: true });

document.addEventListener('touchmove', e => {
  if (!el.sidebar.classList.contains('open')) return;

  e.preventDefault();
  e.stopPropagation();

  if (drawerTouchY == null || !e.touches.length || !el.sidebar.contains(e.target)) return;

  const currentY = e.touches[0].clientY;
  const delta = drawerTouchY - currentY;
  drawerTouchY = currentY;
  el.curriculum.scrollTop += delta;
}, { passive: false, capture: true });

document.addEventListener('touchend', () => {
  drawerTouchY = null;
}, { passive: true, capture: true });

/* Last-resort guard: if a browser tries to scroll the document anyway, snap it back. */
window.addEventListener('scroll', () => {
  if (!el.sidebar.classList.contains('open') || drawerScrollGuard) return;
  const y = window.scrollY || window.pageYOffset || 0;
  if (Math.abs(y - drawerScrollY) < 1) return;

  drawerScrollGuard = true;
  window.scrollTo(0, drawerScrollY);
  requestAnimationFrame(() => { drawerScrollGuard = false; });
}, { passive: true });

if (!state.code[state.current]) state.activeFile = bestFile(state.current);
renderLesson();
