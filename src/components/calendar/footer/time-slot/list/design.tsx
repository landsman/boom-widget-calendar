import styled from "styled-components";

export const ListWrapper = styled.div`
  max-width: 100%;
  padding: 0;
  margin: 15px 0 0 0;
  list-style: none;
  
  /* We first create a flex layout context */
  display: inline-flex;

  /* Then we define the flow direction 
     and if we allow the items to wrap 
   * Remember this is the same as:
   * flex-direction: row;
   * flex-wrap: wrap;
   */
  flex-flow: row;

  /* Then we define how is distributed the remaining space */
  justify-content: left;
  
  gap: 10px 10px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 10px;
`;
