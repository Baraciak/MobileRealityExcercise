import React from "react";
type ContextProps = {
    hostUrl: string,
    apiUrl: string
}
export const AppContext = React.createContext<Partial<ContextProps>>({
    hostUrl: "test",
    apiUrl: "testapi"
});
