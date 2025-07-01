import React from "react";

interface Props {
    modal: React.ReactNode;
    workExperience: React.ReactNode;
    children: React.ReactNode;
}

export default function ResumeLayout ( {modal, children}: Props ) {
    return (
        <>
        {modal}
        {children}
        </>

    )
}