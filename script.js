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
    f => {
      const match = String(f.html || '').match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
      if (!match) return false;
      const bodyText = match[1]
        .replace(/<!--[\s\S]*?-->/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      const withoutStarter = bodyText
        .replace('이 문장은 body 안에 있어서 화면에 보입니다.', '')
        .replace('この文はbodyの中にあるため画面に表示されます。', '')
        .trim();
      return withoutStarter.length > 0;
    },
    [['<!DOCTYPE html>','현재 파일을 HTML5 문서로 해석하라고 브라우저에 알려줍니다.'],['<head>','브라우저 탭 제목, 문자 인코딩처럼 화면 본문이 아닌 문서 정보를 담습니다.'],['<body>','실제 화면에 표시할 내용이 들어갑니다. 태그 없이 적은 글자도 텍스트 노드로 표시됩니다.']]),

  lesson('HTML','태그, 요소 그리고 부모·자식','태그와 중첩','기초',
    'HTML의 구조는 태그를 열고 닫아 요소를 만드는 방식으로 표현합니다. 요소 안에 다른 요소를 넣으면 부모와 자식 관계가 생깁니다. 이 관계를 이해하면 들여쓰기와 문서 구조가 자연스럽게 보이기 시작합니다.',
    ['<p>는 여는 태그, </p>는 닫는 태그이며 둘과 내용 전체를 p 요소라고 부릅니다.','요소 안에 들어간 요소는 자식, 바깥 요소는 부모가 됩니다.','같은 단계의 요소는 형제 관계이며 같은 깊이로 들여쓰는 것이 좋습니다.'],
    '<main>  <h1>제목</h1>  <p>문장</p>  </main>',
    'main 안에 <h1>나의 첫 제목</h1>과 <p>HTML 구조를 배우는 중입니다.</p>를 직접 작성하세요.',
    '두 요소 모두 <main>과 </main> 사이에 있어야 합니다. 자동 태그 닫기와 Enter 자동 들여쓰기를 사용해보세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>태그와 요소</title>\n  </head>\n  <body>\n    <main>\n      \n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<main\b[^>]*>[\s\S]*?<h1\b[^>]*>\s*[^<\s][^<]*<\/h1>[\s\S]*?<p\b[^>]*>\s*[^<\s][^<]*<\/p>[\s\S]*?<\/main>/i.test(f.html),
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
    f => /<main\b[^>]*>[\s\S]*?<h1\b[^>]*>[\s\S]*?<\/h1>[\s\S]*?<h2\b[^>]*>\s*[^<\s][^<]*<\/h2>[\s\S]*?<p\b[^>]*>\s*[^<\s][^<]*<\/p>[\s\S]*?<\/main>/i.test(f.html),
    [['<h1>','가장 높은 단계의 제목입니다.'],['<h2>','h1 아래의 소제목처럼 사용합니다.'],['<p>','한 덩어리의 문단을 의미합니다.']]),

  lesson('HTML','링크로 페이지 연결하기','링크','기초',
    '웹의 핵심은 문서와 문서를 연결하는 것입니다. a 태그의 href 속성에 이동할 주소를 적으면 링크가 됩니다.',
    ['a는 anchor의 약자입니다.','href에는 이동할 URL이나 파일 경로를 넣습니다.','target="_blank"를 쓰면 새 탭에서 열 수 있습니다.'],
    '<a href="주소">링크 이름</a>',
    'href를 https://example.com 으로 바꾸세요.',
    'a 태그 안의 href="..." 값만 바꾸면 됩니다.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>링크 연습</title>\n  </head>\n  <body>\n    <main>\n      <h1>유용한 링크</h1>\n      <a href="#">Example 사이트</a>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<a\b[^>]*href\s*=\s*["']https:\/\/example\.com\/?["'][^>]*>/i.test(f.html),
    [['<a>','클릭 가능한 링크를 만드는 태그입니다.'],['href','링크가 이동할 목적지를 지정하는 속성입니다.'],['https://','웹 주소의 통신 방식을 나타냅니다.']]),

  lesson('HTML','이미지 보여주기','이미지','기초',
    'img 태그는 이미지를 화면에 표시합니다. 닫는 태그가 없는 대표적인 빈 요소이며, src와 alt 속성을 자주 함께 사용합니다.',
    ['src에는 이미지 주소나 파일 경로를 넣습니다.','alt는 이미지가 보이지 않을 때 대신 설명하는 글입니다.','접근성을 위해 의미 있는 alt를 작성하는 습관이 중요합니다.'],
    '<img src="image.jpg" alt="이미지 설명">',
    'alt 값을 “산 풍경”으로 바꾸세요.',
    'img 태그의 alt="..." 부분을 수정하세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>이미지 연습</title>\n  </head>\n  <body>\n    <main>\n      <h1>여행 사진</h1>\n      <img src="https://picsum.photos/420/220" alt="사진">\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<img\b[^>]*alt\s*=\s*["']산 풍경["'][^>]*>/i.test(f.html),
    [['<img>','외부 이미지나 프로젝트 안의 이미지를 화면에 표시합니다.'],['src','source의 약자로 이미지 파일의 위치입니다.'],['alt','이미지를 볼 수 없는 상황에서도 내용을 전달하는 대체 텍스트입니다.']]),

  lesson('HTML','목록 만들기','목록','기초',
    '여러 항목을 묶어 보여줄 때는 목록 태그를 사용합니다. 순서가 중요하지 않으면 ul, 순서가 중요하면 ol을 사용합니다.',
    ['ul은 순서 없는 목록입니다.','ol은 순서 있는 목록입니다.','각 항목은 li 태그로 만듭니다.'],
    '<ul><li>항목</li></ul>',
    '목록에 “JavaScript” 항목을 하나 더 추가하세요.',
    '<li>JavaScript</li>를 ul 안쪽 마지막에 추가하세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>목록 연습</title>\n  </head>\n  <body>\n    <main>\n      <h1>배울 언어</h1>\n      <ul>\n        <li>HTML</li>\n        <li>CSS</li>\n      </ul>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<ul\b[^>]*>[\s\S]*?<li\b[^>]*>\s*JavaScript\s*<\/li>[\s\S]*?<\/ul>/i.test(f.html),
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
    f => (f.html.match(/<p\b[^>]*class\s*=\s*["'][^"']*\bnote\b[^"']*["'][^>]*>/gi) || []).length >= 2,
    [['class','여러 요소가 같은 그룹 이름을 공유할 수 있습니다.'],['id','한 요소를 고유하게 찾을 때 적합합니다.'],['.note','CSS에서 점(.)은 class를 선택한다는 뜻입니다.']]),

  lesson('HTML','표로 관계 있는 데이터 표현하기','표 만들기','핵심',
    '행과 열의 관계가 중요한 데이터는 table로 표현합니다. 단순히 화면을 칸으로 나누기 위해 table을 쓰는 것이 아니라 시간표, 가격표, 성적표처럼 실제 표 데이터에 사용합니다.',
    ['table은 표 전체를 감쌉니다.','tr은 한 행, th는 제목 셀, td는 일반 데이터 셀입니다.','표의 구조와 의미가 분명하면 스크린리더도 데이터를 더 잘 이해할 수 있습니다.'],
    '<table> <tr> <th>제목</th> <td>값</td> </tr> </table>',
    '두 번째 행을 추가하고 <td>JavaScript</td><td>동작</td> 두 셀을 작성하세요.',
    '기존 첫 번째 데이터 행 아래에 새로운 <tr>을 만들고 그 안에 td 두 개를 넣으세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>표 연습</title>\n  </head>\n  <body>\n    <main>\n      <h1>웹 기술 역할</h1>\n      <table>\n        <tr>\n          <th>기술</th>\n          <th>역할</th>\n        </tr>\n        <tr>\n          <td>HTML</td>\n          <td>구조</td>\n        </tr>\n      </table>\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<table\b[^>]*>[\s\S]*?<tr\b[^>]*>[\s\S]*?<td\b[^>]*>\s*JavaScript\s*<\/td>\s*<td\b[^>]*>\s*동작\s*<\/td>[\s\S]*?<\/tr>[\s\S]*?<\/table>/i.test(f.html),
    [['<table>','표 데이터 전체를 감싸는 요소입니다.'],['<tr>','table row의 약자로 표의 한 행을 만듭니다.'],['<th> / <td>','th는 제목 셀, td는 실제 데이터 셀을 의미합니다.']]),

  lesson('HTML','의미 있는 레이아웃','시맨틱 태그','핵심',
    'div만으로도 화면은 만들 수 있지만 header, main, section, footer 같은 태그를 사용하면 구조의 의미가 더 분명해집니다.',
    ['header는 머리말 영역입니다.','main은 페이지의 핵심 콘텐츠입니다.','section은 주제별 묶음, footer는 하단 정보를 나타냅니다.'],
    '<header> <main> <section> <footer>',
    'main 안의 콘텐츠를 section 태그로 감싸세요.',
    '<main> 바로 안쪽에 <section>을 열고, 내용 뒤에서 </section>으로 닫아주세요.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>의미 있는 레이아웃</title>\n  </head>\n  <body>\n    <header>\n      <h1>나의 사이트</h1>\n    </header>\n    <main>\n      <h2>소개</h2>\n      <p>의미 있는 구조를 연습합니다.</p>\n    </main>\n    <footer>2026</footer>\n  </body>\n</html>', css:'', js:''},
    f => /<main\b[^>]*>\s*<section\b[^>]*>[\s\S]*?<h2\b[^>]*>\s*[^<\s][^<]*<\/h2>[\s\S]*?<p\b[^>]*>\s*[^<\s][^<]*<\/p>[\s\S]*?<\/section>\s*<\/main>/i.test(f.html),
    [['<header>','사이트나 섹션의 시작 부분을 의미합니다.'],['<main>','현재 문서의 중심 콘텐츠를 나타냅니다.'],['<section>','같은 주제의 콘텐츠 묶음을 만듭니다.']]),

  lesson('HTML','HTML 미니 프로젝트','소개 페이지','프로젝트',
    '지금까지 배운 HTML만으로 작은 소개 페이지의 구조를 완성합니다. 아직 예쁘게 꾸미는 것은 신경 쓰지 않고 내용의 의미와 순서에 집중합니다.',
    ['h1로 페이지의 대표 제목을 만듭니다.','ul/li로 기술 목록을 만듭니다.','a로 다른 페이지로 이동하는 링크를 만듭니다.'],
    '구조 먼저 → 디자인은 나중',
    '제공된 전체 HTML 문서의 <main> 안에 제목, 소개 문단, 기술 목록, 링크를 직접 작성해 소개 페이지를 완성하세요.',
    '<h1>, <p>, <ul>/<li>, <a>를 직접 작성하세요. 기존 문서 골격은 유지하고 <main> 안의 콘텐츠는 스스로 구성합니다.',
    {html:'<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>나의 소개 페이지</title>\n  </head>\n  <body>\n    <main>\n      <!-- 여기부터 직접 소개 페이지의 전체 콘텐츠를 작성하세요. -->\n\n    </main>\n  </body>\n</html>', css:'', js:''},
    f => /<main\b[^>]*>[\s\S]*?<h1\b[^>]*>[\s\S]*?<\/h1>[\s\S]*?<p\b[^>]*>[\s\S]*?<\/p>[\s\S]*?<ul\b[^>]*>[\s\S]*?<li\b[^>]*>[\s\S]*?<\/li>[\s\S]*?<\/ul>[\s\S]*?<a\b[^>]*href\s*=\s*["'][^"']+["'][^>]*>[\s\S]*?<\/a>[\s\S]*?<\/main>/i.test(f.html),
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
    f => /body\s*\{[^}]*background-color\s*:\s*#f2f2f0\s*;?[^}]*\}/i.test(f.css),
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
    f => /\.card\s*\{[^}]*border-radius\s*:\s*16px\b[^}]*\}/i.test(f.css),
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
    f => /\.stage\s*\{[^}]*justify-content\s*:\s*center\b[^}]*\}/i.test(f.css),
    [['justify-content','주축을 기준으로 자식 요소의 위치를 정합니다.'],['align-items','교차축을 기준으로 자식 요소를 정렬합니다.'],['center','축의 중앙에 요소를 배치합니다.']]),

  lesson('CSS','Grid로 카드 배열하기','Grid','핵심',
    'CSS Grid는 행과 열을 동시에 다루는 레이아웃에 강합니다. 카드 목록이나 갤러리를 만들 때 특히 편리합니다.',
    ['display: grid로 Grid를 시작합니다.','grid-template-columns로 열의 개수와 크기를 정합니다.','repeat와 fr 단위를 사용하면 균등한 열을 쉽게 만들 수 있습니다.'],
    'grid-template-columns: repeat(3, 1fr);',
    '.grid를 3열로 만드세요.',
    '.grid에 grid-template-columns: repeat(3, 1fr);를 추가하세요.',
    {html:'<div class="grid">\n  <div>1</div><div>2</div><div>3</div>\n  <div>4</div><div>5</div><div>6</div>\n</div>', css:'body { padding: 40px; font-family: Arial, sans-serif; }\n.grid { display: grid; gap: 10px; }\n.grid div { padding: 28px; background: #ececea; text-align: center; border-radius: 10px; }', js:''},
    f => /\.grid\s*\{[^}]*grid-template-columns\s*:\s*(?:repeat\(\s*3\s*,\s*1fr\s*\)|1fr\s+1fr\s+1fr)\s*;?[^}]*\}/i.test(f.css),
    [['display: grid','행과 열 기반 레이아웃을 활성화합니다.'],['repeat(3, 1fr)','같은 너비의 열 3개를 만듭니다.'],['fr','Grid에서 남은 공간의 비율을 나타내는 단위입니다.']]),

  lesson('CSS','반응형 웹의 기본','미디어 쿼리','심화',
    '같은 사이트라도 모바일과 데스크톱에서는 화면 폭이 다릅니다. 미디어 쿼리를 사용하면 특정 너비 이하에서 스타일을 바꿀 수 있습니다.',
    ['@media로 조건부 CSS를 작성합니다.','max-width는 화면이 특정 크기 이하일 때 적용됩니다.','반응형은 새로운 페이지를 만드는 것이 아니라 같은 구조를 유연하게 바꾸는 방식입니다.'],
    '@media (max-width: 600px) { ... }',
    '600px 이하에서 .grid를 1열로 바꾸는 코드를 완성하세요.',
    '@media 안에서 grid-template-columns: 1fr;를 사용하세요.',
    {html:'<div class="grid">\n  <div>A</div><div>B</div><div>C</div>\n</div>', css:'body { padding: 24px; font-family: Arial, sans-serif; }\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.grid div { padding: 30px; background: #eee; }\n\n@media (max-width: 600px) {\n  .grid {\n    /* 모바일에서는 1열 */\n  }\n}', js:''},
    f => /@media\s*\(\s*max-width\s*:\s*600px\s*\)\s*\{[\s\S]*?\.grid\s*\{[^}]*grid-template-columns\s*:\s*1fr\s*;?[^}]*\}[\s\S]*?\}/i.test(f.css),
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
    f => /if\s*\(\s*score\s*>=\s*80\s*\)\s*\{[^}]*result\.textContent\s*=\s*["']PASS["'][^}]*\}/i.test(f.js),
    [['if','조건이 true일 때 중괄호 안의 코드를 실행합니다.'],['>=','왼쪽 값이 오른쪽 값보다 크거나 같은지 비교합니다.'],['else','if 조건이 false일 때 실행할 코드를 작성합니다.']]),

  lesson('JS','함수로 코드 묶기','함수','핵심',
    '함수는 여러 줄의 코드를 하나의 이름으로 묶어 필요할 때 다시 실행하게 합니다. 반복되는 코드를 줄이는 핵심 도구입니다.',
    ['function 키워드로 함수를 만들 수 있습니다.','괄호 안에는 함수가 받을 값을 적을 수 있습니다.','함수 이름 뒤에 ()를 붙이면 실행됩니다.'],
    'function hello() { ... }  hello();',
    '함수 이름을 sayHello로 바꾸고 호출 부분도 같은 이름으로 맞추세요.',
    'function hello와 맨 아래 hello()를 둘 다 sayHello로 바꾸세요.',
    {html:'<p id="message"></p>', css:baseCss, js:'function hello() {\n  document.querySelector("#message").textContent = "안녕하세요!";\n}\n\nhello();'},
    f => /function\s+sayHello\s*\([^)]*\)\s*\{[\s\S]*?message[\s\S]*?\}/i.test(f.js) && /(?:^|[;}\n])\s*sayHello\s*\(\s*\)\s*;?/im.test(f.js),
    [['function sayHello','sayHello라는 이름으로 코드 묶음을 정의합니다.'],['{ ... }','함수를 실행했을 때 수행할 코드입니다.'],['sayHello()','정의한 함수를 실제로 호출합니다.']]),

  lesson('JS','HTML 요소 찾기','DOM 선택','핵심',
    'JavaScript가 화면을 바꾸려면 먼저 HTML 요소를 찾아야 합니다. querySelector는 CSS 선택자 방식으로 요소 하나를 찾습니다.',
    ['#은 id, .은 class를 선택합니다.','querySelector는 조건에 맞는 첫 번째 요소를 가져옵니다.','찾은 요소는 변수에 저장해 다시 사용할 수 있습니다.'],
    'document.querySelector("#id")',
    'querySelector가 #title을 찾도록 수정하세요.',
    '"h1" 대신 "#title"을 넣으세요.',
    {html:'<h1 id="title">Before</h1>', css:baseCss, js:'const title = document.querySelector("h1");\ntitle.textContent = "After";'},
    f => /const\s+title\s*=\s*document\.querySelector\(\s*["']#title["']\s*\)\s*;?/i.test(f.js),
    [['document','현재 브라우저에 열린 HTML 문서를 의미합니다.'],['querySelector','CSS 선택자를 사용해 HTML 요소를 찾습니다.'],['#title','id가 title인 요소를 선택합니다.']]),

  lesson('JS','클릭 이벤트','이벤트','핵심',
    '사용자가 버튼을 클릭하거나 글자를 입력하면 이벤트가 발생합니다. addEventListener로 그 순간 실행할 코드를 연결합니다.',
    ['click은 클릭 이벤트 이름입니다.','이벤트 리스너 안의 함수가 클릭할 때마다 실행됩니다.','UI 대부분은 이벤트를 중심으로 동작합니다.'],
    'element.addEventListener("click", () => { ... });',
    '버튼을 클릭하면 제목이 “Clicked!”로 바뀌도록 빈칸을 완성하세요.',
    'addEventListener의 첫 번째 값에 "click"을 넣으세요.',
    {html:'<h1 id="title">Ready</h1>\n<button id="button">Click</button>', css:baseCss + '\nbutton { padding: 10px 16px; }', js:'const title = document.querySelector("#title");\nconst button = document.querySelector("#button");\n\nbutton.addEventListener("", () => {\n  title.textContent = "Clicked!";\n});'},
    f => /button\.addEventListener\(\s*["']click["']\s*,[\s\S]*?=>\s*\{[\s\S]*?title\.textContent\s*=\s*["']Clicked!["'][\s\S]*?\}\s*\)/i.test(f.js),
    [['addEventListener','특정 이벤트가 발생할 때 실행할 함수를 등록합니다.'],['"click"','마우스나 터치로 클릭했을 때 발생하는 이벤트입니다.'],['() => { }','이벤트가 발생했을 때 실행할 함수입니다.']]),

  lesson('JS','입력값 읽기','입력 처리','핵심',
    'input 요소의 value를 읽으면 사용자가 입력한 내용을 JavaScript에서 사용할 수 있습니다.',
    ['input.value는 현재 입력창의 값입니다.','클릭 이벤트와 함께 사용하면 간단한 폼을 만들 수 있습니다.','입력값은 기본적으로 문자열로 다뤄지는 경우가 많습니다.'],
    'const value = input.value;',
    '버튼 클릭 시 message에 input.value가 표시되도록 빈칸을 완성하세요.',
    'message.textContent = input.value; 형태로 작성하세요.',
    {html:'<input id="name" placeholder="이름">\n<button id="show">표시</button>\n<p id="message"></p>', css:baseCss + '\ninput, button { padding: 10px; }', js:'const input = document.querySelector("#name");\nconst button = document.querySelector("#show");\nconst message = document.querySelector("#message");\n\nbutton.addEventListener("click", () => {\n  message.textContent = "";\n});'},
    f => /button\.addEventListener\(\s*["']click["']\s*,[\s\S]*?=>\s*\{[\s\S]*?message\.textContent\s*=\s*input\.value\s*;?[\s\S]*?\}\s*\)/i.test(f.js),
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
    f => /[A-Za-z_$][\w$]*\.addEventListener\(\s*["']click["']\s*,[\s\S]*?=>\s*\{[\s\S]*?(?:count\s*=\s*count\s*\+\s*2|count\s*\+=\s*2)\s*;?[\s\S]*?[A-Za-z_$][\w$]*\.textContent\s*=\s*count[\s\S]*?\}\s*\)/i.test(f.js),
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
    f => /<button\b[^>]*>/i.test(f.html) && /addEventListener\s*\(\s*["']click["']\s*,[\s\S]*?(?:function\s*\([^)]*\)|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)[\s\S]*?\{[\s\S]*?(?:textContent|innerText)\s*=[\s\S]*?\}/i.test(f.js),
    [['button','사용자가 행동을 시작하는 UI입니다.'],['addEventListener','사용자 행동과 코드를 연결합니다.'],['textContent','행동 결과를 화면에 보여줍니다.']]),

  lesson('PROJECT','작은 웹앱 만들기','미니 Todo','도전',
    '입력창, 버튼, 목록을 이용해 아주 작은 Todo 기능을 만들어봅니다. 여기부터는 필요한 코드가 거의 제공되지 않습니다.',
    ['input에서 할 일을 입력받습니다.','버튼을 클릭하면 새로운 li를 만듭니다.','목록에 새 항목을 추가합니다.'],
    '입력 → 이벤트 → 새 요소 생성 → 목록 추가',
    'input, button, ul을 만들고 JS에서 createElement("li")를 사용하세요.',
    'document.createElement("li")가 핵심입니다.',
    {html:'<!-- Todo의 HTML을 직접 작성하세요 -->\n', css:'body { padding: 40px; font-family: Arial, sans-serif; background: #f4f4f2; }\n', js:'// Todo 동작을 직접 작성하세요\n'},
    f => /<input\b[^>]*>/i.test(f.html) && /<button\b[^>]*>/i.test(f.html) && /<ul\b[^>]*>/i.test(f.html) && /addEventListener\s*\(\s*["']click["']/i.test(f.js) && /createElement\(\s*["']li["']\s*\)/i.test(f.js) && /(?:appendChild|append)\s*\(/i.test(f.js) && /\.value\b/i.test(f.js),
    [['input','사용자에게 새 할 일의 내용을 받습니다.'],['createElement','JavaScript로 새로운 HTML 요소를 생성합니다.'],['append / appendChild','생성한 요소를 실제 문서 안에 추가할 때 사용합니다.']]),

  lesson('PROJECT','Final — 빈 화면에서 시작하기','자유 제작','최종',
    '마지막 레슨에는 정답도 시작 코드도 거의 없습니다. 지금까지 배운 HTML, CSS, JavaScript를 사용해 스스로 한 페이지를 완성하세요.',
    ['먼저 만들고 싶은 화면을 한 문장으로 정합니다.','HTML 구조를 먼저 만들고 CSS를 적용합니다.','마지막에 버튼이나 입력 같은 JavaScript 동작을 하나 이상 추가합니다.'],
    '생각 → 구조 → 스타일 → 동작 → 수정',
    'h1, button, addEventListener를 포함한 나만의 웹페이지를 완성하세요.',
    '가장 작은 기능부터 시작하세요. 제목 하나, 버튼 하나면 충분합니다.',
    {html:'<!-- HTML -->\n', css:'/* CSS */\n', js:'// JavaScript\n'},
    f => /<h1\b[^>]*>[\s\S]*?<\/h1>/i.test(f.html) && /<button\b[^>]*>[\s\S]*?<\/button>/i.test(f.html) && /addEventListener\s*\(\s*["']click["']/i.test(f.js) && /[^\s/*][\s\S]*\{[^}]+:[^}]+\}/.test(f.css),
    [['1. 구조','먼저 HTML만으로 내용이 이해되는 페이지를 만듭니다.'],['2. 디자인','CSS로 읽기 쉽고 정돈된 화면을 만듭니다.'],['3. 동작','JavaScript로 사용자가 직접 경험할 기능을 하나 추가합니다.']])
];

function lesson(group, title, nav, kind, description, points, syntax, mission, hint, files, validate, explain) {
  return { group, title, nav, kind, description, points, syntax, mission, hint, files, validate, explain };
}

const jaLessonData = [{"title": "WebページとHTML文書", "nav": "HTMLの役割", "description": "WebページはHTML文書から始まります。HTMLは色や動きより先に、何があり、どのような関係で並んでいるかという構造をブラウザへ伝えます。まずはどの部分が画面に表示されるのかを確認します。", "points": ["ブラウザはHTMLを読み、ページの構造を作ります。", "headには文書情報、bodyには画面に表示する内容を入れます。", "body内の普通の文字もテキストノードとして表示され、自動でp要素になるわけではありません。"], "mission": "body内の案内文の下に「ブラウザに表示される内容」という文字を1行追加してください。", "hint": "新しいタグは不要です。<body>と</body>の間に普通の文字として追加し、実行結果を確認してください。", "explain": [["<!DOCTYPE html>", "このファイルをHTML5文書として解釈するようブラウザに伝えます。"], ["<head>", "タブのタイトルや文字コードなど、本文以外の文書情報を入れます。"], ["<body>", "実際に画面へ表示する内容を入れます。タグのない文字もテキストノードとして表示されます。"]]}, {"title": "タグ・要素・親子関係", "nav": "タグと入れ子", "description": "HTMLはタグを開いて閉じることで要素を作ります。要素の中に別の要素を入れると親子関係が生まれます。この関係が分かると、インデントと文書構造が読みやすくなります。", "points": ["<p>は開始タグ、</p>は終了タグで、内容を含めた全体がp要素です。", "内側の要素は子、外側の要素は親です。", "同じ階層の要素は兄弟要素で、同じ深さにインデントします。"], "mission": "mainの中に<h1>最初の見出し</h1>と<p>HTMLの構造を学んでいます。</p>を自分で書いてください。", "hint": "2つの要素はどちらも<main>と</main>の間に置きます。自動タグ閉じとEnterの自動インデントも使ってみましょう。", "explain": [["タグ", "<h1>のように要素の開始・終了を示す記法です。"], ["要素", "<h1>見出し</h1>のように開始タグ・内容・終了タグを合わせた構造です。"], ["親・子", "mainの中にh1とpがあれば、mainが親、h1とpが子です。"]]}, {"title": "属性と値で情報を追加する", "nav": "属性と値", "description": "タグ名だけでは足りない情報は属性で追加します。属性は通常、開始タグの中に 名前=\"値\" の形で書きます。リンク先や画像説明、言語指定などに使われます。", "points": ["属性は開始タグの中に書きます。", "複数の属性は空白で区切ります。", "初学者のうちは属性値を引用符で囲む習慣をつけましょう。"], "mission": "aタグに href=\"https://example.com\" と target=\"_blank\" の2つの属性を追加してください。", "hint": "開始<a>タグの中に2つの属性を空白で区切って書きます。リンク文字はそのままにします。", "explain": [["href=\"...\"", "リンクの移動先を指定します。"], ["target=\"_blank\"", "リンクを新しいタブで開きます。"], ["lang=\"ja\"", "html要素の主な言語が日本語であることを示します。"]]}, {"title": "見出しと段落", "nav": "テキストタグ", "description": "文章はWebページで最もよく使う内容です。見出しの重要度はh1〜h6、通常の段落はpで表します。", "points": ["h1はページを代表する見出しとして使います。", "h2〜h6は下位の見出しを階層的に表します。", "pは独立した段落を表します。"], "mission": "h1の下に<h2>今日学ぶ内容</h2>と<p>タグの意味を使い分けます。</p>を追加してください。", "hint": "既存のh1の下にh2を書き、その下に新しいp要素を書きます。", "explain": [["<h1>", "最上位の見出しです。"], ["<h2>", "h1の下に置く小見出しなどに使います。"], ["<p>", "ひとまとまりの段落を表します。"]]}, {"title": "リンクでページをつなぐ", "nav": "リンク", "description": "Webの大きな特徴は文書同士をつなげられることです。aタグのhref属性に移動先を書けばリンクになります。", "points": ["aはanchorの略です。", "hrefにはURLやファイルパスを書きます。", "target=\"_blank\"で新しいタブに開けます。"], "mission": "hrefを https://example.com に変更してください。", "hint": "aタグのhref=\"...\"の値だけを変更します。", "explain": [["<a>", "クリックできるリンクを作るタグです。"], ["href", "リンク先を指定する属性です。"], ["https://", "Webアドレスで使われる通信方式を示します。"]]}, {"title": "画像を表示する", "nav": "画像", "description": "imgタグは画像を表示するための空要素です。srcとaltを一緒に使うことが重要です。", "points": ["srcには画像URLやファイルパスを入れます。", "altは画像を表示できないときに代わりに伝える説明です。", "アクセシビリティのため、意味のあるaltを書く習慣をつけます。"], "mission": "altの値を「山の風景」に変更してください。", "hint": "imgタグの alt=\"...\" の部分を変更します。", "explain": [["<img>", "外部画像やプロジェクト内の画像を表示します。"], ["src", "画像ファイルの場所を指定します。"], ["alt", "画像を見られない状況でも内容を伝える代替テキストです。"]]}, {"title": "リストを作る", "nav": "リスト", "description": "複数の項目をまとめるときはリスト要素を使います。順序が重要でなければul、順序が重要ならolです。", "points": ["ulは順序なしリストです。", "olは順序付きリストです。", "各項目はliで作ります。"], "mission": "リストに「JavaScript」の項目を1つ追加してください。", "hint": "<li>JavaScript</li>をulの最後に追加します。", "explain": [["<ul>", "順番を持たないリスト全体を囲みます。"], ["<ol>", "1、2、3のような順番があるリストに使います。"], ["<li>", "リストの1項目を表します。"]]}, {"title": "フォームと入力要素", "nav": "フォーム要素", "description": "ユーザーから値を受け取るときはform、label、input、buttonを組み合わせます。labelをinputに結びつけると意味が明確になり、アクセシビリティも向上します。", "points": ["formは1つの入力操作をまとめます。", "labelのforとinputのidを同じ値にします。", "placeholderはlabelの代わりではなく補助説明として使います。"], "mission": "inputに id=\"name\" を追加し、その直前に <label for=\"name\">名前</label> を書いてください。", "hint": "labelのforとinputのidがどちらもnameになっているか確認してください。", "explain": [["<input>", "1行テキストや数字など、さまざまな入力を受け取ります。"], ["type", "inputが受け取るデータの種類を指定します。"], ["<label>", "入力欄が何のためのものかを明確にします。"]]}, {"title": "classとid", "nav": "要素に名前を付ける", "description": "CSSやJavaScriptで特定の要素を探すには名前が必要です。classは複数要素で共有でき、idは通常1つの要素を一意に識別するために使います。", "points": ["classは複数の要素に同じスタイルや役割を持たせるときに便利です。", "idは文書内で一意の要素を識別するときに使います。", "CSSとJavaScriptで要素を選ぶ基準になります。"], "mission": "2つ目のpタグにも class=\"note\" を追加してください。", "hint": "<p class=\"note\"> の形でclass属性を付けます。", "explain": [["class", "複数の要素が同じグループ名を共有できます。"], ["id", "1つの要素を固有に識別するときに向いています。"], [".note", "CSSではピリオドがclass選択を表します。"]]}, {"title": "表で関連データを表す", "nav": "表を作る", "description": "行と列の関係が重要なデータはtableで表します。レイアウト目的ではなく、時間割や価格表のような表データに使います。", "points": ["tableは表全体を囲みます。", "trは1行、thは見出しセル、tdは通常セルです。", "意味のある表構造はスクリーンリーダーにも伝わりやすくなります。"], "mission": "2行目を追加し、<td>JavaScript</td><td>動作</td> の2セルを書いてください。", "hint": "既存のデータ行の下に新しい<tr>を作り、その中にtdを2つ置きます。", "explain": [["<table>", "表データ全体を囲みます。"], ["<tr>", "table rowの略で、表の1行を作ります。"], ["<th> / <td>", "thは見出しセル、tdは通常のデータセルです。"]]}, {"title": "意味のあるレイアウト", "nav": "セマンティックタグ", "description": "divだけでも画面は作れますが、header、main、section、footerなどを使うと構造の意味が明確になります。", "points": ["headerはヘッダー領域です。", "mainはページの中心となる内容です。", "sectionは主題ごとのまとまり、footerは末尾の情報を表します。"], "mission": "main内のコンテンツをsectionタグで囲んでください。", "hint": "<main>の直後に<section>を開き、内容の後で</section>を閉じます。", "explain": [["<header>", "サイトやセクションの先頭部分を表します。"], ["<main>", "現在の文書の中心コンテンツを表します。"], ["<section>", "同じ主題のコンテンツをまとめます。"]]}, {"title": "HTMLミニプロジェクト", "nav": "紹介ページ", "description": "ここまで学んだHTMLだけで小さな紹介ページを完成させます。見た目よりも、内容の意味と順序を正しく組み立てることに集中します。", "points": ["h1で代表見出しを作ります。", "ul/liでスキル一覧を作ります。", "aで別ページへ移動できるリンクを作ります。"], "mission": "用意されたHTML文書の<main>内に、見出し・紹介文・技術リスト・リンクを自分で書いて紹介ページを完成させてください。", "hint": "<h1>、<p>、<ul>/<li>、<a>を自分で書きます。文書の骨組みは維持してください。", "explain": [["構造", "何を見せるかをまずHTMLで決めます。"], ["階層", "h1を基準に見出しと内容を自然に配置します。"], ["リンク", "最後にユーザーが移動できる経路を用意します。"]]}, {"title": "CSSルールの構造", "nav": "CSS文法", "description": "CSSはセレクタで対象を選び、中括弧の中にプロパティと値を書きます。まず1つのルールを正確に読めるようにします。", "points": ["セレクタはどのHTML要素を装飾するか決めます。", "プロパティは何を変えるか、値はどう変えるかを表します。", "宣言の末尾にセミコロンを書く習慣をつけます。"], "mission": "h1のcolorを#344960に変更し、同じルールに font-size: 36px; を1行追加してください。", "hint": "h1の中括弧の中に プロパティ: 値; の形で2行書きます。", "explain": [["h1", "このルールを適用するHTML要素を選びます。"], ["color", "文字色を変更するCSSプロパティです。"], ["#344960", "16進数で表した色の値です。"]]}, {"title": "色と背景", "nav": "色", "description": "文字色はcolor、背景色はbackground-colorで指定します。色はHEX、RGB、HSLなどで表せます。", "points": ["colorは文字の前景色です。", "background-colorは要素の背景色です。", "デザイン全体で使う色数を絞ると整って見えます。"], "mission": "bodyの背景色を#f2f2f0に変更してください。", "hint": "bodyルールのbackground-colorを変更します。", "explain": [["color", "文字色を決めます。"], ["background-color", "要素の背景色を決めます。"], ["HEX", "#RRGGBB形式で色を表す方法です。"]]}, {"title": "文字サイズと太さ", "nav": "タイポグラフィ", "description": "読みやすいWebサイトでは文字サイズ、太さ、行間が整理されています。font-size、font-weight、line-heightをよく使います。", "points": ["font-sizeは文字サイズです。", "font-weightは文字の太さです。", "line-heightは行と行の高さを決めます。"], "mission": "h1のfont-sizeを42pxに変更してください。", "hint": "h1の28pxを42pxに変更します。", "explain": [["font-size", "文字の大きさを設定します。"], ["font-weight", "文字の太さを調整します。"], ["line-height", "本文の読みやすさに大きく影響する行の高さです。"]]}, {"title": "marginとpadding", "nav": "余白", "description": "Webデザインの完成度は余白で大きく変わります。marginは外側、paddingは内側の余白です。", "points": ["marginは他要素との距離です。", "paddingは境界線と内容の間の距離です。", "8px、16px、24pxのように規則を作ると整います。"], "mission": ".cardのpaddingを24pxに変更してください。", "hint": ".card内を padding: 24px; に変更します。", "explain": [["margin", "要素の外側の空間です。"], ["padding", "要素の内側の空間です。"], ["box model", "content、padding、border、marginで要素のサイズを考えるモデルです。"]]}, {"title": "境界線と角丸", "nav": "カードを作る", "description": "borderは要素の境界、border-radiusは角の丸みを作ります。カードや入力欄、ボタンでよく使います。", "points": ["borderは太さ・種類・色をまとめて指定できます。", "border-radiusは角の丸みを決めます。", "強い影を使わなくても細い境界線だけで整ったUIを作れます。"], "mission": ".cardのborder-radiusを16pxに変更してください。", "hint": ".cardのborder-radiusの値だけを変更します。", "explain": [["border", "要素の境界線を作ります。"], ["border-radius", "要素の角を丸くします。"], ["solid", "実線のborderを指定します。"]]}, {"title": "ボックスモデルとbox-sizing", "nav": "ボックスモデル", "description": "要素の実際の大きさはcontent、padding、borderの組み合わせで決まります。box-sizingを理解すると幅の計算が予測しやすくなります。", "points": ["content-boxではwidthにpaddingとborderが追加されます。", "border-boxでは指定したwidthの中にpaddingとborderを含めます。", "実務ではborder-boxを広く使うことが多いです。"], "mission": ".cardの最終幅320pxにpaddingも含まれるよう box-sizing: border-box; を追加してください。", "hint": ".cardブロック内に box-sizing: border-box; を書きます。", "explain": [["content", "実際の内容が入る領域です。"], ["padding / border", "内容の外側に追加される領域です。"], ["border-box", "指定幅の中にpaddingとborderを含めます。"]]}, {"title": "positionで位置の基準を作る", "nav": "位置指定", "description": "positionを使うと通常の配置から離して要素を置けます。absoluteの基準を作るために親へrelativeを指定する使い方を覚えます。", "points": ["relativeは子absoluteの基準点を作れます。", "absoluteは通常のレイアウトフローから外れて配置されます。", "topやrightで基準からの距離を指定します。"], "mission": ".badgeをcardの右上基準で配置できるよう、.cardにrelative、.badgeにabsoluteを追加してください。", "hint": "2つのセレクタにpositionをそれぞれ追加します。topとrightはすでに用意されています。", "explain": [["position: relative", "absolute子要素の位置基準を作るときによく使います。"], ["position: absolute", "通常の配置フローから外して座標のように配置します。"], ["top / right", "基準要素の上・右からの距離を指定します。"]]}, {"title": "displayとFlexbox", "nav": "横並び", "description": "Flexboxは複数要素を1行または1列に並べるための代表的なレイアウト機能です。", "points": ["親要素にdisplay: flexを指定します。", "gapは子要素同士の間隔です。", "justify-contentとalign-itemsで整列を制御します。"], "mission": ".rowに display: flex; を追加してください。", "hint": ".rowの中括弧の中に display: flex; を書きます。", "explain": [["display: flex", "子要素をFlexboxレイアウトで配置します。"], ["gap", "子要素の間に一定の間隔を作ります。"], ["親/子", "Flexboxのルールは親に書き、実際に並ぶのは子要素です。"]]}, {"title": "Flexの整列を理解する", "nav": "整列", "description": "Flexboxの軸を理解すると、中央揃えから両端配置まで多くのUIを簡単に作れます。", "points": ["justify-contentは主軸方向の整列です。", "align-itemsは交差軸方向の整列です。", "flex-directionを変えると主軸方向も変わります。"], "mission": ".stageに justify-content: center; を追加してください。", "hint": "display: flexの下に justify-content: center; を書きます。", "explain": [["justify-content", "主軸を基準に子要素の位置を決めます。"], ["align-items", "交差軸を基準に子要素を整列します。"], ["center", "軸の中央に要素を配置します。"]]}, {"title": "Gridでカードを並べる", "nav": "Grid", "description": "CSS Gridは行と列を同時に扱うレイアウトに強く、カード一覧やギャラリーに便利です。", "points": ["display: gridでGridを始めます。", "grid-template-columnsで列数と幅を決めます。", "repeatとfrで均等な列を簡単に作れます。"], "mission": ".gridを3列にしてください。", "hint": ".gridに grid-template-columns: repeat(3, 1fr); を追加します。", "explain": [["display: grid", "行と列ベースのレイアウトを有効にします。"], ["repeat(3, 1fr)", "同じ幅の列を3つ作ります。"], ["fr", "Grid内の残り空間の比率を表す単位です。"]]}, {"title": "レスポンシブWebの基本", "nav": "メディアクエリ", "description": "モバイルとデスクトップでは画面幅が異なります。メディアクエリを使うと、特定の幅以下でスタイルを切り替えられます。", "points": ["@mediaで条件付きCSSを書きます。", "max-widthは指定幅以下で適用されます。", "レスポンシブは別ページではなく同じ構造を柔軟に変える考え方です。"], "mission": "600px以下で.gridが1列になるコードを完成させてください。", "hint": "@media内で grid-template-columns: 1fr; を使います。", "explain": [["@media", "条件が成立したときだけ適用するCSS領域です。"], ["max-width: 600px", "ブラウザ幅が600px以下かを判定します。"], ["1fr", "モバイルで1行にカード1枚だけ表示します。"]]}, {"title": "CSSミニプロジェクト", "nav": "ランディングカード", "description": "HTMLで作った構造を実際のサービスのように整えます。正解1つよりも、余白と整列の原則を使うことが目標です。", "points": ["カードに十分なpaddingを与えます。", "ボタンとテキストの間隔を整えます。", "色を増やしすぎず基本色と強調色に絞ります。"], "mission": ".cardにpadding、border-radius、backgroundの3つをすべて使ってください。", "hint": "値は自由です。3つのCSSプロパティが.card内にあれば条件を満たします。", "explain": [["padding", "内容が端に貼り付かないよう内側余白を作ります。"], ["border-radius", "カードの印象を柔らかくします。"], ["background", "カードをページ背景と視覚的に分けます。"]]}, {"title": "JavaScriptを始める", "nav": "JSの開始", "description": "JavaScriptはHTMLとCSSで作った画面に動きを追加します。まずconsole.logでコードが実行されたか確認します。", "points": ["JavaScriptは基本的に上から下へ実行されます。", "console.logは開発中に値を確認する基本ツールです。", "文字列は引用符で囲みます。"], "mission": "console.logで「Hello JavaScript」を出力してください。", "hint": "JSタブで引用符の中の文字だけを変更します。", "explain": [["console.log", "開発者ツールのコンソールに値を表示します。"], ["\"文字列\"", "文字データは引用符で囲みます。"], [";", "文の終わりを明確に示せます。"]]}, {"title": "consoleで値とエラーを確認する", "nav": "コンソールとデバッグ", "description": "JavaScriptでは画面だけでなく、コードが持つ値を確認する習慣が重要です。console.logで処理の流れを追えます。", "points": ["console.logは変数や計算結果を確認する基本的なデバッグ手段です。", "エラーメッセージは失敗ではなく、どこが何故おかしいかを教える情報です。", "小さく実行して値を確認すると問題を早く見つけられます。"], "mission": "message変数の値を console.log(message); で出力する1行を追加してください。", "hint": "変数を作った次の行に console.log(message); を書きます。", "explain": [["console.log(...)", "括弧内の値をブラウザの開発者ツールへ出力します。"], ["エラーメッセージ", "種類と位置を読むと修正箇所を見つけやすくなります。"], ["小さく確認", "長いコードを一気に書かず途中の値をこまめに確認します。"]]}, {"title": "変数で値を覚える", "nav": "変数", "description": "変数は値を保存し、名前を付ける場所です。変更する値にはlet、再代入しない値にはconstをよく使います。", "points": ["letは後で別の値を代入できます。", "constは同じ変数へ別の値を再代入できません。", "良い変数名は値の意味を説明します。"], "mission": "scoreの初期値を10に変更してください。", "hint": "let score = 0 の数字だけを10に変更します。", "explain": [["let score", "scoreという変更可能な変数を作ります。"], ["= 10", "右側の値を左側の変数へ保存します。"], ["textContent", "HTML要素内の文字をJavaScriptで変更します。"]]}, {"title": "数値と文字列", "nav": "データ型", "description": "JavaScriptは数値、文字列、真偽値など複数の種類のデータを扱います。同じ+でもデータ型によって結果が変わります。", "points": ["数値は引用符なしで書きます。", "文字列は引用符で囲みます。", "typeofで値のデータ型を確認できます。"], "mission": "ageを数値20に変更してください。引用符は使いません。", "hint": "const age = \"20\" から引用符を外します。", "explain": [["20", "引用符がないので数値です。"], ["\"20\"", "引用符があれば見た目が数字でも文字列です。"], ["+", "数値では加算、文字列では連結として動作することがあります。"]]}, {"title": "条件で動作を変える", "nav": "条件文", "description": "if文を使うと、条件が真か偽かによって実行するコードを変えられます。", "points": ["ifの括弧内には真偽を判定する条件を書きます。", "===は2つの値が同じか厳密に比較します。", "elseは条件が偽のときに実行されます。"], "mission": "scoreが80以上のとき「PASS」になるよう条件を修正してください。", "hint": "score > 80 ではなく score >= 80 に変更します。", "explain": [["if", "条件がtrueのとき中括弧内を実行します。"], [">=", "左の値が右の値以上かを比較します。"], ["else", "if条件がfalseのときの処理を書きます。"]]}, {"title": "関数でコードをまとめる", "nav": "関数", "description": "関数は複数行の処理を1つの名前にまとめ、必要なときに再実行できるようにします。", "points": ["functionキーワードで関数を作れます。", "括弧内には関数が受け取る値を書けます。", "関数名の後ろに()を付けると実行できます。"], "mission": "関数名をsayHelloに変更し、呼び出し側も同じ名前にそろえてください。", "hint": "function hello と末尾の hello() の両方をsayHelloに変えます。", "explain": [["function sayHello", "sayHelloという名前で処理のまとまりを定義します。"], ["{ ... }", "関数を実行したときの処理です。"], ["sayHello()", "定義した関数を実際に呼び出します。"]]}, {"title": "HTML要素を探す", "nav": "DOM選択", "description": "JavaScriptで画面を変えるには、まずHTML要素を取得します。querySelectorはCSSセレクタと同じ書き方で要素を1つ探します。", "points": ["#はid、.はclassを選びます。", "querySelectorは条件に合う最初の要素を返します。", "取得した要素は変数に保存して再利用できます。"], "mission": "querySelectorが#titleを取得するよう修正してください。", "hint": "\"h1\"の代わりに\"#title\"を入れます。", "explain": [["document", "現在のHTML文書を表します。"], ["querySelector", "CSSセレクタで要素を1つ取得します。"], ["#title", "id=\"title\"の要素を選びます。"]]}, {"title": "クリックイベント", "nav": "イベント", "description": "イベントはユーザーの操作とJavaScriptをつなぎます。クリック、入力、キー操作などを検知できます。", "points": ["addEventListenerでイベントを登録します。", "clickはクリックされたときに発生します。", "イベント内でDOMを変更すると画面が反応します。"], "mission": "ボタンをクリックしたら見出しが「Clicked!」に変わるよう空欄を完成させてください。", "hint": "addEventListenerの1つ目の値に\"click\"を入れます。", "explain": [["addEventListener", "要素にユーザー操作を監視する処理を登録します。"], ["click", "クリック時に発生するイベント名です。"], ["textContent", "要素内の文字を変更します。"]]}, {"title": "入力値を読む", "nav": "入力処理", "description": "inputのvalueを読むと、ユーザーが入力した文字をJavaScriptで利用できます。", "points": ["input.valueで現在の入力値を取得します。", "クリックイベントと組み合わせて値を処理できます。", "取得した値をtextContentで画面へ表示できます。"], "mission": "ボタンをクリックしたとき、messageにinput.valueが表示されるよう空欄を完成させてください。", "hint": "message.textContent = input.value; の形で書きます。", "explain": [["input.value", "入力欄に現在入っている値です。"], ["message.textContent", "取得した値を画面の要素へ表示します。"], ["click", "入力を処理するタイミングを作ります。"]]}, {"title": "配列と繰り返し", "nav": "繰り返しデータ", "description": "配列は複数の値を順番にまとめて保存します。forEachなどと組み合わせると同じ処理を各項目へ実行できます。", "points": ["配列は[]で複数の値をまとめます。", "要素はカンマで区切ります。", "forEachで各要素を順番に処理できます。"], "mission": "skills配列に「JavaScript」を追加してください。", "hint": "配列の最後に , \"JavaScript\" を追加します。", "explain": [["[ ... ]", "複数の値を1つの配列としてまとめます。"], ["forEach", "配列の各要素に同じ処理を実行します。"], ["item", "繰り返し中の現在の要素を受け取る変数として使えます。"]]}, {"title": "JavaScriptミニプロジェクト", "nav": "カウンター", "description": "ボタンと変数、イベントを組み合わせて小さなカウンターを完成させます。", "points": ["変数に現在の数を保存します。", "クリックのたびに値を変更します。", "変更した値をDOMへ反映します。"], "mission": "ボタンを押すたびにcountが2ずつ増えるよう修正してください。", "hint": "count = count + 1 の1を2に変更します。", "explain": [["count", "現在の数を保存する変数です。"], ["addEventListener", "クリックと処理をつなぎます。"], ["textContent", "新しい値を画面へ表示します。"]]}, {"title": "完成イメージを見て作る", "nav": "プロフィールカード", "description": "ここからは説明を減らし、必要な構造を自分で考えます。プロフィールカードに必要なHTMLとCSSを組み立てます。", "points": ["HTMLでプロフィールの構造を作ります。", "classを付けてCSSから選びます。", "余白と角丸を使ってカードらしく整えます。"], "mission": "class=\"profile\"の要素とborder-radiusを使ってプロフィールカードを作ってください。", "hint": "HTMLにclass=\"profile\"を作り、CSSで.profileをスタイリングします。", "explain": [["HTML", "まず内容と構造を作ります。"], [".profile", "classを使ってカード全体をCSSから選びます。"], ["border-radius", "カードの角を整えます。"]]}, {"title": "機能を見て実装する", "nav": "トグルボタン", "description": "必要な機能だけを見て、HTMLとJavaScriptを自分で組み立てる練習です。", "points": ["buttonを用意します。", "addEventListenerでクリックを監視します。", "textContentを変更して反応を見せます。"], "mission": "button、addEventListener、textContentをすべて使い、クリックに反応する機能を作ってください。", "hint": "id名は自由です。3つの要素がコードにすべて登場すれば条件を満たします。", "explain": [["button", "ユーザーが操作を始めるUIです。"], ["addEventListener", "ユーザー操作とコードを結びます。"], ["textContent", "操作の結果を画面に表示します。"]]}, {"title": "小さなWebアプリを作る", "nav": "ミニTodo", "description": "入力欄、ボタン、リストを使って小さなTodo機能を作ります。ここからは開始コードがほとんどありません。", "points": ["inputからTodo内容を受け取ります。", "ボタンを押したら新しいliを作ります。", "作った項目をリストへ追加します。"], "mission": "input、button、ulを作り、JSで createElement(\"li\") を使ってください。", "hint": "document.createElement(\"li\") が中心になります。", "explain": [["input", "ユーザーから新しいTodoの内容を受け取ります。"], ["createElement", "JavaScriptで新しいHTML要素を作ります。"], ["append / appendChild", "作った要素を実際の文書へ追加します。"]]}, {"title": "Final — 空の画面から始める", "nav": "自由制作", "description": "最後のレッスンには正解も開始コードもほとんどありません。HTML、CSS、JavaScriptを使って自分で1ページ完成させます。", "points": ["作りたい画面をまず1文で決めます。", "HTML構造を作ってからCSSを適用します。", "最後にボタンや入力などJavaScriptの動作を1つ以上追加します。"], "mission": "h1、button、addEventListenerを含む自分だけのWebページを完成させてください。", "hint": "最小の機能から始めましょう。見出し1つとボタン1つでも十分です。", "explain": [["1. 構造", "まずHTMLだけでも内容が理解できるページを作ります。"], ["2. デザイン", "CSSで読みやすく整った画面にします。"], ["3. 動作", "JavaScriptでユーザーが体験できる機能を1つ追加します。"]]}];

const jaSyntaxOverrides = {
  0:'HTML文書 → head(文書情報) + body(画面内容)',
  1:'<main>  <h1>見出し</h1>  <p>文章</p>  </main>',
  2:'<タグ 属性="値">内容</タグ>',
  3:'<h1>見出し</h1>  <p>段落</p>',
  4:'<a href="URL">リンク名</a>',
  5:'<img src="image.jpg" alt="画像の説明">',
  6:'<ul><li>項目</li></ul>',
  7:'<label for="name">名前</label>  <input id="name">',
  9:'<table> <tr> <th>見出し</th> <td>値</td> </tr> </table>',
  11:'構造を先に → デザインは後',
  12:'セレクタ { プロパティ: 値; }',
  23:'整った見た目 = 規則的な余白 + 少ない色 + 明確な階層',
  25:'console.log("確認する値");',
  28:'if (条件) { ... } else { ... }',
  34:'状態 → イベント → 画面更新',
  37:'入力 → イベント → 新しい要素を作る → リストへ追加',
  38:'考える → 構造 → スタイル → 動作 → 修正'
};
const courseInfoJa = {"HTML": {"title": "1. HTML — 構造を作る", "color": "HTML"}, "CSS": {"title": "2. CSS — 見た目を整える", "color": "CSS"}, "JS": {"title": "3. JavaScript — 動きを作る", "color": "JavaScript"}, "PROJECT": {"title": "4. 実践 — 自分で作る", "color": "Project"}};
const uiJa = {"close": "閉じる", "free": "全チャプター自由移動", "chapter": "チャプター", "reset": "現在のコードをリセット", "concept": "概念説明", "understand": "まず理解してから始めましょう", "learn": "このレッスンで学ぶこと", "syntax": "基本形", "read": "コードを読む", "practice": "自分で解く", "write": "コードを自分で書いてみましょう", "incomplete": "未完了", "done": "完了", "codeError": "コードエラー", "task": "やること", "file": "編集するファイル", "success": "成功条件", "feedbackDefault": "コードを実行すると検査結果がここに表示されます。", "feedbackSub": "文法と問題条件の両方を確認します。", "hintOpen": "ヒントを見る", "hintClose": "ヒントを閉じる", "run": "実行する", "preview": "プレビュー", "saveDefault": "自動保存 · シンタックスハイライト · 自動閉じ · 自動インデント ON", "saved": "保存済み · シンタックスハイライト ON", "prev": "前のチャプター", "next": "次のチャプター", "last": "最後のチャプター", "problem": "問題", "condition": "上の要件を{file}コードに正確に反映してから「実行する」を押してください。", "previewErrorTitle": "まずコードエラーを修正してください。", "previewErrorBody": "文法が正しければ、正解かどうかに関係なくプレビューが表示されます。", "feedbackCodeError": "コードエラー", "feedbackRuntime": "JavaScript実行エラー", "feedbackJudgeError": "判定エラー", "feedbackJudgeErrorBody": "プレビューは正常ですが、このレッスンの正解判定コードに問題があります。", "feedbackCorrect": "正解です", "feedbackCorrectBody": "文法と実行状態が正常で、問題の成功条件も満たしています。", "feedbackPreviewOk": "プレビューは正常です", "feedbackPreviewOkBody": "コードの文法に問題はありません。結果を確認し、「やること」と「成功条件」を満たすよう修正してください。", "feedbackRunning": "プレビューを実行中", "feedbackRunningBody": "文法チェックを通過しました。正解かどうかに関係なく現在のコードを表示します。", "toast": "この問題を完了しました。", "kindConcept": "概念", "kindBasic": "基礎", "kindCore": "重要", "kindAdvanced": "応用", "kindProject": "プロジェクト", "kindPractice": "練習", "kindChallenge": "チャレンジ", "kindFinal": "最終"};
const jaCodeTextMap = {"첫 HTML 문서": "最初のHTML文書", "이 문장은 body 안에 있어서 화면에 보입니다.": "この文はbodyの中にあるため画面に表示されます。", "태그와 요소": "タグと要素", "속성과 값": "属性と値", "속성 연습": "属性の練習", "Example 사이트 열기": "Exampleサイトを開く", "제목과 문단": "見出しと段落", "HTML 텍스트": "HTMLテキスト", "제목과 문단을 구분해봅니다.": "見出しと段落を使い分けます。", "링크 연습": "リンクの練習", "유용한 링크": "便利なリンク", "Example 사이트": "Exampleサイト", "이미지 연습": "画像の練習", "여행 사진": "旅行写真", "alt=\"사진\"": "alt=\"写真\"", "목록 연습": "リストの練習", "배울 언어": "学ぶ言語", "입력 요소 연습": "入力要素の練習", "프로필": "プロフィール", "이름을 입력하세요": "名前を入力してください", ">저장<": ">保存<", "class와 id": "classとid", "메모": "メモ", "첫 번째 메모": "1つ目のメモ", "두 번째 메모": "2つ目のメモ", "표 연습": "表の練習", "웹 기술 역할": "Web技術の役割", ">기술<": ">技術<", ">역할<": ">役割<", ">구조<": ">構造<", "의미 있는 레이아웃": "意味のあるレイアウト", "나의 사이트": "私のサイト", ">소개<": ">紹介<", "의미 있는 구조를 연습합니다.": "意味のある構造を練習します。", "나의 소개 페이지": "自己紹介ページ", "여기부터 직접 소개 페이지의 전체 콘텐츠를 작성하세요.": "ここから自己紹介ページの内容を自分で書いてください。", "CSS 시작": "CSSを始める", "이제 화면을 꾸며봅니다.": "これから画面をスタイリングします。", "차분한 화면": "落ち着いた画面", "배경색을 바꿔보세요.": "背景色を変えてみましょう。", "좋은 타이포그래피": "読みやすいタイポグラフィ", "본문은 충분한 줄간격을 주면 읽기 편합니다.": "本文は十分な行間を取ると読みやすくなります。", "안쪽 여백을 확인해보세요.": "内側の余白を確認してみましょう。", "깔끔한 카드 UI입니다.": "シンプルなカードUIです。", "박스 모델": "ボックスモデル", ">카드<": ">カード<", "위치 기준을 연습합니다.": "位置の基準を練習します。", "가운데 버튼": "中央のボタン", "모바일에서는 1열": "モバイルでは1列", "HTML과 CSS를 이용해 작은 화면을 완성해보세요.": "HTMLとCSSで小さな画面を完成させてみましょう。", "시작하기": "始める", "여기에 스타일을 완성하세요": "ここにスタイルを完成させてください", "개발자 도구의 콘솔도 확인해보세요.": "開発者ツールのコンソールも確認してみましょう。", "콘솔 연습": "コンソール練習", "JavaScript 실행 확인": "JavaScriptの実行確認", "안녕하세요!": "こんにちは！", ">이름<": ">名前<", ">표시<": ">表示<", "프로필 카드 구조를 직접 작성하세요": "プロフィールカードの構造を自分で書いてください", "스타일을 작성하세요": "スタイルを書いてください", "버튼과 결과 문구를 만드세요": "ボタンと結果メッセージを作ってください", "클릭 이벤트를 직접 작성하세요": "クリックイベントを自分で書いてください", "Todo의 HTML을 직접 작성하세요": "TodoのHTMLを自分で書いてください", "Todo 동작을 직접 작성하세요": "Todoの動作を自分で書いてください"};

const uiKo = {
  close:'닫기', free:'전체 챕터 자유 이동', chapter:'챕터', reset:'현재 코드 초기화', concept:'개념 설명', understand:'먼저 이해하고 시작하세요', learn:'이 레슨에서 배우는 것', syntax:'기본 형태', read:'코드 읽기', practice:'직접 풀기', write:'이제 코드를 직접 작성해보세요', incomplete:'미완료', done:'완료', codeError:'코드 오류', task:'해야 할 일', file:'수정할 파일', success:'성공 조건', feedbackDefault:'코드를 실행하면 검사 결과가 여기에 표시됩니다.', feedbackSub:'문법과 문제 조건을 모두 확인합니다.', hintOpen:'힌트 보기', hintClose:'힌트 닫기', run:'실행하기', preview:'미리보기', saveDefault:'자동 저장 · 구문 강조 · 자동 닫기 · 자동 들여쓰기 ON', saved:'저장됨 · 구문 강조 ON', prev:'이전 챕터', next:'다음 챕터', last:'마지막 챕터', problem:'문제', condition:'위 요구사항을 {file} 코드에 정확히 반영한 뒤 ‘실행하기’를 누르세요.', previewErrorTitle:'코드 오류를 먼저 수정하세요.', previewErrorBody:'문법이 올바르면 정답 여부와 관계없이 미리보기가 표시됩니다.', feedbackCodeError:'코드 오류', feedbackRuntime:'JavaScript 실행 오류', feedbackJudgeError:'문제 판정 오류', feedbackJudgeErrorBody:'미리보기는 정상적으로 실행됐지만 이 레슨의 정답 검사 코드에 문제가 있습니다.', feedbackCorrect:'정답입니다', feedbackCorrectBody:'문법과 실행 상태가 정상이고 문제의 성공 조건도 만족했습니다.', feedbackPreviewOk:'미리보기는 정상입니다', feedbackPreviewOkBody:'코드 문법에는 문제가 없습니다. 결과를 확인한 뒤 위의 “해야 할 일”과 “성공 조건”을 만족하도록 코드를 수정하세요.', feedbackRunning:'미리보기 실행', feedbackRunningBody:'문법 검사를 통과했습니다. 정답 여부와 관계없이 현재 코드를 미리보기에 표시합니다.', toast:'이 문제를 완료했습니다.', kindConcept:'개념', kindBasic:'기초', kindCore:'핵심', kindAdvanced:'심화', kindProject:'프로젝트', kindPractice:'연습', kindChallenge:'도전', kindFinal:'최종'
};
const kindMapJa = { '개념':'概念', '기초':'基礎', '핵심':'重要', '심화':'応用', '프로젝트':'プロジェクト', '연습':'練習', '도전':'チャレンジ', '최종':'最終' };
function t(key) { return (state && state.locale === 'ja' ? uiJa : uiKo)[key] || key; }
function courseFor(group) { return state && state.locale === 'ja' ? courseInfoJa[group] : courseInfo[group]; }
function localizeStarterFiles(files) {
  const out = structuredClone(files);
  if (!state || state.locale !== 'ja') return out;
  for (const key of Object.keys(out)) {
    let text = String(out[key] || '');
    for (const [from,to] of Object.entries(jaCodeTextMap)) text = text.split(from).join(to);
    if (key === 'html') text = text.replace(/<html lang="ko">/g, '<html lang="ja">');
    out[key] = text;
  }
  return out;
}
const koPracticeCopy = [
  { mission: '브라우저 화면에 표시되는 영역에 새로운 문장 한 줄을 직접 추가해보세요.', hint: '화면에 보이는 내용은 문서 정보 영역이 아니라 본문 영역에 들어갑니다.' },
  { mission: 'main 안에 가장 중요한 제목 하나와 그 제목을 설명하는 문단 하나를 만들어보세요.', hint: '두 요소는 같은 부모 안에 들어가며, 제목과 문단은 서로 다른 의미의 요소입니다.' },
  { mission: '현재 링크가 example.com을 새 탭에서 열도록 링크 요소의 정보를 수정하세요.', hint: '링크의 이동 위치와 여는 방식을 결정하는 정보는 시작 태그 안의 속성으로 지정합니다.' },
  { mission: '기존 가장 큰 제목 아래에 한 단계 낮은 제목과 설명 문단을 추가해 문서의 계층을 만들어보세요.', hint: '제목은 중요도에 따라 단계가 있고, 일반적인 설명 문장은 문단 요소를 사용합니다.' },
  { mission: '현재 링크가 example.com으로 이동하도록 수정하세요.', hint: '링크의 목적지는 a 요소의 시작 태그 안에 있는 속성이 결정합니다.' },
  { mission: '현재 이미지의 대체 설명을 “산 풍경”으로 수정하세요.', hint: '이미지에는 파일 위치 외에도 이미지를 설명하는 속성이 있습니다.' },
  { mission: '현재 기술 목록에 JavaScript 항목을 하나 더 추가하세요.', hint: '목록 전체를 감싸는 요소 안에 기존 항목들과 같은 구조의 새 항목을 추가하면 됩니다.' },
  { mission: '입력칸에 id="name"을 지정하고, 바로 앞에 “이름” label을 추가해 for="name"으로 연결하세요.', hint: '입력칸과 설명 요소는 서로 같은 식별 값을 공유해 연결할 수 있습니다.' },
  { mission: '두 번째 안내 문단도 첫 번째 안내 문단과 같은 그룹으로 묶어보세요.', hint: '여러 요소가 같은 그룹에 속하도록 만들 때는 반복해서 사용할 수 있는 속성을 사용합니다.' },
  { mission: '현재 표에 새 데이터 행을 추가하고, 첫 셀에는 “JavaScript”, 두 번째 셀에는 “동작”을 입력하세요.', hint: '표는 행 안에 여러 셀이 들어가는 구조입니다. 기존 데이터 행의 중첩 구조를 참고하세요.' },
  { mission: 'main 안의 관련 콘텐츠를 하나의 의미 있는 구역으로 묶어 문서 구조를 더 명확하게 만들어보세요.', hint: '단순한 상자보다 "하나의 주제를 가진 영역"이라는 의미를 전달하는 요소를 생각해보세요.' },
  { mission: '비어 있는 main 안에 자기소개 페이지의 콘텐츠를 직접 구성하세요. 제목, 소개, 기술 목록, 이동할 수 있는 링크가 모두 있어야 합니다.', hint: '먼저 정보의 순서를 정하세요. 가장 중요한 제목에서 시작해 설명, 목록, 이동 경로 순으로 구조를 잡으면 쉽습니다.' },
  { mission: 'h1의 글자색을 #344960으로 바꾸고 글자 크기를 36px로 설정하세요.', hint: '하나의 CSS 규칙 안에는 여러 선언을 넣을 수 있습니다. 무엇을 바꿀지에 해당하는 속성을 각각 찾아보세요.' },
  { mission: '페이지 전체 배경색을 #f2f2f0으로 변경하세요.', hint: '글자색이 아니라 요소 뒤쪽의 색을 지정하는 속성을 사용합니다.' },
  { mission: '가장 큰 제목이 지금보다 눈에 띄도록 글자 크기를 42px로 조정하세요.', hint: '타이포그래피에서 글자의 실제 크기를 결정하는 속성을 찾으세요.' },
  { mission: '카드 안의 콘텐츠가 테두리에 너무 붙지 않도록 안쪽 여백을 24px로 조정하세요.', hint: '바깥 요소와의 간격이 아니라, 요소 내부에서 콘텐츠와 경계 사이의 간격을 바꿔야 합니다.' },
  { mission: '카드의 네 모서리를 16px로 둥글게 만드세요.', hint: '테두리 자체가 아니라 테두리 모서리의 형태를 바꾸는 속성을 사용합니다.' },
  { mission: '카드의 지정된 너비 안에 안쪽 여백과 테두리까지 포함되도록 크기 계산 방식을 바꿔보세요.', hint: '박스 모델에서 width가 어디까지 포함할지를 정하는 속성이 있습니다.' },
  { mission: '배지가 카드의 오른쪽 위를 기준으로 배치되도록 두 요소의 위치 기준 관계를 완성하세요.', hint: '한 요소는 위치의 기준점이 되고, 다른 요소는 그 기준을 따라 일반 흐름에서 벗어나 배치되어야 합니다.' },
  { mission: 'A, B, C 상자가 세로가 아니라 한 줄로 나란히 배치되도록 부모의 레이아웃 방식을 바꿔보세요.', hint: '여러 자식 요소를 한 방향으로 정렬하기 위한 레이아웃 기능을 부모 요소에 적용합니다.' },
  { mission: '현재 버튼이 화면의 가로축 중앙에도 오도록 Flex 정렬을 완성하세요.', hint: '이미 세로 방향 중앙 정렬은 되어 있습니다. Flex의 주축 방향 정렬 속성을 확인하세요.' },
  { mission: '현재 카드 목록이 같은 너비의 3열로 배치되도록 Grid의 열 구성을 완성하세요.', hint: 'Grid에서는 열의 개수와 각 열이 차지할 비율을 한 속성에서 정의할 수 있습니다.' },
  { mission: '화면 폭이 600px 이하가 되면 카드가 한 줄에 하나씩 보이도록 반응형 규칙을 완성하세요.', hint: '이미 준비된 화면 크기 조건 안에서 Grid의 열 개수만 모바일에 맞게 바꾸면 됩니다.' },
  { mission: '현재 카드가 실제 서비스의 카드처럼 보이도록 내부 여백, 모서리, 배경을 직접 설계해보세요.', hint: '값은 자유입니다. 먼저 카드와 페이지 배경을 구분하고, 내용이 가장자리에 붙지 않도록 정리해보세요.' },
  { mission: '콘솔에 Hello JavaScript라는 문장이 출력되도록 현재 JavaScript를 수정하세요.', hint: '콘솔 출력 함수는 이미 준비되어 있습니다. 함수에 전달되는 값이 무엇인지 확인하세요.' },
  { mission: 'message 변수에 저장된 값을 콘솔에서 확인할 수 있도록 출력 코드를 한 줄 추가하세요.', hint: '문자열을 새로 쓰는 대신, 이미 만들어진 변수 자체를 콘솔 출력 함수에 전달해보세요.' },
  { mission: 'score의 시작 값이 10이 되도록 변수 선언을 수정하세요.', hint: '변수 이름이나 선언 방식은 그대로 두고, 처음 저장되는 값만 확인하세요.' },
  { mission: 'age가 문자열이 아니라 숫자 20으로 저장되도록 수정하세요.', hint: 'JavaScript에서 따옴표의 유무는 값의 데이터 타입을 바꿉니다.' },
  { mission: 'score가 정확히 80이어도 PASS가 나오도록 조건식을 수정하세요.', hint: '현재 비교는 80보다 큰 경우만 참입니다. 경계값 80까지 포함하려면 어떤 비교가 필요한지 생각해보세요.' },
  { mission: '현재 함수를 sayHello라는 이름으로 바꾸고, 프로그램이 이전과 똑같이 실행되도록 맞춰보세요.', hint: '함수의 이름은 정의할 때와 사용할 때 서로 일치해야 합니다.' },
  { mission: '태그 이름이 아니라 id를 기준으로 제목 요소를 찾도록 선택 방식을 바꿔보세요.', hint: 'querySelector는 CSS 선택자 문법을 사용합니다. id를 선택할 때 붙이는 기호를 떠올려보세요.' },
  { mission: '버튼을 눌렀을 때만 제목이 Clicked!로 바뀌도록 비어 있는 이벤트 종류를 완성하세요.', hint: '사용자가 버튼을 누르는 행동에 해당하는 이벤트 이름이 필요합니다.' },
  { mission: '버튼을 누르면 입력창에 사용자가 적은 내용이 아래 문장 영역에 그대로 표시되도록 코드를 완성하세요.', hint: '입력 요소에는 현재 입력된 값을 읽을 수 있는 속성이 있습니다. 그 값을 출력 요소에 전달하세요.' },
  { mission: '현재 배열에 JavaScript라는 기술을 하나 더 추가해 화면 목록에도 함께 나타나게 해보세요.', hint: '반복문은 이미 배열 전체를 출력하고 있습니다. 반복문보다 데이터가 들어 있는 배열을 먼저 확인하세요.' },
  { mission: '버튼을 한 번 누를 때 숫자가 1이 아니라 2씩 증가하도록 카운터의 상태 변경 로직을 수정하세요.', hint: '화면 갱신 코드는 그대로 사용할 수 있습니다. 클릭할 때 count가 어떻게 바뀌는지만 살펴보세요.' },
  { mission: 'class="profile"인 프로필 카드 요소를 만들고, CSS의 .profile에 border-radius를 적용해 카드 형태로 완성하세요.', hint: '먼저 카드 전체를 묶을 요소와 이름을 정한 뒤, 그 이름을 CSS에서 선택해 여백과 형태를 조절하세요.' },
  { mission: '버튼을 클릭하면 화면의 글자가 바뀌는 간단한 상호작용을 처음부터 직접 만들어보세요.', hint: '필요한 흐름은 요소 찾기 → 사용자 행동 감지 → 화면 내용 변경의 세 단계입니다.' },
  { mission: '할 일을 입력하고 버튼을 누르면 새로운 항목이 목록에 추가되는 작은 Todo 기능을 만들어보세요.', hint: '입력값을 읽고, 새 목록 항목을 만든 뒤, 그 항목을 기존 목록에 붙이는 순서로 나눠 생각하세요.' },
  { mission: 'HTML, CSS, JavaScript를 모두 사용해 자유 주제의 한 페이지를 완성하세요. 사용자가 직접 조작할 수 있는 기능도 하나 이상 포함하세요.', hint: '처음부터 크게 만들지 말고 구조 → 디자인 → 동작 순으로 하나씩 완성하세요. 기능은 버튼 하나에서 시작해도 됩니다.' }
];

const jaPracticeCopy = [
  { mission: 'ブラウザ画面に表示される領域へ、新しい文章を1行追加してください。', hint: '画面に見える内容は文書情報ではなく、本文を表す領域に入ります。' },
  { mission: 'mainの中に最も重要な見出しを1つと、その見出しを説明する段落を1つ作ってください。', hint: '2つの要素は同じ親の中に置きます。見出しと段落はそれぞれ異なる意味を持つ要素です。' },
  { mission: '現在のリンクがexample.comを新しいタブで開くよう、リンク要素の情報を修正してください。', hint: '移動先と開き方は、開始タグの中に追加する属性で指定します。' },
  { mission: '最上位の見出しの下に、1段階下の見出しと説明用の段落を追加して文書の階層を作ってください。', hint: '見出しには重要度の段階があり、通常の説明文には段落要素を使います。' },
  { mission: '現在のリンクがexample.comへ移動するように修正してください。', hint: 'リンク先はa要素の開始タグにある属性で決まります。' },
  { mission: '現在の画像の代替説明を「山の風景」に変更してください。', hint: '画像にはファイルの場所とは別に、内容を説明するための属性があります。' },
  { mission: '現在の技術リストにJavaScriptの項目を1つ追加してください。', hint: 'リスト全体を囲む要素の中に、既存項目と同じ構造の新しい項目を追加します。' },
  { mission: '入力欄に id="name" を指定し、直前に「名前」のlabelを追加して for="name" で関連付けてください。', hint: '入力欄と説明要素は同じ識別値を共有することで関連付けられます。' },
  { mission: '2つ目の案内段落も、1つ目と同じグループに所属させてください。', hint: '複数の要素で共有できるグループ名のための属性を使います。' },
  { mission: '現在の表に新しいデータ行を追加し、1つ目のセルに「JavaScript」、2つ目のセルに「動作」と入力してください。', hint: '表は「行の中に複数のセル」という入れ子構造です。既存のデータ行を参考にしてください。' },
  { mission: 'main内の関連コンテンツを、意味のある1つの領域としてまとめてください。', hint: '単なる箱ではなく「同じ主題を持つ領域」という意味を表す要素を考えてみてください。' },
  { mission: '空のmainの中に自己紹介ページを構成してください。見出し、紹介文、技術リスト、移動できるリンクを含めます。', hint: '情報の順番を先に決めましょう。重要な見出し → 説明 → 一覧 → 移動先の順に考えると整理しやすいです。' },
  { mission: 'h1の文字色を #344960 に変更し、文字サイズを36pxに設定してください。', hint: '1つのCSSルールには複数の宣言を書けます。色と大きさを担当するプロパティをそれぞれ探してください。' },
  { mission: 'ページ全体の背景色を #f2f2f0 に変更してください。', hint: '文字色ではなく、要素の後ろ側の色を指定するプロパティを使います。' },
  { mission: '最も大きな見出しが目立つよう、文字サイズを42pxに調整してください。', hint: 'タイポグラフィで文字そのものの大きさを決めるプロパティを探してください。' },
  { mission: 'カードの内容が端に近すぎないよう、内側の余白を24pxに調整してください。', hint: '他の要素との距離ではなく、要素の内側で内容と境界の間を広げます。' },
  { mission: 'カードの4つの角を16pxの丸みにしてください。', hint: '境界線そのものではなく、境界の角の形を変えるプロパティを使います。' },
  { mission: 'カードの指定幅の中に、内側余白と境界線まで含まれるようサイズ計算を変更してください。', hint: 'ボックスモデルでwidthがどこまで含むかを決めるプロパティがあります。' },
  { mission: 'バッジがカード右上を基準に配置されるよう、2つの要素の位置関係を完成させてください。', hint: '片方を位置の基準にし、もう片方を通常フローから外してその基準に従わせます。' },
  { mission: 'A・B・Cの箱が縦ではなく1行に並ぶよう、親要素のレイアウト方法を変更してください。', hint: '複数の子要素を一方向へ並べるレイアウト機能を親要素に適用します。' },
  { mission: '現在のボタンが画面の横方向でも中央に来るよう、Flexの整列を完成させてください。', hint: '縦方向の中央揃えはすでにあります。Flexの主軸方向を整列するプロパティを確認してください。' },
  { mission: 'カード一覧が同じ幅の3列になるよう、Gridの列構成を完成させてください。', hint: 'Gridでは列数と各列の比率を1つのプロパティで定義できます。' },
  { mission: '画面幅が600px以下では、カードが1行に1つずつ表示されるようレスポンシブ規則を完成させてください。', hint: '用意された画面幅の条件内で、Gridの列数だけをモバイル向けに変更します。' },
  { mission: '現在のカードが実際のサービスのカードらしく見えるよう、内側余白・角・背景を自分で設計してください。', hint: '値は自由です。ページ背景とカードを区別し、内容が端に貼り付かないように整えましょう。' },
  { mission: 'コンソールにHello JavaScriptと表示されるよう、現在のJavaScriptを修正してください。', hint: 'コンソールへ出力する関数はすでにあります。関数へ渡している値を確認してください。' },
  { mission: 'message変数に保存された値をコンソールで確認できるよう、出力コードを1行追加してください。', hint: '新しい文字列を書くのではなく、すでに作られている変数そのものを出力関数へ渡します。' },
  { mission: 'scoreの初期値が10になるよう、変数宣言を修正してください。', hint: '変数名や宣言方法はそのままにして、最初に保存される値だけ確認してください。' },
  { mission: 'ageが文字列ではなく数値20として保存されるよう修正してください。', hint: 'JavaScriptでは引用符の有無によって値のデータ型が変わります。' },
  { mission: 'scoreがちょうど80でもPASSになるよう条件式を修正してください。', hint: '現在の比較は80より大きい場合だけtrueです。境界の80も含める比較を考えてください。' },
  { mission: '現在の関数名をsayHelloに変更し、以前と同じように実行される状態にしてください。', hint: '関数の名前は定義する場所と使用する場所で一致している必要があります。' },
  { mission: 'タグ名ではなくidを基準に見出し要素を取得するよう、選択方法を変更してください。', hint: 'querySelectorはCSSセレクタの書き方を使います。idを選択するときの記号を思い出してください。' },
  { mission: 'ボタンを押したときだけ見出しがClicked!へ変わるよう、空いているイベント種類を完成させてください。', hint: 'ユーザーがボタンを押す操作に対応するイベント名が必要です。' },
  { mission: 'ボタンを押すと、入力欄に書いた内容が下の文章領域へそのまま表示されるようコードを完成させてください。', hint: '入力要素には現在の入力内容を取得するための値があります。それを表示先へ渡してください。' },
  { mission: '現在の配列にJavaScriptを1つ追加し、画面の一覧にも一緒に表示させてください。', hint: '繰り返し処理はすでに配列全体を表示しています。まずデータが入っている配列を確認してください。' },
  { mission: 'ボタンを1回押すたび、数値が1ではなく2ずつ増えるよう状態変更の処理を修正してください。', hint: '画面を更新する処理はそのまま使えます。クリック時にcountがどう変わるかだけ確認してください。' },
  { mission: 'class="profile" のプロフィールカード要素を作り、CSSの.profileにborder-radiusを適用してカードとして完成させてください。', hint: 'まずカード全体を囲む要素と名前を決め、その名前をCSSで選択して余白や形を整えます。' },
  { mission: 'ボタンをクリックすると画面の文字が変わる簡単なインタラクションを、最初から自分で作ってください。', hint: '流れを「要素を探す → 操作を検知する → 画面を変更する」の3段階に分けて考えます。' },
  { mission: 'Todoを入力してボタンを押すと、新しい項目が一覧へ追加される小さな機能を作ってください。', hint: '入力値を読む → 新しい一覧項目を作る → 既存の一覧へ追加する、の順に分解してください。' },
  { mission: 'HTML・CSS・JavaScriptをすべて使い、自由テーマの1ページを完成させてください。ユーザーが操作できる機能も1つ以上含めます。', hint: '最初から大きく作らず、構造 → デザイン → 動作の順に1つずつ完成させましょう。機能はボタン1つからでも十分です。' }
];

const jaValidationOverrides = {
  0: f => { const m=String(f.html||'').match(/<body\b[^>]*>([\s\S]*?)<\/body>/i); if(!m) return false; const text=m[1].replace(/<!-- [\s\S]*? -->/g,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim(); return text.replace('この文はbodyの中にあるため画面に表示されます。','').replace('이 문장은 body 안에 있어서 화면에 보입니다.','').trim().length>0; },
  5: f => /<img\b[^>]*alt\s*=\s*["']山の風景["'][^>]*>/i.test(f.html),
  7: f => /<label\s+[^>]*for\s*=\s*["']name["'][^>]*>\s*名前\s*<\/label>/i.test(f.html) && /<input\s+[^>]*id\s*=\s*["']name["'][^>]*>/i.test(f.html),
  9: f => /<table\b[^>]*>[\s\S]*?<tr\b[^>]*>[\s\S]*?<td\b[^>]*>\s*JavaScript\s*<\/td>\s*<td\b[^>]*>\s*動作\s*<\/td>[\s\S]*?<\/tr>[\s\S]*?<\/table>/i.test(f.html)
};
function lessonFor(index) {
  const base = lessons[index];
  const practice = (state && state.locale === 'ja' ? jaPracticeCopy : koPracticeCopy)[index] || {};

  // 문제 문장은 '무엇을 해야 하는지'를 정확히 보여주고,
  // 힌트만 정답 코드를 직접 노출하지 않는 개념형 문장으로 사용합니다.
  if (!state || state.locale !== 'ja') {
    return {
      ...base,
      mission: practice.mission || base.mission,
      hint: practice.hint || base.hint
    };
  }

  const tr = jaLessonData[index] || {};
  return {
    ...base,
    ...tr,
    mission: practice.mission || tr.mission || base.mission,
    hint: practice.hint || tr.hint || base.hint,
    kind: kindMapJa[base.kind] || base.kind,
    syntax: jaSyntaxOverrides[index] || base.syntax,
    files: localizeStarterFiles(base.files),
    validate: jaValidationOverrides[index] || base.validate
  };
}
function translateValidationMessage(message) {
  if (!state || state.locale !== 'ja') return message;
  let s = String(message || '');
  const replacements = [
    ['태그의 < 또는 >가 올바르게 닫히지 않았습니다.','タグの < または > が正しく閉じられていません。'],
    ['태그 문법을 확인하세요.','タグの文法を確認してください。'],
    ['완성되지 않은 HTML 태그가 있습니다.','未完成のHTMLタグがあります。'],
    ['전체 HTML 문서에는 <!DOCTYPE html> 선언이 필요합니다.','完全なHTML文書には <!DOCTYPE html> 宣言が必要です。'],
    ['<head>...</head> 구조가 필요합니다.','<head>...</head> の構造が必要です。'],
    ['<body>...</body> 구조가 필요합니다.','<body>...</body> の構造が必要です。'],
    ['닫는 괄호가 너무 많습니다.','閉じ括弧が多すぎます。'],
    ['닫는 중괄호 }에 대응하는 여는 중괄호 {가 없습니다.','閉じ中括弧 } に対応する開き中括弧 { がありません。'],
    ['문자열 따옴표가 닫히지 않았습니다.','文字列の引用符が閉じられていません。'],
    ['CSS 괄호의 짝이 맞지 않습니다.','CSSの括弧の対応が正しくありません。'],
    ['CSS 중괄호 { }의 짝이 맞지 않습니다.','CSSの中括弧 { } の対応が正しくありません。'],
    ['선택자 뒤에 { } 블록이 필요합니다.','セレクタの後に { } ブロックが必要です。'],
    ['CSS 선택자가 비어 있습니다.','CSSセレクタが空です。'],
    ['JavaScript 문법 오류가 있습니다.','JavaScriptの構文エラーがあります。']
  ];
  for (const [a,b] of replacements) s = s.replace(a,b);
  s = s.replace(/닫는 태그 <\/(.+?)>에 대응하는 여는 태그가 없습니다\./, '終了タグ </$1> に対応する開始タグがありません。');
  s = s.replace(/<(.+?)>를 닫아야 하는데 <\/(.+?)>가 입력되었습니다\./, '<$1> を閉じる必要がありますが </$2> が入力されています。');
  s = s.replace(/<(.+?)>의 속성 따옴표가 닫히지 않았습니다\./, '<$1> の属性の引用符が閉じられていません。');
  s = s.replace(/<(.+?)> 태그를 닫는 <\/(.+?)>가 없습니다\./, '<$1> を閉じる </$2> がありません。');
  s = s.replace(/CSS 선언에 ':'가 없습니다: /, "CSS宣言に ':' がありません: ");
  s = s.replace(/CSS 속성 이름이 올바르지 않습니다: /, 'CSSプロパティ名が正しくありません: ');
  s = s.replace(/(.+) 속성의 값이 비어 있습니다\./, '$1 の値が空です。');
  s = s.replace(/브라우저가 이해할 수 없는 CSS입니다: /, 'ブラウザが解釈できないCSSです: ');
  return s;
}
function applyStaticLanguage() {
  const ja = state.locale === 'ja';
  document.documentElement.lang = ja ? 'ja' : 'ko';
  document.title = ja ? 'Frame — 作りながら学ぶWeb開発' : 'Frame — 웹 개발을 직접 만들며 배우기';
  el.sidebarClose.textContent = t('close');
  document.querySelector('.course-summary span').textContent = t('free');
  const menuLabel = el.menuButton.querySelector('span:last-child'); if (menuLabel) menuLabel.textContent = t('chapter');
  el.resetButton.textContent = t('reset');
  const studyKicker = document.querySelector('.study-section .section-kicker'); if (studyKicker) studyKicker.textContent = t('concept');
  const studyHeading = document.querySelector('.study-section .section-heading h2'); if (studyHeading) studyHeading.textContent = t('understand');
  const noteTitle = document.querySelector('.note-title'); if (noteTitle) noteTitle.textContent = t('learn');
  const syntaxLabel = document.querySelector('.syntax-row > span'); if (syntaxLabel) syntaxLabel.textContent = t('syntax');
  const readLabel = document.querySelector('.explain > .section-label'); if (readLabel) readLabel.textContent = t('read');
  const practiceKicker = document.querySelector('.practice-title-row .section-kicker'); if (practiceKicker) practiceKicker.textContent = t('practice');
  const practiceHeading = document.querySelector('.practice-title-row h2'); if (practiceHeading) practiceHeading.textContent = t('write');
  const problemLabels = document.querySelectorAll('.problem-card .problem-main > span, .problem-card .problem-details > div > span');
  if (problemLabels[0]) problemLabels[0].textContent = t('task');
  if (problemLabels[1]) problemLabels[1].textContent = t('file');
  if (problemLabels[2]) problemLabels[2].textContent = t('success');
  const previewLabel = document.querySelector('.preview-head > span:first-child'); if (previewLabel) previewLabel.textContent = t('preview');
  document.querySelectorAll('.language-option').forEach(btn => {
    const active = btn.dataset.locale === state.locale;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  const switcher = document.getElementById('languageSwitch'); if (switcher) switcher.setAttribute('aria-label', ja ? '言語を選択' : '언어 선택');
  el.sidebarClose.setAttribute('aria-label', ja ? 'チャプターメニューを閉じる' : '챕터 메뉴 닫기');
  el.menuButton.setAttribute('aria-label', ja ? 'チャプターメニューを開く' : '챕터 메뉴 열기');
  el.codeEditor.setAttribute('aria-label', ja ? 'コードエディター' : '코드 편집기');
  el.previewFrame.setAttribute('title', ja ? '練習結果' : '실습 결과');
}

const storageKey = 'frame-study-v10';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch { saved = {}; }

const initialLocale = saved.locale === 'ja' ? 'ja' : 'ko';
const state = {
  current: Math.min(Number(saved.current || 0), lessons.length - 1),
  unlocked: lessons.length - 1,
  completed: Array.isArray(saved.completed) ? saved.completed.filter(i => i >= 0 && i < lessons.length) : [],
  locale: initialLocale,
  codeLocales: {
    ko: saved.codeKo && typeof saved.codeKo === 'object' ? saved.codeKo : (saved.code && typeof saved.code === 'object' ? saved.code : {}),
    ja: saved.codeJa && typeof saved.codeJa === 'object' ? saved.codeJa : {}
  },
  code: null,
  activeFile: 'html'
};
state.code = state.codeLocales[state.locale];

const el = Object.fromEntries([
  'sidebar','sidebarClose','sidebarOverlay','curriculum','summaryProgress','progressBar','crumb','lessonNumber','lessonKind','lessonTitle','lessonDescription','learningPoints','syntaxCode','missionText','problemNumber','problemFile','successCondition','missionResult','codeFeedback','feedbackTitle','feedbackMessage','editorTabs','codeEditor','lineNumbers','languageBadge','hintButton','hintBox','runButton','previewFrame','explanationList','prevButton','nextButton','resetButton','menuButton','toast','saveState'
].map(id => [id, document.getElementById(id)]));

function filesFor(index) {
  if (!state.code[index]) state.code[index] = localizeStarterFiles(lessons[index].files);
  return state.code[index];
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify({
    current: state.current,
    unlocked: lessons.length - 1,
    completed: state.completed,
    locale: state.locale,
    codeKo: state.codeLocales.ko,
    codeJa: state.codeLocales.ja
  }));
  el.saveState.textContent = t('saved');
  clearTimeout(save.timer);
  save.timer = setTimeout(() => el.saveState.textContent = t('saveDefault'), 900);
}

function saveEditor() {
  filesFor(state.current)[state.activeFile] = getEditorText();
  save();
}

function renderCurriculum() {
  el.curriculum.innerHTML = '';

  Object.keys(courseInfo).forEach(group => {
    const indices = lessons
      .map((lesson, index) => lesson.group === group ? index : -1)
      .filter(index => index >= 0);

    const wrapper = document.createElement('section');
    wrapper.className = 'course-group';

    const head = document.createElement('div');
    head.className = 'course-button';
    head.innerHTML = `<span>${courseFor(group).title}</span><span>${indices.length}</span>`;

    const list = document.createElement('div');
    list.className = 'lesson-list';

    indices.forEach((index, localIndex) => {
      const item = lessonFor(index);
      const done = state.completed.includes(index);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `lesson-link ${index === state.current ? 'active' : ''}`;
      btn.dataset.lessonIndex = String(index);
      btn.innerHTML = `<span class="index">${String(localIndex + 1).padStart(2,'0')}</span><span>${item.nav}</span><span class="state">${done ? t('done') : ''}</span>`;
      list.appendChild(btn);
    });

    wrapper.append(head, list);
    el.curriculum.appendChild(wrapper);
  });

  const completed = new Set(state.completed).size;
  el.summaryProgress.textContent = `${completed} / ${lessons.length}`;
  el.progressBar.style.width = `${Math.round((completed / lessons.length) * 100)}%`;
}

function goToLesson(index) {
  if (!Number.isInteger(index) || index < 0 || index >= lessons.length) return;

  saveEditor();
  state.current = index;
  state.activeFile = bestFile(index);
  save();

  closeSidebar({ restorePage: false });
  renderLesson();
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

function bestFile(index) {
  const group = lessons[index].group;
  if (group === 'CSS') return 'css';
  if (group === 'JS') return 'js';
  return 'html';
}

function renderLesson() {
  const l = lessonFor(state.current);
  const groupIndices = lessons.map((x,i) => x.group === l.group ? i : -1).filter(i => i >= 0);
  const localNo = groupIndices.indexOf(state.current) + 1;
  applyStaticLanguage();
  el.crumb.textContent = `${courseFor(l.group).color} · ${String(localNo).padStart(2,'0')}`;
  el.lessonNumber.textContent = String(localNo).padStart(2,'0');
  el.lessonKind.textContent = l.kind;
  el.lessonTitle.textContent = l.title;
  el.lessonDescription.textContent = l.description;
  el.learningPoints.innerHTML = l.points.map(p => `<li>${escapeHtml(p)}</li>`).join('');
  el.syntaxCode.textContent = l.syntax;
  el.missionText.textContent = l.mission;
  el.problemNumber.textContent = `${t('problem')} ${String(localNo).padStart(2,'0')}`;
  const editable = editableFiles(state.current);
  el.problemFile.textContent = editable.map(f => f === 'js' ? 'JavaScript' : f.toUpperCase()).join(' / ');
  el.successCondition.textContent = t('condition').replace('{file}', el.problemFile.textContent);
  el.hintBox.textContent = l.hint;
  el.hintBox.classList.remove('show');
  el.hintButton.textContent = t('hintOpen');
  renderTabs();
  loadEditor();
  renderExplain();
  runPreview(false);
  renderCurriculum();
  el.prevButton.disabled = state.current === 0;
  el.prevButton.textContent = t('prev');
  el.runButton.textContent = t('run');
  el.saveState.textContent = t('saveDefault');
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
  el.explanationList.innerHTML = lessonFor(state.current).explain.map(([code, text]) => `
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
  return `<!doctype html><html lang="${state.locale}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${files.css}</style>${runtimeGuard}</head><body>${files.html}<script>${safeJs(files.js)}<\/script></body></html>`;
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
    el.previewFrame.srcdoc = `<!doctype html><html lang="${state.locale}"><body style="font-family:system-ui;padding:32px;color:#666"><strong>${escapeHtml(t('previewErrorTitle'))}</strong><p>${escapeHtml(t('previewErrorBody'))}</p></body></html>`;
    const location = syntax.line ? `${syntax.file} ${syntax.line}줄 · ` : `${syntax.file} · `;
    showFeedback('error', t('feedbackCodeError'), location + translateValidationMessage(syntax.message));
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
      showFeedback('error', t('feedbackRuntime'), runtimeErrors[0]);
      updateMission(false, true);
      return;
    }

    // 3. 미리보기가 정상적으로 만들어진 뒤에 문제 성공 조건을 별도로 검사합니다.
    let requirementSuccess = false;
    try {
      const checkedFiles = filesForRequirementCheck(files);
      requirementSuccess = Boolean(lessonFor(state.current).validate(checkedFiles));
    } catch (err) {
      console.error('Lesson validation error:', err);
      showFeedback('error', t('feedbackJudgeError'), t('feedbackJudgeErrorBody'));
      updateMission(false, true);
      return;
    }

    if (requirementSuccess) {
      showFeedback('success', t('feedbackCorrect'), t('feedbackCorrectBody'));
      updateMission(true, false);
      if (check) completeLesson();
    } else {
      showFeedback('', t('feedbackPreviewOk'), t('feedbackPreviewOkBody'));
      updateMission(false, false);
    }
  };

  showFeedback('', t('feedbackRunning'), t('feedbackRunningBody'));
  updateMission(false, false);
  el.previewFrame.srcdoc = makePreview(files);
}

function updateMission(success, hasError = false) {
  el.missionResult.textContent = success ? t('done') : hasError ? t('codeError') : t('incomplete');
  el.missionResult.classList.toggle('done', success);
  el.missionResult.classList.toggle('error', hasError);
  const isLast = state.current === lessons.length - 1;
  el.nextButton.disabled = isLast;
  el.nextButton.textContent = isLast ? t('last') : t('next');
}

function completeLesson() {
  if (!state.completed.includes(state.current)) state.completed.push(state.current);
  save();
  renderCurriculum();
  updateMission(true);
  el.toast.textContent = t('toast');
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
  el.hintButton.textContent = show ? t('hintClose') : t('hintOpen');
});
el.resetButton.addEventListener('click', () => {
  state.code[state.current] = localizeStarterFiles(lessons[state.current].files);
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

const languageSwitch = document.getElementById('languageSwitch');
if (languageSwitch) {
  languageSwitch.addEventListener('click', event => {
    const button = event.target.closest('.language-option[data-locale]');
    if (!button || !languageSwitch.contains(button)) return;
    const nextLocale = button.dataset.locale === 'ja' ? 'ja' : 'ko';
    if (nextLocale === state.locale) return;
    saveEditor();
    state.codeLocales[state.locale] = state.code;
    state.locale = nextLocale;
    state.code = state.codeLocales[state.locale];
    state.activeFile = bestFile(state.current);
    save();
    renderLesson();
  });
}

let drawerScrollY = 0;

function openSidebar() {
  if (el.sidebar.classList.contains('open')) return;

  drawerScrollY = window.scrollY || window.pageYOffset || 0;
  document.documentElement.classList.add('drawer-open');
  document.body.classList.add('drawer-open');

  el.sidebar.classList.add('open');
  el.sidebar.setAttribute('aria-hidden', 'false');
  el.sidebarOverlay.classList.add('show');
  el.menuButton.setAttribute('aria-expanded', 'true');

  /* Keep the current lesson visible without touching the document scroll. */
  requestAnimationFrame(() => {
    const active = el.curriculum.querySelector('.lesson-link.active');
    if (active) active.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  });
}

function closeSidebar({ restorePage = true } = {}) {
  if (!el.sidebar.classList.contains('open')) return;

  el.sidebar.classList.remove('open');
  el.sidebar.setAttribute('aria-hidden', 'true');
  el.sidebarOverlay.classList.remove('show');
  el.menuButton.setAttribute('aria-expanded', 'false');

  document.documentElement.classList.remove('drawer-open');
  document.body.classList.remove('drawer-open');

  if (restorePage) {
    requestAnimationFrame(() => window.scrollTo(0, drawerScrollY));
  }
}

el.menuButton.setAttribute('aria-expanded', 'false');
el.menuButton.addEventListener('click', () => {
  if (el.sidebar.classList.contains('open')) closeSidebar();
  else openSidebar();
});
el.sidebarClose.addEventListener('click', () => closeSidebar());
el.sidebarOverlay.addEventListener('click', () => closeSidebar());
el.curriculum.addEventListener('click', event => {
  const button = event.target.closest('.lesson-link[data-lesson-index]');
  if (!button || !el.curriculum.contains(button)) return;

  event.preventDefault();
  event.stopPropagation();
  goToLesson(Number(button.dataset.lessonIndex));
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && el.sidebar.classList.contains('open')) closeSidebar();
});

/*
  Do not hijack wheel/touch events. The chapter list uses the browser's native
  overflow scrolling. When the drawer is open, html/body overflow is locked by
  CSS, so only .curriculum can scroll naturally.
*/

if (!state.code[state.current]) state.activeFile = bestFile(state.current);
renderLesson();
