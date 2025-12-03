import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : "/",
        children : [
            {
                path : "signUp",
                lazy : {
                    Component : async () => {
                        const component = await import ("../auth/signup/SignUp.tsx")
                        return component.default
                    }
                }
            },
            {
                path : "signIn",
                lazy : {
                    Component : async () => {
                        const component = await import ("../auth/signin/SignIn.tsx")
                        return component.default
                    }
                }
            }
        ]
    },
    {
        path : "/movies", // alamat dari sebuah page
        children : [
            {
                index : true,
                lazy : {
                    Component : async () => {
                        const component = await import ("../pages/movies/Movies.tsx")
                        return component.default
                    }
                }
            },
            {
                path : "add-movie",
                lazy : {
                    Component : async () => {
                        const component = await import ("../pages/movies/AddMovie.tsx")
                        return component.default
                    }
                }
            }
        ]
    }
])

export default router