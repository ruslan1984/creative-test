export type flat = {
    type: string;
    type_text?: string;
    liked?: boolean;
    id: number;
    attributes: {
        title: string;
        rooms: number;
        address: {
            city: string;
            street: string;
            house: string;
            room: string;
        };
        area: number;
        unit: string;
    };
    photo: string;
    relationships: {
        type: string;
        id: number;
        attributes: {
            first_name: string;
            last_name: string;
            middle_name: string;
        };
    };
};

export type flatList = {
    id: number;
    title: string;
    photo: string;
    rooms: number;
    area: string;
    liked: boolean,
}