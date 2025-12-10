import React from 'react';

interface BadgeProps {
    content: string;
    tooltip?: any;
    isSuccess: boolean;
}

export const Badge = ({content, tooltip, isSuccess = false}: BadgeProps) => (
    <div className={isSuccess ? "badge badge-success" : "badge"} data-tooltip={tooltip}>
        {content}
    </div>
);

