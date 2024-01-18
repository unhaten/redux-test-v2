import './App.css'
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {useEffect} from "react";
import {fetchUsers} from "./store/reducers/ActionsCreators.ts";

function App() {
    const dispatch = useAppDispatch()
    const {error, isLoading, users} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <>
            <div>
                {JSON.stringify(users, null, 2)}
            </div>
        </>
    )
}

export default App
