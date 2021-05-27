import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteHouseApi } from '../../ApiBackendHelpers';
import { getHouses } from '../../store/houses/actions';
import { handleDeleteHouse } from './Helpers';

class ManageHouses extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.getHouses();
    }

    // handleDeleteHouse = async (id) => {
    //     try {
    //         await deleteHouseApi(id);
    //         window.alert('House deleted');
    //         this.props.getHouses();
    //     } catch (e) {
    //         window.alert('Error delete house');
    //     }
    // };

    render() {
        const { houses, history } = this.props;
        return (
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">label</th>
                            <th scope="col">description</th>
                            <th scope="col">floors number</th>
                            <th scope="col">updatedAt</th>
                            <th scope="col">createdAt</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {houses &&
                            houses.map((house, index) => {
                                return (
                                    <tr key={house._id}>
                                        <th scope="row">{index}</th>
                                        <td>{house.label}</td>
                                        <td>{house.description}</td>
                                        <td>{house.floorsNumber}</td>
                                        <td>{house.createdAt}</td>
                                        <td>{house.updatedAt}</td>
                                        <td>
                                            <div className="form-group">
                                                <div
                                                    className="btn btn-sm btn-secondary m-1"
                                                    onClick={() => history.push(`/house/${house._id}`)}
                                                >
                                                    DETAILS
                                                </div>
                                                <div
                                                    className="btn btn-sm btn-danger m-1"
                                                    onClick={() => handleDeleteHouse(house._id, this.props.getHouses)}
                                                >
                                                    DELETE
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    houses: state.houses.houses,
});

const mapDispatchToProps = (dispatch) => ({
    getHouses: () => dispatch(getHouses()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageHouses));
