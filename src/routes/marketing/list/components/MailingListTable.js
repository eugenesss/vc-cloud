import React from "react";
import { NavLink } from "react-router-dom";

import { getTheDate, listOptions } from "Helpers/helpers";
import RecordsList from "Components/RecordsList";
import { singleMailList } from "Helpers/marketingURL";
import RctSectionLoader from "Components/RctSectionLoader";
import moment from "moment";
import { Icon } from '@iconify/react';
import { IconButton, Divider } from "@material-ui/core";
import baselineDeleteForever from '@iconify/icons-ic/baseline-delete-forever';
import { Edit, Delete } from "@material-ui/icons";
import StatusBadge from "Components/StatusBadge/StatusBadge";

import AlertDelete from "Components/SystemDialogs/AlertDelete";
import { show } from "redux-modal";
import { connect } from "react-redux";

function MailingListTable(props) {

    const { tableData, loading, title, } = props;
    const columns = [
        {
            name: "id",
            options: {
                display: "excluded",
                filter: false,
                sort: false,
                download: false
            }
        },
        {
            label: "Mailing List Name",
            name: "name",
            options: {
                customBodyRender: (value, tableMeta) => {
                    //list shared to me 
                   
                        return (
                            <NavLink to={singleMailList(tableMeta.rowData[0])}
                                
                            >{value}</NavLink>
                        );
                    }
                   
            }
        },
        {
            label: "Creation Date ",
            name: "created",
            options: {
                display: true,
                customBodyRender: (value, tableMeta) => {
                    return (
                        <div>
                            {moment(value).format("DD MMM YYYY")}</div>
                    );
                }
            }
        },
        {
            label: "No. of Receipients",
            name: "count",
            options: {
                display: true
            }
        },
        {
            label: "No. of Campaigns Used In",
            name: "countCamp",
            options: {
                display: true
            }
        },
        {
            name: "adminList",
            options: {
                filter: true,
                sort: false,
                display: false,
            },
        },
        {
            name: "ownedbyme",
            options: {
                filter: true,
                sort: false,
                display: false,
            },
        },
        {
            label: "Actions",
            name: "listName",
            options: {
                display: true,
                customBodyRender: (value, tableMeta) => {
                    if (tableMeta.rowData[5] && !tableMeta.rowData[6]) {
                        return;
                    } else {
                        return (
                            <IconButton
                                size="small" className="tableDeleteIcon" onClick={() => props.delete(tableMeta.rowData[0], tableMeta.rowData[1])}>
                                <Icon
                                    icon={baselineDeleteForever}
                                    color="#595959"
                                    width="1.5rem"
                                    height="1.5rem"
                                />
                            </IconButton>

                        )
                    }
                }
            }
        },

    ];

    listOptions.customToolbarSelect = (
        selectedRows,
        displayData,
        setSelectRows
    ) =>
        // delete multiple function
        null;

  

    return (
        <div className="rct-block">
            <RecordsList
                title={title}
                columns={columns}
                data={tableData}
                options={listOptions}

            />
            {loading && <RctSectionLoader />}
        </div>
    );
}

export default connect(null, { show })(MailingListTable);
