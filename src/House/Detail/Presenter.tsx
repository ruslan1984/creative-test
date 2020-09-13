import React, { FC } from "react";
import cn from "classnames";
import { flat } from "@house/types";
import { Container, Page, ImgBlock, Like } from "@/elements";
import { Item, Info, InfoBlock, Params, Img } from "@house/Detail/elements";
import { Link } from "react-router-dom";
import css from "@house/style.css";
interface DetailProps {
    data: flat | null;
    likeClick: any;
    liked: boolean;
}

const Presenter: FC<DetailProps> = (props: DetailProps) => {
    const { data } = props;
    const { attributes: atr1, photo, relationships, type_text, liked } = data;
    const { title, rooms, area, address, unit } = atr1;
    const { attributes: relAttr, type: relationshipsType } = relationships;
    const { city, street, house, room } = address;

    return (
        <Page>
            <Container>
                <h1>{title}</h1>
                <ImgBlock>
                    <Like
                        onClick={props.likeClick}
                        className={cn({ liked: props.liked })}
                    />
                    <Img src={photo} alt={title} />
                </ImgBlock>
                <Params>
                    <Info>
                        <InfoBlock>
                            <h2>{type_text} </h2>
                            <Item>
                                <span>Комнат</span> <span>{rooms}</span>
                            </Item>
                            <Item>
                                <span>Площадь</span>{" "}
                                <span>
                                    {" "}
                                    {area} {unit}
                                </span>
                            </Item>
                        </InfoBlock>
                        <InfoBlock>
                            <h2>Адрес</h2>
                            <Item>
                                <span>Город</span> <span>{city}</span>
                            </Item>
                            <Item>
                                <span>Улица</span> <span>{street}</span>
                            </Item>
                            <Item>
                                <span>Дом</span> <span>{house}</span>
                            </Item>
                            <Item>
                                <span>Комната</span> <span>{room}</span>
                            </Item>
                        </InfoBlock>
                        <InfoBlock>
                            <h2>Контакты</h2>
                            <Item>
                                {relAttr.first_name} {relAttr.last_name}{" "}
                                {relAttr.middle_name}{" "}
                            </Item>
                        </InfoBlock>
                    </Info>
                    <Link className={css.btn} to="/house">
                        Возврат
                    </Link>
                </Params>
            </Container>
        </Page>
    );
};

export default Presenter;
