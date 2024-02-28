import React, {ChangeEvent, useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import s from './Status.module.css'


type StatusType = {
    status: string
    updateStatus: (userId: string) => void
    isOwner: boolean
}

const ProfileStatusWithHooks = (props: StatusType) => {

    const [editeMode, setEditeMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        if(props.isOwner) {
            setEditeMode(true)
        }
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
                <div className={s.statusBlock}><b>Status : </b>
                    <span onDoubleClick={activateMode}>{props.status || '------'}</span>
                    {props.isOwner ? <EditIcon onClick={activateMode} fontSize={'small'} color="primary"/> : null}
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