import SEOHead from '../components/SEOHead';
import LessonComplete from '../components/LessonComplete';

export default function Subject1Ch2() {
  return (
    <div className="lesson-page">
      <SEOHead title="2장: 데이터 모델과 SQL - SQLD Study" description="정규화, 반정규화 개념과 성능 최적화" />

      <section className="hero-compact" data-aos="fade-up">
        <h1>2장: 데이터 모델과 SQL</h1>
        <p className="hero-subtitle">정규화, 반정규화, 성능 데이터 모델링</p>
      </section>

      <article className="content-card" data-aos="fade-up">
        <h2>1. 정규화 (Normalization)</h2>
        <p>
          정규화는 데이터의 <strong>중복을 제거</strong>하고 <strong>이상(Anomaly)을 방지</strong>하기 위해
          테이블을 분해하는 과정입니다.
        </p>

        <h3>정규화의 목적</h3>
        <ul>
          <li><strong>데이터 중복 최소화</strong></li>
          <li><strong>삽입/수정/삭제 이상 방지</strong></li>
          <li><strong>데이터 무결성 확보</strong></li>
        </ul>

        <h3>이상 현상 (Anomaly)</h3>
        <table>
          <thead>
            <tr><th>이상 유형</th><th>설명</th><th>예시</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>삽입 이상</strong></td><td>불필요한 데이터를 함께 삽입해야 함</td><td>학생 없이 과목 정보 삽입 불가</td></tr>
            <tr><td><strong>수정 이상</strong></td><td>일부만 수정하면 데이터 불일치</td><td>부서명 변경 시 일부 행만 수정</td></tr>
            <tr><td><strong>삭제 이상</strong></td><td>필요한 데이터가 함께 삭제</td><td>수강 취소 시 학생 정보도 삭제</td></tr>
          </tbody>
        </table>

        <h3>정규화 단계</h3>
        <table>
          <thead>
            <tr><th>단계</th><th>규칙</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>1NF (제1정규형)</strong></td><td>원자값</td><td>모든 속성은 원자값(하나의 값)만 가짐</td></tr>
            <tr><td><strong>2NF (제2정규형)</strong></td><td>부분 함수 종속 제거</td><td>PK의 일부에만 종속된 속성 분리</td></tr>
            <tr><td><strong>3NF (제3정규형)</strong></td><td>이행 함수 종속 제거</td><td>PK가 아닌 속성에 종속된 속성 분리</td></tr>
            <tr><td><strong>BCNF</strong></td><td>결정자 → 후보키</td><td>모든 결정자가 후보키</td></tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>핵심 암기:</strong><br/>
          • 1NF: 원자값 → 반복 그룹 제거<br/>
          • 2NF: 부분 함수 종속 제거 → 복합키의 일부에 종속된 것 분리<br/>
          • 3NF: 이행 함수 종속 제거 → A→B→C일 때 A→C 제거
        </div>

        <h3>함수 종속성 (Functional Dependency)</h3>
        <p>
          속성 X의 값을 알면 속성 Y의 값이 유일하게 결정될 때,
          <strong>&quot;Y는 X에 함수적으로 종속된다&quot;</strong>고 합니다. (X → Y)
        </p>
        <ul>
          <li><strong>완전 함수 종속</strong>: PK 전체에 종속 (정상)</li>
          <li><strong>부분 함수 종속</strong>: PK 일부에 종속 (2NF에서 제거)</li>
          <li><strong>이행 함수 종속</strong>: PK→A→B 형태 (3NF에서 제거)</li>
        </ul>

        <h2>2. 반정규화 (Denormalization)</h2>
        <p>
          반정규화는 정규화된 테이블을 <strong>성능 향상</strong>을 위해
          의도적으로 중복을 허용하거나 테이블을 합치는 과정입니다.
        </p>

        <h3>반정규화를 고려하는 경우</h3>
        <ul>
          <li>JOIN이 빈번하여 <strong>조회 성능이 저하</strong>될 때</li>
          <li><strong>대량 데이터</strong>를 처리하는 경우</li>
          <li><strong>통계/집계</strong> 처리가 자주 필요할 때</li>
        </ul>

        <h3>반정규화 기법</h3>
        <table>
          <thead>
            <tr><th>대상</th><th>기법</th><th>설명</th></tr>
          </thead>
          <tbody>
            <tr><td rowSpan={3}>테이블</td><td>테이블 병합</td><td>1:1, 1:N 관계 테이블 합침</td></tr>
            <tr><td>테이블 분할</td><td>수직/수평 분할</td></tr>
            <tr><td>테이블 추가</td><td>중복/통계/이력 테이블 추가</td></tr>
            <tr><td rowSpan={2}>컬럼</td><td>중복 컬럼 추가</td><td>JOIN 감소를 위해 중복 저장</td></tr>
            <tr><td>파생 컬럼 추가</td><td>계산 결과를 미리 저장</td></tr>
            <tr><td>관계</td><td>중복 관계 추가</td><td>빠른 경로 제공을 위한 관계 추가</td></tr>
          </tbody>
        </table>

        <h2>3. 관계와 조인의 이해</h2>
        <p>
          ERD에서의 관계는 SQL에서 <strong>JOIN</strong>으로 구현됩니다.
          관계의 유형에 따라 적절한 JOIN 방식이 결정됩니다.
        </p>

        <h3>관계 유형별 JOIN</h3>
        <table>
          <thead>
            <tr><th>관계 유형</th><th>설명</th><th>JOIN 시 고려사항</th></tr>
          </thead>
          <tbody>
            <tr><td>1:1</td><td>한 행이 한 행과 대응</td><td>어느 쪽이든 JOIN 가능</td></tr>
            <tr><td>1:N</td><td>한 행이 여러 행과 대응</td><td>N쪽 결과가 중복 가능</td></tr>
            <tr><td>M:N</td><td>양쪽 모두 여러 행</td><td>교차 테이블(매핑 테이블) 필요</td></tr>
          </tbody>
        </table>

        <h2>4. 성능 데이터 모델링</h2>
        <p>
          데이터 모델 단계에서 <strong>성능을 고려</strong>하여 설계하는 것을 말합니다.
        </p>

        <h3>성능 저하 원인</h3>
        <ul>
          <li><strong>넓은 테이블</strong>: 컬럼이 너무 많아 I/O 증가</li>
          <li><strong>대량 데이터</strong>: 행이 많아 풀 스캔 시 성능 저하</li>
          <li><strong>과도한 JOIN</strong>: 정규화 과잉으로 JOIN 횟수 증가</li>
          <li><strong>인덱스 미사용</strong>: 적절한 인덱스가 없어 풀 스캔</li>
        </ul>

        <h3>성능 개선 방안</h3>
        <ul>
          <li><strong>적절한 반정규화</strong>: JOIN 감소</li>
          <li><strong>파티셔닝</strong>: 대용량 테이블 분할</li>
          <li><strong>인덱스 설계</strong>: 조회 패턴에 맞는 인덱스</li>
          <li><strong>슈퍼타입/서브타입 변환</strong>: 성능에 맞는 물리 모델 선택</li>
        </ul>

        <h3>슈퍼타입/서브타입 변환</h3>
        <table>
          <thead>
            <tr><th>변환 방법</th><th>설명</th><th>적합한 경우</th></tr>
          </thead>
          <tbody>
            <tr><td>OneToOne Type</td><td>각 서브타입별 테이블</td><td>서브타입별 처리가 많을 때</td></tr>
            <tr><td>Plus Type</td><td>슈퍼타입 + 서브타입 테이블</td><td>공통 속성 조회가 많을 때</td></tr>
            <tr><td>Single Type</td><td>하나의 테이블로 통합</td><td>전체 데이터 통합 조회 시</td></tr>
          </tbody>
        </table>

        <div className="info-box">
          <strong>시험 TIP:</strong> 정규화/반정규화의 차이, 정규화 단계(1NF~BCNF),
          함수 종속성 개념은 거의 매회 출제됩니다. 특히 2NF와 3NF의 차이를 확실히 구분하세요.
        </div>
      </article>

      <LessonComplete lessonId="subject1-ch2" />
    </div>
  );
}
