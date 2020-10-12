import React, {Component} from 'react';
import axios from 'axios'
import swal from "sweetalert";

class MakeJourney extends Component{

    constructor(props) {
        super(props);

        this.onChangeUserAc = this.onChangeUserAc.bind(this);
        this.onChangeTokenId = this.onChangeTokenId.bind(this);
        this.onChangeStartPoint = this.onChangeStartPoint.bind(this);
        this.onChangeDesPoint = this.onChangeDesPoint.bind(this);
        this.onChangeAppFare = this.onChangeAppFare.bind(this);
        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeFare = this.onChangeFare.bind(this);

        this.state = {
            acNo: '',
            tokenID: '',
            startPoint: '',
            desPoint: '',
            appFare: '',
            distance: 0,
            jDate: '',
            jTime: '',
            fare: 0
        }

    }

    onChangeUserAc(e){
        this.setState({
            acNo: e.target.value
        });
    }

    onChangeTokenId(e){
        this.setState({
            tokenID: e.target.value
        });
    }

    onChangeStartPoint(e){
        this.setState({
            startPoint: e.target.value
        });
    }

    onChangeDesPoint(e){
        this.setState({
            desPoint: e.target.value
        });
    }

    onChangeAppFare(e){
        this.setState({
            appFare: e.target.value
        });
    }

    onChangeDistance(e){
        this.setState({
            distance: e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            jDate: e.target.value
        });
    }

    onChangeTime(e){
        this.setState({
            jTime: e.target.value
        });
    }

    onChangeFare(e){
        this.setState({
            fare: e.target.value
        });
    }

}