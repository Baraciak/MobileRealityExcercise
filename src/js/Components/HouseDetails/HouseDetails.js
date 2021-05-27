import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getHouseApi } from '../../ApiBackendHelpers';
import { handleDeleteHouse } from '../ManageHouses/Helpers';

class HouseDetails extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            house: {},
        };
    }

    componentDidMount() {
        this.handleGetHouse();
    }

    handleGetHouse = async () => {
        try {
            const houseId = this.props.match.params.id;
            const response = await getHouseApi(houseId);
            if (response.error) {
                window.alert('Error get house :(');
            } else {
                this.setState({
                    house: response.result,
                });
            }
        } catch (e) {
            window.alert('Error get house :(');
        }
    };

    render() {
        const { match, history } = this.props;
        return (
            <div>
                <div className="text-header">HOUSE DETAILS</div>
                <div className="text-muted">some detail 1</div>
                <div className="text-muted">some detail 2</div>
                <div className="text-muted">some detail 3</div>
                <div className="text-muted">some detail 4 </div>
                <div className="text-muted">some detail 5</div>
                <div
                    className="btn btn-sm btn-danger m-1"
                    onClick={() => handleDeleteHouse(match.params.id, history.push('/management'))}
                >
                    DELETE
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getHouses: () => dispatch(getHouses()),
});

export default withRouter(connect(null, mapDispatchToProps)(HouseDetails));
