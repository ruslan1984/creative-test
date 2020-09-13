import styled from "@emotion/styled";

export const HouseUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
`;
export const HouseLi = styled.li`
    margin: 10px 10px 30px;
    width: 260px;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
        .btn {
            background: #6a78a7;
            color: #ffffff;
            transition: 0.5s;
        }
    }
`;
export const HouseLiTitle = styled.div`
    font-weight: 900;
    padding: 10px;
    border-bottom: 1px solid #eee;
    min-height: 49px;
`;
export const HouseLiItem = styled.div`
    padding: 10px;
    border-bottom: 1px solid #eee;
`;
export const HouseLiBtn = styled.div`
    padding: 10px;
    border-bottom: 1px solid #eee;
    text-align: center;
    color: #6a78a7;
`;

export const Img = styled.img`
    width: 100%;
    height: 160px;
`;
