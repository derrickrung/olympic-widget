import React, { PureComponent } from "react";
import { orderBy } from "lodash";

import { axios, routes } from "../../api";
import Medal from "../Medal";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import ErrorMessage from "../ErrorMessage";
import { GOLD, SILVER, BRONZE, TOTAL } from "../constants";
import { addTotalsAndFlagsToData, sortByValues } from "../utils";

import "./App.css";

const { MEDALS_JSON } = routes;

export default class App extends PureComponent {
    state = {
        selectedSort: "",
        data: [],
        errors: null
    };

    componentDidMount() {
        const { selectedSort } = this.props;

        axios
            .get(MEDALS_JSON)
            .then(response => {
                const sortedByCountry = orderBy(response.data, "code", "asc");
                const data = addTotalsAndFlagsToData(sortedByCountry);

                this.setState({ data }, () => this.onSort(selectedSort));
            })
            .catch(errors => {
                console.log(errors);
                this.setState({ errors });
            });
    }

    sortInfo = Object.freeze({
        [GOLD]: {
            rules: [GOLD, SILVER],
            onClick: () => this.onSort(GOLD),
            children: <Medal color="gold" />
        },
        [SILVER]: {
            rules: [SILVER, GOLD],
            onClick: () => this.onSort(SILVER),
            children: <Medal color="silver" />
        },
        [BRONZE]: {
            rules: [BRONZE, GOLD],
            onClick: () => this.onSort(BRONZE),
            children: <Medal color="#cd7f32" />
        },
        [TOTAL]: {
            rules: [TOTAL, GOLD],
            onClick: () => this.onSort(TOTAL),
            children: <h4>TOTAL</h4>
        }
    })

    onSort = selectedSort => {
        const [primary, secondary] = this.sortInfo[selectedSort].rules;
        const sortedData = sortByValues(this.state.data, primary, secondary);

        this.setState({
            data: sortedData,
            selectedSort
        });
    };

    render() {
        const { data, errors, selectedSort } = this.state;

        if (errors) return <ErrorMessage errors={errors} />;

        return (
            <div className="widget">
                <h5 className="color-dark-grey align-left">Medal Count</h5>
                <table>
                    <tbody>
                        <TableHeader sortInfo={this.sortInfo} selectedSort={selectedSort} />
                        {data.length > 0 && data.slice(0, 10).map((country, index) => (
                            <TableRow
                                key={`${country.code}-row`}
                                country={country}
                                rank={index + 1}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
