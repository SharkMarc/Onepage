
import React from 'react';

interface BadgeProps {
    content: string;
    tooltip?: string;
}

export const Badge= ({  content, tooltip }:BadgeProps) => (
    <div className="badge" data-tooltip={tooltip}>
        {content}
    </div>
);

