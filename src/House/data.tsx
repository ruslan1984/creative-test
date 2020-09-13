import { flat, flatList } from "@house/types";
let data = {
    response: [
        {
            type: "flat",
            id: 1,
            attributes: {
                title: "3-х комнатная на Минской",
                rooms: 3,
                address: {
                    city: "Tyumen",
                    street: "Минская",
                    house: "3a",
                    room: "123",
                },
                area: 134,
                unit: "квм",
            },
            photo:
                "https://tetrapilon.ru/assets/images/remont-kvartiry-lyuks-klassa.jpg",
            relationships: {
                type: "agent",
                id: 2,
                attributes: {
                    first_name: "Василий",
                    last_name: "Дроздов",
                    middle_name: "Михайлович",
                },
            },
        },
        {
            type: "flat",
            id: 2,
            attributes: {
                title: "1 комнатная на Барабаинской",
                rooms: 2,
                address: {
                    city: "Tyumen",
                    street: "Барабинская",
                    house: "12",
                    room: "45",
                },
                area: 34,
                unit: "квм",
            },
            photo:
                "https://dizainexpert.ru/wp-content/uploads/2019/09/svetilniki-dlya-gostinoj-komnaty-4.jpg",
            relationships: {
                type: "agent",
                id: 10,
                attributes: {
                    first_name: "Михаил",
                    last_name: "Иванов",
                    middle_name: "Демидович",
                },
            },
        },
        {
            type: "flat",
            id: 3,
            attributes: {
                title: "Квартира Ленина",
                rooms: 4,
                address: {
                    city: "Tyumen",
                    street: "Ленина",
                    house: "134",
                    room: "24",
                },
                area: 134,
                unit: "квм",
            },
            relationships: {
                type: "agent",
                id: 44,
                attributes: {
                    first_name: "Степан",
                    last_name: "Карачаев",
                    middle_name: "Иванович",
                },
            },
        },
        {
            type: "flat",
            id: 4,
            attributes: {
                title: "3-х комнатная на Минской",
                rooms: 3,
                address: {
                    city: "Tyumen",
                    street: "Минская",
                    house: "3a",
                    room: "123",
                },
                area: 134,
                unit: "квм",
            },
            photo:
                "https://tetrapilon.ru/assets/images/remont-kvartiry-lyuks-klassa.jpg",
            relationships: {
                type: "agent",
                id: 2,
                attributes: {
                    first_name: "Василий",
                    last_name: "Дроздов",
                    middle_name: "Михайлович",
                },
            },
        },
        {
            type: "flat",
            id: 5,
            attributes: {
                title: "1 комнатная на Барабаинской",
                rooms: 2,
                address: {
                    city: "Tyumen",
                    street: "Барабинская",
                    house: "12",
                    room: "45",
                },
                area: 34,
                unit: "квм",
            },
            photo:
                "https://dizainexpert.ru/wp-content/uploads/2019/09/svetilniki-dlya-gostinoj-komnaty-4.jpg",
            relationships: {
                type: "agent",
                id: 10,
                attributes: {
                    first_name: "Михаил",
                    last_name: "Иванов",
                    middle_name: "Демидович",
                },
            },
        },
        {
            type: "flat",
            id: 6,
            attributes: {
                title: "Квартира Ленина",
                rooms: 4,
                address: {
                    city: "Tyumen",
                    street: "Ленина",
                    house: "134",
                    room: "24",
                },
                area: 134,
                unit: "квм",
            },
            relationships: {
                type: "agent",
                id: 44,
                attributes: {
                    first_name: "Степан",
                    last_name: "Карачаев",
                    middle_name: "Иванович",
                },
            },
        },
        {
            type: "flat",
            id: 7,
            attributes: {
                title: "1 комнатная на Барабаинской",
                rooms: 2,
                address: {
                    city: "Tyumen",
                    street: "Барабинская",
                    house: "12",
                    room: "45",
                },
                area: 34,
                unit: "квм",
            },
            photo:
                "https://dizainexpert.ru/wp-content/uploads/2019/09/svetilniki-dlya-gostinoj-komnaty-4.jpg",
            relationships: {
                type: "agent",
                id: 10,
                attributes: {
                    first_name: "Михаил",
                    last_name: "Иванов",
                    middle_name: "Демидович",
                },
            },
        },
        {
            type: "flat",
            id: 8,
            attributes: {
                title: "Квартира Ленина",
                rooms: 4,
                address: {
                    city: "Tyumen",
                    street: "Ленина",
                    house: "134",
                    room: "24",
                },
                area: 134,
                unit: "квм",
            },
            photo:
                "https://dizainexpert.ru/wp-content/uploads/2019/09/svetilniki-dlya-gostinoj-komnaty-4.jpg",
            relationships: {
                type: "agent",
                id: 44,
                attributes: {
                    first_name: "Степан",
                    last_name: "Карачаев",
                    middle_name: "Иванович",
                },
            },
        },
    ],
};
const noImg =
    "https://riverriver.ru/bitrix/templates/kamtur/assets/img/dummy-rectangle.jpg";
export const sleep = (x: number) => new Promise((r) => setTimeout(r, x));
export const houseList = async () => {
    await sleep(1000);
    let likes = getLikes();
    const result: flatList = data.response.map((item) => {
        return {
            id: item.id,
            title: item.attributes.title,
            photo: item.photo || noImg,
            rooms: item.attributes.rooms,
            area: item.attributes.area,
            liked: likes.indexOf(item.id.toString()) === -1 ? false : true,
        };
    });

    return result;
};

export const houseDetail = async (id: number) => {
    await sleep(1000);
    let likes = getLikes();
    const res: flat = data.response.find((item: flat) => item.id == id);
    switch (res.type) {
        case "flat": {
            res.type_text = "Квартира";
            break;
        }
        case "house": {
            res.type_text = "Дом";
            break;
        }
    }
    (res.liked = likes.indexOf(id.toString()) === -1 ? false : true),
        (res.photo = res.photo || noImg);
    return res;
};
export const clickLiked = async (id: number, liked: boolean) => {
    let likes = getLikes();
    likes = liked ? [...likes, id] : likes.filter((val: string) => val != id);
    likes = [...new Set(likes)];
    localStorage.setItem("likes", JSON.stringify(likes));
    return true;
};

const getLikes = () => {
    return JSON.parse(localStorage.getItem("likes")) || [];
};
