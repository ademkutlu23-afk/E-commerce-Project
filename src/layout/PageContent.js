import HomePage from "../pages/HomePage";

function PageContent() {
    return (
        <main className = "flex flex-1 flex-col">
            <Switch>
                <Route exact path="/" component={HomePage} />

        <Redirect to="/" />
            </Switch>   
        </main>
    )
}
export default PageContent;