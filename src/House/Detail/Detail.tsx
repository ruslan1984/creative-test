import React, { FC, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { houseDetail, clickLiked } from "@house/data.tsx";
import Presenter from "./Presenter";
import css from "@house/style.css";
import { Uploading } from "@/elements";
import { flatList } from "@house/types";

const Detail: FC = () => {
    const [data, setData] = useState([]);
    const [liked, setLiked] = useState(false);
    const [pageUploading, setPageUploading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            setPageUploading(true);
            const response = await houseDetail(id);
            setData(response);
            setLiked(response.liked || false);
            setPageUploading(false);
        })();
    }, []);
    const likeClick = async () => {
        if (await clickLiked(id, !liked)) {
            setLiked(!liked);
        }
    };
    if (!pageUploading) {
        return <Presenter liked={liked} likeClick={likeClick} data={data} />;
    } else {
        return <Uploading />;
    }
};

export default Detail;
