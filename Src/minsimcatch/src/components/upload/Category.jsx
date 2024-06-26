import Option from "./Option";
import styled from "styled-components";

const Category = () => {
  return (
    <>
      <Container>
        <div className="optionLabel">
          <label>카테고리 설정</label>
          <Option name="카테고리" def={0} datas={category}></Option>
        </div>
      </Container>
    </>
  );
};

export const category = [
  { name: "전체", value: "total" },
  { name: "뭐살까?(상품-의류,잡화)", value: "buy" },
  { name: "어디갈까?(갈 곳 추천)", value: "where" },
  { name: "뭐하지?(할 것 추천)", value: "what" },
  { name: "뭐먹지?(음식)", value: "food" },
  { name: "뭐볼까?(영화)", value: "movie" },
  { name: "들어줘(고민상담)", value: "listen" },
  { name: "기타", value: "etc" },
];

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;

  .optionLabel {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .optionLabel label {
    font-size: 14px;
    color: #999999;
    margin: 0 0 5px 13px;
  }
`;

export default Category;
