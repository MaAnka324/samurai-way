import React, {ChangeEvent, useEffect, useState} from 'react';


type StatusType = {
    status: string
    updateStatus: (userId: string) => void
}

const ProfileStatusWithHooks = (props: StatusType) => {

    const [editeMode, setEditeMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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
                <div><b>Status : </b>
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