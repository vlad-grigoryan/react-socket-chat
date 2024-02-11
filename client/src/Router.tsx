import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Chat from "./ChatRoom/ChatRoom";
import Chat from './pages/chat'

export default function Router() {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/:roomId" Component={Chat} />
        </Routes>
    )
}
