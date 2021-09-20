import { useState, useEffect } from 'react';
import { useAppSelector } from "../../store/reduxHooks";

const CurrentUsers = () => {
    const [currentUsers, setCurrentUsers] = useState([])
    const { users } = useAppSelector((state) => state.conversations)

    useEffect(() => {
    console.log("🚀 ~ file: CurrentUsers.tsx ~ line 9 ~ CurrentUsers ~ users", users)
        if (users.length > 0) {
            setCurrentUsers(users as [])
        }
    }, [users])

    return (
        <div>{currentUsers}</div>
    )
}

export default CurrentUsers;