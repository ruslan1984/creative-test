import React, { FC } from "react";
import { Route, Link, Switch } from "react-router-dom";
import HouseDetail from "@house/Detail/Detail";
import { Page, Container, ImgBlock, Like } from "@/elements";
import {
    HouseUl,
    HouseLi,
    HouseLiTitle,
    HouseLiItem,
    HouseLiBtn,
    Img,
} from "@house/List/elements";
import cn from "classnames";
import css from "@house/style.css";

interface ListProps {
    list: any;
    likeClick: any;
}

const Presenter: FC<ListProps> = (props: ListProps) => {
    return (
        <Page>
            <Container>
                <h1>Аренда жилья</h1>
                <hr />
                <HouseUl>
                    {props.list.map((item) => (
                        <HouseLi key={item.id.toString()}>
                            <Link className={css.link} to={`/house/${item.id}`}>
                                <ImgBlock>
                                    <Like
                                        data-id={item.id}
                                        data-liked={item.liked || false}
                                        onClick={props.likeClick}
                                        className={cn({
                                            liked: item.liked,
                                        })}
                                    />
                                    <Img src={item.photo} alt={item.title} />
                                </ImgBlock>
                                <HouseLiTitle>{item.title}</HouseLiTitle>
                                <HouseLiItem>Комнаты: {item.rooms}</HouseLiItem>
                                <HouseLiItem>Площадь: {item.area} </HouseLiItem>
                                <HouseLiBtn className="btn">
                                    Подробнее
                                </HouseLiBtn>
                            </Link>
                        </HouseLi>
                    ))}
                </HouseUl>
                <Switch>
                    <Route
                        exact
                        path="/admin/house/:id"
                        component={HouseDetail}
                    />
                </Switch>
            </Container>
        </Page>
    );
};

export default Presenter;
