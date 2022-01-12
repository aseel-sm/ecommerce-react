import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Products from "../components/Products";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>FilterProducts</FilterText>

          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Pink</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>L</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>SortProducts</FilterText>

          <Select>
            <Option selected>Newest</Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;