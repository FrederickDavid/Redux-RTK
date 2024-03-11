import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "./services/reducers"
import {
  useCreateUsersMutation,
  useGetAllUsersQuery,
  useRemoveUserMutation,
} from "./services/RTK"

function App() {
  const dispatch = useDispatch()
  const readData = useSelector((state: any) => state?.CounterReducer)
  const { data, isLoading, isFetching, isError } = useGetAllUsersQuery({})
  const [name, setName] = useState("")
  const [addUser, { data: result }] = useCreateUsersMutation()
  const [delUser] = useRemoveUserMutation()

  console.log(result)

  if (isLoading) return <div>Loading...</div>

  const creatingUser = () => {
    addUser({ name })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment(1))
          }}>
          Add Count
        </button>
        <div>{readData?.count}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>Add New Users</div>
      <input
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <button onClick={creatingUser}>Add New User</button>
      <div>All Users</div>
      {data?.map((props: any) => (
        <div key={props?.id}>
          <div>{props?.name}</div>
          <button
            onClick={() => {
              delUser(props.id)
            }}>
            Remove
          </button>
        </div>
      ))}
    </>
  )
}

export default App
