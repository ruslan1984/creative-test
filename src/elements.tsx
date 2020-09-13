import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;

export const Ul = styled.ul`
    list-style: none;
`;
export const Page = styled.div`
    padding: 10px;
    min-height: 200px;
    flex: 1;
    background: #f5f5f5;
    &.uploading {
        animation: uploading 1s infinite;
    }
    @keyframes uploading {
        from {
            background: #ffffff;
        }
        to {
            background: #eeeeee;
        }
    }
`;

export const Header = styled.div`
    padding: 10px;
`;

export const Uploading = styled.div`
    width: 100%;
    height: 100%;
    animation: uploading 1s infinite;
    @keyframes uploading {
        from {
            background: #ffffff;
        }
        to {
            background: #cccccc;
        }
    }
`;
export const ImgBlock = styled.div`
    position: relative;
`;
export const Like = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    top: 10px;
    right: 10px;
    background: white;
    border-radius: 25px;
    cursor: pointer;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDEyLjczNSA0MTIuNzM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MTIuNzM1IDQxMi43MzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjk1LjcwNiwzNS41MjJDMjk1LjcwNiwzNS41MjIsMjk1LjcwNiwzNS41MjIsMjk1LjcwNiwzNS41MjJjLTM0LjQzLTAuMTg0LTY3LjE2MSwxNC45MzctODkuMzM5LDQxLjI3Mw0KCQkJYy0yMi4wMzktMjYuNTE2LTU0Ljg2MS00MS42OC04OS4zMzktNDEuMjczQzUyLjM5NSwzNS41MjIsMCw4Ny45MTcsMCwxNTIuNTVDMCwyNjMuMzEsMTkzLjMwNiwzNzEuNDU2LDIwMS4xNDMsMzc1LjYzNg0KCQkJYzMuMTYyLDIuMTEzLDcuMjg2LDIuMTEzLDEwLjQ0OSwwYzcuODM3LTQuMTgsMjAxLjE0My0xMTAuNzU5LDIwMS4xNDMtMjIzLjA4NkM0MTIuNzM1LDg3LjkxNywzNjAuMzM5LDM1LjUyMiwyOTUuNzA2LDM1LjUyMnoNCgkJCSBNMjA2LjM2NywzNTQuNzM4QzE3Ni4wNjUsMzM2Ljk3NSwyMC44OTgsMjQyLjQxMiwyMC44OTgsMTUyLjU1YzAtNTMuMDkxLDQzLjAzOS05Ni4xMzEsOTYuMTMxLTk2LjEzMQ0KCQkJYzMyLjUxMi0wLjQyNyw2Mi45MzgsMTUuOTcyLDgwLjQ1Nyw0My4zNjNjMy41NTcsNC45MDUsMTAuNDE4LDUuOTk4LDE1LjMyMywyLjQ0YzAuOTM3LTAuNjgsMS43NjEtMS41MDMsMi40NC0yLjQ0DQoJCQljMjkuMDU1LTQ0LjQzNSw4OC42MzEtNTYuOTAzLDEzMy4wNjYtMjcuODQ4YzI3LjIwMiwxNy43ODcsNDMuNTc1LDQ4LjExNCw0My41MjEsODAuNjE1DQoJCQlDMzkxLjgzNywyNDMuNDU2LDIzNi42NjksMzM3LjQ5NywyMDYuMzY3LDM1NC43Mzh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.2s;
    &:hover {
        background-size: 80%;
    }
    &.liked {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzkxLjgzNyAzOTEuODM3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzOTEuODM3IDM5MS44Mzc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNENzQ0M0U7IiBkPSJNMjg1LjI1NywzNS41MjhjNTguNzQzLDAuMjg2LDEwNi4yOTQsNDcuODM2LDEwNi41OCwxMDYuNTgNCgkJYzAsMTA3LjYyNC0xOTUuOTE4LDIxNC4yMDQtMTk1LjkxOCwyMTQuMjA0UzAsMjQ4LjE2NSwwLDE0Mi4xMDhjMC01OC44NjIsNDcuNzE3LTEwNi41OCwxMDYuNTgtMTA2LjU4bDAsMA0KCQljMzYuMDMyLTAuMjgxLDY5LjcxOCwxNy44NDIsODkuMzM5LDQ4LjA2NUMyMTUuNjc0LDUzLjUxNywyNDkuMjczLDM1LjQ0MSwyODUuMjU3LDM1LjUyOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K);
    }
`;
