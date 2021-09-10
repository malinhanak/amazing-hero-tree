import React from "react";
import styled from "styled-components";

function File({ file, isSub = false }) {
    return (
        <FileStyle key={file} isSub={isSub}>
            {file}
        </FileStyle>
    );
}

export default File;

const FileStyle = styled.p`
    margin: 0;
    margin-left: ${(props) => (props.isSub ? "1.5rem" : "0")};
    font-size: 0.85rem;
    padding-bottom: 0.5rem;
`;
