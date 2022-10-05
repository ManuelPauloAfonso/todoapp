import styled from "styled-components";



export const Container = styled.header`
display: flex;
justify-content: space-between;
padding: 2rem 22rem;
border-bottom: 1px solid #151A37;

nav{
    display: flex;
    gap: 1.5rem;
}
a{
    background: linear-gradient(180deg, #151A37 0%, rgba(21, 26, 55, 0) 100%);
    border: 1px solid #24293F;
    border-radius: 12px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`