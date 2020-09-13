import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Page } from "@/elements";
import { RentLink, PageBlock } from "@home/elements";

const Home: FC = () => {
    return (
        <Page>
            <Container>
                <PageBlock>
                    <RentLink>
                        <Link to="/house">Аренда жилья</Link>
                    </RentLink>
                </PageBlock>
            </Container>
        </Page>
    );
};
export default Home;
