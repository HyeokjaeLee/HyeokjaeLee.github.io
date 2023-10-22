import React from 'react';

import { ABOUT_TITLE_ID } from './AboutNavigation';
import { SkillItem } from './SkillItem';

export const SkillSection = () => (
  <section>
    <h2 id={ABOUT_TITLE_ID.SKILL} className="font-bold text-3xl mb-6">
      🛠️ Skill
    </h2>
    <dl>
      <SkillItem
        title="Overall"
        borderBottom
        whatCanIDo={[
          '포지션에 관계없이 제품의 발전을 위해 고민하고 의견을 제시합니다.',
          '이슈 해결을 위해 개발 외적인 방법을 포함한 다양한 방식을 적극적으로 탐색하고 최선의 결과를 얻을 수 있게 노력합니다.',
          '익숙하지 않은 개발 환경에서도 빠르게 적응하여 업무를 수행할 수 있습니다.',
        ]}
      />
      <SkillItem
        title="Frontend"
        borderBottom
        whatCanIDo={[
          'Next를 포함한 React 기반의 프로젝트를 구축하고 유지보수할 수 있습니다.',
          'Typescript의 여러 유틸리티 타입을 활용하여 안정성을 높인 코드를 작성할 수 있습니다.',
          'React hooks를 이용해 공통 비즈니스 로직을 적절히 추상화하여 재사용할 수 있습니다.',
          '번들링 도구를 활용해 프로젝트의 개발 환경을 개선할 수 있습니다.',
          'SEO를 고려해 접근성이 준수한 웹 페이지를 구축할 수 있습니다.',
        ]}
      />
      <SkillItem
        title="Backend"
        borderBottom
        whatCanIDo={[
          '필요에 따라 BFF와 같은 Node 기반의 간단한 API 서버를 구축할 수 있습니다.',
          '프론트엔드 입장에서 효율적인 스키마 설계에 대해 고민하고 의견을 제시할 수 있습니다.',
        ]}
      />
      <SkillItem
        title="DevOps"
        whatCanIDo={[
          'Vercel, Netlify, S3와 같은 서비스를 적절히 활용해 프로젝트 배포 환경을 설정할 수 있습니다.',
          'Github Actions를 이용해 배포 자동화 파이프라인을 구축할 수 있습니다.',
          'Yarn berry, PNPM과 같은 도구를 이용해 모노레포 구조의 프로젝트를 구축할 수 있습니다.',
        ]}
      />
    </dl>
  </section>
);
