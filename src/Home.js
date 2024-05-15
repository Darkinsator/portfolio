const Home = () => {
    return (
        <div className="home">
            <h2>Homepage</h2>
            
                <header className="App-header">
                    <h1>My Portfolio</h1>
                    <p>Welcome to my portfolio website!</p>
                </header>
                <main>
                    <section className="projects">
                    <h2>My Projects</h2>
                    <div className="project">
                        <h3>Project 1</h3>
                        <p>Description of Project 1</p>
                        <a href="#">View Project</a>
                    </div>
                    <div className="project">
                        <h3>Project 2</h3>
                        <p>Description of Project 2</p>
                        <a href="#">View Project</a>
                    </div>
                    {/* Add more projects here */}
                    </section>
                </main>
                <footer>
                    <p>© 2024 My Portfolio</p>
                </footer>
    


        </div>
    );
}
export default Home;