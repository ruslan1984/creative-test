import styled from "@emotion/styled";

export const PageBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const RentLink = styled.div`
    a {
        font-size: 40px;
        padding: 20px 40px;
        border-radius: 45px;
        color: black;
        text-decoration: none;
        background: #ade8ad;
        cursor: pointer;
        transition: 0.5s;
        display: flex;
        &:hover {
            background: #81e681;
            transform: scale(1.2);
        }
        animation: fideIn 2s;
    }
    @keyframes fideIn {
        from {
            transform: translateY(20px) rotate(180deg) scale(0);
            opacity: 0;
        }
    }
`;
