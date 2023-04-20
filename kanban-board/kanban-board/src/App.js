import {Footer} from "./components/footer/footer";
import {Header} from "./components/header/header";
import {Layout} from "./components/layout/layout";
import {Basic} from "./components/basic/basic";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Card} from "./components/basic/card/card";
import Scrollbars from "react-custom-scrollbars-2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic/>
    },
    {
        path: "/tasks/:cardId",
        element: <Card/>
    }
    ])


function App() {
    return (
        <Layout>
            <Header/>
                <Scrollbars>
                    <main>
                        <RouterProvider router={router}/>
                    </main>
                </Scrollbars> 
            <Footer/>
        </Layout>
    );
}

export default App;
