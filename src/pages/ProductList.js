import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
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
  const location = useLocation();

  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };
  console.log(filters);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>FilterProducts</FilterText>

          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Color
            </Option>
            <Option value="blue">Red</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Pink</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
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

          <Select
            onChange={(e) => {
              console.log(e.target.value);
              setSort(e.target.value);
            }}
          >
            <Option selected value="newest">
              Newest
            </Option>
            <Option value="asc">Price(asc)</Option>
            <Option value="desc">Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
