---
title: "Git Commit Message Convention"
titleImage: "https://user-images.githubusercontent.com/71566740/139002400-e36dc3e7-a88f-4f4b-9a1a-2e2b70086ebe.png"
description: "Git Commit Message 작성을 위한 나와의 약속"
date: "2021-07-03"
tag: [Git]
---

<img src="https://user-images.githubusercontent.com/71566740/139002400-e36dc3e7-a88f-4f4b-9a1a-2e2b70086ebe.png" class="img large"/>

커밋 메시지를 작성할 때는 규칙을 정해놓고 일관성 있게 작성해야 한다.

코드를 작성하다 보면 간혹 이전 코드를 참고 또는 회귀해야 할 경우가 있는데 커밋 수가 적다면 상관없지만 커밋 수가 많아질수록 수많은 커밋 로그 중에 원하는 시점을 찾는 것이 어렵다.

또한 내 커밋이면 어느정도 지저분한 커밋 로그 속에서 원하는 정보를 찾을 수 있어도 다른 사람이 내 커밋 로그를 참고해야 하는 경우에는 어려움이 배가된다.

이러한 경우에 커밋 메시지가 제대로 작성되어 있다면 보다 원활하게 원하는 정보를 찾을 수 있다.

커밋 메시지 작성법은 큰 틀은 있지만 개발자들마다 스타일이 다르고 정확하게 이렇게 작성해야 한다는 규칙은 없다.

이 포스트는 Angural Commit Message Format을 기반으로 내 나름대로 보기 편하다고 느낀 구조를 정리한 내용이다.

## Commit Message

```
<header>//필수

<body>

<footer>
```

- 해당 커밋 메시지의 전체 구조는 emoji를 제외하면 Angural Commit Message Format과 동일
- header, body, footer는 빈 행으로 구분
- header를 제외하면 모두 생략 가능

### 🗿 Header

```
<emoji> <type>(<scope>): <short summary>
```

#### Emoji

개발을 하다 보면 Angural Commit Message Format 만으로는 구분이 명확하지 않을 때가 많았고 이 부분을 나는 Type 앞에 Emoji를 추가함으로써 보완했다.

내가 Commit Message에 활용하는 Emoji들의 정보는 [Gitmoji](https://gitmoji.dev/)에서 확인 가능하다.

#### Type

반드시 다음 중 하나여야 한다.

- **build**: 빌드 시스템 또는 외부 종속성에 영향을 미치는 변경 사항이 있을 때
- **ci**: CI 구성 파일 및 스크립트의 변경 사항이 있을 때
- **docs**: 단순 문서 수정이 있을 때
- **feat**: 새로운 기능 추가가 있을 때
- **fix**: 버그 수정이 있을 때
- **perf**: 성능 개선이 있는 변경이 있을 때
- **refactor**: 버그 수정, 기능 추가, 성능 개선을 제외한 변경이 있을 때
- **test**: 테스트 관련 변경이 있을 때
- **revert**: 이전 커밋으로 회귀할 때

  - type은 revert를 사용하되 short summary는 회귀 대상 커밋의 그것과 같아야 함
  - 명확한 회귀 이유를 body에 설명해 주어야 함
  - 회귀 대상의 커밋 SHA 정보를 다음과 같이 body에 표시해 주어야 함

    `This reverts commit <SHA>`

#### Scope (생략 가능)

추가적인 문맥 정보를 제공하기 위한 목적으로 괄호 안에 작성한다.

[Angular.js 공식 문서](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#scope)에서는 영향을 받는 npm 모듈명을 작성하라고 되어있는데 만약 npm 모듈을 사용하지 않는다면 어디를 수정했는지 정도로 보면 될 것 같다.

함수를 수정했으면 해당 함수의 이름, 메소드를 추가했으면 해당 클래스 이름 등 수정 대상을 한눈에 특정할 수 있는 내용이 들어가면 된다.

추가적으로 [어떤 개발자분의 문서](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)에서는 이슈 ID를 적지 말라고 한다.

#### Short summary

- 첫 글자를 대문자로 작성하지 않는다.
- 50글자 내로 제한한다.
- 과거형으로 작성하지 않는다.
- 명령문으로 작성한다.
- 끝에 특수문자를 사용하지 않는다.

  (마침표, 느낌표, 물음표 등)

### 📃 Body

- 각 내용의 시작은 `*`로 시작하고 공백 한 칸 띄우고 작성한다.
- 각 내용은 72글자 내로 제한한다.
- Header의 short summary와 같이 현재 시제를 사용한다.
  - ex) fixes, fixed가 아닌 fix
- 어떻게 보다는 무엇과 왜를 설명한다.
- 변경의 영향을 설명하기 위해 이전 동작과 새 동작을 비교할 수 있다.

### 👣 Footer

```
BREAKING CHANGE: <breaking change summary>

<breaking change description>


<linked issue>
```

#### Breaking Change

Angural문서에 따르면 Breaking change는 애플리케이션을 구성하고 있는 모듈 등을 업데이트, 추가, 제거해야 하는 변화를 의미한다.
(간략하게 대규모 변경사항 정도로 생각하시면 좋을듯)

그 외에 API를 만들 때 해당 API를 사용하는 다른 앱들의 코드를 수정해야 하는 경우에도 API 커밋 메시지에 Breaking Change라고 표기한다.

Footer에는 breaking change와 관련된 정보를 포함할 수 있다.

#### Linked issue

나는 이슈 연결을 할 때 주로 다음 두 가지 키워드를 사용한다.

- **resolve**: 이슈를 해결한 경우
- **related to**: 연관된 이슈가 있는 경우

다음은 pull request의 description이나 커밋 메시지에서 Issue 연결을 제공하는 키워드들이다.

(pull request는 기본 branch에 있어야 함)

- close
- closes
- closed
- fix
- fixes
- fixed
- resolve
- resolves
- resolved

이슈가 같은 repository에 있는지 여부에 따라 닫는 구문이 달라진다.

해당 내용은 [Github 공식 문서](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)에 원문이 있으니 확인해 보는걸 추천

| 연결된 이슈                 | 구문                                  | 예시                                                               |
| --------------------------- | ------------------------------------- | ------------------------------------------------------------------ |
| 같은 repository에 있는 경우 | KEYWORD #ISSUE-NUMBER                 | closes #10                                                         |
| 다른 repository에 있는 경우 | KEYWORD OWNER/REPOSITORY#ISSUE-NUMBER | fixes octo-org/octo-repo#100                                       |
| 복합 적인 경우              | 각 이슈의 전체 구문을 작성            | resolves #10,<br>resolves #123,<br>resolves octo-org/octo-repo#100 |

## 자주 쓰이는 영어 단어 목록

다음은 커밋에 자주 사용하는 영어 단어 목록이다.

해당 내용도 [좋은 git commit 메시지를 위한 영어 사전](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)에 잘 정리해 주신 글이 있다.

- **Fix**: 버그, 이슈 등 잘못된 무언가를 고치는 경우
- **Correct**: 문법 오류, 타입, 이름, 오타 등을 수정하는 경우
  - `Fix`와 비슷하지만 보다 단순한 수정에 자주 쓰임
- **Remove**: 코드나 파일을 삭제하는 경우
- **Add**: 새 코드나 파일을 추가하는 경우
- **Implement**: 무언가를 구현한 경우
  - `Add`와 비슷하지만 좀더 큰 코드 단위 추가에 자주 쓰임
  - 구현한 대상을 강조할때 사용
- **Use**: 구현을 위해 무언가를 사용한 경우
  - 특정 라이브러리나 프레임워크를 사용하기 위한 코드를 추가하는 경우
- **Refactor**: 코드를 리팩토링 하는 경우
- **Simplify**: 코드를 단순화 하는 경우
  - 리팩토링과 비슷하지만 중복 제거 등 단순화만 하는 경우
- **Update**: 무언가를 업데이트 하는 경우
- **Revise**: 문서를 수정하는 경우
- **Improve**: 성능, 구조, 접근성 등을 개선하는 경우
- **Make**: 특정한 동작이 되게 만드는 경우
  - 기존 동작을 변경하는 경우
- **Allow**: 특정 동작을 허용하는 경우
- **Ensure**: 특정 처리를 보장하는 경우
  - if문 처럼 조건을 확실하게 제공하는 경우
- **Prevent**: 특정 처리를 못하게 막는 경우
- **Avoid**: 특정 처리를 회피하는 경우
  - if문 처럼 조건에 따라 특정 동작을 회피하는 경우
- **Move**: 코드나 파일을 이동하는 경우
- **Rename**: 파일명을 변경한 경우
  - 단순 변수명, 함수명 등의 변경만 수행한 경우
- **Verify**: 검증코드를 추가하는 경우
- **Set**: 변수, 리터럴, 텍스트 등 단순 값을 변경하는 경우
- **Pass**: 매개변수를 전달하는 경우

## 마지막으로

해당 포스트는 추가적으로 생각나는 요소가 있다면 내용을 추가 해나갈 예정이며 지금까지 정리한 내용을 기반으로 커밋 메시지 가이드를 쉽게 작성할 수 있는 토이 프로젝트를 진행중이다.

관련 내용은 다음 링크들에서 확인 가능하다.

- [Blog post](/gititle-project)
- [Github repository](https://github.com/HyeokjaeLee/gititle)
- [Gititle](/gititle)
