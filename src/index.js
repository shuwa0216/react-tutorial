import React from "react";
import ReactDOM from "react-dom";
import Starter from "./components/Starter";
import TicTacToe from "./components/TicTacToe";
import History from "./components/History";
import "./index.css";

ReactDOM.render(<Starter />, document.getElementById("starter"));
ReactDOM.render(<TicTacToe />, document.getElementById("tictactoe"));
ReactDOM.render(<History />, document.getElementById("history"));
