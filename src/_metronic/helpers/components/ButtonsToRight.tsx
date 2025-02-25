import React from 'react';

export interface ButtonConfig {
    label: string;
    className: string;
    onClick: () => void;
}

interface ButtonsToRightProps {
    buttons: ButtonConfig[];
}

const ButtonsToRight: React.FC<ButtonsToRightProps> = ({ buttons }) => {
    return (
        <div className="d-flex justify-content-end mb-5">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    className={button.className}
                    onClick={button.onClick}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
};

export default ButtonsToRight;