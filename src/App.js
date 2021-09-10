import styled from "styled-components";
import FileTree from "./components/FileTree";
import Footer from "./components/Footer";
import FileList from "./file.json";

function App() {
    return (
        <>
            <Container>
                <FileTree tree={FileList} />
            </Container>
            <Footer />
        </>
    );
}

export default App;

const Container = styled.section`
    background: rgba(${(props) => props.theme.colors.primary}, 0.8);
    padding: 1.5rem;
    border-radius: 20px 5px 20px 5px;
    max-width: 550px;
    width: 90%;
    margin: 2rem auto;
`;
