import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function Subject1Ch1() {
  return (
    <div className="lesson-page">
      <SEOHead title="1장: 데이터 모델링의 이해 - SQLD Study" description="엔터티, 속성, 관계, 식별자 개념 학습" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>1장: 데이터 모델링의 이해</h1>
        <p className="hero-subtitle">엔터티, 속성, 관계, 식별자</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>1. 데이터 모델링이란?</h2>
        <p>
          데이터 모델링은 현실 세계의 데이터를 <strong>구조화</strong>하여
          데이터베이스에 저장할 수 있는 형태로 만드는 과정입니다.
        </p>

        <h3>데이터 모델링의 3단계</h3>
        <table>
          <thead>
            <tr><th>단계</th><th>설명</th><th>산출물</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>개념적 모델링</strong></td><td>업무 중심의 전체적인 데이터 구조 설계</td><td>ERD (개념)</td></tr>
            <tr><td><strong>논리적 모델링</strong></td><td>상세 속성, 관계, 키 정의</td><td>ERD (논리)</td></tr>
            <tr><td><strong>물리적 모델링</strong></td><td>실제 DB에 맞는 테이블, 컬럼 설계</td><td>테이블 정의서</td></tr>
          </tbody>
        </table>

        <h3>데이터 모델링의 3요소</h3>
        <ul>
          <li><strong>Things (엔터티)</strong>: 업무에서 관리해야 할 대상</li>
          <li><strong>Attributes (속성)</strong>: 대상의 성질, 특성</li>
          <li><strong>Relationships (관계)</strong>: 대상 간의 연관성</li>
        </ul>

        <h2>2. 엔터티 (Entity)</h2>
        <p>
          엔터티는 업무에서 <strong>관리해야 할 데이터의 집합</strong>입니다.
          테이블과 대응되는 개념입니다.
        </p>

        <h3>엔터티의 특징</h3>
        <ul>
          <li>업무에서 필요로 하고 관리하고자 하는 정보</li>
          <li><strong>유일한 식별자</strong>에 의해 식별 가능</li>
          <li><strong>2개 이상의 인스턴스</strong>(행)가 존재</li>
          <li>반드시 <strong>속성</strong>을 가짐</li>
          <li>다른 엔터티와 <strong>1개 이상의 관계</strong>가 있음</li>
        </ul>

        <h3>엔터티의 분류</h3>
        <table>
          <thead>
            <tr><th>분류 기준</th><th>유형</th><th>설명</th><th>예시</th></tr>
          </thead>
          <tbody>
            <tr><td rowSpan="3">유무형</td><td>유형 엔터티</td><td>물리적 형태가 있음</td><td>사원, 물품, 강사</td></tr>
            <tr><td>개념 엔터티</td><td>물리적 형태 없음</td><td>조직, 보험상품</td></tr>
            <tr><td>사건 엔터티</td><td>업무 수행 시 발생</td><td>주문, 청구, 미납</td></tr>
            <tr><td rowSpan="3">발생 시점</td><td>기본 엔터티</td><td>독립적으로 존재</td><td>사원, 부서, 고객</td></tr>
            <tr><td>중심 엔터티</td><td>기본에서 파생</td><td>계약, 주문</td></tr>
            <tr><td>행위 엔터티</td><td>2개 이상에서 파생</td><td>주문목록, 사원변경이력</td></tr>
          </tbody>
        </table>

        <h2>3. 속성 (Attribute)</h2>
        <p>
          속성은 엔터티가 가지는 <strong>최소 의미 단위</strong>의 데이터입니다.
          테이블의 컬럼에 해당합니다.
        </p>

        <h3>속성의 분류</h3>
        <table>
          <thead>
            <tr><th>분류</th><th>유형</th><th>설명</th><th>예시</th></tr>
          </thead>
          <tbody>
            <tr><td rowSpan="3">특성</td><td>기본 속성</td><td>업무에서 직접 추출</td><td>이름, 전화번호</td></tr>
            <tr><td>설계 속성</td><td>설계 과정에서 생성</td><td>코드, 일련번호</td></tr>
            <tr><td>파생 속성</td><td>다른 속성에서 계산</td><td>합계, 평균</td></tr>
            <tr><td rowSpan="3">구성</td><td>PK 속성</td><td>엔터티의 고유 식별</td><td>사원번호</td></tr>
            <tr><td>FK 속성</td><td>다른 엔터티 참조</td><td>부서번호</td></tr>
            <tr><td>일반 속성</td><td>PK, FK 외의 속성</td><td>이름, 연봉</td></tr>
          </tbody>
        </table>

        <h3>도메인 (Domain)</h3>
        <p>
          각 속성이 가질 수 있는 <strong>값의 범위</strong>입니다.
          예: 학년 속성의 도메인은 {'{1, 2, 3, 4}'} 입니다.
        </p>

        <h2>4. 관계 (Relationship)</h2>
        <p>
          관계는 <strong>엔터티 간의 연관성</strong>을 의미합니다.
          ERD에서 선으로 표현됩니다.
        </p>

        <h3>관계의 종류</h3>
        <table>
          <thead>
            <tr><th>종류</th><th>설명</th><th>표기</th></tr>
          </thead>
          <tbody>
            <tr><td>1:1</td><td>양쪽 엔터티가 하나씩 대응</td><td>—</td></tr>
            <tr><td>1:N</td><td>한쪽이 여러 개와 대응</td><td>가장 흔함</td></tr>
            <tr><td>M:N</td><td>양쪽 모두 여러 개와 대응</td><td>교차 엔터티로 해소</td></tr>
          </tbody>
        </table>

        <h3>관계의 참여도 (Cardinality)</h3>
        <ul>
          <li><strong>필수 참여 (Mandatory)</strong>: 반드시 관계가 존재 (|로 표기)</li>
          <li><strong>선택 참여 (Optional)</strong>: 관계가 없을 수도 있음 (○로 표기)</li>
        </ul>

        <h2>5. 식별자 (Identifier)</h2>
        <p>
          식별자는 엔터티 내의 인스턴스를 <strong>유일하게 구분</strong>하는 속성입니다.
        </p>

        <h3>식별자의 분류</h3>
        <table>
          <thead>
            <tr><th>분류</th><th>유형</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td rowSpan="2">대표성</td><td><strong>주식별자</strong></td><td>엔터티를 대표 (PK)</td></tr>
            <tr><td>보조식별자</td><td>인스턴스 구분 가능하지만 대표 아님</td></tr>
            <tr><td rowSpan="2">생성 여부</td><td>내부식별자</td><td>자체적으로 생성</td></tr>
            <tr><td>외부식별자</td><td>다른 엔터티에서 받아옴 (FK)</td></tr>
            <tr><td rowSpan="2">속성 수</td><td>단일식별자</td><td>하나의 속성으로 식별</td></tr>
            <tr><td>복합식별자</td><td>여러 속성을 조합하여 식별</td></tr>
            <tr><td rowSpan="2">대체 여부</td><td>본질식별자</td><td>업무에서 자연 발생</td></tr>
            <tr><td>인조식별자</td><td>인위적으로 생성 (일련번호 등)</td></tr>
          </tbody>
        </table>

        <h3>주식별자의 특징</h3>
        <ul>
          <li><strong>유일성</strong>: 각 인스턴스를 유일하게 식별</li>
          <li><strong>최소성</strong>: 필요한 최소한의 속성으로 구성</li>
          <li><strong>불변성</strong>: 값이 변하지 않음</li>
          <li><strong>NOT NULL</strong>: NULL 값 불가</li>
        </ul>

        <h3>식별자 관계 vs 비식별자 관계</h3>
        <table>
          <thead>
            <tr><th>구분</th><th>식별자 관계</th><th>비식별자 관계</th></tr>
          </thead>
          <tbody>
            <tr><td>ERD 표기</td><td>실선</td><td>점선</td></tr>
            <tr><td>FK 위치</td><td>자식의 PK에 포함</td><td>자식의 일반 속성</td></tr>
            <tr><td>관계 강도</td><td>강함 (부모 없이 존재 불가)</td><td>약함 (독립 존재 가능)</td></tr>
            <tr><td>예시</td><td>주문-주문상세</td><td>부서-사원</td></tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>시험 TIP:</strong> 식별자 관계(실선) vs 비식별자 관계(점선)의 차이와
          FK가 PK에 포함되는지 여부는 매번 출제되는 핵심 주제입니다.
        </div>
      </article>

      <LessonComplete lessonId="subject1-ch1" />
    </div>
  );
}
