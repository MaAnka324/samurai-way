import React, {ChangeEvent, useState} from 'react';


type StatusType = {
    status: string
    updateStatus: (userId: string) => void
}

const ProfileStatusWithHooks = (props: StatusType) => {

    const [editeMode, setEditeMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEditeMode(true)
    }

    const deactivateMode = () => {
        setEditeMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editeMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || '------'}</span>
                </div>
            }
            {editeMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateMode}
                        autoFocus={true}
                        value={status}
                    />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;