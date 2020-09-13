import React, { FC } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import HouseList from "@house/List/List";
import HouseDetail from "@house/Detail/Detail";
import Home from "@home/Home";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/house" component={HouseList} />
                <Route exact path="/house/:id" component={HouseDetail} />
                <Route path="*" render={() => 404} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
