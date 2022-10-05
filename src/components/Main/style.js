import styled from "styled-components";



export const Container = styled.header`

display: flex;
justify-content: center;
gap: 3rem;
margin-top: 5rem;

span{
        color: white;
        font-size: 1.5rem;
        line-height: 135%;
        display: flex;
        align-items: center;
        gap: 1rem;
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
}
.lok{
    display: flex;
    flex-direction: column;
    
    
    input{
        width: 32.5rem;
        height: 3.5rem;

        background: #151A37;
        border: 1px solid #24293F;
        border-radius: 8px;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;


        color: rgba(255, 255, 255, 0.25);
    
    }
    button{
        width: 3.5rem;
        height: 3.5rem;
        background: #7A38FE;
        border-radius: 8px 8px 8px 0px;
        border: none;

    }
}
.columm{
    display: flex;

    

}
.bf{
        margin-top: 1rem;
}
.linha{
    width: 520px;
    height: 1px;
    background: #24293F;
    margin-top: 0.9rem;
}
.lok1{
    margin-top: 2rem;
}
ul{
    li{
        background: #151A37;
        border: 1px solid #24293F;
        width: 32.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFFFFF;
        font-weight: 400;
         font-size: 1rem;
        line-height: 150%;
        padding: 2rem;
        border: 1px solid #24293F;
        border-radius: 8px;
        margin-top: 2rem;
        button {
            background: #151A37;
            border: none;
        }
    }
}
.lo{
    background: rgba(47, 90, 255, 0.25);
    border: 1px solid #2F5AFF;
}
.lip{
    background: #24293F;
    width: 1px;
    height: 508px;
}
`