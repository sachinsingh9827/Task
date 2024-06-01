import React, { Fragment, useEffect } from "react";
import { toast } from "react-toastify";
import Metadata from "../../layouts/titleLayout/metadata";
import { DataGrid } from "@mui/x-data-grid";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/AccessTime";
import Typography from "@mui/material/Typography";
import { clearErrors, myOrders } from "../../redux/actions/orderActions";
import MainLayout from "../../layouts/mainLayout";
const Orders = () => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        const status = params.value; // Access the value of the current cell
        return status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const id = params.id;
        return (
          <Link to={`/order/details/${id}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch]);

  return (
    <Fragment>
      <Metadata title={"orders detail"} />

      {!!loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="fa-3x">
            <i className="fas fa-spinner fa-pulse" />
          </div>
        </div>
      ) : (
        <MainLayout>
          <div className="myOrdersPage p-5">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="myOrdersTable"
              autoHeight
            />

            <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
          </div>
        </MainLayout>
      )}
    </Fragment>
  );
};

export default Orders;
