import React from 'react';


type StatusType = {
    status: string
}

class ProfileStatus extends React.Component <StatusType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({ // setState асинхронный
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;