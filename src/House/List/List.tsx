import React, { FC, useState, useEffect } from "react";
import { houseList, clickLiked } from "@house/data.tsx";
import Presenter from "./Presenter";
import { Uploading } from "@/elements";
import { flatList } from "@house/types";

const List: FC = () => {
    const [list, setList] = useState([]);
    const [pageUploading, setPageUploading] = useState(false);
    useEffect(() => {
        (async () => {
            setPageUploading(true);
            const data = await houseList();
            setList(data);
            setPageUploading(false);
        })();
    }, []);
    const likeClick = async (e: React.ChangeEvent) => {
        e.preventDefault();
        const curId: number = e.target.dataset.id;
        const liked: boolean = !(e.target.dataset.liked == "false"
            ? false
            : true);
        const res: flatList = list.find((item: flatList) => item.id == curId);
        res.liked = liked;
        await clickLiked(curId, liked);
        const newList = [...list];
        setList(newList);
    };

    if (pageUploading) {
        return <Uploading />;
    } else {
        return <Presenter likeClick={likeClick} list={list} />;
    }
};

export default List;
