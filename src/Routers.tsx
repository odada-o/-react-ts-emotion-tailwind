import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout, { LayoutNone } from './components/layout/Layout'
import Home from './views/Home/Home'
import About from './views/About'
import Signup from './views/Signup'
import NotFound from './views/NotFound'

const Routers: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>

            <Route path="/" element={<LayoutNone />}>
                <Route path="signin" element={<Signup />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default Routers
