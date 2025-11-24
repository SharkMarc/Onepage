
import React from 'react';

interface BadgeProps {
    content: string;
}

export const Badge= ({  content }:BadgeProps) => (
    <div className="badge">
        {content}
    </div>
);

