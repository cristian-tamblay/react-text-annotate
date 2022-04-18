import React from 'react';
export interface MarkProps {
    key: string;
    content: string;
    start: number;
    end: number;
    tag: string;
    tooltip: string;
    color?: string;
}
declare const Mark: React.SFC<MarkProps>;
export default Mark;
