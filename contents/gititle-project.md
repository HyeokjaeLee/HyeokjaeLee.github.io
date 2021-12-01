---
emoji: "🚀"
title: "Gititle 프로젝트"
description: "좋은 커밋 메시지를 작성하기 위한 프로젝트"
date: "2021-09-14"
tag: [Project]
---

## Gititle 프로젝트

<img src="https://user-images.githubusercontent.com/71566740/135963287-e5c18f62-da16-4dda-98cb-1dd4a7c2b720.png" class="img large"/>

**해당 프로젝트의 결과물은 [Gititle](https://hyeokjaelee.github.io/gititle/)에서 확인할 수 있습니다.**

### 👉 프로젝트 목적

저는 작성한 코드를 커밋할 때 AngularJS commit conventions에 추가로 제가 정한 몇 가지 규칙을 더해 정해진 양식대로 작성하려고 노력합니다.

이런 양식은 분명 이전 커밋 내용을 참고해야 할 때는 편리하지만 작성하는데 시간이 조금 더 들 수밖에 없습니다.

특히 저는 AngularJS commit conventions의 Type만으로 설명이 부족한 부분을 Emoji 추가로 보완하는데 이렇게 Emoji와 알맞은 Type을 매칭 하는 과정이 번거롭습니다.

이런 부분들을 좀 더 편하게 작성할 수 있고 양식을 정확히 지킬 수 있게 만들자는 목표를 가지고 시작한 Gititle 프로젝트입니다.

### ✅ 고려사항

- 실제 서비스가 가능한 프로젝트를 목표로 PWA로 만들어 접근성을 높이고 오프라인 환경에서도 사용할 수 있도록 하는 걸 목표로 했습니다.
- 서비스 후 클라이언트 측에 의도치 않는 버그를 방지하고 작업 중인 코드가 영향을 미치지 않기 위해 별도의 dev branch에서 작업 후 테스트를 마치고 실제 서비스 branch에 병합하는 방식으로 진행하려 합니다.
- 대부분의 Git을 사용하는 환경이 PC 환경이므로 모바일 환경에 대한 UI는 크게 생각하지 않고 최소한 화면 크기에 따른 UI만 고려했습니다.

## 도구 선정

### <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vue.js</title><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>Vue.js

- 새로운 front-end 프레임워크를 사용해 보고 싶었음
- node.js 없이 cdn만으로 작업이 가능해서 별도 컴파일 없이 gh-pages로 배포 가능
- 쉬운 문법과 작업 속도가 이번 토이프로젝트에 적합하다 판단
- Vue.js의 개발자 도구가 엄청 편하다는데 써보고 싶었음

### <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg> Gh-pages

- 쉬운 호스팅
- 완전 무료

## 프로젝트를 진행하면서 느낀 Vue.js

보통 React를 사용해 왔는데 Vue를 쓰면서 HTML 코드 활용이 신선하다고 생각했습니다.

React 코드를 작성하다 보면 HTML보다는 Js에 힘이 실어진 느낌이고 같은 결과물을 만들어 낼 때도 여러 방법 중 내 생각에 적합한 방법을 채택해서 사용하는 식이었는데 Vue는 Js의 비중이 크긴 하지만 React의 그것보다 작다는 느낌이었습니다.

예를 들면 같은 태그를 반복해서 사용하는 경우 React는 Js에서 map, forEach, for문 등등 여러 가지 방법으로 태그를 핸들링할 수 있다면 Vue는 HTML 태그에서 v-for을 이용해 반복합니다.

<br/>
<div class="img-txt-wrap">
  <div class="img-wrap">
    <img width="500" src="https://user-images.githubusercontent.com/71566740/133247169-745841aa-f06c-47dd-be7e-9ad19e31767c.jpg"/>
  </div>
</div>
<br/>

확실히 전체 코드 구성을 보면 React의 JSX 문법보다 훨씬 기본 HTML에 친화적인 문법으로 코드를 작성할 수 있었습니다.

그리고 node.js 없이 cdn만으로 결과물을 만들어 낼 수 있다는 것도 매우 편했습니다.

물론 Vue도 node.js를 이용해 프로젝트를 만들 수 있고 node.js가 불편한 것은 아니지만 작은 프로젝트를 하면서 node.js의 모듈 의존성과 같은 다른 요인을 배제하고 작업할 수 있다는 게 굉장히 마음에 들었습니다.

## 프로젝트 진행

### 🔍 자료 조사

일단 제가 작성하던 커밋 메시지 규칙을 손볼 필요가 있었습니다.

아무래도 개인이다 보니 혼자 관련 규칙들을 모두 정의하고 진행하기엔 문제가 있어서 관련 정보들을 찾아 참고했습니다.

제 Git 커밋 메시지 규칙은 해당 [포스트](https://hyeokjaelee.github.io/good-commit-message/)에서 보다 자세하게 알 수 있습니다.

- [AngularJS commit conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)
- [Angular Github](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)
- Git에 Emoji를 사용하기 위한 가이드 [Gitmoji](https://gitmoji.dev/)
- 커밋메시지 키워드 [블로그 포스트](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)

  (한국 개발자분의 블로그 포스트 중에 잘 정리되어있는 포스트가 있어 참고했습니다.)

### 🔥 발생했던 이슈

- 우선 일반적인 평소 사용하던 PWA Builder를 이용해 간편하게 PWA로 만들 생각이었는데 로컬 환경에서는 정상적으로 작동하지만 Github page에서 해당 블로그를 운영하고 있고 프로젝트 URL이 해당 블로그 하위 URL로 포함되어있다 보니 정상적으로 작동하지 않았습니다.

  해당 문제는 여러 gh-pages의 PWA를 찾아보며 해결했습니다.

- 새로운 deploy가 있어도 이전에 오프라인 사용을 위해 저장했던 캐시가 지워지지 않아 수동으로 사용자가 캐시를 지우고 사용해야 했던 문제가 있었습니다.

  버전 태그를 만들고 버전이 바뀌면 캐시를 날리고 새로 저장하는 방식으로 해결했습니다.

## 마지막으로

소스코드는 [Github Repository](https://github.com/HyeokjaeLee/gititle)에서 확인할 수 있고 수정할 부분이나 추가하고 싶으신 내용이 있다면 [Issues section](https://github.com/HyeokjaeLee/gititle/issues)을 이용해주세요.