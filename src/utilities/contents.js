import { createStore } from "redux";
import img01 from "../assets/img/thor.jpeg";
import img02 from "../assets/img/spiderman.jpeg";
import img03 from "../assets/img/roki.jpeg";
import img04 from "../assets/img/ironman.jpeg";
import img05 from "../assets/img/groot.jpeg";
import img06 from "../assets/img/drstrange.jpeg";
import img07 from "../assets/img/captainamerica.jpeg";
import img08 from "../assets/img/BlackPanther.jpeg";
import img09 from "../assets/img/BlackWidow.jpeg";
import img10 from "../assets/img/Hawkeye.jpeg";
import img11 from "../assets/img/Hulk.jpeg";
// import detail01 from "../assets/img/thor2.jpeg";

const contents = [
  {
    path: "/thor",
    imagePath: img01,
    hoverImagePath: img01,
    title: "THOR",
    character: "토르",
    // detail 상세 페이지에 담고 싶은 내용을 객체 리터럴로 표현한 키
    detail: {
      name: "THOR",
      korName: "토르",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6XBaVY2-oCE?autoplay=1&mute=1&controls=0&loop=1&playlist=6XBaVY2-oCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

      desc: "아스가르드는 '신들의 세계' 로 불리는 외계 선진 문명, 아홉 왕국 중에 가장 강대한 제국이다. 토르는 아스가르드의 '왕세자' 로, 그의 '혈통' 에 따라 왕위 계승자. MCU에 그 누구도 부러울 것 없다. 인간들은 그들이 갖춘 초월성을 보고, 신과 같이 숭배했다. 기본적으로 수 톤의 무게를 들 수 있고, 인간의 냉병기로 상처도 낼 수 없는 육체를 가졌다. 우주에서 '아스가르드인들을 조심해라. 죽이는 것이 힘들다.(Watch out for those Asgardians, They are hard to perish.)' 라는 말이 있다. 또한, 그들은 마법과 과학을 동일 시 할 만큼 발달 되었다.그리고, 그들의 지배자들은 초자연적인 힘과 권능을 가졌다. 토르는 천둥 번개를 치고 비바람을 부려 인간들에게 풍요를 선사한다. 아스가르드 문명에서 1천 년 간, 그들의 의식과 가치관을 교육 받은 토르는 기본적으로 오만방자하고, 안하무인일 수 밖에 없다. 하지만, 몇년 만에 인간들을 '친구' 로 대하고 그들을 위해서, 목숨을 걸고 싸울 정도로 성장한 토르는 영웅으로 칭송 받는다.",
    },
  },
  {
    path: "/spiderman",
    imagePath: img02,
    hoverImagePath: img02,
    title: "SPIDER MAN",
    character: "파란색입니다",
    detail: {
      name: "SPIDER MAN",
      korName: "스파이더맨",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/emzMINELK34?autoplay=1&mute=1&controls=0&loop=1&playlist=emzMINELK34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "이쪽 세계관의 스파이더맨은 원작에서 파생된 다른 스파이더맨과 굉장히 다른 모습을 보이는데, 1군 히어로로서 진중한 모습을 보였던 원작과는 달리 다른 영웅들의 도움으로 성장하는 미숙한 2군 히어로로서 어떠한 상황에서도 쉴새없이 떠들어대는 10대 너드 청소년의 모습으로 등장하는 것이 특징이다. MCU 최초의 10대 슈퍼히어로(미성년자)다.",
    },
  },
  {
    path: "/roki",
    imagePath: img03,
    hoverImagePath: img03,
    title: "ROKI",
    character: "보라색입니다",
    detail: {
      name: "ROKI",
      korName: "로키",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/1h-ASSjWRms?autoplay=1&mute=1&controls=0&loop=1&playlist=1h-ASSjWRms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "지구를 비롯한 아홉 왕국을 농간하는 장난의 신. 올 파더 오딘과 프리가의 입양아. 형제로는 형과 누이가 있다. 영국의 톰 히들스턴이 배역을 맡았다. 외모와 연기가 잘 맞아서 간사하고, 야망 있는 악당의 모습이 잘 표현됐다. 그 카리스마 넘치는 사악한 표정과 중상 모략을 일삼는 책략가의 모습은 타의 추종을 불허할 정도. 한마디로 MCU 의 대표적인 악동이라 할수 있다.",
    },
  },
  {
    path: "/ironman",
    imagePath: img04,
    hoverImagePath: img04,
    title: "IRON MAN",
    character: "빨간색입니다",
    detail: {
      name: "IRON MAN",
      korName: "아이언맨",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/t86sKsR4pnk?autoplay=1&mute=1&controls=0&loop=1&playlist=t86sKsR4pnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "마블 코믹스의 슈퍼히어로. 이명은 아이언맨으로,천하무적 아이언맨(The Invincible Iron Man)이라는 수식어가 붙는다. 역설적으로 철은 방탄용으로 잘 쓰이지 않는다는 점을 고려하면 아이언맨을 만들기 위한 합금에는 철이 없을 확률이 높다. 철이 단단한 금속하면 먼저 떠오르고 우리 삶에서 친숙한 금속이기 때문에 붙인 것으로 추정된다. 억만장자 천재 발명가인 토니 스타크가 심장에 치명적인 상처를 입은 자신의 목숨을 지키며 동시에 세계를 지킬 강화 슈트를 제작하고 과학의 결정체로 만들어진 슈트를 입고 아이언맨이 되어 범죄와 싸워나간다.",
    },
  },
  {
    path: "/groot",
    imagePath: img05,
    hoverImagePath: img05,
    title: "GROOT",
    character: "파란색입니다",
    detail: {
      name: "GROOT",
      korName: "그루트",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/R2U0ek7uw-U?autoplay=1&mute=1&controls=0&loop=1&playlist=R2U0ek7uw-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "마블 코믹스에 등장하는 캐릭터로, 첫 등장은 Tales to Astonish #13으로 60년대에 잭 커비, 스탠 리와 딕 에이어가 만들었다. 이름의 유래는 네덜란드어로 '크다'는 뜻의 groot(흐로트). 종족은 '플로라 콜로서스'로, 지능이 있고 우주에서 온 나무 같이 생긴 생명체이다. 원래는 실험을 위해 인간을 납치하러 지구를 침략하러 온 외계인이었다. 그러다 21세기 들어서 고귀하고 영웅적인 캐릭터로 변하였으며, 울트론이 크리 제국을 지배하면서 일어난 어나일레이션: 컨퀘스트를 거치면서 가디언즈 오브 더 갤럭시의 멤버가 되었다. 그 중 로켓 라쿤과 절친이다.",
    },
  },
  {
    path: "/drstrange",
    imagePath: img06,
    hoverImagePath: img06,
    title: "DOCTOR STRANGE",
    character: "보라색입니다",
    detail: {
      name: "DOCTOR STRANGE",
      korName: "닥터스트레인지",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iNq-5nVTGbQ?autoplay=1&mute=1&controls=0&loop=1&playlist=iNq-5nVTGbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "마법에서 정점에 달한 마블 세계관 최강의 마법사이다. 레트콘 이전엔 우주 4대 본질 중 최강인 이터니티의 화신이 될 정도로 강했지만 현재는 최고위 신이나 우주적 존재들에 비해 약간 격이 떨어지는 편이다. 근데 '스트레인지보다 우위에 있는 우주적 존재'라는게 기껏해야 리빙 트리뷰널, 레트콘 이전 비욘더, 원 어보브 올 뿐인데, 이들은 마블 유니버스 내에서는 가히 규격외라고 해도 될법한 최상위급 우주적 존재들이다. 그래도 무척이나 약해진 현재 상태에서도 우주적 존재들과 1대1 매치를 성사시키는 몇안되는 캐릭터이고 나머지 존재들 사이에서는 최강 반열에 들 정도로 강하다. 소서러 슈프림이라는 직위 덕에 우주급 사건이 터지면 십중팔구 닥터 스트레인지가 나선다. 인간을 능가하는 지혜 덕에 마블 최고의 현자로도 불리며, 히어로들이 가끔 본인의 팍팍한 삶에 대해 상담을 요청하면 흔쾌히 그들의 정신적 지주 노릇도 한다.",
    },
  },
  {
    path: "/captainamerica",
    imagePath: img07,
    hoverImagePath: img07,
    title: "CAPTAIN AMERICA",
    character: "보라색입니다",
    detail: {
      name: "CAPTAIN AMERICA",
      korName: "캡틴아메리카",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/k3iZw20xu40?autoplay=1&mute=1&controls=0&loop=1&playlist=k3iZw20xu40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "슈퍼히어로 중 애국심을 강조한 엄친아 속성의 대표적인 캐릭터이다. 아이언맨이 미국의 현실적 패권주의를 상징한다면 캡틴 아메리카는 미국의 이상을 상징한다. 즉, 캡틴 아메리카는 완전한 자유의 상징이라서 시빌 워에서 정부의 정책에 반대하는 측에 서게 됐고, 캡틴 아메리카의 패배는 미국의 제국주의를 상징하는 기믹이었다.",
    },
  },
  {
    path: "/blackpanther",
    imagePath: img08,
    hoverImagePath: img08,
    title: "BLACK PANTHER",
    character: "빨간색입니다",
    detail: {
      name: "BLACK PANTHER",
      korName: "블랙팬서",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/wEGH7ziZJq0?autoplay=1&mute=1&controls=0&loop=1&playlist=wEGH7ziZJq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "왕가에 전해 내려오는 특수한 허브를 복용해 선대 블랙 팬서들의 지식, 인간 한계치의 민첩성, 체력, 힘, 강화된 감각을 얻었다. 무엇보다 블랙팬서는 기본적으로 지능도 천재적인 수준이고, 와칸다 전통 무술과 다양한 격투술에 매우 능하다. 또 다양한 무기술의 달인이며, 그 실력은 캡틴 아메리카와 한끗 차이이다. 공식 홈페이지의 설정에 의하면 신체 스펙은 비슷하나, 전투기술은 캡틴 아메리카 쪽이 약소하게나마 앞서고, 장비와 지능은 블랙 팬서가 앞서는 모양. 또한 다양한 언어를 구사 가능하고 매우 뛰어난 발명가이기도 하다.",
    },
  },
  {
    path: "/blackwidow",
    imagePath: img09,
    hoverImagePath: img09,
    title: "BLACK WIDOW",
    character: "파란색입니다",
    detail: {
      name: "BLACK WIDOW",
      korName: "블랙위도우",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/gbopHJYUDgA?autoplay=1&mute=1&controls=0&loop=1&playlist=gbopHJYUDgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "스파이 출신답게 잠입, 암살, 저격, 무기 관련 지식, 각종 전술전략 등에 능하며 신체개조를 받아 일반인을 훨씬 초월하는 강력한 신체능력과 격투능력을 지니고 있다. 특기할 만한 무기로는 블랙 위도우 스팅(Black Widow Sting)이라는 팔찌가 있는데, 전기충격기, 와이어, 최면가스 등 다양한 기능을 갖추고 있다.",
    },
  },
  {
    path: "/hawkeye",
    imagePath: img10,
    hoverImagePath: img10,
    title: "HAWKEYE",
    character: "보라색입니다",
    detail: {
      name: "HAWKEYE",
      korName: "호크아이",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/__xhyASLKDA?autoplay=1&mute=1&controls=0&loop=1&playlist=__xhyASLKDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1&mute=1&controls=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "과거 잠시 초인적인 능력을 가지게 되었을 때가 있었지만 지금은 별다른 특수 능력이 없다. 맨몸으로 싸우다가 부상을 입고 상처와 붕대를 달고 사는 등 상당히 고생한다. 난투가 벌어져도 멀쩡한 초인과 자신을 비교하면서 침울해하는 연출도 자주 나온다. 최근 싸우다가 청각장애인이 되기도 했지만 이건 기술의 힘으로 극복하고 이후 거의 묘사되지 않는다. 그러나 격투술이 매우 뛰어나고 반사신경과 궁술은 사실상 초인의 영역이라고 봐야한다. 작품마다 차이가 있지만 아무리 약하게 묘사되어도 일반 악당 상대로는 힘들어하지 않는다. 현실성을 크게 살린 아하의 작품에서도 진심으로 싸우자 활 하나로 무장 갱단을 이겼다. 강하게 묘사되면 어벤져스에서 돋보이게 활약하는 장면도 가끔 나온다. 무엇보다 쓰는 화살들의 성능이 하나같이 오버 테크놀로지다.",
    },
  },
  {
    path: "/hulk",
    imagePath: img11,
    hoverImagePath: img11,
    title: "HULK",
    character: "빨간색입니다",
    detail: {
      name: "HULK",
      korName: "헐크",
      videoSrc: `<iframe width="560" height="315" src="https://www.youtube.com/embed/V0e9R10qSLA?autoplay=1&mute=1&controls=0&loop=1&playlist=V0e9R10qSLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      desc: "과학자 브루스 배너는 감마폭탄 제작 과정중 감마폭탄 폭발 사고로 인해 대량의 감마선에 노출되었고, 통제 불가능한 괴력을 가진 녹색 거인 '헐크'로 변하게 되었다. 첫 등장 당시에는 모티브인 지킬 박사와 하이드처럼 밤만 되면 자기도 모르게 헐크가 된다는 설정이었으나 이후 분노하면 헐크가 된다는 식으로 바뀌었다.",
    },
  },
];

//이 앱에서는 수정 삭제를 진행하지 않음
function reducer(state, action) {
  return { contents };
}

export const store = createStore(reducer);
