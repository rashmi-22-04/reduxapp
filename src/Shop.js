import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreater} from "./State/index";
import { useSelector } from "react-redux";

const Shop = () => {
  const balance= useSelector(state=>state.amount)
  const dispatch=useDispatch()
  const {depositMoney,withdrawMoney} =bindActionCreators(actionCreater,dispatch)
  return (
    <div className="mt-3">
        <h2>Deposit/withdraw money</h2>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreater.withdrawMoney(100))}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreater.depositMoney(100))}}>+ </button> */}
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+ </button>
    </div>
  );
};

export default Shop;
